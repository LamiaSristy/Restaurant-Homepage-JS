const myCuisine = () => {
    const myCuisine = [];

    function Cuisine(icon, title, description, price) {
      this.icon = icon;  
      this.title = title; 
      this.description = description;
      this.price = price;
    }
    
    
    const addCuisine = (c) => {
        myCuisine.push(c);
    };
    
    const cuisine1 = new Cuisine('./img/steak.jpg', 'ContinenTal', 'You can have it anytime', 100);
    const cuisine2 = new Cuisine('./img/Italian.jpg', 'Italian', 'You can have it anytime', 30);
    const cuisine3 = new Cuisine('./img/japanese.jpg', 'Japanese', 'You can have it anytime', 70);
    const cuisine4 = new Cuisine('./img/curry.jpg', 'Indian', 'You can have it anytime', 30);
    
    addCuisine(cuisine1);
    addCuisine(cuisine2);
    addCuisine(cuisine3);
    addCuisine(cuisine4);

    return myCuisine;
};

export default myCuisine;