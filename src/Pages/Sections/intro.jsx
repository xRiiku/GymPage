import bgImg from '../../assets/img/home-bg.jpg'

export default function Intro() {

    return (
            /* Body img */
    <div className='relative h-[50vh]'>
        <div className='relative inset-0 inline-block w-full h-full'>
        <img
        src={bgImg}
        alt='background'
        className='object-cover maxmd:h-[50vh] maxlg:h-[50vh] w-full h-full'
        />
    </div>
    {/* Text info */}
    <div className='container absolute inset-0 flex justify-end items-center'>
        <div className='flex flex-col text-left z-10 maxmd:flex-wrap maxmd:justify-center maxmd:items-center maxmd:text-center maxmd:p-10 maxmd:mt-20'>
            <h3 className='uppercase text-3xl text-white maxls:text-xl maxxs:mt-10'>Shape your body</h3>
            <h1 className='text-white text-6xl font-bold uppercase mt-5 maxls:text-3xl'>Be <span className='text-orange-600'>Strong</span> Training hard</h1>
            <button className='bg-orange-600 text-white text-2xl uppercase h-10 w-32 mt-7 hover:bg-orange-500 whitespace-nowrap'>Get info</button>
        </div>
    </div>
</div>
    )
}