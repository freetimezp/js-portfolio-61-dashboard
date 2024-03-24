import MainTop from "./MainTop";
import MainMiddle from "./MainMiddle";

const Main = () => {
    return (
        <div className="flex flex-col md:flex-row bg-indigo-100 dark:bg-slate-950">
            <section className="w-auto md:w-[70%] h-full">
                <MainTop />
                <MainMiddle />
            </section>
            <section className="w-full md:w-[30%] bg-indigo-200 dark:bg-slite-900/20">
                2
            </section>
        </div>
    );
}

export default Main;
