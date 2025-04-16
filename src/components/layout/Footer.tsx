import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

// Placeholder for social icons - replace with actual icons later
const SocialLink: React.FC<{ href: string, icon: string }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:gradient-blue-purple hover:text-primary hover:-translate-y-1">
    {/* Placeholder: Use an icon library like Heroicons or Feathericons */}
    {icon === 'LI' && <Linkedin className="w-5 h-5" />}
    {icon === 'GH' && <Github className="w-5 h-5" />}
    {icon === 'TW' && <Twitter className="w-5 h-5" />}
  </a>
);


export default function Footer() {
  return (
    <footer className="pt-16 border-t border-white/5 z-2 rounded-xl bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Footer Brand & Socials */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <img
                src="/aaxiom.png"
                alt="AAXIOM Logo Light"
                className="h-24 w-auto transition-opacity duration-300"
              />
            </div>
            <p className="mb-6 text-sm">
              Building innovative solutions and pioneering ventures that shape a better future.
            </p>
            <div className="flex space-x-4">
              {/* Replace with actual social links and icons */}
              <SocialLink href="https://www.linkedin.com/company/aaxiom" icon="LI" /> 
              <SocialLink href="https://github.com/AAxiom-org" icon="GH" /> 
              <SocialLink href="https://x.com/aaxiom_org" icon="TW" /> 
            </div>
          </div>

          {/* Footer Links Column 1 (Ventures) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:w-8 after:h-0.5 after:gradient-blue-purple after:bottom-0 after:left-0">
              Ventures
            </h4>
            <ul className="space-y-3">
              <li><a href="https://voxed.ai" target="_blank" rel="noopener noreferrer" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">voxed.ai</a></li>
              <li><a href="https://illiniplan.com" target="_blank" rel="noopener noreferrer" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">IlliniPlan</a></li>
              <li><a href="#" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">IlliniSpots</a></li>
              <li><a href="https://urnvralone.com" target="_blank" rel="noopener noreferrer" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">nvralone</a></li>
            </ul>
          </div>

          {/* Footer Links Column 2 (Company) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:w-8 after:h-0.5 after:gradient-blue-purple after:bottom-0 after:left-0">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">About</a></li>
              <li><a href="#ventures" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">Ventures</a></li>
              <li><a href="#contact" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">Contact</a></li>
              <li><a href="#careers" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">Careers</a></li>
              {/* <li><a href="#" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">Careers</a></li> */}
            </ul>
          </div>

          {/* Footer Links Column 3 (Legal) */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:w-8 after:h-0.5 after:gradient-blue-purple after:bottom-0 after:left-0">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="https://github.com/AAxiom-org/aaxiom/blob/main/LICENSE" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">License</a></li>
              {/* <li><a href="#" className="hover:gradient-blue-purple hover:bg-clip-text hover:text-primary hover:pl-1.5 transition-all duration-200 text-sm">Cookie Policy</a></li> */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pb-2 border-t border-white/5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AAXIOM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 