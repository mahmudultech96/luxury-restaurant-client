import SectionTitle from "../../shared/SectionTitle";
import MenuItems from "../../shared/MenuItems";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <div className="mt-20">
            <SectionTitle
                subHeading='Popular Items'
                heading='From Our Menu'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <button className="btn btn-outline">Order Now</button>
        </div>
    );
};

export default PopularMenu;