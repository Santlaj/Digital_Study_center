async function saveNoteMeta(classNum, subject, fileLink, fileName) {
  await db.collection("notes").add({
    class: classNum,
    subject,
    fileName,
    driveLink: fileLink,
    uploadedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}
