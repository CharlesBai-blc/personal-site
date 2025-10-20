export default function About() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nature mb-8 font-display">About Me</h1>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mint-medium/30">
          <p className="text-lg text-nature-light leading-relaxed">
            This is the about page. You can add your personal story, background, and interests here.
          </p>
        </div>
      </div>
    </div>
  );
}
