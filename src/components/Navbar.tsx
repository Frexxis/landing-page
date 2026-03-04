import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/10' : ''}`}>
        
        <Link to="/" className="w-9 h-9 rounded-full accent-gradient-border accent-gradient-border-reverse flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary">FA</span>
          </div>
        </Link>

        <div className="hidden md:block w-px h-5 bg-stroke mx-1" />

        <div className="flex items-center gap-1 px-2">
          <NavLink to="/" label="Ana Sayfa" currentPath={location.pathname} />
          <NavLink to="/services" label="Hizmetler" currentPath={location.pathname} />
          <NavLink to="/work" label="Projeler" currentPath={location.pathname} />
          
          <div className="relative group">
            <button className={`flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50`}>
              Kurumsal <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-stroke rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 p-2 flex flex-col gap-1">
              <DropdownLink to="/about" label="Hakkımızda" />
              <DropdownLink to="/team" label="Ekibimiz" />
              <DropdownLink to="/careers" label="Kariyer" />
            </div>
          </div>

          <NavLink to="/insights" label="İçgörüler" currentPath={location.pathname} />
        </div>

        <div className="w-px h-5 bg-stroke mx-1" />

        <Link to="/contact" className="relative group text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
          <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity z-0" />
          <span className="relative z-10 bg-surface rounded-full backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1">
            İletişim <span className="text-[10px]">↗</span>
          </span>
        </Link>

      </div>
    </nav>
  );
}

function NavLink({ to, label, currentPath }: { to: string, label: string, currentPath: string }) {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  return (
    <Link
      to={to}
      className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
        isActive
          ? 'text-text-primary bg-stroke/50'
          : 'text-muted hover:text-text-primary hover:bg-stroke/50'
      }`}
    >
      {label}
    </Link>
  );
}

function DropdownLink({ to, label }: { to: string, label: string }) {
  return (
    <Link
      to={to}
      className="text-sm px-4 py-2 rounded-xl text-muted hover:text-text-primary hover:bg-stroke/50 transition-colors block"
    >
      {label}
    </Link>
  );
}
