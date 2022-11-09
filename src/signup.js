
const toggle_Password = document.querySelector("#toggle_Password");
const m_password = document.querySelector("#m_password");

toggle_Password.addEventListener("click", function () {
    // toggle the type attribute
    const mtype = password.getAttribute("type") === "password" ? "text" : "password";
    m_password.setAttribute("type", mtype);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const signupform = document.querySelector("form");
signupform.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("asdaf")
});