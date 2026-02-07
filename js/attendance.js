async function saveAttendanceFirestore(classNum, students) {
  const date = new Date().toISOString().split("T")[0];
  const batch = db.batch();

  students.forEach(s => {
    const ref = db.collection("attendance").doc();
    batch.set(ref, {
      class: classNum,
      studentId: s.id,
      status: s.status,
      date,
      markedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  });

  await batch.commit();
}
