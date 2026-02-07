const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const cred = await auth.signInWithEmailAndPassword(email, password);
    const user = cred.user;

    // 🔥 Firestore se role nikaalo (email based – safe)
    const snap = await db
      .collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (snap.empty) {
      throw new Error("User role not found");
    }

    const role = snap.docs[0].data().role;

    if (role === "admin") {
      window.location.href = "admin.html";
    } else if (role === "student") {
      window.location.href = "student.html";
    } else {
      throw new Error("Invalid role");
    }

  } catch (err) {
    alert(err.message);
  }
});


// 🔁 FORGOT PASSWORD
function resetPassword() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Pehle email daal bhai");
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset link email pe bhej diya gaya hai");
    })
    .catch((err) => {
      alert(err.message);
    });
}
