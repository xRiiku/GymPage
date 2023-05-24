import ProgressBar from './AboutProgressBars';
import image from '../../assets/img/about-us-done.jpg'

export default function AboutHaveDone() {
    return (
        <div className='grid grid-cols-2 p-20 gap-10 maxlg:grid-cols-1'>
            <div>
                <img className='w-full h-full' src={image} alt='image'></img>
            </div>

            <div className='flex flex-col h-full'>
                <span className='text-orange-500 uppercase text-2xl font-bold maxxs:text-lg text-center'>About Us</span>
                <span className='text-white text-4xl uppercase mt-3 maxxs:text-xl text-center'>What we have done</span>
                <p className='text-white text-2xl mt-10 maxls:text-xl maxxs:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

                {/* Progress bar 1 */}
                <div className='flex justify-between mt-10'>
                    <div>
                        <p className='text-white'>Body Building</p>
                    </div>
                    <div>
                        <span className='text-white'>85%</span>
                    </div>
                </div>
                <div>
                    <ProgressBar totalProgress={85} />
                </div>

                {/* Progress bar 2 */}
                <div className='flex justify-between mt-10'>
                    <div>
                        <p className='text-white'>Training</p>
                    </div>
                    <div>
                        <span className='text-white'>90%</span>
                    </div>
                </div>
                <div>
                    <ProgressBar totalProgress={90} />
                </div>

                {/* Progress bar 3 */}
                <div className='flex justify-between mt-10'>
                    <div>
                        <p className='text-white'>Fitness</p>
                    </div>
                    <div>
                        <span className='text-white'>95%</span>
                    </div>
                </div>
                <div>
                    <ProgressBar totalProgress={95} />
                </div>
            </div>
        </div>
    );
}
