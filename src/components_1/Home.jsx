import React, { useContext, useState, useEffect } from 'react';
import { contextApi } from '../components_1/Context';

// Hero slides (updated image links with valid high-quality images)
const heroSlides = [
  {
    id: 1,
    title: "The Ultimate Chicken Biryani",
    desc: "Our chef's signature biryani, slow-cooked to perfection.",
    img: "https://5.imimg.com/data5/CE/IY/BF/SELLER-99255927/htzpmwbmoklojshm4oyx-jpg-1000x1000.jpg"
  },
  {
    id: 2,
    title: "Classic Paneer Butter Masala",
    desc: "Creamy, rich, and loaded with flavor. A vegetarian delight.",
    img: "https://farm5.staticflickr.com/4244/34375209303_fe133a2921_o_d.png"
  },
  {
    id: 3,
    title: "Heavenly Chocolate Lava Cake",
    desc: "Indulge in our warm, gooey chocolate dessert.",
    img: "https://static.vecteezy.com/system/resources/previews/052/148/756/non_2x/decadent-chocolate-lava-cake-with-gooey-chocolate-sauce-free-photo.jpg"
  }
];

const foodCategories = [
  {
    category: "Veg",
    foods: [
      {
        id: 1,
        name: 'Spaghetti with Vegetables',
        desc: 'Capsicum, broccoli, tomatoes, onion, fresh cream',
        price: 249,
        time: '15min',
        rating: 4.5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s',
        details: 'A delightful Italian pasta with fresh vegetables and creamy sauce.'
      },
      {
        id: 2,
        name: 'Paneer Butter Masala',
        desc: 'Paneer, tomato gravy, butter, spices',
        price: 199,
        time: '20min',
        rating: 4.7,
        image: 'https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/paneer-butter-masala.png',
        details: 'Rich and creamy North Indian curry with soft paneer cubes.'
      },
      {
        id: 3,
        name: 'Veggie Delight Pizza',
        desc: 'Loaded with veggies and cheese',
        price: 299,
        time: '25min',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        details: 'A pizza topped with fresh vegetables and mozzarella cheese.'
      },
      {
        id: 4,
        name: 'Palak Paneer',
        desc: 'Spinach, paneer, spices',
        price: 219,
        time: '18min',
        rating: 4.4,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/palak-paneer-recipe.webp',
        details: 'Cottage cheese cooked in a creamy spinach gravy.'
      }
    ]
  },
  {
    category: "Non Veg",
    foods: [
      {
        id: 5,
        name: 'Chicken Biryani',
        desc: 'Basmati rice, chicken, spices, fried onions',
        price: 299,
        time: '30min',
        rating: 4.8,
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg',
        details: 'Aromatic biryani with tender chicken and fragrant rice.'
      },
      {
        id: 6,
        name: 'Butter Chicken',
        desc: 'Chicken, tomato gravy, butter, cream',
        price: 329,
        time: '25min',
        rating: 4.9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2ENrVHHd_Hs-MqVFhxPbJbw-MVe1PmFKDQ&s',
        details: 'Tender chicken cooked in a creamy tomato sauce.'
      },
      {
        id: 7,
        name: 'Fish Curry',
        desc: 'Fish, coconut milk, spices',
        price: 279,
        time: '22min',
        rating: 4.6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5bv5CUtCfSyCjiwS29HyMoq0FfaCTGxX1A&s',
        details: 'Delicious fish curry with coconut and spices.'
      },
      {
        id: 8,
        name: 'Grilled Chicken',
        desc: 'Chicken, herbs, olive oil',
        price: 259,
        time: '20min',
        rating: 4.7,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCejJG8uGK5kCRUQUlRptPivNJj8kSoWtjgg&s',
        details: 'Juicy grilled chicken with herbs.'
      }
    ]
  },
  {
    category: "Desserts",
    foods: [
      {
        id: 9,
        name: 'Chocolate Lava Cake',
        desc: 'Chocolate cake with molten center',
        price: 149,
        time: '10min',
        rating: 4.9,
        image: 'https://sallysbakingaddiction.com/wp-content/uploads/2017/02/chocolate-molten-lava-cakes.jpg',
        details: 'Warm chocolate cake with a gooey molten center.'
      },
      {
        id: 10,
        name: 'Gulab Jamun',
        desc: 'Milk solids, sugar syrup',
        price: 99,
        time: '8min',
        rating: 4.8,
        image: 'https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2016/10/gulab-jamun-using-mix.jpg?w=1200&ssl=1',
        details: 'Soft, spongy balls soaked in sweet syrup.'
      },
      {
        id: 11,
        name: 'Rasmalai',
        desc: 'Cottage cheese, milk, saffron',
        price: 129,
        time: '12min',
        rating: 4.7,
        image: 'https://annapurn.com/wp-content/uploads/2025/03/ChatGPT-Image-Apr-6-2025-11_47_29-PM.png',
        details: 'Soft cheese balls soaked in flavored milk.'
      },
      {
        id: 12,
        name: 'Ice Cream Sundae',
        desc: 'Ice cream, nuts, chocolate sauce',
        price: 119,
        time: '7min',
        rating: 4.6,
        image: 'https://thumbs.dreamstime.com/b/chocolate-ice-cream-sundae-chocolate-syrup-rainbow-sprinkles-chocolate-ice-cream-sundae-chocolate-syrup-139314046.jpg',
        details: 'Ice cream topped with nuts and chocolate sauce.'
      }
    ]
  }
];

const Home = () => {
  const { setView, setSelectedFood, addToCart } = useContext(contextApi);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (food) => {
    setSelectedFood(food);
    setView('details');
  };

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden mb-10 rounded-lg shadow-lg">
        {heroSlides.map((slideItem, idx) => (
          <div
            key={slideItem.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${slide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={slideItem.img}
              alt={slideItem.title}
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="w-full h-full bg-opacity-50 flex flex-col justify-center items-center text-center px-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4 drop-shadow-lg">{slideItem.title}</h2>
              <p className="text-lg md:text-2xl text-white drop-shadow-lg">{slideItem.desc}</p>
            </div>
          </div>
        ))}
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-3 h-3 rounded-full ${slide === idx ? 'bg-yellow-400' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Food Categories */}
      <div className="space-y-12">
        {foodCategories.map(cat => (
          <div key={cat.category}>
            <h3 className="text-2xl font-bold mb-4 ml-4 text-white">
              {cat.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
              {cat.foods.map(food => (
                <div
                  key={food.id}
                  className="bg-white bg-opacity-90 shadow-xl rounded-xl overflow-hidden flex flex-col items-center p-3 hover:scale-105 transition cursor-pointer"
                >
                  <div
                    className="w-32 h-32 rounded-xl overflow-hidden mb-2 border-2 border-yellow-400"
                    onClick={() => handleImageClick(food)}
                  >
                    <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="font-bold text-base text-gray-800">{food.name}</p>
                    <div className="flex justify-between w-full text-gray-500 text-xs my-1">
                      <span>{food.time}</span>
                      <span className="text-yellow-500 font-semibold"><i className="fa-solid fa-star"></i> {food.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-1 text-xs">{food.desc}</p>
                    <div className="flex justify-between items-center w-full">
                      <span className="text-lg font-bold text-yellow-500">₹{food.price}</span>
                      <button
                        onClick={() => addToCart(food)}
                        className="ml-2 px-2 py-1 bg-yellow-400 text-white rounded-md font-semibold hover:bg-yellow-500 transition text-xs"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
