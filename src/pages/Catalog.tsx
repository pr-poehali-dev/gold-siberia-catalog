import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Catalog = () => {
  const allProducts = [
    {
      id: "1",
      name: "Кольцо с бриллиантом",
      price: "89 990 ₽",
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
      metal: "Белое золото 585°",
      description:
        'Кольцо с бриллиантом огранки "круг" 0.25 карат, чистота 3/5',
      inStock: true,
      gemstone: "Бриллиант 0.25 карат",
      certificate: "Сертификат GIA",
      sizes: ["15", "16", "17", "18", "19"],
    },
    {
      id: "2",
      name: "Серьги с изумрудами и бриллиантами",
      price: "156 990 ₽",
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      metal: "Желтое золото 750°",
      description: "Серьги с натуральными изумрудами 2.1 карат и бриллиантами",
      inStock: true,
      gemstone: "Изумруд 2.1 карат + бриллианты",
      certificate: "Сертификат качества",
      sizes: ["Универсальный"],
    },
    {
      id: "3",
      name: "Цепочка панцирного плетения",
      price: "45 990 ₽",
      image:
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
      metal: "Золото 585°",
      description: "Цепочка панцирного плетения, длина 60 см, вес 12.5 г",
      inStock: true,
      gemstone: "Без вставок",
      certificate: "Пробирная палата",
      sizes: ["50 см", "55 см", "60 см", "65 см"],
    },
    {
      id: "4",
      name: "Браслет с сапфирами",
      price: "234 990 ₽",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      metal: "Белое золото 750°",
      description: "Браслет с натуральными сапфирами 4.2 карат и бриллиантами",
      inStock: false,
      gemstone: "Сапфир 4.2 карат + бриллианты",
      certificate: "Сертификат Gübelin",
      sizes: ["17 см", "18 см", "19 см"],
    },
    {
      id: "5",
      name: "Кольцо с рубином",
      price: "67 990 ₽",
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      metal: "Розовое золото 585°",
      description: "Кольцо с натуральным рубином 1.1 карат овальной огранки",
      inStock: true,
      gemstone: "Рубин 1.1 карат",
      certificate: "Сертификат SSEF",
      sizes: ["15", "16", "17", "18", "19", "20"],
    },
    {
      id: "6",
      name: "Подвеска с жемчугом",
      price: "23 990 ₽",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
      metal: "Серебро 925°",
      description: "Подвеска с культивированным жемчугом Акойя 8-9 мм",
      inStock: true,
      gemstone: "Жемчуг Акойя 8-9 мм",
      certificate: "Сертификат происхождения",
      sizes: ["Универсальный"],
    },
    {
      id: "7",
      name: "Обручальное кольцо классическое",
      price: "34 990 ₽",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      metal: "Золото 585°",
      description: "Обручальное кольцо классической формы, ширина 4 мм",
      inStock: true,
      gemstone: "Без вставок",
      certificate: "Пробирная палата",
      sizes: ["15", "16", "17", "18", "19", "20", "21", "22"],
    },
    {
      id: "8",
      name: "Серьги с фианитами",
      price: "12 990 ₽",
      image:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      metal: "Серебро 925° с родированием",
      description: "Серьги-пусеты с фианитами огранки 'принцесса'",
      inStock: true,
      gemstone: "Фианиты 2.0 карат",
      certificate: "Сертификат качества",
      sizes: ["Универсальный"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-20 bg-gradient-to-b from-white to-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-cormorant font-bold text-dark-elegant">
              Каталог ювелирных изделий
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полная коллекция эксклюзивных украшений, созданных мастерами с
              многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
