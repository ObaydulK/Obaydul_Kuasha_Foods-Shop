
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 mx-auto py-8 text-center">
            <p className="text-2xl italic text-yellow-700 pb-6   " >---{subHeading}---</p>
            <h1 className="border-y-4 py-6  uppercase text-4xl font-bold ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;