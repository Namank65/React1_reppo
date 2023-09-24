// import { useState } from "react";
import ItemList from "./ItemList";

const ResCatogery = ({ Data, showItems }) => {

    const handleClick = () => {
        // setshowItems(!showItems);
        console.log("clicked")
    };


    return (
        <div className="m-4">
            <div className="w-6/12 m-auto bg-slate-100 p-4 items-center rounded-md shadow-md hover:bg-slate-200 cursor-pointer" onClick={handleClick}>
                    <div className=" flex justify-between">
                        <span className="font-bold">{Data.title} ({Data.itemCards.length})</span>
                        <span>🔻</span>
                    </div>
               { showItems && <ItemList items={Data.itemCards}/>}
            </div>
        </div>
    );
};

export default ResCatogery;