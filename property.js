import {navbar} from "./components/navbar.js";

let cont = document.getElementById("gpnavbar")
cont.innerHTML = navbar();


let con = document.getElementsByClassName("abjclkbox");
con.onclick = () =>{
    repl();
}

let repl = () => {

    window.location.href="admin_data.html"
}

