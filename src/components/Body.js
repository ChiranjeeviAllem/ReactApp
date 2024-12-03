import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                <button id="filter">Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    );
}

export default Body;