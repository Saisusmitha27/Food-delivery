const foodItems = [
  {
    id: 1,
    name: 'Spaghetti with Vegetables',
    image: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s"
        alt="Spaghetti with Vegetables"
        className="w-full h-48 object-cover"
      />
    ),
    ingredients: 'Capsicum, broccoli, Tomatoes, Onion, leaves, Fresh cream',
    time: '15min',
    rating: 4.5,
    price: 180,
  },
  {
    id: 2,
    name: 'Paneer Tikka',
    image: (
      <img
        src="https://t4.ftcdn.net/jpg/02/39/91/52/360_F_239915221_JJrBDSzDTmAvkDwgw6h9c1kdPXDvY0a1.jpg"
        alt="Paneer Tikka"
        className="w-full h-48 object-cover"
      />
    ),
    ingredients: 'Paneer, Yogurt, Spices, Onion, Bell Pepper',
    time: '25min',
    rating: 4.7,
    price: 220,
  },
  // Add more items as needed
];

export default foodItems;
