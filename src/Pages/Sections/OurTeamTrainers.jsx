
import '../../assets/utilities/team.css'; // Importa el archivo CSS que contiene los estilos

// Importa las imágenes
import img1 from '../../assets/img/team/team-1.jpg';
import img2 from '../../assets/img/team/team-2.jpg';
import img3 from '../../assets/img/team/team-3.jpg';
import img4 from '../../assets/img/team/team-4.jpg';
import img5 from '../../assets/img/team/team-5.jpg';
import img6 from '../../assets/img/team/team-6.jpg';

export default function OurTeamTrainers() {
  return (
    <div className='flex justify-center items-center p-20 flex-col'>
      <div className='flex flex-col justify-center items-center text-center'>
        <span className='text-orange-500 uppercase text-2xl font-bold maxxs:text-lg'>Our Team</span>
        <span className='text-white text-4xl uppercase mt-3 maxxs:text-xl'>Train with experts</span>
      </div>

      <div className='teamParent w-full'>
        {/* CARD PARENT (Controls all 6 cards) */}
        <div className='cardParent place-content-between gap-10 mt-16 grid grid-cols-3 maxlg:grid-cols-2 maxsm:grid-cols-1'>
          {/* CARD info (1)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor pointer'>
            <div>
                <img className='rounded-2xl' src={img1} alt='testimonial 1'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Isabella</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>

          {/* CARD info (2)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={img2} alt='testimonial 2'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Alexander</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>

          {/* CARD info (3)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={img3} alt='testimonial 3'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Benjamin</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>

          {/* CARD info (4)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={img4} alt='testimonial 4'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Benjamin</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>

          {/* CARD info (5)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={img5} alt='testimonial 5'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Sophia</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>

          {/* CARD info (6)*/}
          <div className='relative flex flex-col justify-center items-center teamCard cursor-pointer'>
            <div>
                <img className='rounded-2xl' src={img6} alt='testimonial 6'></img>
            <div className='overlay'>
                <span className='text-white mt-8 text-2xl font-bold maxls:text-lg maxxs:text-sm'>Evelyn</span>
                <p className='text-white mt-5 pChoseWidth maxls:text-sm maxxs:text-xs'>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
            </div>
            </div>
        </div>
          
        </div>
      </div>
    </div>
  );
}

