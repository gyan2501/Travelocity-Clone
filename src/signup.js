
const toggle_Password = document.querySelector("#toggle_Password");
const m_password = document.querySelector("#m_password");

toggle_Password.addEventListener("click", function () {
    // toggle the type attribute
    const mtype = m_password.getAttribute("type") === "password" ? "text" : "password";
    m_password.setAttribute("type", mtype);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});


// prevent form submit
let passwordArray = JSON.parse(localStorage.getItem("password"))|| []
let emailArray = JSON.parse(localStorage.getItem("email")) || []

const signupform = document.querySelector("form");
signupform.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("asdaf")

    let emailid = signupform.email_id.value
    let firstname = signupform.first_name.value
    let lastname = signupform.last_name.value
    let pass = signupform.m_password.value

    

    signupform.email_id.value = null
    signupform.first_name.value= null
    signupform.last_name.value= null
    signupform.m_password.value= null

    if (emailid == ""){
        alert("Email required.");
        return ;
    }
    else if (pass == ""){
        alert("Password required.");
        return ;
    }
    else if(emailArray.indexOf(emailid) == -1){
        emailArray.push(emailid);
        localStorage.setItem("email",JSON.stringify(emailArray))
        passwordArray.push(pass);
        localStorage.setItem("password",JSON.stringify(passwordArray))

        alert(emailid + "  Thanks for registration. \nTry to login Now");
        window.location.href="signin.html"
       
        
    }
    else{
        alert(emailid + " is already register.");
        return ;
    }

    console.log(emailid,firstname,lastname,pass)
    
});



