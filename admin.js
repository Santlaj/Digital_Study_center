// Sample Data
        let currentClass = 8;
        let currentReportClass = 8;
        let currentTestClass = 8;

        const attendanceData = {
            8: [
                { id: 1, name: 'Aarav Kumar', roll: '801', status: 'unmarked' },
                { id: 2, name: 'Diya Sharma', roll: '802', status: 'unmarked' },
                { id: 3, name: 'Arjun Patel', roll: '803', status: 'unmarked' },
                { id: 4, name: 'Ananya Singh', roll: '804', status: 'unmarked' },
                { id: 5, name: 'Vihaan Gupta', roll: '805', status: 'unmarked' },
                { id: 6, name: 'Ishaan Verma', roll: '806', status: 'unmarked' },
            ],
            9: [
                { id: 7, name: 'Saanvi Reddy', roll: '901', status: 'unmarked' },
                { id: 8, name: 'Reyansh Joshi', roll: '902', status: 'unmarked' },
                { id: 9, name: 'Aanya Kapoor', roll: '903', status: 'unmarked' },
                { id: 10, name: 'Kabir Mehta', roll: '904', status: 'unmarked' },
                { id: 11, name: 'Myra Agarwal', roll: '905', status: 'unmarked' },
                { id: 12, name: 'Vivaan Shah', roll: '906', status: 'unmarked' },
            ],
            10: [
                { id: 13, name: 'Aadhya Bansal', roll: '1001', status: 'unmarked' },
                { id: 14, name: 'Ayaan Khan', roll: '1002', status: 'unmarked' },
                { id: 15, name: 'Kiara Nair', roll: '1003', status: 'unmarked' },
                { id: 16, name: 'Shaurya Desai', roll: '1004', status: 'unmarked' },
                { id: 17, name: 'Zara Malhotra', roll: '1005', status: 'unmarked' },
                { id: 18, name: 'Arnav Iyer', roll: '1006', status: 'unmarked' },
            ]
        };

        // Student Performance Data
        const studentPerformanceData = {
            8: [
                { id: 1, name: 'Aarav Kumar', roll: '801', attendance: 95, avgScore: 88, progress: 15 },
                { id: 2, name: 'Diya Sharma', roll: '802', attendance: 92, avgScore: 85, progress: 12 },
                { id: 3, name: 'Arjun Patel', roll: '803', attendance: 88, avgScore: 78, progress: 8 },
                { id: 4, name: 'Ananya Singh', roll: '804', attendance: 97, avgScore: 92, progress: 18 },
                { id: 5, name: 'Vihaan Gupta', roll: '805', attendance: 85, avgScore: 72, progress: 5 },
                { id: 6, name: 'Ishaan Verma', roll: '806', attendance: 90, avgScore: 80, progress: 10 },
            ],
            9: [
                { id: 7, name: 'Saanvi Reddy', roll: '901', attendance: 93, avgScore: 87, progress: 14 },
                { id: 8, name: 'Reyansh Joshi', roll: '902', attendance: 89, avgScore: 82, progress: 9 },
                { id: 9, name: 'Aanya Kapoor', roll: '903', attendance: 96, avgScore: 90, progress: 16 },
                { id: 10, name: 'Kabir Mehta', roll: '904', attendance: 87, avgScore: 75, progress: 6 },
                { id: 11, name: 'Myra Agarwal', roll: '905', attendance: 94, avgScore: 89, progress: 13 },
                { id: 12, name: 'Vivaan Shah', roll: '906', attendance: 91, avgScore: 84, progress: 11 },
            ],
            10: [
                { id: 13, name: 'Aadhya Bansal', roll: '1001', attendance: 98, avgScore: 94, progress: 20 },
                { id: 14, name: 'Ayaan Khan', roll: '1002', attendance: 92, avgScore: 86, progress: 12 },
                { id: 15, name: 'Kiara Nair', roll: '1003', attendance: 95, avgScore: 91, progress: 17 },
                { id: 16, name: 'Shaurya Desai', roll: '1004', attendance: 88, avgScore: 79, progress: 7 },
                { id: 17, name: 'Zara Malhotra', roll: '1005', attendance: 90, avgScore: 83, progress: 10 },
                { id: 18, name: 'Arnav Iyer', roll: '1006', attendance: 93, avgScore: 88, progress: 14 },
            ]
        };

        // Test Results Data
        const testResults = {
            8: [
                { subject: 'Mathematics', date: 'Jan 15, 2024', average: 82, highest: 95, lowest: 65 },
                { subject: 'Science', date: 'Jan 20, 2024', average: 78, highest: 92, lowest: 60 },
                { subject: 'English', date: 'Jan 25, 2024', average: 85, highest: 98, lowest: 70 },
            ],
            9: [
                { subject: 'Mathematics', date: 'Jan 16, 2024', average: 80, highest: 94, lowest: 62 },
                { subject: 'Science', date: 'Jan 21, 2024', average: 76, highest: 90, lowest: 58 },
                { subject: 'Social Studies', date: 'Jan 26, 2024', average: 83, highest: 96, lowest: 68 },
            ],
            10: [
                { subject: 'Mathematics', date: 'Jan 17, 2024', average: 85, highest: 98, lowest: 70 },
                { subject: 'Physics', date: 'Jan 22, 2024', average: 81, highest: 95, lowest: 65 },
                { subject: 'Chemistry', date: 'Jan 27, 2024', average: 79, highest: 92, lowest: 63 },
            ]
        };

        const allStudents = [
            ...attendanceData[8].map(s => ({ ...s, class: 8 })),
            ...attendanceData[9].map(s => ({ ...s, class: 9 })),
            ...attendanceData[10].map(s => ({ ...s, class: 10 }))
        ];

        // Initialize
        renderAttendance();
        renderStudentList();
        renderPerformanceTable();
        renderTestResults();
        renderRankings();

        // Tab Switching
        function switchTab(tabName) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            document.getElementById(tabName).classList.add('active');
            event.target.classList.add('active');
        }

        // Attendance Functions
        function renderAttendance() {
            const grid = document.getElementById('attendanceGrid');
            grid.innerHTML = '';
            
            attendanceData[currentClass].forEach((student) => {
                const card = document.createElement('div');
                card.className = `student-card ${student.status}`;
                card.innerHTML = `
                    <div class="student-avatar">${getInitials(student.name)}</div>
                    <div class="student-name">${student.name}</div>
                    <div class="student-roll">Roll: ${student.roll}</div>
                    <div class="attendance-status">
                        <button class="status-btn present-btn ${student.status === 'present' ? 'active' : ''}" 
                                onclick="markStatus(${student.id}, 'present')">
                            Present
                        </button>
                        <button class="status-btn absent-btn ${student.status === 'absent' ? 'active' : ''}" 
                                onclick="markStatus(${student.id}, 'absent')">
                            Absent
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        function markStatus(studentId, status) {
            const student = attendanceData[currentClass].find(s => s.id === studentId);
            if (student) {
                student.status = student.status === status ? 'unmarked' : status;
                renderAttendance();
            }
        }

        function getInitials(name) {
            return name.split(' ').map(n => n[0]).join('').toUpperCase();
        }

        function switchClass(classNum) {
            currentClass = classNum;
            document.querySelectorAll('.class-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            renderAttendance();
        }

        function markAllPresent() {
            attendanceData[currentClass].forEach(student => {
                student.status = 'present';
            });
            renderAttendance();
        }

        function markAllAbsent() {
            attendanceData[currentClass].forEach(student => {
                student.status = 'absent';
            });
            renderAttendance();
        }

        function saveAttendance() {
            const presentCount = attendanceData[currentClass].filter(s => s.status === 'present').length;
            const absentCount = attendanceData[currentClass].filter(s => s.status === 'absent').length;
            
            alert(`✓ Attendance Saved!\n\nClass ${currentClass}\nPresent: ${presentCount}\nAbsent: ${absentCount}\n\nThis will sync with your backend database.`);
        }

        // File Upload
        const uploadArea = document.getElementById('uploadArea');
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => {
                uploadArea.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => {
                uploadArea.classList.remove('dragover');
            });
        });

        uploadArea.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            handleFiles(files);
        });

        function handleFileUpload(event) {
            const files = event.target.files;
            handleFiles(files);
        }

        function handleFiles(files) {
            const classNum = document.getElementById('notesClass').value;
            alert(`✓ Files Ready for Upload!\n\n${files.length} file(s) selected for Class ${classNum}\n\nThis will upload to Google Drive API and organize in the appropriate class folder.`);
        }

        // Google Meet
        function createMeet(event) {
            event.preventDefault();
            alert('✓ Meeting Created!\n\nGoogle Meet link generated successfully.\nInvitations sent to all students.\n\nThis will integrate with Google Meet API.');
            event.target.reset();
        }

        // Student List
        function renderStudentList() {
            const list = document.getElementById('studentList');
            list.innerHTML = allStudents.map(student => `
                <div class="student-item">
                    <div class="student-item-avatar">${getInitials(student.name)}</div>
                    <div class="student-item-info">
                        <div class="student-item-name">${student.name}</div>
                        <div class="student-item-details">Roll: ${student.roll} · <span class="badge class-${student.class}">Class ${student.class}</span></div>
                    </div>
                </div>
            `).join('');
        }

        // Reports Functions
        function getStatusBadge(score) {
            if (score >= 90) return '<span class="status-badge excellent">Excellent</span>';
            if (score >= 75) return '<span class="status-badge good">Good</span>';
            if (score >= 60) return '<span class="status-badge average">Average</span>';
            return '<span class="status-badge needs-improvement">Needs Improvement</span>';
        }

        function renderPerformanceTable() {
            const tbody = document.getElementById('performanceTableBody');
            const students = studentPerformanceData[currentReportClass];
            
            tbody.innerHTML = students.map(student => `
                <tr>
                    <td><strong>${student.name}</strong></td>
                    <td>${student.roll}</td>
                    <td>${student.attendance}%</td>
                    <td><strong>${student.avgScore}%</strong></td>
                    <td>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${student.progress * 5}%"></div>
                        </div>
                    </td>
                    <td>${getStatusBadge(student.avgScore)}</td>
                    <td>
                        <button class="btn btn-secondary" style="padding: 0.5rem 1rem;" onclick="viewStudentDetails(${student.id})">
                            View Details
                        </button>
                    </td>
                </tr>
            `).join('');
        }

        function renderTestResults() {
            const grid = document.getElementById('testResultsGrid');
            const tests = testResults[currentTestClass];
            
            grid.innerHTML = tests.map(test => `
                <div class="test-card">
                    <div class="test-header">
                        <div>
                            <div class="test-title">${test.subject}</div>
                            <div class="test-date">${test.date}</div>
                        </div>
                        <div class="stat-icon primary">📝</div>
                    </div>
                    <div class="test-stats">
                        <div class="test-stat">
                            <div class="test-stat-value" style="color: var(--primary-light);">${test.average}%</div>
                            <div class="test-stat-label">Average</div>
                        </div>
                        <div class="test-stat">
                            <div class="test-stat-value" style="color: var(--success);">${test.highest}%</div>
                            <div class="test-stat-label">Highest</div>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function renderRankings() {
            const grid = document.getElementById('rankingsGrid');
            
            const rankingsHTML = [8, 9, 10].map(classNum => {
                const students = [...studentPerformanceData[classNum]]
                    .sort((a, b) => b.avgScore - a.avgScore)
                    .slice(0, 5);
                
                return `
                    <div class="rank-card">
                        <div class="rank-card-header">
                            <h3 class="rank-card-title">🏆 Top Performers</h3>
                            <span class="rank-card-class">Class ${classNum}</span>
                        </div>
                        <div class="rank-list">
                            ${students.map((student, index) => {
                                const position = index + 1;
                                let positionClass = 'other';
                                if (position === 1) positionClass = 'first';
                                else if (position === 2) positionClass = 'second';
                                else if (position === 3) positionClass = 'third';
                                
                                return `
                                    <div class="rank-item">
                                        <div class="rank-position ${positionClass}">${position}</div>
                                        <div class="rank-student-avatar">${getInitials(student.name)}</div>
                                        <div class="rank-student-info">
                                            <h4>${student.name}</h4>
                                            <p>Roll: ${student.roll}</p>
                                        </div>
                                        <div class="rank-score">
                                            <div class="rank-score-value">${student.avgScore}%</div>
                                            <div class="rank-score-label">Average</div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
            }).join('');
            
            grid.innerHTML = rankingsHTML;
        }

        function switchReportsTab(tab) {
            // Update tab buttons
            document.querySelectorAll('.class-tab').forEach(btn => {
                if (btn.textContent.includes('Student Analytics') || 
                    btn.textContent.includes('Test Results') || 
                    btn.textContent.includes('Class Rankings')) {
                    btn.classList.remove('active');
                }
            });
            event.target.classList.add('active');
            
            // Update content
            document.querySelectorAll('.reports-content').forEach(content => {
                content.classList.remove('active');
            });
            
            if (tab === 'performance') {
                document.getElementById('performanceContent').classList.add('active');
            } else if (tab === 'tests') {
                document.getElementById('testsContent').classList.add('active');
            } else if (tab === 'rankings') {
                document.getElementById('rankingsContent').classList.add('active');
            }
        }

        function switchReportClass(classNum) {
            currentReportClass = classNum;
            
            document.querySelectorAll('[data-report-class]').forEach(tab => {
                tab.classList.remove('active');
                if (parseInt(tab.getAttribute('data-report-class')) === classNum) {
                    tab.classList.add('active');
                }
            });
            
            renderPerformanceTable();
        }

        function switchTestClass(classNum) {
            currentTestClass = classNum;
            
            const tabs = document.querySelectorAll('#testsContent .class-tab');
            tabs.forEach((tab, index) => {
                tab.classList.remove('active');
                if (index === classNum - 8) {
                    tab.classList.add('active');
                }
            });
            
            renderTestResults();
        }

        function viewStudentDetails(studentId) {
            alert(`View detailed report for student ID: ${studentId}\n\nThis will show:\n- Complete attendance history\n- All test scores\n- Progress charts\n- Detailed analytics`);
        }

        // Modal
        function openModal(type) {
            const modal = document.getElementById('modal');
            const title = document.getElementById('modalTitle');
            const body = document.getElementById('modalBody');
            
            const content = {
                announcements: {
                    title: '📢 Send Announcement',
                    body: '<p style="color: var(--text-muted);">Create and broadcast announcements to students via email/SMS integration.</p>'
                },
                homework: {
                    title: '📝 Assign Homework',
                    body: '<p style="color: var(--text-muted);">Create assignments and track student submissions.</p>'
                },
                reports: {
                    title: '📊 Analytics Reports',
                    body: '<p style="color: var(--text-muted);">View detailed attendance trends, student performance, and class insights.</p>'
                },
                students: {
                    title: '➕ Add New Student',
                    body: '<p style="color: var(--text-muted);">Register new students with their class and contact details.</p>'
                }
            };
            
            title.textContent = content[type].title;
            body.innerHTML = content[type].body;
            modal.classList.add('active');
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });