import Nav from "@/components/layout/Nav";
import Logo from "@/components/layout/Logo";

export default function About() {
  return (
    <div className="min-h-screen relative">
      <Logo />
      <Nav />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-light text-foreground font-display tracking-tight">
              about
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light">
              a brief introduction
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <p className="text-foreground leading-relaxed font-light text-lg">
                Hi there, I&apos;m Charles Bai, a sophomore at Cornell University studying Computer Science.
                I like to build projects that I find interesting in my free time, usually full-stack web applications.
                My main interests are in backend development, cloud computing, and NLP.
                Outside of coding, I like to play tennis, watch movies, and play games.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-foreground mb-4 font-display">
                background
              </h2>
              <p className="text-foreground leading-relaxed font-light">
                With experience in web development and design, I specialize in
                creating user-centered digital solutions that are both beautiful
                and functional. My approach combines technical expertise with
                creative thinking to deliver products that users love.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-light text-foreground mb-4 font-display">
                interests
              </h2>
              <p className="text-foreground leading-relaxed font-light">
                When I&apos;m not coding or designing, you&apos;ll find me
                exploring new technologies, experimenting with creative
                projects, or diving into the latest design trends. I believe
                that great design comes from understanding both technical
                possibilities and human needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
