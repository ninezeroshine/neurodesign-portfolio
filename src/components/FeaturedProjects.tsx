
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Данные для карточек проектов
const featuredProjects = [
  {
    id: 1,
    title: 'Нейрофотосессия для бренда одежды',
    category: 'Генерация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    slug: 'fashion-brand-photoshoot',
  },
  {
    id: 2,
    title: 'Анимированное промо для продукта',
    category: 'Анимация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1633448492874-2710cba85454?auto=format&fit=crop&q=80',
    slug: 'product-promo-animation',
  },
  {
    id: 3,
    title: 'Дизайн логотипа с применением LORA',
    category: 'LORA-модели',
    imageUrl: 'https://images.unsplash.com/photo-1633412802994-5d53482afc98?auto=format&fit=crop&q=80',
    slug: 'lora-logo-design',
  },
  {
    id: 4,
    title: 'Рекламное видео с нейросетями',
    category: 'Монтаж видео',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
    slug: 'neuro-commercial-video',
  },
];

const FeaturedProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(0);

  useEffect(() => {
    // Появление проектов при попадании в область видимости
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setVisibleProjects(featuredProjects.length);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('featured-projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="featured-projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
              Избранные проекты
            </div>
            <h2 className="heading-lg max-w-xl">
              Мои последние работы в сфере нейро-дизайна
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="mt-6 md:mt-0 group inline-flex items-center text-neuro-300 hover:text-neuro-200 transition-colors"
          >
            <span className="mr-2">Все проекты</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={`group relative overflow-hidden rounded-xl aspect-[4/5] card-hover project-card ${
                index < visibleProjects ? 'animate' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Изображение */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90" />
              
              {/* Контент */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="text-sm text-neuro-300 mb-2">{project.category}</div>
                <h3 className="text-xl font-display font-medium text-white leading-tight mb-4">
                  {project.title}
                </h3>
                <div className="w-12 h-0.5 bg-neuro-500 transform origin-left transition-all duration-300 group-hover:w-24" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
