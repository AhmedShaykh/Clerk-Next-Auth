import ServerAction from "./ServerAction";
import WhoAmIAPI from "./WhoAmIAPI";
import WhoAmIRSC from "./WhoAmIRSC";
import { auth } from "@/auth";

const About = async () => {

    const session = await auth();

    async function onGetUserAction() {

        "use server";

        const session = await auth();

        return session?.user?.name ?? null;

    };

    return (
        <div className="flex flex-col justify-center items-center h-screen gap-8">
            <h1 className="text-4xl mb-5">About Route</h1>
            <h2 className="text-2xl">User: {session?.user?.name}</h2>

            <ServerAction onGetUserAction={onGetUserAction} />
            <WhoAmIAPI />
            <WhoAmIRSC />
        </div>
    )
};

export default About;