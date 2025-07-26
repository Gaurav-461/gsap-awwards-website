import { useRef } from "react";
import { flavorLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const FlavorSlide = () => {
    const sliderRef = useRef(null);

    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    console.log(isTablet);
    useGSAP(() => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        if (!isTablet) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".flavor-section",
                    start: "2% top",
                    end: () => `+=${scrollAmount}px`,
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(".flavor-section", {
                x: () => `-${scrollAmount + 1300}px`,
                ease: "power1.inOut",
            });
        }

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "top top",
                end: "bottom 80%",
                scrub: true,
            },
        });

        titleTl
            .to(".first-text-split", {
                xPercent: -30,
                ease: "power1.inOut",
            })
            .to(
                ".flavor-text-scroll",
                {
                    xPercent: -22,
                    ease: "power1.inOut",
                },
                "<",
            )
            .to(
                ".second-text-split",
                {
                    xPercent: -10,
                    ease: "power1.inOut",
                },
                "<",
            );
    },{ dependencies: [isTablet], revertOnUpdate: true });
    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {flavorLists.map((flavor) => (
                    <div
                        key={flavor.name}
                        className={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vw] lg:h-[70vh] lg:w-[50vw] ${!isTablet && flavor.rotation}`}
                    >
                        <img
                            src={`/images/${flavor.color}-bg.svg`}
                            alt={flavor.color}
                            className="absolute bottom-0"
                        />

                        <img
                            src={`/images/${flavor.color}-drink.webp`}
                            alt={flavor.name}
                            className="drinks"
                        />

                        <img
                            src={`/images/${flavor.color}-elements.webp`}
                            alt={flavor.name}
                            className="elements"
                        />

                        <h1>{flavor.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlavorSlide;
