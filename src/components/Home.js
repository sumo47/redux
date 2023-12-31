import React from "react"
const img = "/iphone.jpg"



function Home() {
    return (
        <div className="main-container">
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaz8hzJ8fBHKeDdz7mWAFWTvgCOjyGw_Yo1TQDRFi75A&s" alt="iphone" />
                </div>
                <div className="text-wrapper item">
                    <span><b>i-Phone </b></span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
            <div className="cart">
             <img src="https://th.bing.com/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?rs=1&pid=ImgDetMain" alt="" />
            </div>

        </div>
    )
}

export default Home;