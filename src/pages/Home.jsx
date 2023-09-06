import { useCallback, useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import ProductMenu from "../containers/ProductMenu";
import NotAvailable from "../containers/NotAvailable";

export default function Home() {

    const [currentMenu, setCurrentMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const renderOnHover = (menu) => {
        switch (menu) {
            case "products":
                return <ProductMenu handleHover={handleHover} />
            case "recipes":
                return <NotAvailable handleHover={handleHover} />
            case "story":
                return <NotAvailable handleHover={handleHover} />
            case "tips & how-tos":
                return <NotAvailable handleHover={handleHover} />
            case "holidays & entertaining":
                return <NotAvailable handleHover={handleHover} />
            default:
                return null;
        }
    }

    const handleHover = useCallback((isHovering, name) => {
        !isMobile && setCurrentMenu(isHovering ? name : null)
    }, [isMobile])

    const handleClick = useCallback((isHovering, name) => {
        isMobile && setCurrentMenu(prevState => prevState === name ? null : name)
    }, [isMobile])


    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setIsMobile(e.target.innerWidth < 768)
        });
        window.addEventListener("load", e => {
            console.log(e, "load")
            setIsMobile(e.currentTarget.innerWidth < 768);
        })
    }, []);

    return (
        <div >
            <Navbar handleClick={handleClick} isMobile={isMobile} renderOnHover={renderOnHover} currentMenu={currentMenu} handleHover={handleHover} />
            {!isMobile && renderOnHover(currentMenu)}
        </div>
    );
}
