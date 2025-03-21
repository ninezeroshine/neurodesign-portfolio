import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold text-gradient font-display">Umar Generating...</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Профессиональные услуги нейро-дизайна для создания уникальных изображений 
              и видео с помощью искусственного интеллекта.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-white/80" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-white/80" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-white/80" />
              </a>
              <a href="mailto:info@neurodesign.ru" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 text-white/80" />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-white font-medium mb-4">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-neuro-300 transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 hover:text-neuro-300 transition-colors">Проекты</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-neuro-300 transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-neuro-300 transition-colors">Блог</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-neuro-300 transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-white font-medium mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#lora" className="text-white/70 hover:text-neuro-300 transition-colors">Тренировка LORA-моделей</Link>
              </li>
              <li>
                <Link to="/services#images" className="text-white/70 hover:text-neuro-300 transition-colors">Генерация изображений</Link>
              </li>
              <li>
                <Link to="/services#animation" className="text-white/70 hover:text-neuro-300 transition-colors">Анимация изображений</Link>
              </li>
              <li>
                <Link to="/services#video" className="text-white/70 hover:text-neuro-300 transition-colors">Монтаж видео</Link>
              </li>
              <li>
                <Link to="/services#upscale" className="text-white/70 hover:text-neuro-300 transition-colors">Апскейл изображений</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Подписка на рассылку */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-medium mb-2">Подпишитесь на новости</h3>
              <p className="text-white/70">Получайте обновления о новых проектах и статьях</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 md:w-64 bg-white/5 border border-white/10 rounded-l-lg py-3 px-4 outline-none focus:border-neuro-500 text-white"
              />
              <button className="bg-neuro-600 hover:bg-neuro-500 text-white rounded-r-lg py-3 px-5 transition-colors duration-300 flex items-center">
                <span className="mr-2">Подписаться</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center md:text-left text-white/60 text-sm">
          <p>© {new Date().getFullYear()} НейроДизайн. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
