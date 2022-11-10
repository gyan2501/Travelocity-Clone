
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});


// prevent form submit
let passwordArray = JSON.parse(localStorage.getItem("password"))|| []
let emailArray = JSON.parse(localStorage.getItem("email")) || []

const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("ghh")

    let lemail =  form.emailid.value
    let logpass = form.password.value

    form.emailid.value= null
    form.password.value=null

    console.log(lemail,logpass)

    var i = emailArray.indexOf(lemail);

            if(emailArray.indexOf(lemail) == -1){
                if (lemail == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != logpass){
                if (logpass == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(lemail + " yor are login Now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                return ;
            }

    
});




