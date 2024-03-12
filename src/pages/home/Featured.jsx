import SectionTitle from "../../shared/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImg})` }} className="py-12 bg-fixed mt-20">
            <SectionTitle
                subHeading='Check it out'
                heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-8 px-16">
                <div>
                    <img src={featuredImg}></img>
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate adipisci nobis repellendus suscipit odio harum esse dolorum libero dicta consequuntur cumque quae sequi, eaque quia commodi tempore necessitatibus voluptates alias!</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;