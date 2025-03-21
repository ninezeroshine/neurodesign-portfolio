
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-neuro-800/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-aurora-purple/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12 bg-gradient-to-br from-black/40 to-black/20 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="heading-lg">
                Готовы создать <span className="text-gradient">уникальные</span> нейросетевые проекты?
              </h2>
              
              <p className="text-lg text-white/80">
                Свяжитесь со мной для обсуждения вашего следующего проекта. Вместе мы создадим 
                впечатляющие визуальные материалы, которые привлекут внимание и запомнятся.
              </p>
              
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-6">
                <Link to="/contact" className="btn-primary flex items-center justify-center w-full sm:w-auto">
                  <span>Связаться</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <Link to="/services" className="btn-secondary flex items-center justify-center w-full sm:w-auto">
                  <span>Узнать об услугах</span>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-2 order-first lg:order-last">
              <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
                {/* Круглый градиент */}
                <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-tr from-neuro-700 via-neuro-600 to-neuro-400 animate-pulse-soft"></div>
                
                {/* Маска для создания полого круга */}
                <div className="absolute inset-2 rounded-full bg-background"></div>
                
                {/* Внутренний градиент */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-aurora-purple via-aurora-blue to-aurora-cyan opacity-80 animate-float"></div>
                
                {/* Блики */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white opacity-80 blur-[1px]"></div>
                <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white opacity-60 blur-[2px]"></div>
                
                {/* Центральный текст */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-display text-lg md:text-xl font-medium">Начать<br/>проект</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
