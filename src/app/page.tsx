
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/6 rounded-full blur-xl"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/30 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-bold text-white">👤</span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>

          {/* Title/Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light tracking-wide">
            Creative Professional & Problem Solver
          </h2>

          {/* Blurb */}
          <div className="max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 font-light">
              Welcome to my digital space! I&apos;m passionate about creating meaningful experiences 
              through design and technology. With a blend of creativity and technical expertise, 
              I bring ideas to life and solve complex challenges with innovative solutions.
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
