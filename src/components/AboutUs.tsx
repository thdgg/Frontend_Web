import React from "react";
import AboutUsItems from "./AboutUsItems";

const data = [
    {
        title: "Leader",
        details: "Nanika",
    },
    {
        title: "Model lead",
        details: "ahhman",
    },
    {
        title: "Database + Android app lead",
        details: "Kontact",
    },
    {
        title: "Android app",
        details: "YouKnowWho",
    },
    {
        title: "Website lead + Backend",
        details: "Unknown-D",
    },
    {
        title: "Frontend Website",
        details: "thd",
    },
    {
        title: "Website",
        details: "vivarium",
    },
]

const AboutUs: React.FC = () => {
    return (
        <div id={"Abt"} className={"max-w-[1040px] m-auto md:pl-20 p-4 py-16"}>
            <h1 className={"text-4xl font-bold text-center text-[#001b5e] pb-10"}> About Us </h1>
            <div className={"flex flex-wrap justify-between"}>
                {data.map((item, index) => (
                    <div className={"w-1/2 p-2 pl-32"}>
                        <AboutUsItems key={index}
                                      title={item.title}
                                      details={item.details}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutUs;