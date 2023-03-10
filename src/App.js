import  Spline  from '@splinetool/react-spline';


function App() {
  return (
    <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* Navigation bar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">

          <p className="text-lg text-slate-200 font-medium">Suraj Singh</p>

          <p className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
            duration-100 ease-in-out'>Home</a>
            <a href="#about" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
            duration-100 ease-in-out'>About</a>
            <a href="#projects" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
            duration-100 ease-in-out'>Projects</a>
            <a href="#contact" className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer
            duration-100 ease-in-out'>Contact</a>

            <a href="#download" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border 
            border-textBase px-2 py-1 rounded-x1 hover:border-gray-100 duration-100  ease-in-out">Download</a>
          </p>
        </div>
      </nav>
      
      <div className="relative" id="home">
          <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />
      </div>
    </div>
  );
}

export default App;
