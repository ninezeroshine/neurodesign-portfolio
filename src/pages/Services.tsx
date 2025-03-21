
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Image, Video, Zap, PenTool, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    id: 'lora',
    title: 'Тренировка LORA-моделей',
    description: 'Создание и обучение уникальных нейросетевых моделей для генерации изображений в конкретном стиле или с учетом специфики бренда.',
    icon: <Code className="h-8 w-8" />,
    features: [
      'Создание уникального стиля генерации на основе ваших референсов',
      'Точная интеграция фирменных элементов бренда',
      'Оптимизация модели для различных сценариев использования',
      'Обучение на 30-50 референсных изображениях',
      'Доработка и уточнение модели по результатам тестов'
    ],
    caseStudy: {
      title: 'Кейс: LORA-модель для fashion-бренда',
      description: 'Разработал кастомную модель для генерации изображений в стиле бренда, что позволило снизить затраты на фотосессии на 60% и создавать до 100 новых изображений для каталога ежемесячно.',
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'images',
    title: 'Генерация изображений',
    description: 'Создание высококачественных изображений с помощью нейросетей для маркетинговых материалов, социальных сетей, каталогов и других целей.',
    icon: <Image className="h-8 w-8" />,
    features: [
      'Фотореалистичные изображения с высоким разрешением до 4K',
      'Точное следование брендбуку и фирменному стилю',
      'Создание нейрофотосессий с виртуальными моделями',
      'Генерация концепт-артов и иллюстраций',
      'Постобработка и ретушь результатов'
    ],
    caseStudy: {
      title: 'Кейс: Нейрофотосессия для продукта',
      description: 'Создал серию из 30 фотореалистичных изображений продукта в различных контекстах использования, что увеличило конверсию на сайте на 25%.',
      imageUrl: 'https://images.unsplash.com/photo-1611042553365-9b534ed86b67?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'animation',
    title: 'Анимация изображений',
    description: 'Превращение статичных изображений в динамические анимации с помощью нейросетевых технологий для создания впечатляющего видеоконтента.',
    icon: <Video className="h-8 w-8" />,
    features: [
      'Оживление портретов и персонажей',
      'Анимация элементов дизайна и логотипов',
      'Создание плавных переходов между кадрами',
      'Генерация анимированных эффектов и частиц',
      'Интеграция с музыкой и звуковыми эффектами'
    ],
    caseStudy: {
      title: 'Кейс: Анимация персонажа',
      description: 'Анимировал статичного персонажа бренда для серии рекламных роликов, что привело к увеличению узнаваемости на 40%.',
      imageUrl: 'https://images.unsplash.com/photo-1633186223008-25a1070115fc?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'video',
    title: 'Монтаж видео',
    description: 'Профессиональный монтаж и постпродакшн видеоматериалов с интеграцией нейросетевых эффектов и анимаций для коммерческого использования.',
    icon: <PenTool className="h-8 w-8" />,
    features: [
      'Монтаж рекламных роликов с нейросетевыми вставками',
      'Создание динамичных промо-видео',
      'Цветокоррекция и грейдинг в фирменном стиле',
      'Интеграция спецэффектов и переходов',
      'Финальная обработка звука и наложение музыки'
    ],
    caseStudy: {
      title: 'Кейс: Коммерческое видео',
      description: 'Смонтировал рекламный ролик с интеграцией нейросетевых эффектов для технологического стартапа, что привело к увеличению инвестиций на раннем этапе.',
      imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 'upscale',
    title: 'Апскейл изображений',
    description: 'Увеличение разрешения и улучшение качества существующих изображений с помощью специализированных нейросетей для различных задач.',
    icon: <Zap className="h-8 w-8" />,
    features: [
      'Увеличение разрешения до 4K с сохранением деталей',
      'Восстановление старых и поврежденных изображений',
      'Улучшение качества фотографий с низким разрешением',
      'Повышение детализации архивных материалов',
      'Расширение области изображений с помощью нейросетей'
    ],
    caseStudy: {
      title: 'Кейс: Реставрация архивных фотографий',
      description: 'Восстановил и улучшил коллекцию из 50 исторических фотографий для музейной экспозиции, значительно повысив их качество и детализацию.',
      imageUrl: 'https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&q=80'
    }
  }
];

const ServiceCard = ({ service, isActive, onClick }) => (
  <div 
    id={service.id}
    className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
      isActive ? 'border-2 border-neuro-500 bg-white/10' : 'border border-white/10 hover:border-white/20'
    }`}
    onClick={onClick}
  >
    <div className="flex items-start">
      <div className={`bg-neuro-600/20 p-3 rounded-lg mr-4 ${isActive ? 'text-neuro-300' : 'text-white/80'}`}>
        {service.icon}
      </div>
      <div>
        <h3 className="text-xl font-display font-medium mb-2">{service.title}</h3>
        <p className="text-white/70 text-sm line-clamp-2">{service.description}</p>
      </div>
    </div>
  </div>
);

const ServiceDetail = ({ service }) => (
  <div className="glass-card p-8 md:p-10 rounded-xl animate-fade-in">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <div className="bg-neuro-600/20 p-4 rounded-lg w-fit mb-6">
          {service.icon}
        </div>
        
        <h2 className="heading-md mb-4">{service.title}</h2>
        <p className="text-white/80 mb-6">{service.description}</p>
        
        <h3 className="text-xl font-medium mb-4">Что включено:</h3>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-neuro-400 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link to="/contact" className="btn-primary inline-flex items-center">
          <span>Заказать услугу</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      
      <div>
        <div className="glass-card rounded-xl overflow-hidden">
          <img 
            src={service.caseStudy.imageUrl} 
            alt={service.caseStudy.title} 
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-medium mb-3">{service.caseStudy.title}</h3>
            <p className="text-white/70">{service.caseStudy.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    document.title = 'Услуги | НейроДизайн';
    
    // Проверяем наличие хэша в URL для скролла к конкретной услуге
    if (location.hash) {
      const serviceId = location.hash.replace('#', '');
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setActiveService(service);
        // Небольшая задержка для корректного скролла после рендера
        setTimeout(() => {
          document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            Мои услуги
          </div>
          <h1 className="heading-xl mb-6">Профессиональные услуги нейро-дизайна</h1>
          <p className="text-lg text-white/70">
            Я предлагаю полный спектр услуг по созданию и использованию нейросетевых материалов —
            от обучения собственных моделей до создания готовых изображений и видео.
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService.id === service.id}
              onClick={() => setActiveService(service)}
            />
          ))}
        </div>

        {/* Детальная информация */}
        <ServiceDetail service={activeService} />
        
        {/* Процесс работы */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
              Процесс работы
            </div>
            <h2 className="heading-lg mb-6">
              Как я работаю с клиентами
            </h2>
            <p className="text-lg text-white/70">
              Прозрачный и эффективный процесс от первого контакта до финальной сдачи проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Брифинг', desc: 'Обсуждение целей, требований и ожиданий от проекта' },
              { title: 'Планирование', desc: 'Выбор оптимальных технологий и методов реализации' },
              { title: 'Прототипы', desc: 'Создание и согласование первых вариантов' },
              { title: 'Доработка', desc: 'Внесение правок и улучшений на основе фидбека' },
              { title: 'Финализация', desc: 'Предоставление готовых материалов в требуемых форматах' }
            ].map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-xl relative">
                {/* Номер шага */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-neuro-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-medium mb-3 mt-2">{step.title}</h3>
                <p className="text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Контактная секция */}
        <div className="mt-20">
          <div className="glass-card p-8 md:p-12 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-lg mb-4">
                  Готовы начать проект?
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Свяжитесь со мной для обсуждения вашего проекта и получения индивидуального предложения.
                </p>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  <span>Связаться для консультации</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="space-y-6 md:pl-8">
                <div className="glass-card p-5 rounded-xl flex items-center">
                  <div className="bg-neuro-600/20 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-neuro-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Индивидуальный подход</h3>
                    <p className="text-white/70 text-sm">Каждый проект уникален и требует особого внимания</p>
                  </div>
                </div>
                
                <div className="glass-card p-5 rounded-xl flex items-center">
                  <div className="bg-neuro-600/20 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-neuro-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Фиксированные цены</h3>
                    <p className="text-white/70 text-sm">Чёткий бюджет оговаривается на этапе брифинга</p>
                  </div>
                </div>
                
                <div className="glass-card p-5 rounded-xl flex items-center">
                  <div className="bg-neuro-600/20 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-neuro-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Соблюдение сроков</h3>
                    <p className="text-white/70 text-sm">Гарантия своевременной сдачи проекта</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
