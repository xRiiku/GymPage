import { location } from '../../assets/icons/location.jsx'
import { mobile } from '../../assets/icons/mobile.jsx'
import { mail } from '../../assets/icons/mail.jsx'

export default function Info(){

    return(
        <div className='flex justify-center items-center p-20 flex-col'>

            <div className='flex flex-col justify-center items-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold'>Get more info</span>
                <span className='text-white text-4xl uppercase mt-3'>Select your contact method.</span>
            </div>

            <div className='parent w-full mt-8'>
                    {/* CARD PARENT (Controls all 4 cards) */}
                    <div className='cardParent place-content-between mt-16 grid grid-cols-3' >
                        {/* CARD info (1)*/}
                        <div className=' flex gap-4 justify-center items-center'>
                            <div className='rounded-full p-1 bg-orange-600 stroke-white'>
                                {location} 
                            </div>
                                <p className='text-white'>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                            </div>

                        {/* CARD info (2)*/}
                        <div className=' flex gap-4 justify-center items-center'>
                            <div className='rounded-full p-1 bg-orange-600 stroke-white'>
                                {mobile} 
                            </div>
                                <p className='text-white'>125-711-811 | 125-668-886</p>
                            </div>

                        {/* CARD info (3)*/}
                        <div className=' flex gap-4 justify-center items-center'>
                            <div className='rounded-full p-1 bg-orange-600 stroke-white'>
                                {mail} 
                            </div>
                                <p className='text-white'>support.gymcenter@gym.com</p>
                            </div>

                    </div>
            </div>
        </div>
        
    )
}