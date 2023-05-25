import { location } from '../../assets/icons/location.jsx'
import { mobile } from '../../assets/icons/mobile.jsx'
import { mail } from '../../assets/icons/mail.jsx'

export default function ContactGetInTouch() {
    return (
        <div className='p-20'>
        <div className='parent flex justify-between items-center w-full gap-20 maxmd:flex-col'>

        <div className='flex flex-col justify-center items-start w-full maxmd:items-center'>
                <span className='text-orange-500 uppercase text-2xl font-bold maxxs:text-lg text-left'>Contact Us</span>
                <span className='text-white text-4xl uppercase mt-3 maxxs:text-xl text-center'>Get in touch</span>
                <div className='cardParent place-content-between mt-10 grid grid-cols-1 gap-10' >
                        {/* CARD info (1)*/}
                        <div className=' flex gap-4 justify-center items-center mt-10'>
                            <div className='rounded-full p-1 bg-zinc-800 stroke-orange-600'>
                                {location} 
                            </div>
                                <p className='text-white pChoseWidth maxxs:text-xs'>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                            </div>

                        {/* CARD info (2)*/}
                        <div className=' flex gap-4 justify-center items-center'>
                            <div className='rounded-full p-1 bg-zinc-800 stroke-orange-600'>
                                {mobile} 
                            </div>
                                <p className='text-white pChoseWidth maxxs:text-xs'>1257118119 // 1256688869</p>
                            </div>

                        {/* CARD info (3)*/}
                        <div className=' flex gap-4 maxxs:gap-2 justify-center items-center'>
                            <div className='rounded-full p-1 bg-zinc-800 stroke-orange-600'>
                                {mail} 
                            </div>
                                <p className='text-white pChoseWidth maxxs:text-xs'>gym@gym.com</p>
                            </div>

                    </div>
                
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
            <form action="#" className='text-white flex flex-col gap-5 w-full'>
                <input type="text" placeholder="Name" className='h-10 bg-black border-2 border-zinc-500 text-center' />
                <input type="text" placeholder="Email" className='h-10 bg-black border-2 border-zinc-500 text-center' />
                <input type="text" placeholder="Website" className='h-10 bg-black border-2 border-zinc-500 text-center' />
                <textarea placeholder="Comment" className='h-32 bg-black border-2 border-zinc-500 text-center'></textarea>
                <button type="submit" className='bg-orange-600 text-white h-14 uppercase hover:bg-orange-500'>Submit</button>
            </form>
            </div>

        </div>

        </div>
    );
}
