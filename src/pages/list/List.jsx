import "./list.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/navbar";
import { useLocation } from "react-router-dom";
import { useState} from "react";
import { format } from "date-fns";
import { DateRange} from "react-date-range";
import SearchItem from "../../component/searchItem/searchItem";



function List() {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState(location.state.options)
    
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
            <label>Destination</label>
            <input type="text" placeholder={destination}/>
            </div>
            <div className="lsItem">
            <label>Check-in-Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
            </span>
            {openDate && (<DateRange
            onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date}/>)}
            </div>
            <div className="lsItem">
                <label>Option</label>
                <div className="lsOptions">
                <div className="lsOptionItem">
                <span className="lsOptionText">Min Price <small>per night</small></span>
                <input className="lsOptionInput" type="number"/>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">Max Price <small>per night</small></span>
                <input className="lsOptionInput" type="number"/>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input className="lsOptionInput" type="number" min={1} placeholder={options.adult}/>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptiontext">Children</span>
                <input className="lsOptionInput" type="number" min={0} placeholder={options.children}/>
                </div>
                <div className="lsOptionItem">
                <span className="lsOptionText">Rooms</span>
                <input className="lsOptionInput" type="number" min={1} placeholder={options.room}
                />
                </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;