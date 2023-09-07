const menuButton = document.querySelector('.menu-btn');
const menuBar = document.querySelector('.menu-bar');


menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    const target = event.target;
    if (!menuBar.contains(target) && target !== menuButton) {
        menuBar.classList.remove('active');
    }
});


  function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var description = document.getElementById("description").value;
    var valid = true;

    document.getElementById("name-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("description-error").textContent = "";

  
    if (name.trim() === "") {
      document.getElementById("name-error").textContent = "Name is required";
      valid = false;
    }

   
    if (phone.trim() === "" && isNaN(phone)) {
      document.getElementById("phone-error").textContent = "Valid phone number is required";
      valid = false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "" || !email.match(emailPattern)) {
      document.getElementById("email-error").textContent = "Valid email address is required";
      valid = false;
    }

  
    if (description.trim() === "") {
      document.getElementById("description-error").textContent = "Description is required";
      valid = false;
    }

    return valid;
  }