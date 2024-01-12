import AnimatingCircle from "../ui/hover/animating-circle";

export default function Page() {
    return (
        <div className="grid grid-cols-2 justify-items-center items-center w-full h-screen place-content-center px-4 py-12 text-slate-90 bg-black">
            {/* <TiltCard /> */}

            {/* <TiltDog /> */}
            <AnimatingCircle />
            <div>
                <h1 className="text-6xl font-bold text-white">Hello there</h1>
            </div>
        </div>
    );
}