
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Clock, Tag } from 'lucide-react';

// Категории для фильтрации
const categories = [
  'Все',
  'Нейросети',
  'Генерация',
  'Туториалы',
  'Аналитика',
  'Обзоры'
];

// Данные блога (в реальном приложении это будет API)
const blogPosts = [
  {
    id: 1,
    title: 'Как тренировать LORA-модели для создания уникального стиля',
    excerpt: 'Руководство по обучению собственных моделей для генерации изображений с узнаваемым фирменным стилем.',
    content: 'Полный текст статьи о тренировке LORA-моделей...',
    category: 'Туториалы',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    date: '15 октября 2023',
    author: 'Алексей',
    readTime: '8 мин',
    tags: ['lora', 'stable-diffusion', 'обучение-моделей'],
    slug: 'how-to-train-lora-models'
  },
  {
    id: 2,
    title: 'Тренды нейросетевого дизайна 2023: что нас ждет в будущем',
    excerpt: 'Анализ текущих трендов в области ИИ-дизайна и прогнозы развития технологий на ближайший год.',
    content: 'Полный текст статьи о трендах...',
    category: 'Аналитика',
    image: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?auto=format&fit=crop&q=80',
    date: '2 ноября 2023',
    author: 'Мария',
    readTime: '6 мин',
    tags: ['тренды', 'аналитика', 'нейросети'],
    slug: 'neural-design-trends-2023'
  },
  {
    id: 3,
    title: 'Сравнение топовых AI-моделей для генерации изображений',
    excerpt: 'Детальное сравнение Midjourney, DALL-E 3, Stable Diffusion и других ведущих моделей для разных задач.',
    content: 'Полный текст статьи о сравнении моделей...',
    category: 'Обзоры',
    image: 'https://images.unsplash.com/photo-1624628639856-100bf817fd35?auto=format&fit=crop&q=80',
    date: '28 октября 2023',
    author: 'Алексей',
    readTime: '10 мин',
    tags: ['midjourney', 'dalle', 'stable-diffusion', 'сравнение'],
    slug: 'top-ai-models-comparison'
  },
  {
    id: 4,
    title: 'Оптимизация промптов для Midjourney: полное руководство',
    excerpt: 'Как создавать эффективные промпты для получения наилучших результатов в Midjourney v5.',
    content: 'Полный текст статьи об оптимизации промптов...',
    category: 'Туториалы',
    image: 'https://images.unsplash.com/photo-1633265486501-0cf524a07213?auto=format&fit=crop&q=80',
    date: '5 ноября 2023',
    author: 'Наталья',
    readTime: '12 мин',
    tags: ['midjourney', 'промпты', 'генерация'],
    slug: 'midjourney-prompt-optimization'
  },
  {
    id: 5,
    title: 'Как использовать ControlNet для точного контроля генерации',
    excerpt: 'Практическое руководство по использованию ControlNet для создания изображений с точной композицией и позами.',
    content: 'Полный текст статьи о ControlNet...',
    category: 'Туториалы',
    image: 'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&q=80',
    date: '20 октября 2023',
    author: 'Михаил',
    readTime: '9 мин',
    tags: ['controlnet', 'stable-diffusion', 'композиция'],
    slug: 'controlnet-guide'
  },
  {
    id: 6,
    title: 'Этические вопросы нейросетевого дизайна и авторского права',
    excerpt: 'Обсуждение этических аспектов использования нейросетей для создания контента и юридические нюансы.',
    content: 'Полный текст статьи об этике и авторском праве...',
    category: 'Аналитика',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80',
    date: '12 ноября 2023',
    author: 'Екатерина',
    readTime: '7 мин',
    tags: ['этика', 'авторское-право', 'юриспруденция'],
    slug: 'ethical-issues-ai-design'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Блог | НейроДизайн';
  }, []);

  // Фильтрация постов при изменении категории или поискового запроса
  useEffect(() => {
    let result = blogPosts;
    
    // Фильтр по категории
    if (selectedCategory !== 'Все') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Фильтр по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query) || 
          post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, searchQuery]);

  // Загрузка дополнительных постов при нажатии "Показать больше"
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredPosts.length));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            Мой блог
          </div>
          <h1 className="heading-xl mb-6">Статьи о нейросетях и ИИ-дизайне</h1>
          <p className="text-lg text-white/70">
            Исследуйте мои статьи о генерации изображений, обучении моделей, аналитике трендов и практических 
            руководствах по использованию нейросетей.
          </p>
        </div>

        {/* Панель фильтров и поиска */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Фильтры категорий */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                    selectedCategory === category 
                      ? 'bg-neuro-600 text-white border-neuro-500' 
                      : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Поиск */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-2.5 rounded-lg outline-none focus:border-neuro-500 transition-colors text-white"
              />
            </div>
          </div>
        </div>

        {/* Сообщение если статей не найдено */}
        {filteredPosts.length === 0 && (
          <div className="glass-card p-8 rounded-xl text-center">
            <p className="text-lg text-white/70 mb-4">
              По вашему запросу статьи не найдены
            </p>
            <button 
              className="text-neuro-300 hover:text-neuro-200 transition-colors"
              onClick={() => {
                setSelectedCategory('Все');
                setSearchQuery('');
              }}
            >
              Сбросить все фильтры
            </button>
          </div>
        )}

        {/* Сетка статей */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(0, visibleCount).map((post) => (
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
                <div className="flex items-center mb-3">
                  <span 
                    className="text-xs bg-neuro-600/30 text-neuro-300 px-2.5 py-1 rounded-full"
                  >
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-medium mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-white/70 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="flex items-center text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-white/60 space-x-4 pt-4 border-t border-white/10">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    <span>{post.date}</span>
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

        {/* Кнопка "Показать больше" */}
        {visibleCount < filteredPosts.length && (
          <div className="mt-12 text-center">
            <button 
              className="btn-secondary"
              onClick={loadMore}
            >
              Показать больше
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
