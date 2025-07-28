import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".vd-pin-section",
                    start: "-15% top",
                    end: "200% top",
                    scrub: 1.5,
                    pin: true,
                },
            });

            tl.to(".video-box", {
                clipPath: "circle(100% at 50% 50%)",
                ease: "power1.inOut",
            });
        }
    });

    return (
        <section className="vd-pin-section">
            <div
                style={{
                    clipPath: isMobile
                        ? ""
                        : "circle(6% at 50% 50%)",
                }}
                className="video-box size-full"
            >
                <video
                    src="/videos/pin-video.mp4"
                    playsInline
                    muted
                    loop
                    autoPlay
                />

                <div className="abs-center scale-200 md:scale-100">
                    <img
                        src="/images/circle-text.svg"
                        alt=""
                        className="spin-circle"
                    />
                    <div className="play-btn">
                        <img
                            src="/images/play.svg"
                            alt=""
                            className="ml-[.5vw] size-[3vw]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoPinSection;
