
function navbar  () {

    return `<div id="leftnav">
    <div id="exlogo">
    <a href="./index.html"> <img src="./logo/Explore up (1).png" alt=""></a>
    </div>

    <div class="dropdown">
        <button  class="dropbtn">More travel &nbsp &#8744</button>
        <div id="myDropdown" class="dropdown-content">
        <a id="adp" href=""><i class="fa-solid fa-suitcase-rolling"></i>&nbsp &nbsp  Packages</a>
        <a id="adp" href=""><i class="fa-solid fa-hotel"></i>&nbsp &nbsp Stays</a>
        <a id="adp" href=""><i class="fa-solid fa-car"></i>&nbsp &nbsp Cars</a>
        <a id="adp" href="./Search_flight.html"><i class="fa-solid fa-plane"></i>&nbsp &nbsp Flights</a>
        <a id="adp" href=""><i class="fa-solid fa-plane"></i>&nbsp &nbsp Cruises</a>
        <a id="adp" href=""><i class="fa-solid fa-ticket"></i>&nbsp &nbsp Things to do</a>
        <a id="adp" href="">Trips for Me</a>
        <a id="adp" href="">Discover</a>
        <a id="adp" href="">Travel Deals</a>
        <a id="adp" href="">Get Inspired</a>
        <a id="adp" href=""> Groups & meetings</a>
        </div>
    </div>
</div>
<div id="rightnav">
    <div><a id="aaa" href="">Espanol</a> </div>
    <div><a id="aaa" href="./property.html">Admin Panel</a> </div>
    <div><a id="aaa" href="./support.html"> Support</a></div>
    <div><a id="aaa" href="">Trips</a> </div>
    <div><a id="aaa" href="./signin.html">Sign in</a> </div>
    <div id="searchlogo"><a id="aaa" href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
    <div id="triplogo"><a id="aaa" href="#"><i class="fa-solid fa-bag-shopping"></i></a></div>
    <div id="loginlogo"><a id="aaa" href="./signin.html"><i class="fa-solid fa-user"></i></a></div>

</div>`

}


export {navbar}

