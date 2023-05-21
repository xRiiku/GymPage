import bgImg from '../../assets/img/home-bg.jpg'

export default function Intro() {

    return (
            /* Body img */
            <div className='relative'>
    <div className='relative inline-block inset-0'>
        <img
        className='w-full h-full'
        src={bgImg}
        alt='background'
        />
    </div>
    {/* Text info */}
    <div className='absolute inset-0 flex justify-center items-center'>
        <div className='flex flex-col text-left z-10'>
            <h3 className='uppercase text-3xl text-white maxlg:text-2xl maxmd:text-xl maxmd:mt-10 maxsm:mt-20 maxxs:mt-30 maxsm:text-base maxls:text-sm maxxs:text-xs'>Shape your body</h3>
            <h1 className='text-white text-6xl font-bold uppercase mt-5 maxsm:mt-2 maxxs:mt-1 maxlg:text-5xl maxmd:text-3xl maxsm:text-lg maxls:text-sm maxxs:text-xs'>Be <span className='text-orange-600'>Strong</span></h1>
            <h1 className='text-white text-6xl font-bold uppercase mt-2 maxsm:mt-1 maxlg:text-5xl maxmd:text-3xl maxsm:text-lg maxls:text-sm maxxs:text-xs'>Training hard</h1>
            <button className='bg-orange-600 text-white text-2xl maxlg:text-xl maxmd:text-lg maxsm:text-sm maxls:text-xs uppercase h-10 maxsm:h-7 maxls:h-5 w-32 maxls:w-28 mt-7 maxsm:mt-4 maxls:mt-2 hover:bg-orange-500 whitespace-nowrap'>Get info</button>
        </div>
    </div>
</div>
    )
}