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
                        className="p-2 my-3 w-full text-black font-semibold rounded-sm"
                        type="email"
                    />

                    <div className="signal:bg-red-800 bg-green-800 p-1 text-white">
                        Or Hover Here
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signals;