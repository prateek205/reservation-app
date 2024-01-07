import "./featured.css";

function Featured(){
    return(
        <div className="featured">
        <div className="featuredItem">
            <img 
            src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/251917276.jpg?k=e90aac389ccf4570fb261be642f2194948320016ea2760ebb37ac1da798800ea&o=" 
            alt="" 
            className="featuredImg"     
            />
            <div className="featuredTitles">
                <h1>Manchester</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
            src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/150717193.jpg?k=e9184b95add20a194743231f7ce94fcf65d86fb640824b81ad21226eb3dc6dde&o=" 
            alt="" 
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>235 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
            src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/130017442.jpg?k=5798ca880462c83382ccbd9dfb07e91e3fb4863ea869c5b6fc24d3090daffbfa&o=" 
            alt="" 
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Rome</h1>
                <h2>555 properties</h2>
            </div>
        </div>
        </div>
    )
};

export default Featured;