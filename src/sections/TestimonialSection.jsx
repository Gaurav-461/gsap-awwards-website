import { useGSAP } from "@gsap/react";
import { cards } from "../constants/index";
import { useRef } from "react";
import gsap from "gsap";

const TestimonialSection = () => {
    const vdRef = useRef([]);

    useGSAP(() => {
        gsap.set(".testimonials-section", { marginTop: "-140vh" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,
            },
        });

        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        })
            .to(
                ".testimonials-section .sec-title",
                {
                    xPercent: 25,
                },
                "<",
            )
            .to(
                ".testimonials-section .third-title",
                {
                    xPercent: -25,
                },
                "<",
            );

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "200% top",
                scrub: 1.5,
                pin: true,
            },
        });

        pinTl.from(".vd-card", {
            yPercent: 150,
            stagger: 0.2,
            ease: "power1.inOut"
        })
    });

    const handlePlay = (index) => {
        if (vdRef.current) {
            vdRef.current[index].play();
            console.log(vdRef);
        }
    };

    const handlePause = (index) => {
        if (vdRef.current) {
            vdRef.current[index].pause();
        }
    };

    return (
        <section className="testimonials-section">
            <div className="absolute flex size-full flex-col items-center pt-[5vw]">
                <h1 className="first-title text-black">What's</h1>
                <h1 className="sec-title text-light-brown">Everyone</h1>
                <h1 className="third-title text-black">Talking</h1>
            </div>

            <div className="pin-box">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`vd-card ${card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}
                    >
                        <video
                            ref={(el) => (vdRef.current[index] = el)}
                            src={card.src}
                            playsInline
                            muted
                            loop
                            className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
