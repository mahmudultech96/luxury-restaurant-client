import { Link } from "react-router-dom";
import Cover from "../../shared/Cover";
import MenuItems from "../../shared/MenuItems";

const MenuCategory = ({ items, title, coverImage }) => {
    return (
        <div>
            {title && <Cover image={coverImage} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;