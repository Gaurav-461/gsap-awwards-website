import { useGSAP } from "@gsap/react";
import { nutrientLists } from "../constants";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

const NutritionSection = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create(".nutrition-title", {
            type: "chars",
        });

        const paragraphSplit = SplitText.create(".nutrition-section p", {
            type: "lines, words",
            linesClass: "paragraph-line",
        });

        const contentTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 40%",
            },
        });

        contentTl
            .from(titleSplit.chars, {
                yPercent: 100,
                stagger: 0.02,
                ease: "power3.out",
            })
            .from(paragraphSplit.words, {
                yPercent: 300,
                rotate: 3,
                ease: "power1.inOut",
                duration: 1,
                stagger: 0.01,
            });

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nutrition-section",
                start: "top 80%",
                // markers: true
            },
        });

        titleTl.to(".nutrition-text-scroll", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
            ease: "power1.inOut",
        });
    });
    return (
        <section className="nutrition-section">
            <img
                src="/images/slider-dip.png"
                alt="slider-dip"
                className="w-full object-cover"
            />

            <img src="/images/big-img.png" alt="big-img" className="big-img" />

            <div className="mt-14 flex flex-col justify-between px-5 md:mt-0 md:flex-row md:px-10">
                <div className="relative inline-block md:translate-y-20">
                    <div className="general-title relative flex flex-col items-center justify-center gap-24">
                        <div className="place-self-start">
                            <h1 className="nutrition-title">It still does</h1>
                        </div>
                        <div
                            style={{
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            }}
                            className="nutrition-text-scroll place-self-start"
                        >
                            <div className="bg-yellow-brown px-3 pt-3 pb-5 md:px-5 md:pt-0">
                                <h2 className="text-milk-yellow">Body Good</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex translate-y-5 items-center md:justify-center">
                    <div className="max-w-md md:max-w-xs">
                        <p className="font-paragraph text-lg text-balance md:text-right">
                            Milk contains a wide array of nutrients, including
                            vitamins, minerals, and protein, and this is lactose
                            free
                        </p>
                    </div>
                </div>
                <div className="nutrition-box">
                    <div className="list-wrapper">
                        {nutrientLists.map((nutrient, index) => (
                            <div
                                key={nutrient.label}
                                className="col-center relative flex-1"
                            >
                                <div>
                                    <p className="font-paragraph text-xs md:text-lg">
                                        {nutrient.label}
                                    </p>
                                    <p className="mt-2 font-paragraph text-xs">
                                        up to
                                    </p>
                                    <p className="text-xs font-bold tracking-tighter md:text-4xl">
                                        {nutrient.amount}
                                    </p>
                                </div>

                                {index !== nutrientLists.length - 1 && (
                                    <div className="spacer-border" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NutritionSection;
