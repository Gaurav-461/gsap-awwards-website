import { Navbar } from "./components/index";
import {
    BenefitSection,
    FlavorSection,
    FooterSection,
    HeroSection,
    MessageSection,
    NutritionSection,
    TestimonialSection,
} from "./sections/index";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CustomCursor from "./components/customCursor";

gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger, useGSAP);

const App = () => {
    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true,
        });
    });
    return (
        <main>
            <CustomCursor />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavorSection />
                    <NutritionSection />

                    <div>
                        <BenefitSection />
                        <TestimonialSection />
                    </div>
                    <FooterSection />
                </div>
            </div>
        </main>
    );
};

export default App;
