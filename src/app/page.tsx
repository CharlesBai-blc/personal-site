
import FlowingMenu from '../components/FlowingMenu';
import Threads from '../components/Threads';
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export default function Home() {
  const portfolioItems = [
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with React, featuring real-time inventory management and seamless payment integration.',
      href: '/portfolio/ecommerce'
    },
    {
      id: 'design-system',
      title: 'Design System',
      description: 'Comprehensive design system for a SaaS platform, improving consistency and developer productivity across teams.',
      href: '/portfolio/design-system'
    },
    {
      id: 'mobile-app',
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      href: '/portfolio/mobile-app'
    },
    {
      id: 'dashboard',
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with real-time metrics and customizable reporting features.',
      href: '/portfolio/dashboard'
    },
    {
      id: 'landing-page',
      title: 'SaaS Landing Page',
      description: 'High-converting landing page with A/B testing, lead capture forms, and performance optimization.',
      href: '/portfolio/landing-page'
    }
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Base background layer to avoid plain white through transparent canvas */}
      <div className="fixed inset-0 w-full h-full bg-mist z-0" />
      {/* Full-screen Threads Background */}
      <div className="fixed inset-0 w-full h-full z-10">
        <Threads 
          color={[0.5, 0.7, 0]} 
          amplitude={1} 
          distance={0} 
          enableMouseInteraction={true}
        />
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16 relative z-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-display text-white">
            Welcome to My Digital Space
          </h1>
          <p className="text-xl text-text-light leading-relaxed max-w-2xl">
            I&apos;m a creative professional passionate about building meaningful digital experiences 
            that connect people and solve real-world problems through thoughtful design and technology.
          </p>
          <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              className="text-white/90"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
        
        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6 font-display text-white">About Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-light leading-relaxed mb-6">
              With over 5 years of experience in web development and design, I specialize in creating 
              user-centered digital solutions that are both beautiful and functional. My approach combines 
              technical expertise with creative thinking to deliver products that users love.
            </p>
            <p className="text-text-light leading-relaxed">
              When I&apos;m not coding or designing, you&apos;ll find me exploring nature, reading about emerging 
              technologies, or experimenting with new creative projects. I believe that great design comes 
              from understanding both the technical possibilities and human needs.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6 font-display text-white">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4 text-white">Frontend Development</h3>
              <ul className="space-y-2 text-text-light">
                <li>• React & Next.js</li>
                <li>• TypeScript & JavaScript</li>
                <li>• Tailwind CSS & Styled Components</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4 text-white">Design & Tools</h3>
              <ul className="space-y-2 text-text-light">
                <li>• UI/UX Design</li>
                <li>• Figma & Adobe Creative Suite</li>
                <li>• User Research & Testing</li>
                <li>• Design Systems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Section with Flowing Menu */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-6 font-display text-white">Featured Projects</h2>
          <p className="text-text-light mb-8 max-w-2xl">
            Explore some of my recent work. Each project represents a unique challenge and solution, 
            showcasing different aspects of my skills and expertise.
          </p>
          <FlowingMenu items={portfolioItems} />
          
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4 font-display text-white">Let&apos;s Work Together</h2>
          <p className="text-text-light mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I&apos;d love to hear from you.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
          >
            Get In Touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
