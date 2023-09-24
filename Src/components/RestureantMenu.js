import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimar from "./shimarUi";
import useRestureantMenu from "./useRestureantMenu";
import ResCatogery from "./ResCatogery";

const RestureantMenu = () => {

    // const [vegChecker, setVegChecker] = useState([]);
    // const [vegNonvegBtn, setvegNonvegBtn] = useState("Veg");

    const { resId } = useParams();
    const resInfo = useRestureantMenu(resId);

    const [showIndex, setshowIndex] = useState(1);


    if (resInfo === null) return <Shimar />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl ">{cuisines.join(" , ")} - {costForTwoMessage}</p>

            {/* <button onClick={() => {
                vegNonvegBtn === "Veg" ? setvegNonvegBtn("NonVeg") : setvegNonvegBtn("Veg");
                const vegNonveg = itemCards.filter((item) => {
                    return item.card.info.itemAttribute.vegClassifier === "VEG"
                });
                setVegChecker(vegNonveg);
            }}>{vegNonvegBtn}</button> */}

            {categories.map((catogery, index) =>   <ResCatogery key={catogery.card.card.title} Data={catogery?.card?.card} showItems={index === showIndex ? true : false}/> )}
        </div>
    );
};

export default RestureantMenu;