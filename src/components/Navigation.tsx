
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Услуги', path: '/services' },
    { name: 'Блог', path: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-background/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-gradient font-display">Umar Generating...</span>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-neuro-300 ${
                  location.pathname === link.path ? 'text-neuro-300' : 'text-white/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Десктопные кнопки */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-white/5 transition-colors" aria-label="Поиск">
              <Search className="h-5 w-5 text-white/80" />
            </button>
            <Link to="/contact" className="btn-primary">
              Связаться
            </Link>
          </div>

          {/* Мобильное меню */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/5 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors py-2 hover:text-neuro-300 ${
                    location.pathname === link.path ? 'text-neuro-300' : 'text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
              <button className="flex items-center space-x-2 text-white/80 hover:text-white py-2 transition-colors">
                <Search className="h-5 w-5" />
                <span>Поиск</span>
              </button>
              <Link to="/contact" className="btn-primary w-full text-center">
                Связаться
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
