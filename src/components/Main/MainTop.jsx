import { CiCalendar, CiMenuKebab } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaPeopleCarryBox, FaRegIdCard } from 'react-icons/fa6';
import {
    IoMailUnreadOutline,
    IoWalletSharp,
    IoPieChartOutline
} from 'react-icons/io5';

import profileImg from '../../assets/images/profile.jpg';

const MainTop = () => {
    return (
        <>
            <div className="w-full flex items-center justify-between">
                <div className="text-indigo-950 m-4 font-bold text-xl md:text-2xl
                        dark:text-transparent bg-clip-text dark:bg-gradient-to-tl 
                        from-indigo-800 to-pink-800">
                    Good Morning, Freetime Studio
                </div>
                <div className="flex md:hidden gap-3 items-center justify-end px-4 
                        text-indigo-950 dark:text-slate-400 cursor-pointer text-4xl">
                    <CiCalendar />
                    <IoIosNotificationsOutline />
                    <IoMailUnreadOutline />
                    <img src={profileImg} alt="profile" className="rounded-full w-12 h-8 md:w-8" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 
                    m-4">
                <div className="flex flex-col justify-between w-full md:w-auto h-48
                        bg-white dark:bg-slate-900/50 p-4 rounded-md hover:scale-105
                        duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-4xl text-indigo-950 dark:text-slate-400">
                            <IoWalletSharp />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10
                                    dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50
                                    rounded-full">
                            <CiMenuKebab />
                        </div>
                    </div>
                    <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl
                                text-indigo-950 dark:text-slate-400">
                        $500,4985.00
                    </div>
                    <div>
                        <div className="text-indigo-950 dark:text-slate-400 text-sm
                                font-semibold">
                            Your Bank Balance
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full md:w-auto h-48
                        bg-white dark:bg-slate-900/50 p-4 rounded-md hover:scale-105
                        duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-4xl text-indigo-950 dark:text-slate-400">
                            <IoPieChartOutline />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10
                                    dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50
                                    rounded-full">
                            <CiMenuKebab />
                        </div>
                    </div>
                    <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl
                                text-indigo-950 dark:text-slate-400">
                        $500,4985.00
                    </div>
                    <div>
                        <div className="text-indigo-950 dark:text-slate-400 text-sm
                                font-semibold">
                            Your Bank Balance
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full md:w-auto h-48
                        bg-white dark:bg-slate-900/50 p-4 rounded-md hover:scale-105
                        duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-4xl text-indigo-950 dark:text-slate-400">
                            <FaPeopleCarryBox />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10
                                    dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50
                                    rounded-full">
                            <CiMenuKebab />
                        </div>
                    </div>
                    <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl
                                text-indigo-950 dark:text-slate-400">
                        $500,4985.00
                    </div>
                    <div>
                        <div className="text-indigo-950 dark:text-slate-400 text-sm
                                font-semibold">
                            Employers Working Today
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between w-full md:w-auto h-48
                        bg-white dark:bg-slate-900/50 p-4 rounded-md hover:scale-105
                        duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-4xl text-indigo-950 dark:text-slate-400">
                            <FaRegIdCard />
                        </div>
                        <div className="flex items-center justify-center w-10 h-10
                                    dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50
                                    rounded-full">
                            <CiMenuKebab />
                        </div>
                    </div>
                    <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl
                                text-indigo-950 dark:text-slate-400">
                        $500,4985.00
                    </div>
                    <div>
                        <div className="text-indigo-950 dark:text-slate-400 text-sm
                                font-semibold">
                            This Week Card Processing
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainTop
