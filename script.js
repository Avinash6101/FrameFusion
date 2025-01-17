// Google Login functionality
const googleLoginBtn = document.getElementById("googleLoginBtn");
googleLoginBtn.addEventListener("click", function() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Google login successful! Welcome " + user.displayName);
      window.location.href = "/dashboard.html"; // Redirect after Google login
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage); // Show the error message if Google login fails
    });
});