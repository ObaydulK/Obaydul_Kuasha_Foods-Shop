 

const MenuItem = ({item}) => {
  
    const {name, image, price, recipe} = item;
  
  
    return (
        <div className="flex space-x-4">
            <img className="w-[120px]" src={image} alt="" />      
            <div>
                <h1>{name}-------------------</h1>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;