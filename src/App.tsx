import React, { useEffect, useRef } from "react";
import "./App.css";
import GradientSection from "./assets/Gradient/GradientBackground";
import Nav from "./components/Nav";
import { useMyContext } from "./context/theme-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);
  const interBubbleRef = useRef<HTMLDivElement>(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  useEffect(() => {
    const interBubble: any = interBubbleRef.current;

    if (interBubble) {
      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };

      window.addEventListener("mousemove", handleMouseMove);

      move();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [interBubbleRef]);

  return (
    <main className="w-full">
      <div className="content-container w-full h-full p-8">
        <Nav />
        <RouterProvider router={router} />
      </div>
      <div className="gradient-bg w-full h-screen">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interBubbleRef} className="interactive"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
