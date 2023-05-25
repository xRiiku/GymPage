import bgImg from '../../assets/img/bk-contact-us.jpg'

export default function ContactIntro() {

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
    <div className='absolute inset-0 flex justify-center items-center'>
        <div className='flex text-center z-10 justify-center items-center'>
            <h1 className='text-white text-6xl font-bold uppercase mt-5'>Contact Us</h1>
        </div>
    </div>
</div>
    )
}