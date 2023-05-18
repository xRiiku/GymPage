export default function Copyright(){

    return(
        <div className='text-white flex justify-center items-center h-20'>
            <p>Copyright <span className='text-orange-500'>©{new Date().getFullYear()}</span> All rights reserved | Website made with love by <span className='text-orange-500'>RikuDev</span></p>
        </div>
    )
}