
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Image, Video, Zap, PenTool, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 'lora',
    title: 'Тренировка LORA-моделей',
    description: 'Создание и тренировка уникальных LORA-моделей для генерации изображений в вашем фирменном стиле',
    icon: <Code className="h-7 w-7" />,
    link: '/services#lora'
  },
  {
    id: 'images',
    title: 'Генерация изображений',
    description: 'Создание высококачественных изображений с помощью нейросетей для ваших проектов и брендов',
    icon: <Image className="h-7 w-7" />,
    link: '/services#images'
  },
  {
    id: 'animation',
    title: 'Анимация изображений',
    description: 'Превращение статичных изображений в захватывающие анимации с помощью нейросетей',
    icon: <Video className="h-7 w-7" />,
    link: '/services#animation'
  },
  {
    id: 'video',
    title: 'Монтаж видео',
    description: 'Профессиональный монтаж коммерческих видео с интеграцией нейросетевых эффектов',
    icon: <PenTool className="h-7 w-7" />,
    link: '/services#video'
  },
  {
    id: 'upscale',
    title: 'Апскейл изображений',
    description: 'Улучшение качества и увеличение разрешения изображений с сохранением деталей',
    icon: <Zap className="h-7 w-7" />,
    link: '/services#upscale'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-neuro-800/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-aurora-purple/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            Мои услуги
          </div>
          <h2 className="heading-lg mb-6">
            Полный спектр услуг нейро-дизайна для вашего бизнеса
          </h2>
          <p className="text-lg text-white/70">
            Использую передовые технологии искусственного интеллекта для создания уникальных 
            визуальных материалов, которые выделят ваш бренд среди конкурентов
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group glass-card p-6 md:p-8 rounded-xl card-hover"
            >
              <div className="flex flex-col h-full">
                <div className="bg-neuro-600/20 p-3 rounded-lg w-fit mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-display font-medium mb-3">{service.title}</h3>
                
                <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
                
                <div className="flex items-center text-sm font-medium text-neuro-300 group-hover:text-neuro-200 transition-colors">
                  <span className="mr-2">Подробнее</span>
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
