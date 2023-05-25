export default function ClassesTable() {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const classHours = [
        "09:00 - 10:00",
        "12:00 - 13:00",
        "15:00 - 16:00",
        "18:00 - 19:00",
        "21:00 - 22:00",
    ];

    const classNames = [
        "WEIGHTLIFTING",
        "POWERLIFTING",
        "KETTLEBELL POWER",
        "BODY BUILDING",
        "BOXING",
        "INDOOR CYCLING",
    ];

    return (
        <div className="p-20">
        <div className="flex flex-col justify-center items-center text-center">
            <span className="text-orange-500 uppercase text-2xl font-bold maxxs:text-lg">
            Directed classes
            </span>
            <span className="text-white text-4xl uppercase mt-3 maxxs:text-xl">
            Come to any class
            </span>
        </div>
        <div className="mt-10 flex justify-center items-center overflow-x-auto">
            <div className="max-w-full">
            <table className="w-full table-auto divide-y divide-gray-200 border border-gray-200 h-[50vh]">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-orange-500 text-center text-xs font-medium text-white uppercase tracking-wider border border-gray-200">
                    Schedule
                    </th>
                    {daysOfWeek.map((day) => (
                    <th
                        key={day}
                        className="px-6 py-3 bg-orange-500 text-center text-xs font-medium text-white uppercase tracking-wider border border-gray-200 whitespace-nowrap"
                    >
                        {day}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-black divide-y divide-white">
                {classHours.map((hour) => (
                    <tr key={hour}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white text-center border border-gray-200">
                        {hour}
                    </td>
                    {daysOfWeek.map(() => (
                        <td
                        key={Math.random().toString()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-white text-center border border-gray-200"
                        >
                        {
                            classNames[
                            Math.floor(Math.random() * classNames.length)
                            ]
                        }
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
}
