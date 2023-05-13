import bgImg from '../assets/img/home-bg.jpg'

export default function Home () {

    return (
    <div className="relative">
        <div className="relative inset-0">
            <img
            className="w-full h-full object-cover"
            src={bgImg}
            alt="background"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>

        <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-6xl font-bold">TEXTO DEL GYM</h1>
        </div>
    </div>
    )
}