const MainRecent = () => {
    return (
        <div className="m-4">
            <div className="text-indigo-950 dark:text-slate-400 font-bold 
                        text-2xl my-4">
                Recent Transactions
            </div>
            <table className="w-full text-sm text-left dark:text-indigo-500">
                <thead className="text-xs text-gray-100 dark:text-indigo-400
                    uppercase bg-indigo-500 dark:bg-slate-900/50 border-b-2">
                    <tr>
                        <th scope="col" className="py-6 px-6">Person</th>
                        <th scope="col" className="py-6 px-6">Bank Account</th>
                        <th scope="col" className="py-6 px-6">Amount</th>
                    </tr>
                </thead>
                <tbody className="text-indigo-950 dark:text-slate-400">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                        <tr className="bg-white dark:bg-slate-900/50 border-b-2 
                                hover:bg-blue-100" key={i}>
                            <td className="py-4 px-6">John Doe</td>
                            <td className="py-4 px-6">545 456 468</td>
                            <td className="py-4 px-6">$4,500.00</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MainRecent;
