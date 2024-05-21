import './App.css';
import 'remixicon/fonts/remixicon.css';
import CustomCursor from './CustomCursor.js';

function App() {
  

  return (
    
   <body className="sm:body1 md:body1 bg-black sm:bg-black md:bg-black text-white sm:text-white">
   <header>
    <div className="flex justify-between sm:flex sm:justify-between bg-slate-700">
      <div className='flex text-center my-3 mx-6 sm:my-3 sm:mx-3'>
      <i class="ri-leaf-fill text-green-300 text-center align-bottom justify-center text-3xl"></i><h1 className='font-outfit text-3xl text-white'>envato<span className="text-green-300 text-3xl font-thin">market</span></h1>
      </div>
      <div>
        <button className='bg-green-300 py-2 px-5 rounded my-3 mx-6 font-outfit'>Buy now</button>
      </div>
    </div>
   </header>

   <section id="home" class="home">
    <div className="flex font-sora justify-between px-40 py-10">
      <h1 className="heading4 text-2xl text-white font-normal blur-xs">MotionArt <span className="text-slate-300">Effect</span></h1>
      <button className="btn bg-white text-black py-3 px-9 rounded font-normal text-lg hover:bg-black hover:text-white hover:border-white hover:border-[1px] transition-none duration-100">Purchase Now</button>
    </div>

  <div className="flex justify-start">
    <div className="px-40 py-10 text-lg">
      <h1 className="heading5 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F87516] to-[#5E11FF]">Transform</h1>
      <h1 className="heading6 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F87516] to-[#5E11FF] ">Your Website</h1>
      <h1 className="heading7 mt-3 font-outfit">With Motion Art</h1>
      <h1 className='heading8'>Effect</h1>
    </div>

    <div className="items-center align-middle grid justify-center text-7xl sm:mt-5 leading-snug">
      <div className="grid justify-center">
        <h1 className="heading">Attract Your</h1>
        <h1 className="heading1">Visitors Attention</h1>
        <h1 className="heading2">With Colorful</h1>
        <h1 className="heading3 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F87516] to-[#5E11FF]">Motion Art Effect</h1>
      </div>
      <div className="grid justify-center text-xl mt-5 opacity-75">
        <p className="para1">Unleash the power of creativity with Motion Art for Elementor - your</p>
        <p className="para2">ultimate solution for seamlessly integrating captivating animations into</p>
        <p className="para3">your website.</p>
      </div>
    </div>
  </div>

  <div className='sm:flex sm:justify-center text-2xl mt-20'>
    <h1 className='heading9 sm:heading9'>Trusted by thousands of users around the world</h1>
  </div>
  
    
    
   </section>
   <CustomCursor/>
   </body>
  );
}

export default App;
