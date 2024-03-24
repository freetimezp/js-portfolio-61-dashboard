import Chart from '../Chart/Chart';

const MainMiddle = () => {
    return (
        <>
            <div className='grid md:grid-cols-4 gap-4 m-4 w-auto'>
                <div className='col-span-4 md:col-span-1 h-28 bg-white dark:bg-slate-900/50
                    rounded-md'>
                    <div className='flex flex-col justify-between p-4 h-full shadow-sm duration-300
                        hover:shadow-xl'>
                        <div className='font-semibold text-indigo-950 dark:text-slate-400'>
                            New Clients
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl sm:text-xl lg:text-5xl font-bold text-indigo-900
                                dark:text-slate-400'>
                                64
                            </div>
                            <div className='flex px-2 py-1 text-sm rounded-full bg-green-500
                                items-center text-green-900'>
                                +69%
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-4 md:col-span-3 bg-white dark:bg-slate-900/50
                    shadow-sm duration-300 hover:shadow-xl row-span-2'>
                    <Chart />
                </div>

                <div className='col-span-4 md:col-span-1 h-28 bg-white dark:bg-slate-900/50
                    rounded-md'>
                    <div className='flex flex-col justify-between p-4 h-full shadow-sm duration-300
                        hover:shadow-xl'>
                        <div className='font-semibold text-indigo-950 dark:text-slate-400'>
                            Invoice Overdue
                        </div>
                        <div className='flex items-center justify-between w-full'>
                            <div className='text-5xl sm:text-xl lg:text-5xl font-bold text-indigo-900
                                dark:text-slate-400'>
                                9
                            </div>
                            <div className='flex px-2 py-1 text-sm rounded-full bg-blue-500
                                items-center text-blue-900'>
                                +15%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainMiddle
