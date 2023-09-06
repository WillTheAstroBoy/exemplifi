import parchment from "../assets/images/12inParchmentRoll_packagingHero_1.16.19.png";
import aluminumFoil from "../assets/images/584541_RW_Std_500x335_card.png";
import disposable from "../assets/images/500X335_RK_DssrtBkwr_DS1_ew.png";
import cookingBags from "../assets/images/RK SCL_Hero Carton 500x335_2.png";
import waxPaper from "../assets/images/CutriteWaxPaper.png";
import otherProducts from "../assets/images/500x335_RK_BkngCps_DS1_ew.png"
import Card from "../components/Card";


export default function ProductMenu({handleHover}){

    const data = [
        {
            src: aluminumFoil,
            title: "Aluminum foil",
            description: "Perfect for grilling, baking and more."
        },
        {
            src: parchment,
            title: "Parchment paper",
            description: "Ovenr save, non-stick performance for baking & raosting."
        },
        {
            src: disposable,
            title: "disposable bakeware",
            description: "Great for any metal with no cleanup."
        },
        {
            src: cookingBags,
            title: "cooking bags & liners",
            description: "Fast & easy cleanup with no soaking or scrubbing."
        },
        {
            src: waxPaper,
            title: "wax & freezer paper",
            description: "Protect surfaces & keeps food fresh for longer."
        },
        {
            src: otherProducts,
            title: "other products",
            description: "Butcher paper, Plastic Wraps and Baking cups."
        },

    ];

    return (
        <div onMouseLeave={(e) => e.stopPropagation()} className="bg-red-300 md:py-4 md:px-6" >
            <div className=" flex flex-col md:grid md:grid-cols-3 gap-8 md:grid-rows-2 my-4 mx-6 bg-white" >
                {
                    data.map(item => <Card item={item} />)
                }
            </div>
        </div>
    )
}