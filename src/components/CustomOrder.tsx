import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Custom order submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-gold/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-cormorant font-bold text-dark-elegant">
                Индивидуальный заказ
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Создадим уникальное украшение специально для вас. Наши мастера
                воплотят любую идею в драгоценном металле.
              </p>
            </div>

            {/* Process steps */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-cormorant font-semibold text-lg text-dark-elegant">
                    Консультация
                  </h4>
                  <p className="text-gray-600">
                    Обсуждаем ваши пожелания и создаем эскиз
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-cormorant font-semibold text-lg text-dark-elegant">
                    Изготовление
                  </h4>
                  <p className="text-gray-600">
                    Создаем украшение в нашей мастерской
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-cormorant font-semibold text-lg text-dark-elegant">
                    Доставка
                  </h4>
                  <p className="text-gray-600">
                    Готовое изделие с сертификатом качества
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="flex items-center space-x-6 pt-8 border-t border-gold/20">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={20} className="text-gold" />
                <span className="font-medium">+7 (383) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} className="text-gold" />
                <span className="font-medium">Пн-Пт 10:00-19:00</span>
              </div>
            </div>
          </div>

          {/* Order form */}
          <Card className="border-gold/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-gold/5 to-gold/10">
              <CardTitle className="font-cormorant text-2xl text-dark-elegant flex items-center">
                <Icon name="Sparkles" size={24} className="text-gold mr-3" />
                Оформить заказ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dark-elegant mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    className="border-gold/30 focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-elegant mb-2">
                    Телефон *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    className="border-gold/30 focus:border-gold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-elegant mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-elegant mb-2">
                    Описание желаемого изделия *
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Опишите какое украшение вы хотели бы заказать..."
                    className="border-gold/30 focus:border-gold h-32"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-elegant mb-2">
                    Примерный бюджет
                  </label>
                  <Input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="от 50 000 ₽"
                    className="border-gold/30 focus:border-gold"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gold-gradient text-white font-semibold py-6 text-lg hover:scale-105 transition-transform"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomOrder;
