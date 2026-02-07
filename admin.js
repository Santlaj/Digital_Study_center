// ================= GLOBAL STATE =================
let currentClass = 8;
let currentReportClass = 8;
let currentTestClass = 8;

// attendanceData will be FILLED from Firestore
let attendanceData = {
  8: [],
  9: [],
  10: []
};

// ================= LOAD DATA =================
async function loadAllStudents() {
  attendanceData[8] = await loadStudentsByClass(8);
  attendanceData[9] = await loadStudentsByClass(9);
  attendanceData[10] = await loadStudentsByClass(10);

  renderAttendance();
  renderStudentList();
}

// ================= TAB SWITCHING =================
function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');
}

function switchClass(classNum) {
  currentClass = classNum;
  document.querySelectorAll('.class-tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  renderAttendance();
}

// ================= ATTENDANCE =================
function renderAttendance() {
  const grid = document.getElementById('attendanceGrid');
  grid.innerHTML = '';

  attendanceData[currentClass].forEach(student => {
    const card = document.createElement('div');
    card.className = `student-card ${student.status}`;
    card.innerHTML = `
      <div class="student-avatar">${getInitials(student.name)}</div>
      <div class="student-name">${student.name}</div>
      <div class="student-roll">Roll: ${student.roll}</div>
      <div class="attendance-status">
        <button class="status-btn present-btn ${student.status === 'present' ? 'active' : ''}"
          onclick="markStatus('${student.id}', 'present')">Present</button>
        <button class="status-btn absent-btn ${student.status === 'absent' ? 'active' : ''}"
          onclick="markStatus('${student.id}', 'absent')">Absent</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function markStatus(studentId, status) {
  const student = attendanceData[currentClass].find(s => s.id === studentId);
  if (!student) return;
  student.status = student.status === status ? 'unmarked' : status;
  renderAttendance();
}

function markAllPresent() {
  attendanceData[currentClass].forEach(s => s.status = 'present');
  renderAttendance();
}

function markAllAbsent() {
  attendanceData[currentClass].forEach(s => s.status = 'absent');
  renderAttendance();
}

async function saveAttendance() {
  const today = new Date().toISOString().split('T')[0];
  const records = attendanceData[currentClass]
    .filter(s => s.status !== 'unmarked')
    .map(s => ({ studentId: s.id, status: s.status }));

  await saveAttendanceFirestore(currentClass, today, records);
  alert('✓ Attendance saved');
}

// ================= NOTES =================
function handleFileUpload(e) {
  handleFiles(e.target.files);
}

async function handleFiles(files) {
  const classNum = parseInt(document.getElementById('notesClass').value);
  const subject = document.getElementById('notesSubject').value.trim();
  if (!subject) return alert('Enter subject');

  for (let file of files) {
    await uploadFileToDrive(file, classNum, subject);
  }

  alert('✓ Notes uploaded');
}

// ================= GOOGLE MEET =================
async function createMeet(e) {
  e.preventDefault();

  const data = {
    title: meetingTitle.value,
    class: parseInt(meetingClass.value),
    dateTime: meetingDateTime.value,
    duration: 60,
    description: ''
  };

  const result = await createMeetingViaCalendar(data);
  alert(`✓ Meet created\n${result.meetLink}`);
  e.target.reset();
}

// ================= STUDENTS =================
function renderStudentList() {
  const list = document.getElementById('studentList');
  const all = [...attendanceData[8], ...attendanceData[9], ...attendanceData[10]];

  list.innerHTML = all.map(s => `
    <div class="student-item">
      <div class="student-item-avatar">${getInitials(s.name)}</div>
      <div class="student-item-info">
        <div class="student-item-name">${s.name}</div>
        <div class="student-item-details">
          Roll: ${s.roll} · <span class="badge class-${s.class}">Class ${s.class}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ================= HELPERS =================
function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

// ================= INIT =================
document.addEventListener('DOMContentLoaded', async () => {
  await loadAllStudents();
  await updateDashboardStats();
});
