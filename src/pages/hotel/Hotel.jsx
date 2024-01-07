import "./hotel.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/navbar";

function Hotel(){
    return (
        <div>
            <Navbar/>
            <Header type= "list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Country Inn By Turtle and Resort</h1>
                </div>
            </div>
        </div>
    )
};

export default Hotel;