import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const ProductPage = () => {
  const { id } = useParams();

  const allProducts = [
    {
      id: "1",
      name: "Кольцо с бриллиантом",
      price: "89 990 ₽",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop",
      metal: "Белое золото 585°",
      description:
        'Кольцо с бриллиантом огранки "круг" 0.25 карат, чистота 3/5',
      inStock: true,
      gemstone: "Бриллиант 0.25 карат",
      certificate: "Сертификат GIA",
      sizes: ["15", "16", "17", "18", "19"],
      weight: "3.2 г",
      detailedDescription:
        "Элегантное кольцо с центральным бриллиантом круглой огранки в классической оправе из белого золота. Идеально подходит для помолвки или как подарок к особому случаю.",
    },
    {
      id: "2",
      name: "Серьги с изумрудами и бриллиантами",
      price: "156 990 ₽",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      metal: "Желтое золото 750°",
      description: "Серьги с натуральными изумрудами 2.1 карат и бриллиантами",
      inStock: true,
      gemstone: "Изумруд 2.1 карат + бриллианты",
      certificate: "Сертификат качества",
      sizes: ["Универсальный"],
      weight: "8.5 г",
      detailedDescription:
        "Роскошные серьги с натуральными изумрудами колумбийского происхождения, обрамленными бриллиантами. Выполнены в желтом золоте высшей пробы.",
    },
    {
      id: "3",
      name: "Цепочка панцирного плетения",
      price: "45 990 ₽",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop",
      metal: "Золото 585°",
      description: "Цепочка панцирного плетения, длина 60 см, вес 12.5 г",
      inStock: true,
      gemstone: "Без вставок",
      certificate: "Пробирная палата",
      sizes: ["50 см", "55 см", "60 см", "65 см"],
      weight: "12.5 г",
      detailedDescription:
        "Классическая золотая цепочка панцирного плетения. Прочная и элегантная, подходит как для повседневной носки, так и для особых случаев.",
    },
    {
      id: "4",
      name: "Браслет с сапфирами",
      price: "234 990 ₽",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
      metal: "Белое золото 750°",
      description: "Браслет с натуральными сапфирами 4.2 карат и бриллиантами",
      inStock: false,
      gemstone: "Сапфир 4.2 карат + бриллианты",
      certificate: "Сертификат Gübelin",
      sizes: ["17 см", "18 см", "19 см"],
      weight: "15.8 г",
      detailedDescription:
        "Эксклюзивный браслет с натуральными сапфирами кашмирского происхождения. Каждый камень тщательно отобран и имеет сертификат подлинности от Gübelin.",
    },
    {
      id: "5",
      name: "Кольцо с рубином",
      price: "67 990 ₽",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      metal: "Розовое золото 585°",
      description: "Кольцо с натуральным рубином 1.1 карат овальной огранки",
      inStock: true,
      gemstone: "Рубин 1.1 карат",
      certificate: "Сертификат SSEF",
      sizes: ["15", "16", "17", "18", "19", "20"],
      weight: "4.1 г",
      detailedDescription:
        "Изысканное кольцо с натуральным рубином бирманского происхождения овальной огранки в оправе из розового золота. Камень обладает превосходной чистотой и насыщенным цветом.",
    },
    {
      id: "6",
      name: "Подвеска с жемчугом",
      price: "23 990 ₽",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      metal: "Серебро 925°",
      description: "Подвеска с культивированным жемчугом Акойя 8-9 мм",
      inStock: true,
      gemstone: "Жемчуг Акойя 8-9 мм",
      certificate: "Сертификат происхождения",
      sizes: ["Универсальный"],
      weight: "2.8 г",
      detailedDescription:
        "Элегантная подвеска с жемчугом Акойя высшего качества. Жемчужина обладает превосходным блеском и идеально круглой формой.",
    },
    {
      id: "7",
      name: "Обручальное кольцо классическое",
      price: "34 990 ₽",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop",
      metal: "Золото 585°",
      description: "Обручальное кольцо классической формы, ширина 4 мм",
      inStock: true,
      gemstone: "Без вставок",
      certificate: "Пробирная палата",
      sizes: ["15", "16", "17", "18", "19", "20", "21", "22"],
      weight: "5.2 г",
      detailedDescription:
        "Классическое обручальное кольцо из желтого золота. Гладкая полированная поверхность и комфортная посадка делают его идеальным выбором для ежедневной носки.",
    },
    {
      id: "8",
      name: "Серьги с фианитами",
      price: "12 990 ₽",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop",
      metal: "Серебро 925° с родированием",
      description: "Серьги-пусеты с фианитами огранки 'принцесса'",
      inStock: true,
      gemstone: "Фианиты 2.0 карат",
      certificate: "Сертификат качества",
      sizes: ["Универсальный"],
      weight: "1.8 г",
      detailedDescription:
        "Стильные серьги-пусеты с фианитами квадратной огранки 'принцесса'. Родиевое покрытие обеспечивает долговечность и блеск изделия.",
    },
  ];

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Link to="/catalog">
            <Button className="gold-gradient text-white">
              Вернуться в каталог
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-gold">
              Главная
            </Link>
            <Icon name="ChevronRight" size={16} />
            <Link to="/catalog" className="hover:text-gold">
              Каталог
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span>{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[600px] object-cover"
                />
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Под заказ
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-cormorant font-bold text-dark-elegant mb-4">
                  {product.name}
                </h1>
                <p className="text-4xl font-cormorant font-bold text-gold mb-2">
                  {product.price}
                </p>
                <p className="text-gray-600">{product.detailedDescription}</p>
              </div>

              {/* Product Specifications */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg text-dark-elegant mb-4">
                    Характеристики
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 gold-gradient rounded-full"></div>
                      <div>
                        <p className="text-sm text-gray-500">Металл</p>
                        <p className="font-medium">{product.metal}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Icon name="Gem" size={16} className="text-gold" />
                      <div>
                        <p className="text-sm text-gray-500">Камни</p>
                        <p className="font-medium">{product.gemstone}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Icon name="Weight" size={16} className="text-gold" />
                      <div>
                        <p className="text-sm text-gray-500">Вес</p>
                        <p className="font-medium">{product.weight}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-gold" />
                      <div>
                        <p className="text-sm text-gray-500">Сертификат</p>
                        <p className="font-medium text-xs">
                          {product.certificate}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-dark-elegant">
                    Выберите размер:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="border-gold text-gold hover:bg-gold hover:text-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex space-x-4 pt-6">
                <Button
                  size="lg"
                  className="gold-gradient text-white flex-1 hover:scale-105 transition-transform"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  {product.inStock ? "Добавить в корзину" : "Заказать"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              {/* Contact Info */}
              <Card className="bg-gold/5 border-gold/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Phone" size={20} className="text-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-dark-elegant mb-2">
                        Нужна консультация?
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Наши специалисты помогут подобрать идеальное украшение
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-white"
                      >
                        Связаться с нами
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
