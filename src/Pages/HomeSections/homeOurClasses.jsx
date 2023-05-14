import { rightArrow } from '../../utilities/rightArrow.jsx'
import cardImg1 from '../../assets/img/classes/class-1.jpg'
import cardImg2 from '../../assets/img/classes/class-2.jpg'
import cardImg3 from '../../assets/img/classes/class-3.jpg'
import cardImg4 from '../../assets/img/classes/class-4.jpg'
import cardImg5 from '../../assets/img/classes/class-5.jpg'


export default function HomeOurClasses(){

    return(
        <div className='p-20'>

            <div className='flex flex-col justify-center items-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold'>Our Classes?</span>
                <span className='text-white text-4xl uppercase mt-3'>What we can offer</span>
            </div>

                {/* CARD PARENT (Controls all 4 cards) */}
            <div className="parent grid grid-cols-3 place-content-center place-items-center mt-16">
                {/* Card container (1)*/}
                <div className="cardContainer">
                    <div>
                        <img className='object-cover' src={cardImg1} alt='img'></img>
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <div>
                        <span className='text-orange-500 text-xl font-bold'>Health</span>
                        <h5 className='text-white uppercase text-2xl font-bold'>Weightlifting</h5>
                        </div>

                        <div className='bg-zinc-800 w-14 h-14 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                            {rightArrow}
                        </div>
                    </div>
                </div>

                {/* Card container (2)*/}
                <div className="cardContainer">
                    <div>
                        <img className='object-cover' src={cardImg2} alt='img'></img>
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <div>
                        <span className='text-orange-500 text-xl font-bold'>Health</span>
                        <h5 className='text-white uppercase text-2xl font-bold'>Weightlifting</h5>
                        </div>

                        <div className='bg-zinc-800 w-14 h-14 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                            {rightArrow}
                        </div>
                    </div>
                </div>

                {/* Card container (3)*/}
                <div className="cardContainer">
                    <div>
                        <img className='object-cover' src={cardImg3} alt='img'></img>
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <div>
                        <span className='text-orange-500 text-xl font-bold'>Health</span>
                        <h5 className='text-white uppercase text-2xl font-bold'>Weightlifting</h5>
                        </div>

                        <div className='bg-zinc-800 w-14 h-14 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                            {rightArrow}
                        </div>
                    </div>
                </div>

                {/* Card container (4)*/}
                <div className="cardContainer">
                    <div>
                        <img className='object-cover' src={cardImg4} alt='img'></img>
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <div>
                        <span className='text-orange-500 text-xl font-bold'>Health</span>
                        <h5 className='text-white uppercase text-2xl font-bold'>Weightlifting</h5>
                        </div>

                        <div className='bg-zinc-800 w-14 h-14 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                            {rightArrow}
                        </div>
                    </div>
                </div>

                {/* Card container (5)*/}
                <div className="cardContainer">
                    <div>
                        <img className='object-cover' src={cardImg5} alt='img'></img>
                    </div>

                    <div className='mt-7 flex justify-between'>
                        <div>
                        <span className='text-orange-500 text-xl font-bold'>Health</span>
                        <h5 className='text-white uppercase text-2xl font-bold'>Weightlifting</h5>
                        </div>

                        <div className='bg-zinc-800 w-14 h-14 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                            {rightArrow}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}