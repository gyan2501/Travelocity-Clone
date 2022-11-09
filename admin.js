
window.onload = () => {
    let form = document.getElementById("adddata")
    form.onsubmit = () => {
        Submit(event)
    }
}

let Submit = async (e) => {    
    e.preventDefault();

    let form = document.getElementById("adddata");

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