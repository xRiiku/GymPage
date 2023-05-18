import logo from '../../assets/img/logo.png'
import { facebook } from '../../assets/icons/facebook'
import { twitter } from '../../assets/icons/twitter.jsx'
import { instagram } from '../../assets/icons/instagram.jsx'
import { youtube } from '../../assets/icons/youtube.jsx'
import { mailXS } from '../../assets/icons/mail-xs.jsx'

export default function Footer(){

    return(
        <div className='flex justify-center items-center p-20 pt-0 bg-zinc-800'>

            <div className='parent w-full mt-8'>
                {/* CARD PARENT (Controls all 4 cards) */}
                <div className='cardParent place-content-between mt-16 grid grid-cols-3' >
                    {/* CARD info (1)*/}
                    <div className=' flex flex-col gap-4 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <a href='/'>
                                <img className='cursor-pointer' src={logo} alt='logo' />
                            </a>
                        </div>
                        
                        <div className='text-white pChoseWidth mt-7'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                        </div>

                        <div className='flex mt-5 justify-center items-center gap-2 stroke-orange-400'>
                            <div className='hover:stroke-white'>

                            {facebook} 
                            </div>
                            <div className='hover:stroke-white'>

                            {twitter} 
                            </div>
                            <div className='hover:stroke-white'>

                            {instagram} 
                            </div>
                            <div className='hover:stroke-white'>

                            {youtube} 
                            </div>
                            <div className='hover:stroke-white'>

                            {mailXS}
                            </div>
                        </div>
                    </div>

                        {/* CARD info (2)*/}
                        <div className=' flex flex-col gap-4 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <p className='text-white text-3xl font-bold'>Useful links</p>
                        </div>
                        
                        <div className='mt-7'>
                            <ul className='text-white list-none cursor-pointer'>
                                <a href='/AboutUs'>
                                    <li className='hover:opacity-60'>About</li>
                                </a>
                                <a href='/Classes'>
                                    <li className='hover:opacity-60'>Classes</li>
                                </a>
                                <a href='/Services'>
                                    <li className='hover:opacity-60'>Services</li>
                                </a>
                                <a href='/OurTeam'>
                                    <li className='hover:opacity-60'>Team</li>
                                </a>
                                <a href='/Contact'>
                                    <li className='hover:opacity-60'>Contact</li>
                                </a>
                            </ul>
                        </div>
                        <div className='mt-12'></div>
                    </div>

                    {/* CARD info (3)*/}
                    <div className=' flex flex-col gap-4 justify-center items-center'>
                        <div className='flex justify-center items-center'>
                            <p className='text-white text-3xl font-bold'>Support</p>
                        </div>
                        
                        <div className='mt-7'>
                            <ul className='text-white list-none cursor-pointer'>
                                <li className='hover:opacity-60'>Login</li>
                                <li className='hover:opacity-60'>My Account</li>
                                <li className='hover:opacity-60'>Subscribe</li>
                                <li className='hover:opacity-60'>Contact</li>
                                <li className='hover:opacity-60'>Whats app</li>
                            </ul>
                        </div>
                        <div className='mt-12'></div>
                    </div>

                </div>
            </div>
        </div>
        
    )
}