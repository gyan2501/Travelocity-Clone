
const navbar = () =>{

    return `<div id="leftnav">
    <div id="exlogo">
    <a href="#"> <img src="./logo/Explore up (1).png" alt=""></a>
    </div>

    <div class="dropdown">
        <button  class="dropbtn">More travel &nbsp &#8744</button>
        <div id="myDropdown" class="dropdown-content">
        <a href=""><i class="fa-solid fa-suitcase-rolling"></i>&nbsp &nbsp  Packages</a>
        <a href=""><i class="fa-solid fa-hotel"></i>&nbsp &nbsp Stays</a>
        <a href=""><i class="fa-solid fa-car"></i>&nbsp &nbsp Cars</a>
        <a href=""><i class="fa-solid fa-plane"></i>&nbsp &nbsp Flights</a>
        <a href=""><i class="fa-solid fa-plane"></i>&nbsp &nbsp Cruises</a>
        <a href=""><i class="fa-solid fa-ticket"></i>&nbsp &nbsp Things to do</a>
        <a href="">Trips for Me</a>
        <a href="">Discover</a>
        <a href="">Travel Deals</a>
        <a href="">Get Inspired</a>
        <a href=""> Groups & meetings</a>
        </div>
    </div>
</div>
<div id="rightnav">
    <div><a href="">Espanol</a> </div>
    <div><a href="">List your property</a> </div>
    <div><a href=""> Support</a></div>
    <div><a href="">Trips</a> </div>
    <div><a href="../signin.html">Sign in</a> </div>
    <div id="searchlogo"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></div>
    <div id="triplogo"><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></div>
    <div id="loginlogo"><a href="#"><i class="fa-solid fa-user"></i></a></div>

</div>`

}


export {navbar}

