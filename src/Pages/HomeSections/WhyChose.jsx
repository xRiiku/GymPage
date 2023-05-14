import { bicicle } from '../../utilities/bicicle.jsx'
import { food } from '../../utilities/food.jsx'
import { heartBeat } from '../../utilities/heartbeat.jsx'
import { strengh } from '../../utilities/strengh.jsx'

export default function WhyChose(){

    return(
        <div className='flex justify-center items-center p-20 flex-col'>

            <div className='flex flex-col justify-center items-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold'>Why chose us?</span>
                <span className='text-white text-4xl uppercase mt-3'>Push your limits forward</span>
            </div>

            <div className='parent'>
                    {/* CARD PARENT (Controls all 4 cards) */}
                    <div className='cardParent gap-10 mt-16 grid grid-cols-4' >
                        {/* CARD info (1)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='rounded-full bg-zinc-800 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                                {bicicle} 
                            </div>
                                <span className='text-white mt-3 text-2xl font-bold'>Equipment</span>
                                <p className='text-white mt-5'>Lorem ipsum dolor sit amet </p> 
                                <p className='text-white'> consectetur adipiscing elit, sed do eiusmod </p> 
                                <p className='text-white'> tempor incididunt ut dolore facilisis.</p>
                            </div>
                            
                            {/* CARD info (2)*/}
                            <div className=' flex flex-col justify-center items-center'>
                            <div className='rounded-full bg-zinc-800 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                                {food} 
                            </div>
                                <span className='text-white mt-3 text-2xl font-bold'>Nutrition</span>
                                <p className='text-white mt-5'>Lorem ipsum dolor sit amet </p> 
                                <p className='text-white'> consectetur adipiscing elit, sed do eiusmod </p> 
                                <p className='text-white'> tempor incididunt ut dolore facilisis.</p>
                            </div>
                            
                            {/* CARD info (3)*/}
                            <div className=' flex flex-col justify-center items-center'>
                            <div className='rounded-full bg-zinc-800 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                                {strengh} 
                            </div>
                                <span className='text-white mt-3 text-2xl font-bold'>Training</span>
                                <p className='text-white mt-5'>Lorem ipsum dolor sit amet </p> 
                                <p className='text-white'> consectetur adipiscing elit, sed do eiusmod </p> 
                                <p className='text-white'> tempor incididunt ut dolore facilisis.</p>
                            </div>

                            {/* CARD info (4)*/}
                            <div className=' flex flex-col justify-center items-center'>
                            <div className='rounded-full bg-zinc-800 hover:bg-orange-500  stroke-orange-500 hover:stroke-white'>
                                {heartBeat} 
                            </div>
                                <span className='text-white mt-3 text-2xl font-bold'>Health</span>
                                <p className='text-white mt-5'>Lorem ipsum dolor sit amet </p> 
                                <p className='text-white'> consectetur adipiscing elit, sed do eiusmod </p> 
                                <p className='text-white'> tempor incididunt ut dolore facilisis.</p>
                            </div>
                    </div>
            </div>
        </div>
        
    )
}