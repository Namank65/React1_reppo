import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { useState } from "react";

const ItemList = ({ items }) => {

    // console.log(items)
    const dispatch = useDispatch();
    const [active, setactive] = useState(false);

    const handleAddItem = (items) => {
        dispatch(addItems(items));
        setactive(!active);
    };


    return (
        <div>
            {items.map((items) => (<div key={items.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">


                <div>
                    <div className="mb-4">
                        <span className="font-semibold">{items.card.info.name}</span>
                        <span className="font-normal">  -  ₹{items.card.info.price / 100}</span>
                    </div>
                    <div className="w-96">
                        <p className="text-xs">{items.card.info.description}</p>
                    </div>
                </div>

                <div>
                    <div className="absolute">
                        <button className="p-1 m-auto rounded-md shadow-lg bg-black text-white" onClick={() => handleAddItem(items)} style={{backgroundColor: active ? "green" : "black"}}>ADD+</button>
                    </div>
                    <img className="w-32" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + items.card.info.imageId} />
                </div>

            </div>))}
        </div>
    );
};

export default ItemList;