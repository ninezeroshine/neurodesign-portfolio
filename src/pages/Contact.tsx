
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Связаться | НейроДизайн';
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Заголовок */}
        <div className="max-w-3xl mb-12">
          <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm font-medium text-neuro-200 mb-4">
            Связаться со мной
          </div>
          <h1 className="heading-xl mb-6">Давайте обсудим ваш проект</h1>
          <p className="text-lg text-white/70">
            Заполните форму ниже или используйте один из контактных методов, и я свяжусь с вами в ближайшее время
            для обсуждения деталей.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Форма */}
          <div>
            <div className="glass-card p-8 rounded-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neuro-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neuro-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Тема</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neuro-500 focus:border-transparent"
                    placeholder="Тема сообщения"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Сообщение</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neuro-500 focus:border-transparent"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-neuro-600 to-neuro-500 hover:from-neuro-500 hover:to-neuro-600">
                  <Send className="h-4 w-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
          
          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="p-3 bg-neuro-600/20 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-neuro-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Телефон</h3>
                  <p className="text-white/70">+7 (999) 123-45-67</p>
                  <p className="text-white/50 text-sm">Пн-Пт с 10:00 до 19:00</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="p-3 bg-neuro-600/20 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-neuro-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-white/70">hello@neurodesign.ru</p>
                  <p className="text-white/50 text-sm">Отвечаю в течение 24 часов</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-start">
                <div className="p-3 bg-neuro-600/20 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-neuro-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Адрес</h3>
                  <p className="text-white/70">г. Москва, ул. Примерная, 123</p>
                  <p className="text-white/50 text-sm">Встречи по предварительной записи</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-black/40 to-black/20">
              <h3 className="text-xl font-medium mb-4">Часто задаваемые вопросы</h3>
              <div className="space-y-4 text-white/80">
                <p><span className="text-neuro-300 font-medium">Сколько стоят услуги?</span> Стоимость зависит от сложности и объема проекта. Свяжитесь со мной для получения индивидуального расчета.</p>
                <p><span className="text-neuro-300 font-medium">Какие сроки выполнения?</span> Обычно от 3 до 14 дней в зависимости от типа работы.</p>
                <p><span className="text-neuro-300 font-medium">Как происходит оплата?</span> 50% предоплата, 50% после выполнения работы.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
