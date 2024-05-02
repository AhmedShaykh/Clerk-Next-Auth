import Signals from "@/Components/Signals";
import User from "@/Components/User";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <User />

            <Signals />
        </div>
    )
};

export default Home;