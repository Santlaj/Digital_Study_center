const notesTableBody = document.getElementById("notesTableBody");
const dateStrip = document.getElementById("dateStrip");

let selectedDate = new Date().getDate();

// Build date buttons
for (let d = 1; d <= 31; d++) {
  const btn = document.createElement("button");
  btn.className = "date-btn";
  btn.textContent = d;

  if (d === selectedDate) btn.classList.add("active");

  btn.onclick = () => {
    document.querySelectorAll(".date-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDate = d;
    loadNotesForDate(d);
  };

  dateStrip.appendChild(btn);
}

async function loadNotesForDate(day) {
  notesTableBody.innerHTML = `<tr><td colspan="3">Loading...</td></tr>`;

  const start = new Date();
  start.setDate(day);
  start.setHours(0,0,0,0);

  const end = new Date(start);
  end.setHours(23,59,59,999);

  const snap = await db.collection("notes")
    .where("class", "==", studentClass)
    .where("uploadedAt", ">=", start)
    .where("uploadedAt", "<=", end)
    .get();

  if (snap.empty) {
    notesTableBody.innerHTML =
      `<tr><td colspan="3">No notes uploaded</td></tr>`;
    return;
  }

  notesTableBody.innerHTML = snap.docs.map(doc => {
    const n = doc.data();
    return `
      <tr>
        <td>${n.subject}</td>
        <td>Faculty</td>
        <td>
          <a class="btn btn-secondary"
             href="${n.driveViewLink}"
             target="_blank">
            Download
          </a>
        </td>
      </tr>
    `;
  }).join("");
}

// initial
loadNotesForDate(selectedDate);
