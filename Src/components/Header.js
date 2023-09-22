import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-green-300 shadow-lg rounded-b-3xl">
      <div className="logo-container">
        <img className="p-4 rounded-full w-28" src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?" alt="logo"/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-5  justify-between">
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1">Online Status - {onlineStatus ? "Online-🟢" : "Offline-🔴"}</li>
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1"><Link to="/">Home</Link></li>
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1"><Link to="/about">About Us</Link></li>
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1"><Link to="/contact">Contact Us</Link></li>
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1"><Link to="/grocery">Grocery</Link></li>
          <li className="px-5 hover:bg-green-400 rounded-md p-1 m-1">My Cart</li>
        </ul>
        <button className="border border-black rounded-lg bg-slate-300 p-2 px-10 mr-4 hover:bg-slate-400" onClick={() => { btnName === "Login" ? setbtnName("Logout") : setbtnName("Login") }}>{btnName}</button>
      </div>
    </div>
  );
};

export default Header;