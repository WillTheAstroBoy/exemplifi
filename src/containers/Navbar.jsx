import { useState } from "react";
import products from "../assets/svg/products.svg";
import recipes from "../assets/svg/recipes.svg";
import tips from "../assets/svg/tips.svg";
import story from "../assets/svg/story.svg";
import holiday from "../assets/svg/holidays.svg";

export default function Navbar({ handleHover, handleClick, isMobile, currentMenu, renderOnHover }) {
    const [navItems, setNavItems] = useState([
        { id: 0, name: "products", svg: products },
        { id: 1, name: "recipes", svg: recipes },
        { id: 2, name: "tips & how-tos", svg: tips },
        { id: 3, name: "holidays & entertaining", svg: holiday },
        { id: 4, name: "story", svg: story }
    ]);

    return (
        <nav onMouseOver={() => handleHover(false, null)} className="w-full sticky top-0 left-0 right-0 md:h-24 bg-indigo-950 flex flex-col md:flex-row justify-evenly md:items-center">
            <p className="text-left md:text-center p-4 py-2 md:p-0 text-white text-2xl md:mx-4" >Logo</p>
            {navItems.map((item) => (
                <>
                    <button
                        onClick={() => handleClick(true, item.name)}
                        onMouseOver={e => e.stopPropagation()}
                        onMouseEnter={(e) => {
                            handleHover(true, item.name)
                        }}
                        className="relative md:h-full uppercase flex md:flex-col md:justify-center items-center text-white hover:text-indigo-700 p-3 md:p-0 border-t-[0.5px] border-solid border-indigo-900" key={item.id} >
                        <img className="md:mb-2 mx-3 md:mx-0" src={item.svg} alt={item.name} />
                        <span>{item.name}</span>
                        <span className="md:hidden absolute right-5 rotate-[270deg]" >{"<"}</span>
                    </button>
                    {isMobile && (currentMenu === item.name) && renderOnHover(currentMenu)}
                </>
            ))}
            <div className="w-10" ></div>
        </nav>
    );
}
