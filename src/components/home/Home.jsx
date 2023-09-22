import Banner from "../banner/Banner";
import CategoryList from "../categoryList/CategoryList";
import Featured from "../featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Featured></Featured>
        </div>
    );
};

export default Home;