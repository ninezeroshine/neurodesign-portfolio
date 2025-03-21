
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import BlogPreview from '../components/BlogPreview';
import CTASection from '../components/CTASection';

const Index = () => {
  useEffect(() => {
    // Плавная анимация проявления страницы
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 100);

    // Установка заголовка страницы
    document.title = 'Umar Generating... - Создание уникальных изображений и видео с помощью ИИ';
  }, []);

  return (
    <div className="min-h-screen relative">
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <BlogPreview />
      <CTASection />
    </div>
  );
};

export default Index;
