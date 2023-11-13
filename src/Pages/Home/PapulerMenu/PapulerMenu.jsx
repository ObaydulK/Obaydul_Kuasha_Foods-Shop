 
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/Menu/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const PapulerMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         // .then(data => 
    //         //      setMenu(data)
    //         // )
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular')
    //             setMenu(popularItem)
    //         })
    // }, [])



    return (
        <section>
            <SectionTitle
                subHeading={"check it out"}
                heading={"From our menu"}
            ></SectionTitle>

            <h1>this the best:{menu.length}  </h1>
            <div className="grid md:grid-cols-2 gap-4 p-10">
            
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>

    );
};

export default PapulerMenu;