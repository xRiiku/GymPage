export default function PricingPlan(){

    return(
        <div className='flex justify-center items-center p-20 flex-col'>

            <div className='flex flex-col justify-center items-center text-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold maxxs:text-lg'>Our plan?</span>
                <span className='text-white text-4xl uppercase mt-3 maxxs:text-xl'>Choose your pricing plan</span>
            </div>

            <div className='parent w-full'>
                    {/* CARD PARENT (Controls all 3 cards) */}
                    <div className='cardParent maxxl:grid-cols-1 place-content-between mt-16 grid grid-cols-3 place-items-center gap-10' >
                        {/* CARD info (1)*/}
                        <div className='cardPrices flex flex-col justify-center items-center border-2 border-gray-500 p-10 maxxs:p-5 hover:bg-white'>
                            <div>
                                <h1 className="text-white font-bold text-3xl text-center"> 3 Month unlimited </h1>
                            </div>
                            <div className="justify-center items-center flex flex-col mt-4">
                                <h2 className="text-orange-500 font-bold text-7xl">$ 39.0</h2>
                                <p className="text-gray-300 uppercase mt-2">Single class</p>
                            </div>
                            <div>
                                <ul className="text-gray-500 list-none mt-6 flex justify-center items-center flex-col text-lg gap-1">
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>No time restriction</li>
                                </ul>
                            </div>
                            <div className="mt-10 cursor-pointer bg-orange-600 w-56 h-14 flex justify-center items-center hover:bg-orange-500">
                                <span className="text-white uppercase text-xl">Enroll now</span>
                            </div>
                        </div>
                    
                    {/* CARD info (2)*/}
                    <div className='cardPrices flex flex-col justify-center items-center border-2 border-gray-500 p-10 maxxs:p-5 hover:bg-white'>
                            <div>
                                <h1 className="text-white font-bold text-3xl text-center"> 6 Month unlimited </h1>
                            </div>
                            <div className="justify-center items-center flex flex-col mt-4">
                                <h2 className="text-orange-500 font-bold text-7xl">$ 59.0</h2>
                                <p className="text-gray-300 uppercase mt-2">Single class</p>
                            </div>
                            <div>
                                <ul className="text-gray-500 list-none mt-6 flex justify-center items-center flex-col text-lg gap-1">
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>No time restriction</li>
                                </ul>
                            </div>
                            <div className="mt-10 cursor-pointer bg-orange-600 w-56 h-14 flex justify-center items-center hover:bg-orange-500">
                                <span className="text-white uppercase text-xl">Enroll now</span>
                            </div>
                        </div>

                        {/* CARD info (3)*/}
                        <div className='cardPrices flex flex-col justify-center items-center border-2 border-gray-500 p-10 maxxs:p-5 hover:bg-white'>
                            <div>
                                <h1 className="text-white font-bold text-3xl text-center"> Full Year unlimited </h1>
                            </div>
                            <div className="justify-center items-center flex flex-col mt-4">
                                <h2 className="text-orange-500 font-bold text-7xl">$ 99.0</h2>
                                <p className="text-gray-300 uppercase mt-2">Single class</p>
                            </div>
                            <div>
                                <ul className="text-gray-500 list-none mt-6 flex justify-center items-center flex-col text-lg gap-1">
                                    <li>Free riding</li>
                                    <li>Unlimited equipments</li>
                                    <li>Personal trainer</li>
                                    <li>Weight losing classes</li>
                                    <li>No time restriction</li>
                                </ul>
                            </div>
                            <div className="mt-10 cursor-pointer bg-orange-600 w-56 h-14 flex justify-center items-center hover:bg-orange-500">
                                <span className="text-white uppercase text-xl">Enroll now</span>
                            </div>
                        </div>

                    </div>
            </div>
        </div>
        
    )
}