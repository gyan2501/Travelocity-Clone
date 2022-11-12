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

    document.getElementById("rd_logo").addEventListener("click",function(){
        window.location.href="./index.html"
    })