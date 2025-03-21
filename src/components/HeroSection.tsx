
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Задержка для анимации при загрузке
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-32">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-neuro-800/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-aurora-purple/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Левая колонка - Текст */}
          <div className={`space-y-6 md:space-y-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out`}>
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200">
              Нейро-дизайн нового поколения
            </div>
            
            <h1 className="heading-xl">
              Создаю <span className="text-gradient">уникальные</span> визуальные проекты с помощью ИИ
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Специализируюсь на создании потрясающих изображений и видео с помощью нейросетей,
              от тренировки LORA-моделей до анимации и монтажа.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn-primary flex items-center justify-center">
                <span>Смотреть проекты</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link to="/services" className="btn-secondary flex items-center justify-center">
                <span>Узнать об услугах</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-neuro-300">160+</span>
                <span className="text-sm text-white/60">завершенных проектов</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-neuro-300">40+</span>
                <span className="text-sm text-white/60">довольных клиентов</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-display font-bold text-neuro-300">95%</span>
                <span className="text-sm text-white/60">положительных отзывов</span>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - Изображение */}
          <div 
            className={`relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} transition-all duration-700 ease-out delay-200`}
          >
            <div className="glass-card rounded-2xl overflow-hidden aspect-[4/5] w-full">
              {/* Обновленное изображение */}
              <img 
                src="/lovable-uploads/c56a5840-6c32-43cb-ab58-e1d1a40ab8b6.png" 
                alt="Umar Generating портфолио" 
                className="w-full h-full object-cover"
              />
              
              {/* Наложение стилизованного оверлея */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              
              {/* Кнопка воспроизведения */}
              <button 
                className="absolute bottom-8 left-8 flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 transition-all hover:bg-white/15"
                aria-label="Смотреть демо"
              >
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-neuro-500">
                  <Play className="h-4 w-4 text-white fill-white" />
                </div>
                <span className="text-sm font-medium">Демо генерации</span>
              </button>
              
              {/* Информация о проекте */}
              <div className="absolute top-8 right-8 glass-card rounded-xl p-4 max-w-[180px]">
                <div className="text-sm font-medium text-neuro-200">Пример работы</div>
                <div className="text-lg font-medium mt-1">Нейрофотосессия</div>
                <div className="text-xs text-white/60 mt-1">Модель: Midjourney v5</div>
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -bottom-6 -left-6 -z-10 w-24 h-24 bg-neuro-500/20 rounded-full blur-xl animate-pulse-soft" />
            <div className="absolute -top-6 -right-6 -z-10 w-32 h-32 bg-aurora-blue/10 rounded-full blur-xl animate-pulse-soft" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
