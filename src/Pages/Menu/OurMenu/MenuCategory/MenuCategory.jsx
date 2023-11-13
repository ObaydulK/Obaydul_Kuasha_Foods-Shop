import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/Menu/MenuItem";


const MenuCategory = ({ items, title, Img }) => {
    return (
        <div>
            {title && <Cover img={Img} title="Our Menu" subTitle='The following font styles are not available. choose replacement font in order'></Cover>}
            <div className="grid md:grid-cols-2 gap-4 p-10">

                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/ourshop/${title}`}> 
                <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;