import { useEffect, useState } from "react";

 const useRestureantMenu = (resId) => {

    const [ resInfo, setResInfo ] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestureantMenu;
