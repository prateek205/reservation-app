import "./featuredProperties.css";

function HomeGuest(){
    return (
        <div className="fp">
        <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/498060768.webp?k=4432941820ca79f20d233306eb41476429c7f301419350e4d07288bb3e5a38bd&o=" 
                alt="" 
                className="fpImg"/>
            <span className="fpName">FabHotel Ascot International</span>
            <span className="fpCity">Western Suburbs, Mumbai</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            <span className="fpPrice">Starting Price $ 220</span>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/489416079.webp?k=0de59ef58eb2a83433020f8d4d82ddcd801c308ec746bf5f98681457cf37aa43&o=" 
                alt="" 
                className="fpImg"/>
            <span className="fpName">Arts International</span>
            <span className="fpCity">Santacruz, Mumbai</span>
            <div className="fpRating">
                <button>8.0</button>
                <span>Excellent</span>
            </div>
            <span className="fpPrice">Starting Price $ 120</span>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/495050651.webp?k=4301a5c0234c35d9250dabe3f3f7d73a5fb491d117a95ea21a5fe5b3e9921be0&o=" 
                alt="" 
                className="fpImg"/>
            <span className="fpName">White House by Maxxvalue Service</span>
            <span className="fpCity">Bandra, Mumbai</span>
            <div className="fpRating">
            <button>7.0</button>
            <span>Very Good</span>
            </div>
            <span className="fpPrice">Starting Price $ 250</span>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/392019082.webp?k=8a944600f4d815fffd3c4ebd5bca564b5ead52d79393b11fbde89fcc2dfb89d1&o=" 
                alt="" 
                className="fpImg"/>
            <span className="fpName">Hotel Ariana Residency</span>
            <span className="fpCity">Western Suburbs, Mumbai</span>
            <div className="fpRating">
            <button>7.5</button>
            <span>Very Good</span>
            </div>
            <span className="fpPrice">Starting Price $ 500</span>
            </div>
            <div className="fpItem">
                <img src="https://cf2.bstatic.com/xdata/images/hotel/square200/445711539.webp?k=715c9f07802ad4fdf32bc930c35c3bd06c518a22ee786233cc0d5f23f9925872&o=" 
                alt="" 
                className="fpImg"/>            
            <span className="fpName">Apex Beacon hotel</span>
            <span className="fpCity">Western Suburbs, Mumbai</span>
            <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
            </div>
            <span className="fpPrice">Starting Price $ 600</span>
            </div>
        </div>
    )
};

export default HomeGuest;