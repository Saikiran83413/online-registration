document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;
  
    if (name.trim() === "" || email.trim() === "" || course === "") {
      showMessage("Please fill in all fields.", "error");
    } else {
      showMessage(`Thank you, ${name}! You have successfully registered for the ${course} course. Check your email (${email}) for further instructions.,success`);
      document.getElementById("registration-form").reset();
    }
  });
  
  function showMessage(message, messageType) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = messageType;
  }