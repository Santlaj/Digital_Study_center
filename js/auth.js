// js/auth.js

const path = window.location.pathname;

// 🔴 IMPORTANT: login page ko chhod do
if (path.includes("index.html") || path.endsWith("/")) {
  console.log("🔓 On login page, auth guard skipped");
} else {
  auth.onAuthStateChanged(async (user) => {
    console.log("👤 Auth state:", user);

    if (!user) {
      window.location.replace("index.html");
      return;
    }

    try {
      const snap = await db.collection("users").doc(user.uid).get();

      if (!snap.exists) {
        await auth.signOut();
        window.location.replace("index.html");
        return;
      }

      const role = snap.data().role;

      if (path.includes("admin.html") && role !== "admin") {
        window.location.replace("student.html");
      }

      if (path.includes("student.html") && role !== "student") {
        window.location.replace("admin.html");
      }

    } catch (err) {
      console.error("Auth guard error:", err);
      window.location.replace("index.html");
    }
  });
}
