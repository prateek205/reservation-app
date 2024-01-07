import "./searchItem.css"


function SearchItem () {
    return (
        <div className="searchItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/454647775.webp?k=c3efbf45d215677b5508d09cda52f1b8ab55c3f57272fcd207699b19831e9cfb&o=" 
            alt="" 
            className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Country Inn By Turtle Hotel & Resort</h1>
                <span className="siAddress">Western Suburb, Mumbai</span>
                <span className="siConnectivity">Metro Access</span>
                <span className="siDistance">2km from Beach</span>
                <span className="siSubTitle">Double Room with Balcony</span>
                <span className="siFeature">1 Extra Large Double Bed</span>
                <span className="siCancelOpt">Free Cancellation</span>
                <span className="siCancelOptSubTitle">No prepayment needed</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                <span> Review Score </span>
                <button> 8.9 </button>
                </div>
                <div className="siDetailText">
                <span className="siStay">5 Nights, 2 Adults</span>
                <span className="siPrice">26,100/-</span>
                <span className="siTaxOpt">Include Taxes and Fees</span>
                <button className="siAvailability">See Availability </button>
                </div>
            </div>
        </div>
    )
};

export default SearchItem;