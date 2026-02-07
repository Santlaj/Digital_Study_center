async function loadStudentsByClass(classNum) {
  const snap = await db.collection("students")
    .where("class", "==", classNum)
    .where("active", "==", true)
    .get();

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    status: "unmarked"
  }));
}
