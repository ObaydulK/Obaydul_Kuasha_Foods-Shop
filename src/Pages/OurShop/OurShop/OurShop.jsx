import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover";
import CoverImage from "../../../assets/shop/banner2.jpg";
import UseMenu from "../../../Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const OurShop = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const {category} = useParams();
    console.log(category);
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (

        <div>
            <Helmet>
                <title>Obaydul_Kuasha || OurShop</title>
            </Helmet>


            <Cover img={CoverImage} title="Order Food"></Cover>
            <div className="text-center pt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel> <OrderTab items={salad} /> </TabPanel>
                    <TabPanel><OrderTab items={dessert} /> </TabPanel>
                    <TabPanel><OrderTab items={soup} /> </TabPanel>
                    <TabPanel><OrderTab items={pizza} /> </TabPanel>
                    <TabPanel><OrderTab items={drinks} /> </TabPanel>

                </Tabs>
            </div>


        </div>
    );
};

export default OurShop;