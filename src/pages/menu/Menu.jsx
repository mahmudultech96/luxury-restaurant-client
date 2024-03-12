import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover';
import img1 from '../../assets/menu/banner3.jpg';
import dessertCover from '../../assets/menu/dessert-bg.jpeg';
import pizzaCover from '../../assets/menu/pizza-bg.jpg';
import saladCover from '../../assets/menu/salad-bg.jpg';
import soupCover from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../shared/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <Cover image={img1} title='Hello There'></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="dessert" coverImage={dessertCover}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" coverImage={pizzaCover}></MenuCategory>
            <MenuCategory items={salad} title="salad" coverImage={saladCover}></MenuCategory>
            <MenuCategory items={soup} title="soup" coverImage={soupCover}></MenuCategory>
        </div>
    );
};

export default Menu;