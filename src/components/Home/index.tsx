import React from "react";
const Home = () => {
  return (
    <div id="home" className="px-6">
      <p className=" flex flex-col justify-start text-sm mb-5">
        <span className="leading-4">Hi, I'm LADA a frontend engineer,</span>
        <span className="leading-4">with over 4 years of experience.</span>
      </p>
      <div className="font-gunsan flex flex-col justify-center items-center text-[70px] sm:text-[90px] md:text-[150px] lg:text-[200px] ">
        <span className="pr-[40px] sm:pr-[60px] md:pr-[90px] leading-[45px] sm:leading-[56px] md:leading-[91px] lg:leading-[146px]">
          WHAT
        </span>
        <span className="pl-[70px] sm:pl-[102px] md:pl-[282px] leading-[45px] sm:leading-[56px] md:leading-[91px] lg:leading-[146px]">
          CAN I
        </span>
        <span className="pr-[120px]  sm:pr-[180px] md:pr-[290px] leading-[45px] sm:leading-[56px] md:leading-[91px] lg:leading-[146px]">
          MAKE
        </span>
        <span className="pl-[68px] sm:pl-[100px] md:pl-[280px] leading-[50px] md:leading-[120px] lg:leading-[146px]">
          NEXT
        </span>
      </div>
    </div>
  );
};

export default Home;
