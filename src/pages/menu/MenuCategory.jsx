import Cover from "../../shared/Cover";
import MenuItems from "../../shared/MenuItems";

const MenuCategory = ({ items, title, coverImage }) => {
    return (
        <div>
            {title && <Cover image={coverImage} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;