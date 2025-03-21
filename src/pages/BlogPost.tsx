
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight, Share2, Heart } from 'lucide-react';

// Данные блога (в реальном приложении это будет API)
const blogPosts = [
  {
    id: 1,
    title: 'Как тренировать LORA-модели для создания уникального стиля',
    excerpt: 'Руководство по обучению собственных моделей для генерации изображений с узнаваемым фирменным стилем.',
    content: `
      <h2>Введение в LORA-модели</h2>
      <p>Low-Rank Adaptation (LORA) — это метод тонкой настройки больших моделей, который значительно уменьшает количество обучаемых параметров при сохранении высокого качества результатов. Это позволяет создавать собственные стили и адаптировать модели под конкретные задачи без необходимости переобучения всей модели.</p>
      
      <p>В этой статье мы рассмотрим процесс создания и обучения LORA-моделей для генерации изображений в фирменном стиле вашего бренда.</p>
      
      <h2>Подготовка данных для обучения</h2>
      <p>Первый и самый важный шаг — подготовка качественного набора данных. Для обучения LORA-модели обычно требуется от 20 до 50 изображений.</p>
      
      <ul>
        <li>Выберите изображения высокого качества, соответствующие желаемому стилю</li>
        <li>Убедитесь, что изображения имеют схожую стилистику</li>
        <li>Удалите метаданные и оптимизируйте размер изображений</li>
        <li>Добавьте соответствующие теги для каждого изображения</li>
      </ul>
      
      <h2>Настройка параметров обучения</h2>
      <p>Правильный выбор параметров критически важен для получения качественной модели:</p>
      
      <pre>
      {
        rank: 32,
        alpha: 16,
        learning_rate: 1e-4,
        epochs: 100,
        batch_size: 1
      }
      </pre>
      
      <p>Рекомендуемые значения rank обычно находятся в диапазоне от 4 до 128, при этом 32 часто является хорошей отправной точкой. Чем выше значение, тем больше параметров модель сможет изменить, но возрастает риск переобучения.</p>
      
      <h2>Процесс обучения</h2>
      <p>После настройки параметров вы можете начать процесс обучения. Используйте скрипты из репозитория kohya-ss или собственные инструменты для запуска тренировки.</p>
      
      <p>Во время обучения важно следить за потерями и визуально оценивать результаты. Процесс обучения может занять от нескольких часов до нескольких дней в зависимости от вашего оборудования.</p>
      
      <h2>Тестирование и корректировка</h2>
      <p>После завершения обучения необходимо протестировать модель на различных промптах:</p>
      
      <ol>
        <li>Начните с базовых промптов, добавляя триггер-слово вашей LORA</li>
        <li>Экспериментируйте с весами LORA (0.5-1.0 часто дают хорошие результаты)</li>
        <li>Проверьте результаты на разных сидах</li>
        <li>Оцените, как модель реагирует на сложные композиции</li>
      </ol>
      
      <p>Если результаты не удовлетворяют ожиданиям, можно скорректировать датасет или параметры и переобучить модель.</p>
      
      <h2>Интеграция в рабочий процесс</h2>
      <p>После успешного обучения LORA-модели, вы можете интегрировать её в свой рабочий процесс. Это может включать создание промптов-шаблонов для быстрой генерации в фирменном стиле или автоматизацию процесса с помощью API.</p>
      
      <p>Результаты можно дополнительно улучшать с помощью постобработки и интеграции с другими инструментами.</p>
      
      <h2>Заключение</h2>
      <p>LORA-модели представляют собой мощный инструмент для создания уникального стиля генерации изображений. Правильно обученная модель может значительно ускорить процесс создания контента в узнаваемом фирменном стиле.</p>
    `,
    category: 'Туториалы',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    date: '15 октября 2023',
    author: 'Алексей',
    readTime: '8 мин',
    tags: ['lora', 'stable-diffusion', 'обучение-моделей'],
    slug: 'how-to-train-lora-models',
    relatedPosts: [2, 3, 5]
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
    slug: 'neural-design-trends-2023',
    relatedPosts: [1, 3, 6]
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
    slug: 'top-ai-models-comparison',
    relatedPosts: [1, 4, 5]
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
    slug: 'midjourney-prompt-optimization',
    relatedPosts: [1, 3, 5]
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
    slug: 'controlnet-guide',
    relatedPosts: [1, 3, 4]
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
    slug: 'ethical-issues-ai-design',
    relatedPosts: [2, 3, 5]
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Здесь можно заменить на API запрос
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} | НейроДизайн`;
      
      // Находим связанные посты
      if (foundPost.relatedPosts) {
        const related = blogPosts.filter(p => foundPost.relatedPosts.includes(p.id));
        setRelatedPosts(related);
      }
    } else {
      // Пост не найден, переходим на страницу 404
      navigate('/not-found');
    }
    setLoading(false);
  }, [slug, navigate]);

  const handleShare = () => {
    if (navigator.share && post) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(err => {
        console.error('Ошибка при попытке поделиться:', err);
      });
    } else {
      // Копирование URL в буфер обмена, если API совместного использования недоступно
      navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="glass-card p-8 rounded-xl">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-white/10 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/10 rounded"></div>
                <div className="h-4 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Хлебные крошки */}
        <div className="mb-6">
          <nav className="flex items-center text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">Блог</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.title}</span>
          </nav>
        </div>

        {/* Заголовок статьи */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            {post.category}
          </div>
          <h1 className="heading-xl mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/70">
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

        {/* Главное изображение */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Боковая панель (только для десктопа) */}
        <div className="hidden lg:block fixed top-1/2 left-12 transform -translate-y-1/2 space-y-6">
          <button 
            className={`p-3 rounded-full transition-colors ${liked ? 'bg-neuro-600 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
            onClick={() => setLiked(!liked)}
            aria-label="Лайк"
          >
            <Heart className={liked ? 'fill-white' : ''} />
          </button>
          <button 
            className="p-3 bg-white/5 rounded-full text-white/70 hover:bg-white/10 transition-colors"
            onClick={handleShare}
            aria-label="Поделиться"
          >
            <Share2 />
          </button>
        </div>

        {/* Содержание статьи */}
        <div className="max-w-3xl mx-auto">
          <article className="glass-card p-8 md:p-10 rounded-xl prose prose-invert prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="text-white/90 prose-a:text-neuro-300 prose-headings:text-white prose-strong:text-white prose-li:text-white/90"
            />
          </article>

          {/* Теги и действия (мобильная версия) */}
          <div className="mt-8 lg:hidden">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/blog?tag=${tag}`}
                  className="flex items-center text-sm bg-white/10 text-white/80 px-3 py-1.5 rounded-full hover:bg-white/15 transition-colors"
                >
                  <Tag className="h-4 w-4 mr-1.5" />
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <button 
                className={`flex-1 py-2.5 rounded-lg flex items-center justify-center transition-colors ${
                  liked ? 'bg-neuro-600 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-5 w-5 mr-2 ${liked ? 'fill-white' : ''}`} />
                <span>{liked ? 'Понравилось' : 'Нравится'}</span>
              </button>
              <button 
                className="flex-1 bg-white/5 py-2.5 rounded-lg flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5 mr-2" />
                <span>Поделиться</span>
              </button>
            </div>
          </div>

          {/* Информация об авторе */}
          <div className="glass-card p-6 rounded-xl mt-10 flex items-center">
            <div className="w-16 h-16 rounded-full bg-neuro-600/20 flex items-center justify-center text-2xl font-bold mr-4">
              {post.author[0]}
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">{post.author}</h3>
              <p className="text-white/70">Эксперт по нейросетевым технологиям и генерации изображений</p>
            </div>
          </div>

          {/* Связанные статьи */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="heading-md mb-8">Связанные статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="glass-card rounded-xl overflow-hidden card-hover h-full flex flex-col"
                  >
                    <div className="overflow-hidden h-40">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-medium mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <div className="flex items-center text-xs text-white/60 mt-auto">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Навигация */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <Link 
              to="/blog"
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <span>Все статьи</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
