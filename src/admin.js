
let url = "http://localhost:3000/api/admindata";


let main = async () => {
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    append(res)
}

main();
   
let usercard = ({id, name, place, description, price, rating, image}) => {

    let div = document.createElement("div");
    div.setAttribute("class", "abjcard")
        let n = document.createElement("h3");
        n.innerText = `Hotel Name ${name}`;
        n.setAttribute("class", "abjname")
        let p = document.createElement("p");
        p.innerText = `Location ${place}`;
        let p1 = document.createElement("p");
        p1.innerText = `Description ${description}`;
        let p2 = document.createElement("p");
        p2.innerText= `Hote Price ${price}`;
        let p3 = document.createElement("p");
        p3.innerText= `Hotel rating ${rating}`;
        let img = document.createElement("img");
        img.src = image;

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.onclick = () => {
            deleteUser(id)
        };

        let uptd = document.createElement("button");
        uptd.innerText = "Update";
        uptd.onclick = () => {
            updateUser(id)
        };

        div.append(img, n, p, p1, p2, p3, btn, uptd);
       
        return div;

}



let append = (data) => {
    let cont = document.getElementById("abjcontainer");
    cont.innerHTML = null;

    data.forEach((el, i) => {
        
        let card = usercard(el);

        cont.append(card);

    })
};



window.onload = () => {
    let form = document.getElementById("abjadddata")
    form.onsubmit = () => {
        Submit(event)
    }
}



let Submit = async (e) => {    
    e.preventDefault();

    let form = document.getElementById("abjadddata");

    let name = form.name.value;
    let place = form.place.value;
    let description = form.description.value;
    let price = +form.price.value;
    let rating = +form.rating.value;
    let image = form.image.value;

   let admindata = {id: Date.now(), name, place, description, price, rating, image };

   let res = await fetch (url, {
    method: "POST",
    body: JSON.stringify(admindata),
    headers: {
        "Content-Type": "application/json"
    }
   })

}

let deleteUser = async (id) => {
    let res = await fetch(`${url}/${id}`, {
        method: "DELETE",

    });

    main();
}

let updateUser = async (id) => {
    let newscore = window.prompt("enter new hotel price");
    let admindata = { price: newscore};    
    let res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(admindata),
        headers: {
              "Content-Type": "application/json",
            }

    });

    main();
}

document.getElementById("abjback").addEventListener("click",function(){
    window.location.href="./index.html"
})