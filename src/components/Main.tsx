import React from "react";
import {TypeAnimation} from "react-type-animation";
const Main: React.FC = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="https://images.unsplash.com/photo-1614831884597-ff157b5656f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Main Image" />
            <div className="w-full h-screen absolute top-0 left-0">
                <div>
                    <div className={"font-bold"} ></div>
                        <div>Welcome to our website!</div>
                    <h2>
                        Here you can{" "}
                        <TypeAnimation
                            cursor={true}
                            sequence={[
                                "do something",
                                1000,
                                "",
                                500,
                                "do something else",
                                1000,
                                "",
                            ]}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Main;