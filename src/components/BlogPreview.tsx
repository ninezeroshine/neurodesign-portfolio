
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Как тренировать LORA-модели для создания уникального стиля',
    excerpt: 'Руководство по обучению собственных моделей для генерации изображений с узнаваемым фирменным стилем.',
    category: 'Туториалы',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    date: '15 октября 2023',
    author: 'Алексей',
    readTime: '8 мин',
    slug: 'how-to-train-lora-models'
  },
  {
    id: 2,
    title: 'Тренды нейросетевого дизайна 2023: что нас ждет в будущем',
    excerpt: 'Анализ текущих трендов в области ИИ-дизайна и прогнозы развития технологий на ближайший год.',
    category: 'Аналитика',
    image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80',
    date: '2 ноября 2023',
    author: 'Мария',
    readTime: '6 мин',
    slug: 'neural-design-trends-2023'
  },
  {
    id: 3,
    title: 'Сравнение топовых AI-моделей для генерации изображений',
    excerpt: 'Детальное сравнение Midjourney, DALL-E 3, Stable Diffusion и других ведущих моделей для разных задач.',
    category: 'Обзоры',
    image: 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?auto=format&fit=crop&q=80',
    date: '28 октября 2023',
    author: 'Алексей',
    readTime: '10 мин',
    slug: 'top-ai-models-comparison'
  }
];

const BlogPreview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
              Мой блог
            </div>
            <h2 className="heading-lg max-w-xl">
              Статьи о нейросетях и ИИ-дизайне
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="mt-6 md:mt-0 group inline-flex items-center text-neuro-300 hover:text-neuro-200 transition-colors"
          >
            <span className="mr-2">Все статьи</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="glass-card rounded-xl overflow-hidden card-hover h-full flex flex-col"
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-neuro-300 mb-2">{post.category}</div>
                <h3 className="text-xl font-display font-medium mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-white/70 mb-6 line-clamp-2 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center text-sm text-white/60 space-x-4 pt-4 border-t border-white/10">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
