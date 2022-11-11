 // const explore_more = () =>{
    //     let rd_explore_div = document.getElementById("rd_explore_div");
    //     rd_explore_div.style.display = "block";
    // }

    let rd_explore = document.getElementById("rd_explore");
    rd_explore.addEventListener("click",()=>{
        let rd_explore_div = document.getElementById("rd_explore_div");
        rd_explore_div.style.display = "block";
    });


    let close_exp = document.getElementById("close_exp");
    close_exp.addEventListener("click",()=>{
        let rd_explore_div = document.getElementById("rd_explore_div");
        rd_explore_div.style.display = "none";
    });


    let rd_last_explore = document.getElementById("rd_last_explore");
    rd_last_explore.addEventListener("click",()=>{
        window.location.href = "https://www.expediagroup.com/home/default.aspx";
    })


    let account = document.getElementById("account");
    account.addEventListener("click",()=>{
        window.location.href =  "./Signuplogin/signup.html";
    })


    let support = document.getElementById("support");
    support.addEventListener("click",()=>{
        window.location.href =  "support.html";
    })

    let list = document.getElementById("rd_list");
    list.addEventListener("click",()=>{
        window.location.href =  "property.html";
    })

    let property = document.getElementById("rd_add_btn");
    property.addEventListener("click",()=>{
        window.location.href =  "property.html";
    })
    // const account = () =>{
    //    "Signuplogin/signup.html"
    // }
   

    // let rd_logo = document.getElementById("rd_logo");
    // rd_logo.addEventListener("click",()=>{
    //     window.location.href = "./Signuplogin/signup.html"
    // })