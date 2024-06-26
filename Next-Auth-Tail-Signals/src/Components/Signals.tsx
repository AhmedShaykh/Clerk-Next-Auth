import React from "react";

const Signals = () => {
    return (
        <div className="flex justify-center flex-col items-center gap-y-8 max-w-6xl">
            <div className="w-80">
                <input type="checkbox" className="peer" /> 👈🏼 Check / Uncheck Here

                <div className="hover:[&>div]:bg-green-800 peer-checked:[&>div]:bg-green-800">
                    <div className="bg-red-800 p-1 text-white">Or Hover Here</div>
                </div>
            </div>

            <div className="w-80">
                <input type="checkbox" className="peer" /> 👈🏼 Check / Uncheck Here

                <div className="peer-checked:signal hover:signal">
                    <div className="signal:bg-green-800 bg-red-800 p-1 text-white">
                        Or Hover Here
                    </div>
                </div>
            </div>

            <div className="w-80">
                <div className="has-[:invalid]:signal">
                    <input
                        className="p-2 my-3 w-full text-black font-semibold rounded-sm bg-white"
                        type="email"
                    />

                    <div className="signal:bg-red-800 bg-green-800 p-1 text-white">
                        Or Hover Here
                    </div>
                </div>
            </div>

            <div className="w-80">
                <input
                    className="peer/checkable origin-bottom-left"
                    type="checkbox"
                /> 👈🏼 Check/UnCheck Here

                <div className="peer/hoverable bg-slate-700 text-white p-1 my-1">
                    ✨ Hover/UnHover Here ✨
                </div>

                <button className="active:signal/custom my-2 peer-checked/checkable:signal peer-hover/hoverable:signal">
                    <div
                        className="text-white py-1 px-[6.95rem] bg-red-800 after:content-['_👀'] signal/custom:!bg-purple-800 
                        signal:bg-green-800 signal/custom:after:!content-['_🦄'] signal:after:content-['_😱']"
                    >
                        Press Me
                    </div>
                </button>
            </div>
        </div >
    )
};

export default Signals;