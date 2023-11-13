import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import image from "../../../assets/home/featured.jpg"
import './Featured.css'

const Featured = () => {
    return (
        <>
            <div className="featured-item bg-fixed text-white  pt-8 my-20">
                <SectionTitle subHeading="Check in out" heading="From our menu"></SectionTitle>
                <div className="md:flex text-white justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36 gap-7">
                    <div><img src={image} alt="" /></div>
                    <div className="">
                        <h1>March 20, 2023</h1>
                        <h1>WHERE CAN I GET SOME?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos doloremque, neque error voluptatem itaque ea quia delectus voluptatum a quisquam voluptate quaerat blanditiis mollitia enim repellat ratione aperiam illo tempore praesentium. Eos commodi numquam quia laudantium expedita fuga earum voluptate.</p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;