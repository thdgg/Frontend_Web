import React, { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import FileSubmissionBox from "./FileSubmissionBox";

const Main: React.FC = () => {
    const fileSubmissionBoxRef = useRef<HTMLDivElement>(null);

    return (
        <div id="main" >
            <img
                className="w-full h-screen object-cover object-left scale-x-[-1]"
                src="https://images.unsplash.com/photo-1516834493344-d0832e78ce8d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Main Image"
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
                <div className={"max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center"}>
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Welcome to our website!</h1>
                    <h2 className="flex sm:text-4xl text-3xl pt-4 text-gray-700">
                        Here you can
                        <TypeAnimation
                            cursor={true}
                            sequence={["do something", 2000, "", 1000, "not do something", 2000, "", 1000]}
                            wrapper={"div"}
                            repeat={Infinity}
                            style={{ paddingLeft: "10px" }}
                        />
                    </h2>
                    <button
                        onClick={() => fileSubmissionBoxRef.current?.scrollIntoView({ behavior: "smooth" })}
                        className="border border-black hover:border-green-600 hover:text-green-600 italic py-1 px-2 rounded mt-6 items-center justify-center text-center mx-auto sm:text-3xl text-2xl"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <div id="file-submission-box" ref={fileSubmissionBoxRef} className="my-40">
                <FileSubmissionBox onSubmit={(file) => console.log(file)} />
            </div>
        </div>
    );
};

export default Main;