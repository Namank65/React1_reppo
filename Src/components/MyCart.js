import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItems } from "../utils/cartSlice";

const MyCart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const clearCartitems = () => {
        dispatch(removeItems());
    };


    return (
        <div className="text-center m-3 p-4">
            <h1 className="font-bold text-2xl ">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-1 m-auto rounded-md shadow-lg bg-black text-white" onClick={clearCartitems}>Remove Items</button>
                {cartItems.length === 0 && (<h3>Cart is empty, Shop Now</h3>)}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};
export default MyCart;