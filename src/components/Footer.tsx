import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-dark-elegant text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center">
                <Icon name="Crown" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-cormorant font-bold">
                Золото Сибири
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Эксклюзивные ювелирные изделия премиум класса. Создаем красоту,
              которая длится вечно.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="text-gold hover:text-gold-light cursor-pointer"
              />
              <Icon
                name="Facebook"
                size={20}
                className="text-gold hover:text-gold-light cursor-pointer"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-gold hover:text-gold-light cursor-pointer"
              />
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-cormorant font-semibold text-lg">Навигация</h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Главная
              </a>
              <a
                href="/catalog"
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Каталог
              </a>
              <a
                href="/about"
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                О нас
              </a>
              <a
                href="/contacts"
                className="block text-gray-300 hover:text-gold transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-cormorant font-semibold text-lg">Услуги</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Индивидуальные заказы</p>
              <p className="text-gray-300">Ремонт украшений</p>
              <p className="text-gray-300">Оценка изделий</p>
              <p className="text-gray-300">Гравировка</p>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-cormorant font-semibold text-lg">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon
                  name="MapPin"
                  size={18}
                  className="text-gold mt-1 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm">
                  г. Новосибирск,
                  <br />
                  ул. Красный проспект, 25
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-gold" />
                <p className="text-gray-300">+7 (383) 123-45-67</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-gold" />
                <p className="text-gray-300">info@zoloto-sibiri.ru</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-gold" />
                <p className="text-gray-300">
                  Пн-Пт 10:00-19:00
                  <br />
                  Сб 10:00-17:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Золото Сибири. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-gold text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-gold text-sm transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
