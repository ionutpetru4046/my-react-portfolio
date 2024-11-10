import profile from "/public/assets/profile.png"

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-12 mt-20">
      <div className="flex flex-wrap mt-10 lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img src={profile} alt="profile-picture" className="border border-stone-900 rounded-3xl" width={350} height={300} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-center mt-40">
                <h2 className="pb-4 text-4xl tracking-tighter lg:text-7xl">Coste Ionut</h2>
                <span className="pb-4 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight 
                text-transparent">Frontend Web Developer</span>
                
                <a href="/src/assets/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-gray-400 transition-colors duration-300">
                    Download Resume
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
