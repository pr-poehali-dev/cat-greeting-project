import React from "react";
import Icon from "@/components/ui/icon";

const ArticleGrid = () => {
  const articles = [
    {
      id: 1,
      title: "10 лучших тональных кремов 2025 года",
      excerpt: "Тестируем новинки от ведущих брендов и выбираем лучшие",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Красота",
      readTime: "5 мин",
      views: "12.3К",
    },
    {
      id: 2,
      title: "Модные цвета весны: что носить прямо сейчас",
      excerpt: "Главные тренды сезона и как их носить в повседневной жизни",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Мода",
      readTime: "7 мин",
      views: "8.7К",
    },
    {
      id: 3,
      title: "Детокс для кожи: работает ли это на самом деле?",
      excerpt: "Разбираемся с косметологом, нужен ли коже детокс",
      image:
        "https://images.unsplash.com/photo-1570554886111-e80fcac6c563?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Здоровье",
      readTime: "6 мин",
      views: "15.1К",
    },
    {
      id: 4,
      title: "Как создать капсульный гардероб за выходные",
      excerpt: "Пошаговый план создания стильного и функционального гардероба",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Мода",
      readTime: "10 мин",
      views: "9.2К",
    },
    {
      id: 5,
      title: "Йога для красивой осанки: 5 простых упражнений",
      excerpt: "Укрепляем спину и формируем красивую осанку дома",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Здоровье",
      readTime: "8 мин",
      views: "6.8К",
    },
    {
      id: 6,
      title: "Звёзды без макияжа: кто самая красивая?",
      excerpt: "Селебрити показывают естественную красоту в соцсетях",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c9a9b89e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Звёзды",
      readTime: "3 мин",
      views: "22.5К",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat">
            Последние статьи
          </h2>
          <a
            href="#"
            className="text-pink-500 hover:text-pink-600 font-medium flex items-center"
          >
            Все статьи
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {article.views}
                    </span>
                  </div>
                  <button className="text-pink-500 hover:text-pink-600">
                    <Icon name="Bookmark" size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleGrid;
