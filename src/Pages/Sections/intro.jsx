import bgImg from '../../assets/img/home-bg.jpg'

export default function Intro() {

    return (
            /* Body img */
            <div className='relative'>
    <div className='relative inset-0 inline-block w-full h-full'>
        <img
        src={bgImg}
        alt='background'
        />
    </div>
    {/* Text info */}
    <div className='container absolute inset-0 flex justify-end items-center'>
        <div className='flex flex-col text-left z-10 maxmd:flex-wrap maxmd:justify-center maxmd:items-center maxmd:text-center maxmd:p-10 maxmd:mt-20'>
            <h3 className='uppercase text-3xl text-white maxlg:text-2xl maxmd:text-3xl maxsm:text-2xl maxls:text-sm'>Shape your body</h3>
            <h1 className='text-white text-6xl font-bold uppercase mt-5 maxlg:text-5xl maxmd:text-5xl maxsm:text-4xl maxsm:mt-2 maxls:mt-0 maxls:text-lg'>Be <span className='text-orange-600'>Strong</span> Training hard</h1>
            <button className='bg-orange-600 text-white text-2xl maxlg:text-xl maxmd:text-2xl maxsm:text-lg maxls:text-xs maxsm:mt-3 maxls:mt-1 maxls:h-7 uppercase h-10 w-32 mt-7 hover:bg-orange-500 whitespace-nowrap'>Get info</button>
        </div>
    </div>
</div>
    )
}