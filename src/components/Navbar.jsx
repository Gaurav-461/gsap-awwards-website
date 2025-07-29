import { useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { menuData } from "../constants";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState("/images/menu-img-1.webp");

    const { contextSafe } = useGSAP(() => {
      gsap.from(".menu-img", {
        // opacity: 0,
        // scale: 105,
        duration: 1,
        transform:"all"
      })
    },[image]);

    const openMenu = contextSafe(() => {
        setIsOpen(true);
        gsap.to(".menu-container", {
            height: "100vh",
            ease: "slow",
            duration: 1.5,
        });
    });
    
    const closeMenu = contextSafe(() => {
        setIsOpen(false);
        gsap.to(".menu-container", {
            height: "0vh",
            duration: 1.5,
            ease: "circ.inOut",
        });
    });

    return (
        <nav className="fixed top-0 left-0 z-[99999] w-[49.3%] p-3 md:p-9">
            <div id="menu-icon" className="absolute z-100 flex w-full items-center justify-between will-change-transform">
                <img src="/images/nav-logo.svg" alt="nav-logo" />
                {isOpen ? (
                    <button onClick={closeMenu} className="bg-milk-yellow p-2 rounded-full">Close</button>
                ) : (
                    <button onClick={openMenu} className="bg-milk-yellow p-2 rounded-full">Menu</button>
                )}
            </div>
            <div className="menu-container absolute top-0 left-0 z-50 flex h-[0vh] w-dvw overflow-hidden">
                <div className="left-side flex h-full w-1/2 items-center justify-center bg-milk">
                    <div className="item-list flex flex-col items-center">
                        {menuData.map(({ label, img }) => (
                            <h2
                                onMouseMove={() => setImage(img)}
                                onMouseLeave={() => setImage("/images/menu-img-1.webp")}
                                className="item will-change-auto cursor-pointer text-center text-[12vh]/[105%] font-bold w-fit"
                            >
                                {label}
                            </h2>
                        ))}
                    </div>
                </div>

                {/* img */}
                <div className="right-side h-full w-1/2 bg-milk">
                    <img
                        src={image}
                        alt="menu-img"
                        className="menu-img size-full object-cover"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
