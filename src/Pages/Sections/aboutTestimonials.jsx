import img1 from '../../assets/img/team/team-1.jpg'
import img2 from '../../assets/img/team/team-2.jpg'
import img3 from '../../assets/img/team/team-3.jpg'
import img4 from '../../assets/img/team/team-4.jpg'
import img5 from '../../assets/img/team/team-5.jpg'
import img6 from '../../assets/img/team/team-6.jpg'

export default function AboutTestimonials(){

    return(
        <div className='flex justify-center items-center p-20 flex-col'>

            <div className='flex flex-col justify-center items-center text-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold maxxs:text-lg'>Testimonial</span>
                <span className='text-white text-4xl uppercase mt-3 maxxs:text-xl'>Our client say</span>
            </div>

            <div className='parent w-full'>
                    {/* CARD PARENT (Controls all 4 cards) */}
                    <div className='cardParent place-content-between gap-10 mt-16 grid grid-cols-3 maxlg:grid-cols-2 maxsm:grid-cols-1' >
                        {/* CARD info (1)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img1} alt='testimonial 1'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>Isabella</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>
                            
                            {/* CARD info (2)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img2} alt='testimonial 2'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>Alexander</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>
                            
                            {/* CARD info (3)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img3} alt='testimonial 3'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>Benjamin</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>

                            {/* CARD info (4)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img4} alt='testimonial 4'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>William</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>

                            {/* CARD info (5)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img5} alt='testimonial 5'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>Sophia</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>

                            {/* CARD info (6)*/}
                        <div className=' flex flex-col justify-center items-center'>
                            <div className='w-32 h-32'>
                                <img className='rounded-full' src={img6} alt='testimonial 6'></img> 
                            </div>
                                <span className='text-white mt-8 text-2xl font-bold'>Evelyn</span>
                                <p className='text-white mt-5 pChoseWidth'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                            </div>

                    </div>
            </div>
        </div>
        
    )
}