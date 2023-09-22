const ResCards = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] h-[500px] bg-slate-300 rounded-lg break-words hover:bg-slate-400">
        <img className="rounded-lg h-[250px] w-[250px] " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4 className="">{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>Delivery Time is {resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  // higher order component

  export const withIsOpenLable = (ResCards) => {
    return (props) => {
      return(
        <div>
          <label className="absolute bg-black text-white rounded-lg p-1 ml-2 ">Open</label>
          <ResCards {...props}/>
        </div>
      )
    }
  };
  export default ResCards;