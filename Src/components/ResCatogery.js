import ItemList from "./ItemList";

const ResCatogery = ({ Data }) => {
    return (
        <div className="m-4">
            <div className="w-6/12 m-auto bg-slate-100 p-4 items-center rounded-md shadow-md hover:bg-slate-200">
                    <div className=" flex justify-between">
                        <span className="font-medium">{Data.title} ({Data.itemCards.length})</span>
                        <span>🔻</span>
                    </div>
                <ItemList items={Data.itemCards} />
            </div>
        </div>
    );
};

export default ResCatogery;