async function loadStats() {
  const students = await db.collection("students").where("active","==",true).get();
  document.querySelector(".stat-card:nth-child(1) .stat-value").innerText = students.size;
}

document.addEventListener("DOMContentLoaded", loadStats);
