
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 | Страница не найдена';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Анимированный элемент 404 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neuro-700 via-neuro-600 to-neuro-500 opacity-40 blur-xl animate-pulse-soft"></div>
          <div className="absolute inset-8 rounded-full bg-background"></div>
          <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-aurora-purple via-aurora-blue to-aurora-cyan opacity-80 animate-float"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-display text-4xl font-bold">404</span>
          </div>
        </div>
        
        <h1 className="heading-xl mb-4">Страница не найдена</h1>
        <p className="text-lg text-white/70 mb-8 mx-auto max-w-md">
          Похоже, страница, которую вы ищете, не существует или была перемещена.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            <span>На главную</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Назад</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
