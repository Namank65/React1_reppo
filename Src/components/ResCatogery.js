// import { useState } from "react";
import ItemList from "./ItemList";

const ResCatogery = ({ Data, showItems, setshowIndex }) => {

    const handleClick = () => {
        setshowIndex();
    };


    return (
        <div className="m-4">
            <div className="w-6/12 m-auto bg-slate-100 p-4 items-center rounded-md shadow-md hover:bg-slate-200 cursor-pointer" >
                    <div className=" flex justify-between" onClick={handleClick}>
                        <span className="font-bold">{Data.title} ({Data.itemCards.length})</span>
                        <span>🔻</span>
                    </div>
               { showItems && <ItemList items={Data.itemCards}/>}
            </div>
        </div>
    );
};

export default ResCatogery;