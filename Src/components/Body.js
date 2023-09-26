import ResCards, { withIsOpenLable } from "./ResCards";
import { useState, useEffect, useContext } from "react";
import Shimar from "./shimarUi";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";


const Body = () => {

  const [listOfResturent, setListOfResturent] = useState([]);
  const [filterdResturents, setFilteredResturents] = useState([]);

  const [searchText, setSearchText] = useState("");

  const IsOpendLabled = withIsOpenLable(ResCards);
  const {loggedInUser,setUserName} = useContext(UserContext);

  // console.log(listOfResturent)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    // console.log(json)
    setListOfResturent(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturents(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfResturent.length === 0 ? (<Shimar />) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input type="text" className="border border-solid border-black mr-3 p-1 rounded-md" value={searchText} onChange={(e) => { setSearchText(e.target.value); }} />

          <button className="rounded-md p-1 px-4 m-1 bg-green-200 hover:bg-green-400" onClick={() => {
            const filterdResturents = listOfResturent.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredResturents(filterdResturents);
          }}>Search</button>
        </div>

        <div className="m-4 p-4">
          <button className="rounded-md p-1 px-5  m-1 bg-slate-300 hover:bg-slate-400" onClick={() => {
            const filterList = listOfResturent.filter(
              (res) => res.info.avgRating >= 4.1);
            setFilteredResturents(filterList)
          }}>
            Top Rated restaurants</button>
        </div>

        <div className="m-4 p-4">
          <label>User Name -- </label>
          <input className="border border-black rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {
          filterdResturents.map((restaurant) => {
            return <Link
             key={restaurant.info.id} to={"/restureant/" + restaurant.info.id}>
              {restaurant.info.isOpen ? (<IsOpendLabled resData={restaurant} />) : (<ResCards resData={restaurant} />)}
              </Link>
          })
        }
      </div>
    </div>
  );
};
export default Body;