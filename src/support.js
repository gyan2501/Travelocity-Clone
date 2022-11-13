


let rd_explore = document.getElementById("rd_explore");
rd_explore.addEventListener("click", () => {
    let rd_explore_div = document.getElementById("rd_explore_div");
    rd_explore_div.style.display = "block";
});


let close_exp = document.getElementById("close_exp");
close_exp.addEventListener("click", () => {
    let rd_explore_div = document.getElementById("rd_explore_div");
    rd_explore_div.style.display = "none";
});


let rd_last_explore = document.getElementById("rd_last_explore");
rd_last_explore.addEventListener("click", () => {
    window.location.href = "https://www.expediagroup.com/home/default.aspx";
})


let account = document.getElementById("account");
account.addEventListener("click", () => {
    window.location.href = "./Signuplogin/signup.html";
})


let support = document.getElementById("support");
support.addEventListener("click", () => {
    window.location.href = "support.html";
})

let list = document.getElementById("rd_list");
list.addEventListener("click", () => {
    window.location.href = "property.html";
})

let property = document.getElementById("rd_add_btn");
property.addEventListener("click", () => {
    window.location.href = "property.html";
})
// const account = () =>{
//    "Signuplogin/signup.html"
// }


// let rd_logo = document.getElementById("rd_logo");
// rd_logo.addEventListener("click",()=>{
//     window.location.href = "./Signuplogin/signup.html"
// })



// toggle part

let rd_refund_div1 = document.getElementById("rd_refund_div1");
rd_refund_div1.onclick = () => {
    let rrrr = document.getElementById("rrrr");
    if (rrrr.style.display === "none") {
        rrrr.style.display = "block"
    } else {
        rrrr.style.display = "none"
    }
}




let rd_refund_div2 = document.getElementById("rd_refund_div2");
rd_refund_div2.onclick = () => {
    let mmmm = document.getElementById("mmmm");
    if (mmmm.style.display === "none") {
        mmmm.style.display = "block"
    }else{
        mmmm.style.display = "none"
    }
}




let rd_refund_div3 = document.getElementById("rd_refund_div3");
rd_refund_div3.onclick = () => {
    let xxxx = document.getElementById("xxxx");
    if(xxxx.style.display === "none"){
    xxxx.style.display = "block"
    }else{
        xxxx.style.display = "none"
    }
}

let rd_refund_div4 = document.getElementById("rd_refund_div4");
rd_refund_div4.onclick = () => {
    let zzzz = document.getElementById("zzzz");
    if(zzzz.style.display === "none"){
    zzzz.style.display = "block"
    }else{
        zzzz.style.display = "none"
    }
}

let rd_flight1 = document.getElementById("rd_flight1");
rd_flight1.onclick = () => {
    let dtl_flight1 = document.getElementById("dtl_flight1");
    if(dtl_flight1.style.display === "none"){
        dtl_flight1.style.display = "block"
    }else{
        dtl_flight1.style.display = "none"
    }
}
let rd_flight2 = document.getElementById("rd_flight2");
rd_flight2.onclick = () => {
    let dtl_flight2 = document.getElementById("dtl_flight2");
    if(dtl_flight2.style.display === "none"){
        dtl_flight2.style.display = "block"
    }else{
        dtl_flight2.style.display = "none"
    }
}
let rd_flight3 = document.getElementById("rd_flight3");
rd_flight3.onclick = () => {
    let dtl_flight3 = document.getElementById("dtl_flight3");
    if(dtl_flight3.style.display === "none"){
        dtl_flight3.style.display = "block"
    }else{
        dtl_flight3.style.display = "none"
    }
}
let rd_flight4 = document.getElementById("rd_flight4");
rd_flight4.onclick = () => {
    let dtl_flight4 = document.getElementById("dtl_flight4");
    if(dtl_flight4.style.display === "none"){
        dtl_flight4.style.display = "block"
    }else{
        dtl_flight4.style.display = "none"
    }
}

let rd_flight5 = document.getElementById("rd_flight5");
rd_flight5.onclick = () => {
    let dtl_flight5 = document.getElementById("dtl_flight5");
    if(dtl_flight5.style.display === "none"){
        dtl_flight5.style.display = "block"
    }else{
        dtl_flight5.style.display = "none"
    }
}

let rd_flight6 = document.getElementById("rd_flight6");
rd_flight6.onclick = () => {
    let dtl_flight6 = document.getElementById("dtl_flight6");
    if(dtl_flight6.style.display === "none"){
        dtl_flight6.style.display = "block"
    }else{
        dtl_flight6.style.display = "none"
    }
}

    document.getElementById("rd_logo").addEventListener("click",function(){
        window.location.href="./index.html"
    })