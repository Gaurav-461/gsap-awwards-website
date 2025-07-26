import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const CustomCursor = () => {
    const customCursorRef = useRef(null);
    const outerRingRef = useRef(null);

    const isMobile = useMediaQuery({ maxWidth: 1024 });

    useGSAP((context, contextSafe) => {
        const cursor = customCursorRef.current;
        const outerRing = outerRingRef.current;
        gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo(cursor, "x", { ease: "power3", duration: 0.6 });
        let yTo = gsap.quickTo(cursor, "y", { ease: "power3", duration: 0.6 });

        let xToRing = gsap.quickTo(outerRing, "x", {
            ease: "power3",
            duration: 1,
        });
        let yToRing = gsap.quickTo(outerRing, "y", {
            ease: "power3",
            duration: 1,
        });

        const onMouseMove = contextSafe((e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToRing(e.clientX);
            yToRing(e.clientY);
        });

        const onMouseDown = contextSafe(() => {
            gsap.to(cursor, { scale: 2, ease: "power3", duration: 1 });
        });

        const onMouseUp = contextSafe(() => {
            gsap.to(cursor, { scale: 1, ease: "power3", duration: 1 });
        });

        window.addEventListener("mousemove", onMouseMove);

        window.addEventListener("mousedown", onMouseDown);

        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
        };
    });

    if (isMobile) {
        return null;
    }

    return (
        <>
            <div
                ref={customCursorRef}
                className="cursor fixed top-0 left-0 z-[999] size-4 rounded-full bg-red"
            />

            <div
                ref={outerRingRef}
                className="cursor fixed top-0 left-0 z-[999] size-10 rounded-full border-2 border-red"
            />
        </>
    );
};

export default CustomCursor;
