import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, Filter } from 'lucide-react';

// Данные проектов
const allProjects = [
  {
    id: 1,
    title: 'Нейрофотосессия для бренда одежды',
    category: 'Генерация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    slug: 'fashion-brand-photoshoot',
    tags: ['нейрофотосессия', 'мода', 'бренд']
  },
  {
    id: 2,
    title: 'Анимированное промо для продукта',
    category: 'Анимация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1633448492874-2710cba85454?auto=format&fit=crop&q=80',
    slug: 'product-promo-animation',
    tags: ['анимация', 'промо', 'продукт']
  },
  {
    id: 3,
    title: 'Дизайн логотипа с применением LORA',
    category: 'LORA-модели',
    imageUrl: 'https://images.unsplash.com/photo-1633412802994-5d53482afc98?auto=format&fit=crop&q=80',
    slug: 'lora-logo-design',
    tags: ['логотип', 'lora', 'брендинг']
  },
  {
    id: 4,
    title: 'Рекламное видео с нейросетями',
    category: 'Монтаж видео',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80',
    slug: 'neuro-commercial-video',
    tags: ['видео', 'реклама', 'монтаж']
  },
  {
    id: 5,
    title: 'Апскейл архивных фотографий',
    category: 'Апскейл изображений',
    imageUrl: 'https://images.unsplash.com/photo-1552084117-56a987666449?auto=format&fit=crop&q=80',
    slug: 'archive-photos-upscale',
    tags: ['апскейл', 'ретро', 'реставрация']
  },
  {
    id: 6,
    title: 'Генерация концепт-артов для игры',
    category: 'Генерация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80',
    slug: 'game-concept-art',
    tags: ['концепт-арт', 'игра', 'фэнтези']
  },
  {
    id: 7,
    title: 'Серия нейрофотосессий для косметического бренда',
    category: 'Генерация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1614859529913-0ee435cc56b1?auto=format&fit=crop&q=80',
    slug: 'cosmetics-brand-photoshoot',
    tags: ['нейрофотосессия', 'косметика', 'серия']
  },
  {
    id: 8,
    title: 'Анимация персонажа для рекламы',
    category: 'Анимация изображений',
    imageUrl: 'https://images.unsplash.com/photo-1633186223008-25a1070115fc?auto=format&fit=crop&q=80',
    slug: 'character-animation',
    tags: ['анимация', 'персонаж', 'реклама']
  },
  {
    id: 9,
    title: 'МТС и Британка: Связь будущего',
    category: 'Генерация изображений',
    imageUrl: '/MTC/Flux.1_02771_bbjaz_1740303741_bqfet_1740303744.png',
    slug: 'mts-britanka-future-connection',
    tags: ['конкурс', 'лора', 'генерация', 'анимация', 'видео']
  }
];

// Категории для фильтрации
const categories = [
  'Все',
  'Генерация изображений',
  'Анимация изображений',
  'LORA-модели',
  'Монтаж видео',
  'Апскейл изображений'
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Проекты | НейроДизайн';
  }, []);

  // Фильтрация проектов при изменении категории или поискового запроса
  useEffect(() => {
    let result = allProjects;
    
    // Фильтр по категории
    if (selectedCategory !== 'Все') {
      result = result.filter(project => project.category === selectedCategory);
    }
    
    // Фильтр по поисковому запросу
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
  }, [selectedCategory, searchQuery]);

  // Загрузка дополнительных проектов при нажатии "Показать больше"
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredProjects.length));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            Портфолио
          </div>
          <h1 className="heading-xl mb-6">Проекты нейро-дизайна</h1>
          <p className="text-lg text-white/70">
            Исследуйте мои работы в области генерации изображений, анимации и видеомонтажа 
            с использованием передовых нейросетевых технологий.
          </p>
        </div>

        {/* Панель фильтров и поиска */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Мобильная кнопка фильтров */}
            <button 
              className="md:hidden glass-card flex items-center justify-between p-4 rounded-lg"
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            >
              <span className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                <span>Фильтры</span>
              </span>
              <span>{selectedCategory}</span>
            </button>

            {/* Десктопные фильтры категорий */}
            <div className="hidden md:flex gap-2 overflow-x-auto pb-2">
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
                <SearchIcon className="h-5 w-5 text-white/40" />
              </div>
              <input
                type="text"
                placeholder="Поиск проектов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 w-full pl-10 pr-4 py-2.5 rounded-lg outline-none focus:border-neuro-500 transition-colors text-white"
              />
            </div>
          </div>

          {/* Мобильные фильтры (выпадающие) */}
          {isMobileFiltersOpen && (
            <div className="md:hidden mt-4 glass-card p-4 rounded-lg animate-fade-in">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
                      selectedCategory === category 
                        ? 'bg-neuro-600 text-white border-neuro-500' 
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsMobileFiltersOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Сообщение если проектов не найдено */}
        {filteredProjects.length === 0 && (
          <div className="glass-card p-8 rounded-xl text-center">
            <p className="text-lg text-white/70 mb-4">
              По вашему запросу проекты не найдены
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

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] card-hover project-card animate"
              style={{ animationDelay: `${index * 100}ms` }}
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-0.5 bg-neuro-500 transform origin-left transition-all duration-300 group-hover:w-24" />
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка "Показать больше" */}
        {visibleCount < filteredProjects.length && (
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

export default Projects;
