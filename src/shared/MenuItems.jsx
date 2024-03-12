
const MenuItems = ({ item }) => {
    const { image, recipe, name, price } = item;
    return (
        <div>
            <div className="flex gap-4">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[80px]" src={image}></img>
                <div>
                    <h3 className="uppercase">{name} ---------</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItems;