const RestaurantBox = (props) => {
    return (
      <div className={`w-full h-fit ${props.background} p-5 text-white flex rounded-lg`}>
        <div className="text-left">
          <p className="font-bold inline">Restaurant:</p> {props.restaurant}
          <br />
          <p className="font-bold inline">Cuisine:</p> {props.cuisine}
          <br />
          <p className="font-bold inline">Address:</p> {props.address}
        </div>
      </div>
    );
  };
  
  export default RestaurantBox;