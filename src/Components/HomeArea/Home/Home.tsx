import ProductsListHome from "../../ProductsArea/ProductListHome/ProductsListHome";
import Newsletter from "../../PromotionArea/Newsletter/Newsletter";
import Promotion from "../../PromotionArea/Promotion/Promotion";
import Categories from "../Categories/Categories";
import Footer from "../footer/footer";
import  Navbar  from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import "./Home.css";



function Home(): JSX.Element {
    return (
        <div className="home">
            <Promotion/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <ProductsListHome/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;
