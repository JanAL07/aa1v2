function validateForm() {

  let isValid = true;

  let name = document.getElementById("fullname").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
    isValid = false;
  }

  let bday = document.getElementById("birthday").value;
  if (bday === "") {
    document.getElementById("bdayError").innerHTML = "Birthdate is required.";
    isValid = false;
  } else {
    let age = new Date().getFullYear() - new Date(bday).getFullYear();
    if (age < 13) {
      document.getElementById("bdayError").innerHTML = "You must be at least 13 years old.";
      isValid = false;
    }
  }

  let sex = document.getElementsByName("sex");
  let sexSelected = false;
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      sexSelected = true;
    }
  }
  if (!sexSelected) {
    document.getElementById("sexError").innerHTML = "Select your sex.";
    isValid = false;
  }

  let email = document.getElementById("email").value.trim();
  if (email === "" || !email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerHTML = "Enter a valid email.";
    isValid = false;
  }

  let username = document.getElementById("username").value.trim();
  let pattern = /^[a-zA-Z0-9]+$/;

  if (username.length < 8 || username.length > 20) {
    document.getElementById("userError").innerHTML = "Username must be 8–20 characters.";
    isValid = false;
  } else if (!pattern.test(username)) {
    document.getElementById("userError").innerHTML = "Username must contain only letters and numbers.";
    isValid = false;
  }

  let password = document.getElementById("pwd").value;

  if (password.length < 10) {
    document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
    isValid = false;
  }
  if (!/[A-Z]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Must include uppercase letter.";
    isValid = false;
  }
  if (!/[a-z]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Must include lowercase letter.";
    isValid = false;
  }
  if (!/[0-9]/.test(password)) {
    document.getElementById("passError").innerHTML += "<br>Must include a number.";
    isValid = false;
  }

  let confirm = document.getElementById("cpwd").value;
  if (confirm !== password) {
    document.getElementById("cpassError").innerHTML = "Passwords do not match.";
    isValid = false;
  }

  let topic = document.getElementById("topic").value;
  if (topic === "") {
    document.getElementById("topicError").innerHTML = "Please choose a topic.";
    isValid = false;
  }

  let checks = document.getElementsByName("advocacy");
  let checked = false;
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      checked = true;
    }
  }
  if (!checked) {
    document.getElementById("checkError").innerHTML = "Select at least one option.";
    isValid = false;
  }

  let level = document.getElementsByName("level");
  let levelSelected = false;
  for (let i = 0; i < level.length; i++) {
    if (level[i].checked) {
      levelSelected = true;
    }
  }
  if (!levelSelected) {
    document.getElementById("levelError").innerHTML = "Select your level.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").innerHTML = "Signup successful!";
  }

  return isValid;
      }
