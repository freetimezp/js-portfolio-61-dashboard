import { CiCalendar } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoMailUnreadOutline } from 'react-icons/io5';

import { CiTimer } from 'react-icons/ci';

import profileImg from '../../assets/images/profile.jpg';

const MainRight = () => {
    return (
        <div className="flex flex-col m-4">
            <div className="hidden md:flex gap-4 items-center justify-end px-4 
                        text-indigo-950 dark:text-slate-400 cursor-pointer text-2xl">
                <CiCalendar />
                <IoIosNotificationsOutline />
                <IoMailUnreadOutline />
                <img
                    src={profileImg}
                    alt="profile"
                    className="rounded-full w-12 h-8 md:w-8"
                />
            </div>

            <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6
                        p-4 m-4 rounded-md h-auto shadow-md">
                <div>
                    <div className="font-bold text-indigo-950 dark:text-slate-400">
                        Formation status
                    </div>
                    <div className="text-xs font-bold text-indigo-500 dark:text-slate-400">
                        in progress
                    </div>
                </div>

                <div className="h-4 w-full bg-blue-100 dark:bg-gray-200 rounded-lg">
                    <div className="h-4 w-[35%] bg-indigo-500 rounded-lg"></div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="font-bold text-indigo-950 dark:text-slate-400">
                        Estimated Processing
                    </div>
                    <div className="font-semibold text-indigo-800 dark:text-slate-400
                                text-sm">
                        4-5 Business Days
                    </div>
                </div>

                <div>
                    <button className="bg-gradient-to-tr from-pink-900 to-indigo-900
                                text-white dark:text-slate-400 rounded-xl w-full uppercase
                                py-2 duration-300 hover:scale-105">
                        View Status
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-5 m-4 text-indigo-900 dark:text-slate-400">
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center bg-white dark:bg-slate-900/50
                            p-2 rounded-md w-full duration-300 hover:shadow-lg">
                    <div className="flex items-center justify-center rounded-full w-8 h-8
                                bg-indigo-300 dark:bg-slate-950 text-indigo-900 dark:text-slate-400">
                        <CiTimer />
                    </div>
                    <div>
                        <div className="font-semibold text-sm text-slate-400">
                            Run Payroll
                        </div>
                        <div className="font-semibold text-xs text-indigo-500">
                            March 7th at 4:50PM
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bg-white dark:bg-slate-900/50 gap-6 px-2 py-4 
                        m-4 rounded-lg h-auto shadow-md">
                <div className="font-bold text-indigo-950 dark:text-slate-400
                            text-center">
                    Board Meeting
                    <div className="font-semibold text-xs text-indigo-500">
                        March 7th, 2024
                    </div>
                </div>
                <div className="font-semibold text-indigo-500 dark:text-slate-400 text-sm">
                    You have been invited to attend a meeting to board of directors
                </div>
            </div>
        </div>
    );
}

export default MainRight;
