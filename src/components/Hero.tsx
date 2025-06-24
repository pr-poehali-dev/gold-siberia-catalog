import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-cream via-white to-gold/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-cormorant font-bold text-dark-elegant leading-tight">
                Ювелирные изделия
                <span className="text-gold block">премиум класса</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Эксклюзивные украшения ручной работы из драгоценных металлов и
                камней. Индивидуальные заказы по вашим эскизам.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gold-gradient hover:scale-105 transition-transform text-white font-semibold px-8 py-6 text-lg"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gold text-gold hover:bg-gold hover:text-white transition-all px-8 py-6 text-lg"
              >
                <Icon name="Palette" size={20} className="mr-2" />
                Индивидуальный заказ
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/20">
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <p className="text-sm font-medium text-dark-elegant">
                  Гарантия качества
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Gem" size={24} className="text-white" />
                </div>
                <p className="text-sm font-medium text-dark-elegant">
                  Ручная работа
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <p className="text-sm font-medium text-dark-elegant">
                  Доставка по РФ
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=700&fit=crop"
                alt="Эксклюзивные ювелирные изделия"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gold/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-cormorant font-bold text-lg text-dark-elegant">
                    1000+
                  </p>
                  <p className="text-sm text-gray-600">Довольных клиентов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
