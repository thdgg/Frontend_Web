import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHistory, AiOutlineInfoCircle, AiOutlineLogin, AiOutlineHome } from "react-icons/ai";

const Sidenav: React.FC = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className={"fixed top-4 right-4 z-[99] md:hidden"} />
            {nav ? (
                <div className={"fixed w-full h-screen bg-white flex flex-col justify-center items-center z-[20]"}>
                    <Link
                        to={"/main-page"}
                        onClick={handleNav}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineMenu size={20} />
                        <span className="pl-4">Home</span>
                    </Link>

                    <Link
                        to={"/about-us"}
                        onClick={handleNav}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineInfoCircle size={20} />
                        <span className="pl-4">About Us</span>
                    </Link>

                    <a
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHistory size={20} />
                        <span className="pl-4">History</span>
                    </a>

                    <Link
                        to={"/login"}
                        onClick={handleNav}
                        className={"w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineLogin size={20} />
                        <span className="pl-4">Login</span>
                    </Link>
                </div>
            ) : (
                ""
            )}
            <div className={"md:block hidden fixed top-[25%] z-10"}>
                <div className={"flex flex-col"}>
                    <Link
                        to={"/main-page"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHome size={20} />
                    </Link>

                    <Link
                        to={"/about-us"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineInfoCircle size={20} />
                    </Link>

                    <a
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineHistory size={20} />
                    </a>

                    <Link
                        to={"/login"}
                        className={"rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"}
                    >
                        <AiOutlineLogin size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;