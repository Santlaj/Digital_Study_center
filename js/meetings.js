async function saveMeeting(classNum, title, meetLink, dateTime) {
  await db.collection("meetings").add({
    class: classNum,
    title,
    meetLink,
    dateTime
  });
}
