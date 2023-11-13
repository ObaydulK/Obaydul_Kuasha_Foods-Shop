import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


import desserImg from "./../../../assets/menu/dessert-bg.jpeg"
import soupImg from "./../../../assets/menu/soup-bg.jpg"
import saladImg from "./../../../assets/menu/salad-bg.jpg"
import pizzaImg from "./../../../assets/menu/pizza-bg.jpg"
const OurMenu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    

    return (
        <div>
            <Helmet>
                <title>Obaydul_Kuasha || Menu</title>
            </Helmet>
            <Cover img={menuimg} title="Our Menu" ></Cover>
            <SectionTitle subHeading="Don't miss" heading="today's offer "></SectionTitle>


            {/* <Cover img={menuimg} title=" Dessert" subTitle=' Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover> */}
            <MenuCategory items={dessert} title="dessert" img={desserImg} />



            {/* <Cover img={menuimg} title="soup" subTitle=' Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover> */}
            <MenuCategory items={soup} title="soup" img={soupImg} />


            {/* <Cover img={menuimg} title="salad" subTitle=' Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover> */}
            <MenuCategory items={salad} title="salad" img={saladImg} />
          
          
          
            {/* <Cover img={menuimg} title="soups" subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '  ></Cover> */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} />







        </div>
    );
};

export default OurMenu;