import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHistory, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineHome } from "react-icons/ai";

const Sidenav: React.FC = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className={"absolute top-4 right-4 z-[99] md:hidden"} />
            {nav ? (
                <div className={"fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20]"}>
                    <a
                        href={"#main"}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineMenu size={20} />
                        <span className="pl-4">Home</span>
                    </a>

                    <a
                        href={"#info"}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineInfoCircle size={20} />
                        <span className="pl-4">About Us</span>
                    </a>

                    <a
                        href={"#history"}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHistory size={20} />
                        <span className="pl-4">History</span>
                    </a>

                    <a
                        href={"#login"}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineLogin size={20} />
                        <span className="pl-4">Login</span>
                    </a>
                </div>
            ) : (
                ""
            )}
            <div className={"md:block hidden fixed top-[25%] z-10"}>
                <div className={"flex flex-col"}>
                    <a
                        href={"main"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHome size={20} />
                    </a>

                    <a
                        href={"info"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineInfoCircle size={20} />
                    </a>

                    <a
                        href={"history"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHistory size={20} />
                    </a>

                    <a
                        href={"login"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineLogin size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;