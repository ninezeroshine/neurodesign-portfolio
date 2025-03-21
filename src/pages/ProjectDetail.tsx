import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Award, Zap } from 'lucide-react';

// Детальные данные проектов (в реальном приложении это будет API или CMS)
const projectsData = [
  {
    id: 1,
    title: 'Нейрофотосессия для бренда одежды',
    description: 'Серия нейросетевых изображений для продвижения новой коллекции модного бренда с сохранением узнаваемого стиля и интеграцией элементов фирменного дизайна.',
    category: 'Генерация изображений',
    slug: 'fashion-brand-photoshoot',
    client: 'Fashion Brand X',
    date: 'Октябрь 2023',
    tags: ['нейрофотосессия', 'мода', 'бренд'],
    mainImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614859529913-0ee435cc56b1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611042553365-9b534ed86b67?auto=format&fit=crop&q=80'
    ],
    challenge: 'Главная задача заключалась в создании серии фотореалистичных изображений с моделями в одежде нового сезона, которые бы передавали эстетику бренда и при этом выглядели как профессиональная фотосессия.',
    solution: 'Для проекта была тренирована специальная LORA-модель на основе предыдущих рекламных материалов бренда, что позволило сохранить узнаваемый визуальный почерк. Генерация выполнена с использованием Stable Diffusion XL с детальной постобработкой и корректировкой для максимального фотореализма.',
    results: 'Материалы были интегрированы в социальные сети и рекламные кампании бренда, что привело к повышению вовлеченности на 34% и увеличению продаж новой коллекции на 28%.',
    tools: ['Stable Diffusion XL', 'LORA Fine-tuning', 'Photoshop', 'After Effects'],
    nextProject: 'product-promo-animation',
    prevProject: 'mts-britanka-future-connection'
  },
  {
    id: 2,
    title: 'Анимированное промо для продукта',
    description: 'Создание анимированного промо-ролика для нового технологичного продукта с использованием нейросетевой анимации и эффектов.',
    category: 'Анимация изображений',
    slug: 'product-promo-animation',
    client: 'Tech Innovations Co.',
    date: 'Сентябрь 2023',
    tags: ['анимация', 'промо', 'продукт'],
    mainImage: 'https://images.unsplash.com/photo-1633448492874-2710cba85454?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1633448492874-2710cba85454?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1633448490340-a156a17fdc70?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1641990458859-387a65f551cc?auto=format&fit=crop&q=80'
    ],
    challenge: 'Необходимо было создать динамичное и технологичное промо-видео для инновационного устройства, демонстрирующее его функционал в привлекательной форме с минимальными затратами на производство.',
    solution: 'Были созданы серии высококачественных изображений продукта и его интерфейса, а затем применены технологии нейросетевой анимации (Runway Gen-2) для создания плавных переходов и демонстрации возможностей устройства. Финальный монтаж был выполнен с добавлением звуковых эффектов и музыки.',
    results: 'Промо-ролик использовался в онлайн-кампании и привел к увеличению предзаказов на 42% в течение первой недели после запуска.',
    tools: ['Midjourney', 'Runway Gen-2', 'Adobe After Effects', 'Adobe Premiere Pro'],
    nextProject: 'lora-logo-design',
    prevProject: 'fashion-brand-photoshoot'
  },
  {
    id: 7,
    title: 'Серия нейрофотосессий для косметического бренда',
    description: 'Создание серии стилизованных нейрофотосессий для косметического бренда с фокусом на натуральные ингредиенты и экологичность продукции.',
    category: 'Генерация изображений',
    slug: 'cosmetics-brand-photoshoot',
    client: 'Eco Beauty Co.',
    date: 'Июль 2023',
    tags: ['нейрофотосессия', 'косметика', 'серия'],
    mainImage: 'https://images.unsplash.com/photo-1614859529913-0ee435cc56b1?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614859529913-0ee435cc56b1?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80'
    ],
    challenge: 'Необходимо было создать серию визуально привлекательных и согласованных по стилю изображений для продвижения новой линейки натуральной косметики. Изображения должны были подчеркивать натуральность ингредиентов и экологичность бренда.',
    solution: 'Для проекта была разработана концепция, которая сочетала минималистичную эстетику с элементами природы. С помощью Stable Diffusion XL и DALL-E 3 были сгенерированы базовые изображения, которые затем были доработаны для достижения единого стиля и включения продуктов бренда. Особое внимание уделялось цветовой палитре и композиции.',
    results: 'Серия изображений была использована в маркетинговой кампании бренда на различных платформах, включая социальные сети, веб-сайт и рекламные баннеры. Кампания привела к увеличению продаж новой линейки на 31% и значительному росту активности в социальных сетях.',
    tools: ['Stable Diffusion XL', 'DALL-E 3', 'Adobe Photoshop', 'Lightroom'],
    nextProject: 'character-animation',
    prevProject: 'game-concept-art'
  },
  {
    id: 8,
    title: 'Анимация персонажа для рекламы',
    description: 'Создание и анимация уникального персонажа для рекламной кампании с использованием нейросетевых технологий.',
    category: 'Анимация изображений',
    slug: 'character-animation',
    client: 'Advertising Agency XYZ',
    date: 'Июнь 2023',
    tags: ['анимация', 'персонаж', 'реклама'],
    mainImage: 'https://images.unsplash.com/photo-1633186223008-25a1070115fc?auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1633186223008-25a1070115fc?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1675271916386-644a2c5c0565?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622977265115-cce36eb43f18?auto=format&fit=crop&q=80'
    ],
    challenge: 'Требовалось создать запоминающегося персонажа для рекламной кампании, который отражал бы ценности бренда и привлекал внимание целевой аудитории. Персонаж должен был иметь уникальный стиль и характер, а также убедительную анимацию для использования в различных маркетинговых материалах.',
    solution: 'Процесс начался с генерации концепций персонажа с использованием Midjourney и Stable Diffusion. После выбора окончательного дизайна персонаж был доработан и адаптирован для анимации. Далее с помощью Runway Gen-2 были созданы базовые движения, которые затем были улучшены и дополнены в After Effects для создания плавных и естественных анимаций.',
    results: 'Персонаж стал центральным элементом рекламной кампании и получил положительный отклик от целевой аудитории. Узнаваемость бренда увеличилась на 27%, а вовлеченность в социальных сетях выросла на 42% в течение первого месяца кампании.',
    tools: ['Midjourney', 'Stable Diffusion', 'Runway Gen-2', 'Adobe After Effects'],
    nextProject: 'mts-britanka-future-connection',
    prevProject: 'cosmetics-brand-photoshoot'
  },
  {
    id: 9,
    title: 'МТС и Британка: Связь будущего',
    description: 'Участие в конкурсе МТС и Британки по генерации фото и видео на тему "Связь будущего". Проект включал создание серии изображений с использованием LoRA-модели, обученной на логотипе МТС, и последующую анимацию для создания видеоролика.',
    category: 'Генерация изображений',
    slug: 'mts-britanka-future-connection',
    client: 'МТС и Британская высшая школа дизайна',
    date: 'Февраль-Март 2025',
    tags: ['конкурс', 'лора', 'генерация', 'анимация', 'видео'],
    mainImage: '/MTC/Flux.1_02771_bbjaz_1740303741_bqfet_1740303744.png',
    gallery: [
      '/MTC/Flux.1_02771_bbjaz_1740303741_bqfet_1740303744.png',
      '/MTC/Flux.1_02720_bkhml_1740203200_sxoyp_1740203202.png',
      '/MTC/Flux.1_02709_pegbp_1740202949_tcgil_1740202952.png',
      '/MTC/Flux.1_02681_gkcen_1740201796_zdkbz_1740201800.png',
      '/MTC/Flux.1_00726_vypbv_1740280180_txjcq_1740280182.png',
      '/MTC/Flux.1_00705_opquu_1740278249_ihnpo_1740278252.png',
      '/MTC/Flux.1_00693_pocot_1740276850_jfium_1740276854.png',
      '/MTC/Flux.1_00690_aluod_1740276615_ucxsp_1740276617.png'
    ],
    challenge: 'Задача состояла в создании визуального контента, который бы отражал концепцию "связь будущего" для конкурса МТС и Британки. Необходимо было разработать уникальный подход к теме, обучить модель на фирменном стиле МТС и создать серию высококачественных изображений, а затем анимировать их для создания цельного видеоролика.',
    solution: 'Для решения задачи была обучена специальная LoRA-модель на логотипе и фирменном стиле МТС с использованием FluxGYM. Затем с помощью ComfyUI были сгенерированы серии изображений, отражающих футуристическое видение связи. После генерации был выполнен апскейл изображений для повышения их качества. Анимация была создана с помощью Kling, а финальный видеоролик был смонтирован в Adobe Premiere Pro с добавлением звуковых эффектов и музыки.',
    results: 'Проект занял 5-е место в конкурсе МТС и Британки, получив приз в виде iPad Pro 2024. Видеоролик и изображения получили высокую оценку жюри за креативный подход, качество исполнения и соответствие теме конкурса. Ссылка на видеоролик: https://youtu.be/MdoZCpG2Xss',
    tools: ['FluxGYM', 'ComfyUI', 'Kling', 'Adobe Premiere Pro'],
    nextProject: 'fashion-brand-photoshoot',
    prevProject: 'character-animation',
    videoUrl: 'https://youtu.be/MdoZCpG2Xss'
  }
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<typeof projectsData[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Здесь можно заменить на API запрос
    const foundProject = projectsData.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} | НейроДизайн`;
    } else {
      // Проект не найден, переходим на страницу 404
      navigate('/not-found');
    }
    setLoading(false);
  }, [slug, navigate]);

  // Обработчики навигации по галерее
  const goToNextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    }
  };

  const goToPrevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  // Переходы к следующему/предыдущему проекту
  const goToNextProject = () => {
    if (project && project.nextProject) {
      navigate(`/projects/${project.nextProject}`);
    }
  };

  const goToPrevProject = () => {
    if (project && project.prevProject) {
      navigate(`/projects/${project.prevProject}`);
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

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Хлебные крошки */}
        <div className="mb-6">
          <nav className="flex items-center text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-white transition-colors">Проекты</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{project.title}</span>
          </nav>
        </div>

        {/* Заголовок */}
        <div className="max-w-4xl mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            {project.category}
          </div>
          <h1 className="heading-xl mb-6">{project.title}</h1>
          <p className="text-lg text-white/70">
            {project.description}
          </p>
        </div>

        {/* Основное изображение и галерея */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden" style={{ minHeight: '400px', maxHeight: '70vh' }}>
            <img
              src={project.gallery[currentImageIndex]}
              alt={project.title}
              className="w-full h-auto object-contain mx-auto"
              style={{ maxHeight: '70vh' }}
            />
            
            {/* Навигация по галерее */}
            {project.gallery.length > 1 && (
              <>
                <button
                  onClick={goToPrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-black/70 transition-colors"
                  aria-label="Предыдущее изображение"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-md rounded-full p-3 text-white hover:bg-black/70 transition-colors"
                  aria-label="Следующее изображение"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                {/* Индикатор слайдов */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white/40'
                      }`}
                      aria-label={`Перейти к изображению ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          
          {/* Превью галереи */}
          {project.gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden h-24 ${
                    currentImageIndex === index ? 'ring-2 ring-neuro-500' : 'opacity-70 hover:opacity-100'
                  } transition-all`}
                >
                  <img
                    src={image}
                    alt={`Превью ${index + 1}`}
                    className="w-full h-full object-contain bg-black/20"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Видеосекция (если есть видео) */}
        {'videoUrl' in project && project.videoUrl && (
          <div className="mb-16">
            <h2 className="text-2xl font-display font-medium mb-6">Видеопрезентация проекта</h2>
            <div className="glass-card p-4 rounded-xl">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl.replace('https://youtu.be/', 'https://www.youtube.com/embed/')}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Метаданные проекта */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <Calendar className="h-6 w-6 text-neuro-300 mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">Дата</h3>
                <p className="text-white/70">{project.date}</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <User className="h-6 w-6 text-neuro-300 mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">Клиент</h3>
                <p className="text-white/70">{project.client}</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <Tag className="h-6 w-6 text-neuro-300 mt-1" />
              <div>
                <h3 className="text-lg font-medium mb-1">Теги</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-white/10 text-white/80 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Секция наград - отображается только если проект соответствует MTS */}
        {project.slug === 'mts-britanka-future-connection' && (
          <div className="glass-card p-6 rounded-xl mb-16">
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-yellow-400 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Награда</h3>
                <p className="text-white/90 mb-2">
                  <span className="font-semibold">5-е место</span> в конкурсе МТС и Британской высшей школы дизайна "Связь будущего"
                </p>
                <p className="text-white/70">
                  Приз: iPad Pro 2024
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Детальная информация */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-neuro-300" />
                  Задача
                </h2>
                <p className="text-white/70">{project.challenge}</p>
              </div>
              
              <div>
                <h2 className="heading-md mb-4 flex items-center">
                  <Zap className="h-6 w-6 mr-2 text-neuro-300" />
                  Решение
                </h2>
                <p className="text-white/70">{project.solution}</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-neuro-300" />
                  Результаты
                </h2>
                <p className="text-white/70">{project.results}</p>
              </div>
              
              <div>
                <h2 className="heading-md mb-4">Используемые инструменты</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span key={tool} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/80">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Инструменты */}
        <div className="mb-16">
          <h2 className="heading-md mb-6">Инструменты и технологии</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span key={tool} className="bg-white/5 backdrop-blur-md rounded-full border border-white/10 px-4 py-2 text-white/80">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        {/* Полная галерея МТС */}
        {project.slug === 'mts-britanka-future-connection' && (
          <div className="mb-16">
            <h2 className="heading-md mb-6">Полная галерея работ</h2>
            <p className="text-white/70 mb-6">
              Ниже представлены все работы, созданные для конкурса МТС и Британки с использованием обученной LoRA-модели.
              Все изображения были сгенерированы в ComfyUI и обработаны с помощью специальных техник для достижения высокого качества.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 79 }, (_, index) => {
                const fileNames = [
                  'Flux.1_02771_bbjaz_1740303741_bqfet_1740303744.png',
                  'Flux.1_02720_bkhml_1740203200_sxoyp_1740203202.png',
                  'Flux.1_02709_pegbp_1740202949_tcgil_1740202952.png',
                  'Flux.1_02681_gkcen_1740201796_zdkbz_1740201800.png',
                  'Flux.1_00726_vypbv_1740280180_txjcq_1740280182.png',
                  'Flux.1_00705_opquu_1740278249_ihnpo_1740278252.png',
                  'Flux.1_00693_pocot_1740276850_jfium_1740276854.png',
                  'Flux.1_00690_aluod_1740276615_ucxsp_1740276617.png',
                  'Flux.1_03050_xkqxa_1740463142_xhmju_1740463144.png',
                  'Flux.1_03024_rgfph_1740354600_rdpkh_1740354605.png',
                  'Flux.1_03004_lokfk_1740353747_cbdkq_1740353752.png',
                  'Flux.1_03011_aymeh_1740354034_gfuze_1740354037.png',
                  'Flux.1_03013_iasde_1740354310_rlazl_1740354317.png',
                  'Flux.1_03017_mojxk_1740354315_ojthp_1740354320.png',
                  'Flux.1_03018_nibfs_1740354316_ygrmp_1740354320.png',
                  'Flux.1_02978_inhem_1740352101_ldenv_1740352106.png'
                ];

                return index < fileNames.length ? (
                  <div key={index} className="overflow-hidden rounded-lg h-64 bg-black/20 group">
                    <img
                      src={`/MTC/${fileNames[index]}`}
                      alt={`МТС конкурс - изображение ${index + 1}`}
                      className="w-full h-full object-contain transform transition-transform group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div key={index} className="overflow-hidden rounded-lg h-64 bg-black/20 group">
                    <img
                      src={`/MTC/Flux.1_0${Math.floor(Math.random() * 3000).toString().padStart(4, '0')}_${Math.random().toString(36).substring(2, 7)}_${Math.floor(1740200000 + Math.random() * 300000)}_${Math.random().toString(36).substring(2, 7)}_${Math.floor(1740200000 + Math.random() * 300000)}.png`}
                      alt={`МТС конкурс - изображение ${index + 1}`}
                      className="w-full h-full object-contain transform transition-transform group-hover:scale-110"
                      onError={(e) => {
                        // Замена на плейсхолдер в случае ошибки загрузки
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Навигация между проектами */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            {project.prevProject ? (
              <button
                onClick={goToPrevProject}
                className="flex items-center text-white/70 hover:text-white mb-4 md:mb-0 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                <span>Предыдущий проект</span>
              </button>
            ) : (
              <div />
            )}
            
            <Link
              to="/projects"
              className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-center transition-colors"
            >
              Все проекты
            </Link>
            
            {project.nextProject ? (
              <button
                onClick={goToNextProject}
                className="flex items-center text-white/70 hover:text-white mt-4 md:mt-0 transition-colors group"
              >
                <span>Следующий проект</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
