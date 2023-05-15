import bgImg from '../../assets/img/home-bg.jpg'

export default function Intro() {

    return (
            /* Body img */
            <div className='relative'>
                <div className='relative inset-0'>
                    <img
                    className='w-full h-full object-cover'
                    src={bgImg}
                    alt='background'
                    />
                </div>
                {/* Text info */}
                <div className='container absolute inset-0 flex justify-end items-center'>
                <div className='flex-col flex text-left'>
                    <h3 className='uppercase text-3xl text-white'>Shape your body</h3>
                    <h1 className='text-white text-6xl font-bold uppercase mt-5'>Be <span className='text-orange-600'>Strong</span></h1>
                    <h1 className='text-white text-6xl font-bold uppercase mt-2'>Training hard</h1>
                    <button className='bg-orange-600 text-white text-2xl uppercase h-10 w-32 mt-7 hover:bg-orange-500'>Get info</button>
                </div>
                </div>
            </div>
    )
}