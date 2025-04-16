import { useState, useEffect } from 'react';
// Import specific icons from the recommended path
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface HeroSectionProps {
  isCareer?: boolean;
}

export default function HeroSection({ isCareer = false }: HeroSectionProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => { 
        if (isCareer) {
            setScrolled(true);
        } else {
            const handleScroll = () => {
                // Increase threshold for triggering the sticky header
                const threshold = 100; // Changed from 10 to 100px
                setScrolled(window.scrollY > threshold);
            };

            window.addEventListener('scroll', handleScroll);
            // Cleanup listener on component unmount
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementRect = element.getBoundingClientRect();
            const absoluteElementTop = elementRect.top + window.pageYOffset;
            // Calculate offset to center the section in the viewport
            const offset = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
            window.scrollTo({
            top: offset,
            behavior: 'smooth'
            });
            setMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

  return (
    <>
      {/* Sticky Header - Fixed to the top of the viewport */}
      <div className="fixed top-2 sm:top-4 left-0 right-0 z-50">
        <header
          className={`w-[95%] sm:w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto
                rounded-xl flex justify-between items-center py-5 px-3 sm:px-4
                transition-all duration-300 ease-in-out bg-background/90
                ${scrolled ? 'translate-y-0 opacity-100 shadow-md backdrop-blur-sm' : '-translate-y-full opacity-0'}`}
        >
          {/* Scrolled Logo (uses hero images) */}
          <button onClick={() => window.location.href = '/'} className="flex items-center relative h-8 w-auto focus:outline-none">
            <img
              src="/aaxiom.png"
              alt="AAXIOM Logo Light"
              className={`h-full w-auto absolute inset-0 transition-opacity duration-300 ${scrolled ? 'dark:opacity-0' : 'opacity-0'}`}
            />
            <img
              src="/aaxiom-dark.png"
              alt="AAXIOM Logo Dark"
              className={`h-full w-auto transition-opacity duration-300 ${scrolled ? 'opacity-0 dark:opacity-100' : 'opacity-0'}`}
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">About</button>
            <button onClick={() => scrollToSection('ventures')} className="text-slate-400 hover:text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Ventures</button>
            <button onClick={() => scrollToSection('careers')} className="text-slate-400 hover:text-primary font-medium relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">Careers</button>
          </nav>
        </header>

        {/* Animated Mobile Navigation Dropdown */}
        <div
          className={`
          mx-auto w-[95%] sm:w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl
          overflow-hidden shadow-lg transition-all duration-300 ease-in-out rounded-xl
          relative z-30 md:hidden bg-background/90 backdrop-blur-sm mt-1
          ${mobileMenuOpen && scrolled ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
          style={{
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
            transitionProperty: 'max-height, opacity, transform'
          }}
        >
          <nav className="flex flex-col gap-1 p-4">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-text rounded-md hover:bg-slate-800 hover:text-primary transition-colors cursor-pointer">About</button>
            <button onClick={() => scrollToSection('ventures')} className="block w-full text-left px-4 py-2 text-text rounded-md hover:bg-slate-800 hover:text-primary transition-colors cursor-pointer">Ventures</button>
            <button onClick={() => scrollToSection('careers')} className="block w-full text-left px-4 py-2 text-text rounded-md hover:bg-slate-800 hover:text-primary transition-colors cursor-pointer">Careers</button>
          </nav>
        </div>
      </div>

      {/* Hero Section Content */}
      <div className={`relative ${isCareer ? 'opacity-0 max-h-0' : ''}`}>
        <section className={`relative overflow-hidden transition-all duration-300 ease-in-out ${scrolled ? 'pt-20 pb-4' : 'pt-48 pb-24'}`}>
          <div className="container mx-auto px-6 relative z-10">
            <div className={`max-w-2xl mx-auto text-center transition-all duration-300 ease-in-out ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {/* Logo (part of static hero, disappears on scroll) */}
              <div className="w-48 md:w-64 lg:w-72 mx-auto mb-8 relative">
                <img
                  src="/aaxiom.png" // Light mode logo
                  alt="AAXIOM"
                  className="w-full h-auto absolute inset-0 dark:opacity-0 transition-opacity duration-300"
                  width={288}
                  height={288}
                />
                <img
                  src="/aaxiom-dark.png" // Dark mode logo
                  alt="AAXIOM"
                  className="w-full h-auto opacity-0 dark:opacity-100 transition-opacity duration-300"
                  width={288}
                  height={288}
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 gradient-blue-purple bg-clip-text text-transparent">
                by Aidan Andrews
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Building the future through innovative technology and entrepreneurship
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => scrollToSection('ventures')}
                  className="inline-block px-6 py-3 gradient-blue-purple-hover text-white rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Explore Ventures
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-block px-6 py-3 bg-transparent border-2 border-current text-current rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:bg-current hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          {/* Background Element */}
          <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="currentColor" d="M39.9,-68.6C53.1,-62.9,66.2,-55.5,75,-43.8C83.9,-32.1,88.4,-16,88.5,0.1C88.6,16.2,84.2,32.4,75.7,46.2C67.1,60,54.4,71.3,40.1,77.3C25.8,83.2,9.9,83.7,-5.4,80.6C-20.7,77.5,-35.4,70.7,-48.6,61.1C-61.7,51.5,-73.4,39,-79.1,24.2C-84.7,9.4,-84.4,-7.8,-80,-24C-75.6,-40.1,-67.1,-55.2,-54.6,-62.1C-42.1,-69,-21,-67.8,-2.9,-63.8C15.3,-59.8,30.5,-53,39.9,-68.6Z" transform="translate(100 100)" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
} 