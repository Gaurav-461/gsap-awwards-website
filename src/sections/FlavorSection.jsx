import { FlavorTitle, FlavorSlide } from "../components";

const FlavorSection = () => {
    return (
        <section className="flavor-section will-change-auto">
            <div className="relative flex h-full flex-col items-center lg:flex-row">
                <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
                    <FlavorTitle />
                </div>
                <div className="h-full">
                    <FlavorSlide />
                </div>
            </div>
        </section>
    );
};

export default FlavorSection;
