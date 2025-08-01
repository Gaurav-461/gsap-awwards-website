import { useMediaQuery } from "react-responsive";

const FooterSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    return (
        <section className="footer-section">
            <img
                src="/images/footer-dip.png"
                alt=""
                className="w-full -translate-y-1 object-cover"
            />

            <div className="relative pt-[10vh] md:pt-[20vh] 2xl:h-[110dvh]">
                <div className="z-10 overflow-hidden">
                    <h1 className="general-title py-5 text-center text-milk">
                        #CHUGRESPONSIBLY
                    </h1>
                </div>

                {isMobile ? (
                    <img
                        src="/images/footer-drink.png"
                        className="absolute top-0 object-contain"
                    />
                ) : (
                    <video
                        src="/videos/splash.mp4"
                        autoPlay
                        playsInline
                        muted
                        className="absolute top-0 object-contain mix-blend-lighten"
                    />
                )}

                <div className="flex-center relative z-10 mt-5 gap-5 md:mt-20">
                    <div className="social-btn">
                        <img src="./images/yt.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="./images/insta.svg" alt="" />
                    </div>
                    <div className="social-btn">
                        <img src="./images/tiktok.svg" alt="" />
                    </div>
                </div>

                <div className="mt-40 flex flex-col justify-between gap-10 px-5 font-paragraph font-medium text-milk md:flex-row md:px-10 md:text-lg">
                    <div className="flex items-center gap-5 md:gap-16">
                        <div>
                            <p>SPYLT Flavors</p>
                        </div>
                        <div>
                            <p>Chug Club</p>
                            <p>Student Marketing</p>
                            <p>Dairy Dealers</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>Contacts</p>
                            <p>Tasty Talk</p>
                        </div>
                    </div>

                    <div className="md:max-w-lg">
                        <p>
                            Get Exclusive Early Access and Stay Informed About
                            Product Updates, Events, and More!
                        </p>
                        <div className="flex items-center justify-between border-b border-[#D9D9D9] py-5 md:mt-10">
                            {/* The input field and arrow icon for newsletter signup. */}{" "}
                            {/* A border at the bottom for a clean, modern look. */}
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                            <img src="/images/arrow.svg" alt="arrow" />
                        </div>
                    </div>
                </div>

                <div className="copyright-box">
                    {/* The final row with copyright and legal links. */}
                    <p>Copyright © 2025 Spylt - All Rights Reserved</p>
                    <div className="flex items-center gap-7">
                        <p>Privacy Policy</p>
                        <p>Terms of Sеrvice</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;
