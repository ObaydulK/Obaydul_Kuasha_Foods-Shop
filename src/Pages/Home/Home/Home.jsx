import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PapulerMenu from "../PapulerMenu/PapulerMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Obaydul_Kuasha || Home</title>
            </Helmet>
            <Banner />
            <Catagory />
            <PapulerMenu />
            <Featured />
        </div>
    );
};

export default Home;