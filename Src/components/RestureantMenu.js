import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimar from "./shimarUi";
import useRestureantMenu from "./useRestureantMenu";

const RestureantMenu = () => {
    
    const [vegChecker, setVegChecker] = useState([]);
    const [vegNonvegBtn, setvegNonvegBtn] = useState("Veg");
    
    const { resId } = useParams();
    const resInfo = useRestureantMenu(resId);
    
        
        if (resInfo === null) return <Shimar />;

        const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
        const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="Menu">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>

            <button onClick={() => {
                vegNonvegBtn === "Veg" ? setvegNonvegBtn("NonVeg") : setvegNonvegBtn("Veg");
                const vegNonveg = itemCards.filter((item) => {
                    return item.card.info.itemAttribute.vegClassifier === "VEG"
                });
                setVegChecker(vegNonveg);
            }}>{vegNonvegBtn}</button>

            <h3>Menu</h3>
            <ul>
                {vegChecker.map((item) => {
                    return <li key={item.card.info.id}> {item.card.info.name} - {"Rs - "} {item.card.info.price / 100}</li>
                }
                )};
            </ul>
        </div>
    );
};

export default RestureantMenu;