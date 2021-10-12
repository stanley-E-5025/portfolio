import React, { useState, useEffect } from "react";
import "../css/HomePage.css";
import TopBar from "../components/TopBar";
import Typewriter from "typewriter-effect";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";

export default function HomePage() {
  const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
      handleLinkHoverEvents();

      addEventListeners();
      return () => removeEventListeners();
    }, []);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const isMobile = () => {
      const ua = navigator.userAgent;
      return /Android|Mobi/i.test(ua);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const cursorClasses = classNames("cursor", {
      "cursor--clicked": clicked,
      "cursor--hidden": hidden,
      "cursor--link-hovered": linkHovered,
    });
    if (typeof navigator !== "undefined" && isMobile()) return null;

    return (
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    );
  };

  const Description = () => {
    const props = useSpring({
      to: { x: 0, opacity: 1 },
      from: { x: -200, opacity: 0 },
      delay: 100,
    });

    const prop = useSpring({
      to: { x: 0, opacity: 1 },
      from: { x: -100, opacity: 0 },
      delay: 200,
    });

    const prop3 = useSpring({
      to: { x: 0, opacity: 1 },
      from: { x: -100, opacity: 0 },
      delay: 400,
    });
    const prop4 = useSpring({
      to: { x: 0, opacity: 1 },
      from: { x: -100, opacity: 0 },
      delay: 600,
    });

    const prop5 = useSpring({
      to: { y: 0, opacity: 1 },
      from: { y: 30, opacity: 0 },
      delay: 300,
    });
    return (
      <>
        <animated.div className="  custom-description" style={props}>
          <p>
            hello my name is stanley and I am a developer in ReactJS and react
            native, <br /> I have experience working in teams and large projects
            developing complex interfaces
            <br /> and implementing backend in the interface using API or AWS
            services such as S3 and similar.
          </p>
        </animated.div>

        <animated.div style={prop} className="  custom-description">
          <p>
            I also have experience working in teams with other programmers,
            solving problems <br /> and contributing new ideas. I am also
            familiar with tools such as git lab, adobexd, Figma.{" "}
          </p>
        </animated.div>
        <animated.div style={prop3} className="  custom-description">
          <p>usually use node js , react , bootstrap , typescript</p>
        </animated.div>
        <animated.div style={prop4} className="  custom-description">
          <p>
            I hope I can help you , you can contact me through this ,
            <a className="mail-link" href="mailto:stanleygordon45@gmail.com">
              email
            </a>
            <br /> you can also take a look at my{" "}
            <a className="mail-link" href="https://github.com/stanley-E-5025">
              github
            </a>
          </p>
        </animated.div>
        <animated.div style={prop5} className="bottom-description-d  ">
          <a className="mail-link" href=" https://discord.gg/vH5fj84p">
            <i class="fab fa-discord W-i"></i>
          </a>
        </animated.div>
        <animated.div style={prop5} className="bottom-description  ">
          <a
            className="mail-link"
            href=" https://api.whatsapp.com/send?phone=50589287688&app=facebook&entry_point=page_cta&fbclid=IwAR2GKF24lZMRJVRHYnIp9_7THhidZX2DgdC--06ZLmS2m6udfQcwTqSJvno"
          >
            <i class="fab fa-whatsapp W-i"></i>
          </a>
        </animated.div>
      </>
    );
  };

  return (
    <>
      <Cursor />
      <div className="container-fluid    H-custom-container">
        <div className="row">
          <TopBar />
        </div>

        <div className="row  ">
          <div className="col-md-12  H-custom-height  ">
            <div className="H-Page-lef-Info">
              <div className="  custom-title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" Hello I'm a Frontend developer on ReactJS")
                      .changeDelay(100)
                      .start();
                  }}
                />
              </div>

              <Description />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
