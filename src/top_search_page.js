
import {navbar} from "../components/navbar.js"
import {footer} from "../components/footer.js"
console.log(footer)

console.log(navbar)

let prod_nav = document.getElementById("search_navbar")
console.log(prod_nav)
prod_nav.innerHTML = navbar();

let productFooter = document.getElementById("gpfooter")
console.log(productFooter)
productFooter.innerHTML = footer();






let data = [
    {
        img: "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Leela Palace New Delhi",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.5",
        rupees: "10000",
        total: "240"

    },





    {
        img: "https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/370d2f58.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Shangri-La Eros, New Delhi",
        city: "Connaught Place",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.4",
        rupees: "1150",
        total: "118"

    },

    {
        img: "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/13a4747e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: " Taj Palace, New Delhi",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.2",
        rupees: "21899",
        total: "257"

    },

    {
        img: "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/e1cfe61e.jpg?impolicy=resizecrop&rw=455&ra=fit",

        title: "Radisson Blu Plaza Delhi Airport",
        city: "South West",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.3",
        rupees: "5999",
        total: "104",

    },

    //

    // More

    {
        img: "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Roseate House",
        city: "Aerocity",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.1",
        rupees: "7999",
        total: "181"
    },

    {
        img: "https://images.trvl-media.com/hotels/77000000/76950000/76945300/76945266/eafc5354.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: " Hotel Stanley by Lord Grand",
        city: "Mahilpalpur",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "2.3",
        rupees: "3999",
        total: "50"

    },

    {
        img: "https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: " The Oberoi, New Delhi",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.5",
        rupees: "2049",
        total: "240"

    },


    {
        img: "https://images.trvl-media.com/hotels/1000000/540000/536600/536519/2525421d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: " The Metropolitan Hotel and Spa New Delhi",
        city: "Connaught Place",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.8",
        rupees: "7399",
        total: "82"

    },


    {
        img: "https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/9fdc0ad2.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Vivanta New Delhi,Dwarka",
        city: "Dwarka",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.7",
        rupees: "2798",
        total: "329"

    },
    {
        img: "https://images.trvl-media.com/hotels/16000000/15240000/15233900/15233833/b02869f0.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Haveli Dharampura",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.2",
        rupees: "1259",
        total: "147"

    },
    {
        img: "https://images.trvl-media.com/hotels/14000000/13090000/13083600/13083538/380e3879.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Pride Plaza Hotel Aerocity",
        city: "Aerocity",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.2",
        rupees: "1969",
        total: "108"

    },
    {
        img: "https://images.trvl-media.com/hotels/2000000/1060000/1052500/1052412/33090d68.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Roseate New Delhi",
        city: "South West",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.3",
        rupees: "1759",
        total: "206"

    },

    {
        img: "https://images.trvl-media.com/hotels/5000000/4660000/4651800/4651727/c9be0802.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Welcomhotel by ITC Hotels, Dwarka, New Delhi",
        city: "Dwarka",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.4",
        rupees: "7679",
        total: "85"

    },
    {
        img: "https://images.trvl-media.com/hotels/6000000/5310000/5309200/5309112/b1b35867.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Leela Ambience Convention Hotel Delhi",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.5",
        rupees: "1517",
        total: "178"

    },
    {
        img: "https://images.trvl-media.com/hotels/14000000/13240000/13235700/13235605/91d05645.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Andaz Delhi - a concept by Hyatt",
        city: "South West",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.6",
        rupees: "1519",
        total: "178"

    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/530000/521100/521096/13c1553d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Grand New Delhi",
        city: "Vasant Kunj",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.7",
        rupees: "999",
        total: "1398"

    },
    {
        img: "https://images.trvl-media.com/hotels/10000000/9100000/9093700/9093615/34de1401.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Hyatt Place Gurgaon Udyog Vihar",
        city: "Gurugram",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.7",
        rupees: "2035",
        total: "240"

    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/530000/526400/526368/6f11d5a0.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Ambassador, New Delhi - IHCL SeleQtions",
        city: "New Delhi",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.6",
        rupees: "1259",
        total: "147"

    },
    {
        img: "https://images.trvl-media.com/hotels/39000000/38680000/38678300/38678265/77d4580c.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Kelvish Hotel",
        city: "Mahipalpur",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.5",
        rupees: "3899",
        total: "43"

    },
    {
        img: "https://images.trvl-media.com/hotels/3000000/2280000/2270400/2270398/5a1ec55a.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Leela Ambience Gurugram Hotel & Residences",
        city: "Rajokari",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.4",
        rupees: "1203",
        total: "240"

    },
    {
        img: "https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "Novotel New Delhi Aercity Hotel",
        city: "Aerocity",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.2",
        rupees: "1098",
        total: "203"

    },
    {
        img: "https://images.trvl-media.com/hotels/5000000/4330000/4327800/4327701/8258bc4d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        title: "The Oberoi Gurgaon",
        city: "Gurugram",
        refundable: "Fully refundable",
        reserve: "Reserve now, pay later",
        starRating: "4.3",
        rupees: "1203",
        total: "240"

    }];





let place = localStorage.getItem("place")
let ls_span = document.getElementById("ls_span")
ls_span.innerText = place

let obj = JSON.stringify(localStorage.getItem("obj")) || []
console.log(obj)

// let aj_in = document.getElementById("aj_in")
// aj_in.innerText = obj.d1
// let aj_out = document.getElementById("aj_out")
// aj_out.innerText = obj.d2

appendData(data);




function appendData(arr) {

    document.getElementById("dataAppender").innerHTML = null;
    arr.map(function (ele) {


        let mainDiv = document.createElement("div");
        mainDiv.id = "aj_main_div"

        // mainDiv.addEventListener("click", (function (ele) {


        //     localStorage.setItem("information", JSON.stringify(obj));
        //     window.location.href = "checkout.html";
        // }))
        mainDiv.style.display = "flex";
        mainDiv.style.border = "1px solid red"
        mainDiv.setAttribute("id", "mainDiv");
        mainDiv.style.cursor = "pointer"
        let div1 = document.createElement("div");
        div1.setAttribute("id", "div1");
        // div1.style.border = "1px solid red";
        div1.style.marginRight = "-11px"
        let img = document.createElement("img");

        img.src = ele.img;
        div1.append(img);


        let div2 = document.createElement("div");
        div2.setAttribute("id", "div2")
        // div2.style.border="2px solid black"
        let title = document.createElement("h2");
        title.setAttribute("id", "title");
        title.style.fontWeight = "bold"
        title.innerText = ele.title;
        let city = document.createElement("p");
        city.innerText = ele.city;
        city.style.fontSize = "15px";
        city.style.fontWeight = "20px";

        let refundable = document.createElement("p");
        refundable.innerText = ele.refundable;
        // refundable.setAttribute("class","marginTop")
        refundable.style.color = "green";
        let reserve = document.createElement("p");
        reserve.innerText = ele.reserve;
        reserve.setAttribute("class", "marginTop")
        let starRating = document.createElement("p");
        starRating.innerText = `Rating: ${ele.starRating}/5`;


        let amount = document.createElement("h3");
        amount.innerText = `Price/Night: Rs. ${+ele.rupees} `;
        // console.log(amount)
        amount.setAttribute("class", "marginLeft");
        amount.setAttribute("id", "amount");

        let total = document.createElement("p");
        total.innerText = `$${ele.total} total`;
        total.setAttribute("class", "marginLeft");
        total.style.fontWeight = "500"
        total.style.fontSize = "11px"

        div2.append(title, city, refundable, reserve, starRating, amount)
        mainDiv.append(div1, div2);
        document.getElementById("dataAppender").append(mainDiv);
    })
    document.getElementById("search").addEventListener("click", function () {
        window.location.reload()
    })

}

// ----------------------sort------------------
let aj_sort = document.getElementById("aj_sort")

aj_sort.addEventListener("change", () => {
    let sorted = aj_sort.value;
    console.log(sorted)
    if (sorted == "pricelth") {
        let sorted_data = data.sort((a, b) => {
            return +a.rupees - (+b.rupees)
        })

        appendData(sorted_data)
        // console.log(sorted_data)
        console.log(typeof +sorted_data[0].rupees)

    } else if (sorted == "pricehtl") {
        let sorted_data = data.sort((a, b) => {
            return +b.rupees - (+a.rupees)
        })

        appendData(sorted_data)
        // console.log(sorted_data)
        console.log(typeof +sorted_data[0].rupees)

    } 

    else if (sorted == "ratinghtl") {
        let sorted_data = data.sort((a, b) => {
            return +b.starRating - (+a.starRating)

        })
        document.getElementById("dataAppender").innerHTML = null;
        appendData(sorted_data)

        console.log(sorted_data)

    }
    else if (sorted == "ratinglth") {
        let sorted_data = data.sort((a, b) => {
            return +a.starRating - (+b.starRating)

        })
        document.getElementById("dataAppender").innerHTML = null;
        appendData(sorted_data)

        console.log(sorted_data)

    } else   {
        
        //document.getElementById("dataAppender").innerHTML = null;
        appendData(data)

        }
        

    
})