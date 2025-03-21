
import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Анализ и брифинг',
    description: 'Обсуждение целей, задач и ожиданий от проекта. Анализ референсов и выбор подхода.'
  },
  {
    number: '02',
    title: 'Выбор инструментов',
    description: 'Подбор оптимальных нейросетей и моделей для реализации проекта с учетом специфики задачи.'
  },
  {
    number: '03',
    title: 'Создание прототипов',
    description: 'Генерация и согласование предварительных вариантов, настройка параметров и стиля.'
  },
  {
    number: '04',
    title: 'Финализация',
    description: 'Детальная проработка, постобработка и доведение результатов до финального качества.'
  },
  {
    number: '05',
    title: 'Передача результатов',
    description: 'Предоставление готовых материалов в требуемых форматах, консультация по использованию.'
  }
];

const AdvantageItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start">
    <CheckCircle2 className="h-5 w-5 text-neuro-400 mt-0.5 mr-3 flex-shrink-0" />
    <span className="text-white/80">{children}</span>
  </div>
);

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-background/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка - Процесс */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
              Процесс работы
            </div>
            
            <h2 className="heading-lg mb-8">
              Как я создаю нейро-дизайн проекты
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`glass-card p-6 rounded-xl transition-all duration-500 cursor-pointer ${
                    activeStep === index ? 'bg-white/10 border border-neuro-600/30 shadow-[0_0_20px_rgba(120,100,255,0.1)]' : 'bg-white/5 border border-white/10'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center">
                    <div className={`text-lg font-display font-bold mr-4 ${
                      activeStep === index ? 'text-neuro-300' : 'text-white/60'
                    }`}>
                      {step.number}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${
                        activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-white/70 pt-2">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Правая колонка - Преимущества */}
          <div className="lg:pl-8">
            <div className="glass-card p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-display font-medium mb-6">
                Преимущества моего подхода
              </h3>
              
              <div className="space-y-4 mb-8">
                <AdvantageItem>
                  Уникальность результатов благодаря тренировке собственных моделей
                </AdvantageItem>
                <AdvantageItem>
                  Высокое качество всех материалов с проработкой деталей
                </AdvantageItem>
                <AdvantageItem>
                  Эффективное использование времени и ресурсов
                </AdvantageItem>
                <AdvantageItem>
                  Интеграция брендинга и фирменного стиля в нейросетевые материалы
                </AdvantageItem>
                <AdvantageItem>
                  Гибкая адаптация под изменяющиеся требования проекта
                </AdvantageItem>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="text-3xl font-display font-bold text-neuro-300">94%</div>
                    <div className="text-white/60 text-sm">возвращаются для новых проектов</div>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-display font-bold text-neuro-300">3-5 дней</div>
                    <div className="text-white/60 text-sm">среднее время реализации</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
