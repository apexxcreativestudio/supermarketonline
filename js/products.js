const categories = [
  { name: 'Rice & Grains', slug: 'rice-grains', description: 'Premium rice, flour, and grains for daily cooking.' },
  { name: 'Vegetables', slug: 'vegetables', description: 'Fresh farm produce and local greens.' },
  { name: 'Fruits', slug: 'fruits', description: 'Seasonal fruits and healthy snacks.' },
  { name: 'Beverages', slug: 'beverages', description: 'Cool drinks, tea, coffee, and juices.' },
  { name: 'Snacks', slug: 'snacks', description: 'Biscuits, chips, cookies, and chocolates.' },
  { name: 'Dairy Products', slug: 'dairy-products', description: 'Milk powder, yogurt, cheese, and more.' },
  { name: 'Household', slug: 'household', description: 'Cleaning essentials and home needs.' },
  { name: 'Personal Care', slug: 'personal-care', description: 'Shampoos, toothpaste, soaps, and hygiene.' }
];

const products = [
  // Rice & Grains
  { id: 1, name: 'Samba Rice', category: 'Rice & Grains', slug: 'rice-grains', price: 420, image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80' },
  { id: 2, name: 'Nadu Rice', category: 'Rice & Grains', slug: 'rice-grains', price: 360, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80' },
  { id: 3, name: 'Keeri Samba', category: 'Rice & Grains', slug: 'rice-grains', price: 480, image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80' },
  { id: 4, name: 'Basmathi Rice', category: 'Rice & Grains', slug: 'rice-grains', price: 650, image: 'https://images.unsplash.com/photo-1586201375761-8386574fca1d?auto=format&fit=crop&w=900&q=80' },
  { id: 5, name: 'Red Rice', category: 'Rice & Grains', slug: 'rice-grains', price: 390, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80' },
  { id: 6, name: 'Wheat Flour', category: 'Rice & Grains', slug: 'rice-grains', price: 295, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80' },
  { id: 7, name: 'Dhal', category: 'Rice & Grains', slug: 'rice-grains', price: 240, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80' },
  { id: 8, name: 'Green Gram', category: 'Rice & Grains', slug: 'rice-grains', price: 260, image: 'https://images.unsplash.com/photo-1574484284002-952d924569dd?auto=format&fit=crop&w=900&q=80' },
  { id: 9, name: 'Black Gram', category: 'Rice & Grains', slug: 'rice-grains', price: 265, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80' },
  { id: 10, name: 'Coriander Seeds', category: 'Rice & Grains', slug: 'rice-grains', price: 210, image: 'https://images.unsplash.com/photo-1582515073490-7f7c7904f0d3?auto=format&fit=crop&w=900&q=80' },
  { id: 11, name: 'Mustard Seeds', category: 'Rice & Grains', slug: 'rice-grains', price: 220, image: 'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80' },
  { id: 12, name: 'Curry Powder', category: 'Rice & Grains', slug: 'rice-grains', price: 310, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { id: 13, name: 'Pasta', category: 'Rice & Grains', slug: 'rice-grains', price: 280, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80' },
  { id: 14, name: 'Oats', category: 'Rice & Grains', slug: 'rice-grains', price: 340, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
  { id: 15, name: 'Noodles', category: 'Rice & Grains', slug: 'rice-grains', price: 250, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80' },
  { id: 16, name: 'Ragi Flour', category: 'Rice & Grains', slug: 'rice-grains', price: 300, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80' },
  { id: 17, name: 'Pulses Pack', category: 'Rice & Grains', slug: 'rice-grains', price: 550, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { id: 18, name: 'Brown Rice', category: 'Rice & Grains', slug: 'rice-grains', price: 410, image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80' },
  { id: 19, name: 'Mung Beans', category: 'Rice & Grains', slug: 'rice-grains', price: 270, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80' },
  { id: 20, name: 'Rice Flour', category: 'Rice & Grains', slug: 'rice-grains', price: 230, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80' },
  // Vegetables
  { id: 21, name: 'Carrot', category: 'Vegetables', slug: 'vegetables', price: 180, image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80' },
  { id: 22, name: 'Potato', category: 'Vegetables', slug: 'vegetables', price: 160, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80' },
  { id: 23, name: 'Onion', category: 'Vegetables', slug: 'vegetables', price: 170, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80' },
  { id: 24, name: 'Tomato', category: 'Vegetables', slug: 'vegetables', price: 200, image: 'https://images.unsplash.com/photo-1546094096-0b84c6df2b73?auto=format&fit=crop&w=900&q=80' },
  { id: 25, name: 'Beans', category: 'Vegetables', slug: 'vegetables', price: 220, image: 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?auto=format&fit=crop&w=900&q=80' },
  { id: 26, name: 'Cabbage', category: 'Vegetables', slug: 'vegetables', price: 190, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80' },
  { id: 27, name: 'Eggplant', category: 'Vegetables', slug: 'vegetables', price: 210, image: 'https://images.unsplash.com/photo-1582281298055-e25b82f0f5f0?auto=format&fit=crop&w=900&q=80' },
  { id: 28, name: 'Ladies Finger', category: 'Vegetables', slug: 'vegetables', price: 215, image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3b0?auto=format&fit=crop&w=900&q=80' },
  { id: 29, name: 'Capsicum', category: 'Vegetables', slug: 'vegetables', price: 225, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80' },
  { id: 30, name: 'Mushroom', category: 'Vegetables', slug: 'vegetables', price: 260, image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=900&q=80' },
  { id: 31, name: 'Cucumber', category: 'Vegetables', slug: 'vegetables', price: 150, image: 'https://images.unsplash.com/photo-1449300079323-02e209d1d382?auto=format&fit=crop&w=900&q=80' },
  { id: 32, name: 'Pumpkin', category: 'Vegetables', slug: 'vegetables', price: 180, image: 'https://images.unsplash.com/photo-1570586437263-ab629fccc4cc?auto=format&fit=crop&w=900&q=80' },
  { id: 33, name: 'Leeks', category: 'Vegetables', slug: 'vegetables', price: 230, image: 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?auto=format&fit=crop&w=900&q=80' },
  { id: 34, name: 'Garlic', category: 'Vegetables', slug: 'vegetables', price: 240, image: 'https://images.unsplash.com/photo-1551161242-b5af797b6d3f?auto=format&fit=crop&w=900&q=80' },
  { id: 35, name: 'Ginger', category: 'Vegetables', slug: 'vegetables', price: 250, image: 'https://images.unsplash.com/photo-1524594152303-9d1f1f5a2f2b?auto=format&fit=crop&w=900&q=80' },
  { id: 36, name: 'Green Chili', category: 'Vegetables', slug: 'vegetables', price: 140, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=900&q=80' },
  { id: 37, name: 'Lemon', category: 'Vegetables', slug: 'vegetables', price: 130, image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80' },
  { id: 38, name: 'Spinach', category: 'Vegetables', slug: 'vegetables', price: 160, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80' },
  { id: 39, name: 'Carrot Bundle', category: 'Vegetables', slug: 'vegetables', price: 300, image: 'https://images.unsplash.com/photo-1522184216316-3c25379f9760?auto=format&fit=crop&w=900&q=80' },
  { id: 40, name: 'Broccoli', category: 'Vegetables', slug: 'vegetables', price: 320, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=80' },
  // Fruits
  { id: 41, name: 'Banana', category: 'Fruits', slug: 'fruits', price: 140, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80' },
  { id: 42, name: 'Apple', category: 'Fruits', slug: 'fruits', price: 260, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=80' },
  { id: 43, name: 'Mango', category: 'Fruits', slug: 'fruits', price: 320, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { id: 44, name: 'Orange', category: 'Fruits', slug: 'fruits', price: 240, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=80' },
  { id: 45, name: 'Papaya', category: 'Fruits', slug: 'fruits', price: 280, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80' },
  { id: 46, name: 'Pineapple', category: 'Fruits', slug: 'fruits', price: 310, image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=900&q=80' },
  { id: 47, name: 'Guava', category: 'Fruits', slug: 'fruits', price: 220, image: 'https://images.unsplash.com/photo-1574158611840-4f1b1733e275?auto=format&fit=crop&w=900&q=80' },
  { id: 48, name: 'Watermelon', category: 'Fruits', slug: 'fruits', price: 450, image: 'https://images.unsplash.com/photo-1629084092232-b7b1f8a3d8a5?auto=format&fit=crop&w=900&q=80' },
  { id: 49, name: 'Grapes', category: 'Fruits', slug: 'fruits', price: 360, image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5b?auto=format&fit=crop&w=900&q=80' },
  { id: 50, name: 'Avocado', category: 'Fruits', slug: 'fruits', price: 420, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80' },
  { id: 51, name: 'Pears', category: 'Fruits', slug: 'fruits', price: 300, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80' },
  { id: 52, name: 'Dragon Fruit', category: 'Fruits', slug: 'fruits', price: 480, image: 'https://images.unsplash.com/photo-1528821154947-2aa4b5d4dd0d?auto=format&fit=crop&w=900&q=80' },
  { id: 53, name: 'Kiwi', category: 'Fruits', slug: 'fruits', price: 340, image: 'https://images.unsplash.com/photo-1528821154947-2aa4b5d4dd0d?auto=format&fit=crop&w=900&q=80' },
  { id: 54, name: 'Jackfruit', category: 'Fruits', slug: 'fruits', price: 380, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80' },
  { id: 55, name: 'Melon', category: 'Fruits', slug: 'fruits', price: 330, image: 'https://images.unsplash.com/photo-1571575173700-4e5f6f0a8a7b?auto=format&fit=crop&w=900&q=80' },
  { id: 56, name: 'Dates', category: 'Fruits', slug: 'fruits', price: 520, image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=900&q=80' },
  { id: 57, name: 'Plums', category: 'Fruits', slug: 'fruits', price: 290, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80' },
  { id: 58, name: 'Lemon Fruit', category: 'Fruits', slug: 'fruits', price: 170, image: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80' },
  { id: 59, name: 'Sapodilla', category: 'Fruits', slug: 'fruits', price: 350, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80' },
  { id: 60, name: 'Fruit Basket', category: 'Fruits', slug: 'fruits', price: 950, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80' },
  // Beverages
  { id: 61, name: 'Coca Cola', category: 'Beverages', slug: 'beverages', price: 180, image: 'https://images.unsplash.com/photo-1554866585-cd9d2f5d8cbe?auto=format&fit=crop&w=900&q=80' },
  { id: 62, name: 'Pepsi', category: 'Beverages', slug: 'beverages', price: 180, image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=80' },
  { id: 63, name: 'Fruit Juice', category: 'Beverages', slug: 'beverages', price: 320, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80' },
  { id: 64, name: 'Tea', category: 'Beverages', slug: 'beverages', price: 260, image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80' },
  { id: 65, name: 'Coffee', category: 'Beverages', slug: 'beverages', price: 280, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
  { id: 66, name: 'Mineral Water', category: 'Beverages', slug: 'beverages', price: 120, image: 'https://images.unsplash.com/photo-1556679343-c7304c7d3f83?auto=format&fit=crop&w=900&q=80' },
  { id: 67, name: 'Energy Drink', category: 'Beverages', slug: 'beverages', price: 240, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80' },
  { id: 68, name: 'Mango Juice', category: 'Beverages', slug: 'beverages', price: 300, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80' },
  { id: 69, name: 'Orange Juice', category: 'Beverages', slug: 'beverages', price: 310, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80' },
  { id: 70, name: 'Green Tea', category: 'Beverages', slug: 'beverages', price: 270, image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80' },
  { id: 71, name: 'Instant Coffee', category: 'Beverages', slug: 'beverages', price: 290, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80' },
  { id: 72, name: 'Lemon Soda', category: 'Beverages', slug: 'beverages', price: 150, image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=80' },
  { id: 73, name: 'Milk Tea', category: 'Beverages', slug: 'beverages', price: 220, image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80' },
  { id: 74, name: 'Smoothie Pack', category: 'Beverages', slug: 'beverages', price: 350, image: 'https://images.unsplash.com/photo-1576092802386-5b3f5f43b1b5?auto=format&fit=crop&w=900&q=80' },
  { id: 75, name: 'Coconut Water', category: 'Beverages', slug: 'beverages', price: 180, image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80' },
  { id: 76, name: 'Iced Tea', category: 'Beverages', slug: 'beverages', price: 240, image: 'https://images.unsplash.com/photo-1576092802386-5b3f5f43b1b5?auto=format&fit=crop&w=900&q=80' },
  { id: 77, name: 'Apple Juice', category: 'Beverages', slug: 'beverages', price: 330, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80' },
  { id: 78, name: 'Yoghurt Drink', category: 'Beverages', slug: 'beverages', price: 260, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { id: 79, name: 'Black Tea', category: 'Beverages', slug: 'beverages', price: 250, image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80' },
  { id: 80, name: 'Sparkling Water', category: 'Beverages', slug: 'beverages', price: 140, image: 'https://images.unsplash.com/photo-1556679343-c7304c7d3f83?auto=format&fit=crop&w=900&q=80' },
  // Snacks
  { id: 81, name: 'Cream Cracker', category: 'Snacks', slug: 'snacks', price: 220, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80' },
  { id: 82, name: 'Potato Chips', category: 'Snacks', slug: 'snacks', price: 180, image: 'https://images.unsplash.com/photo-1585109649139-3665f4d2d0dd?auto=format&fit=crop&w=900&q=80' },
  { id: 83, name: 'Chocolate', category: 'Snacks', slug: 'snacks', price: 260, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80' },
  { id: 84, name: 'Cookies', category: 'Snacks', slug: 'snacks', price: 240, image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80' },
  { id: 85, name: 'Banana Chips', category: 'Snacks', slug: 'snacks', price: 200, image: 'https://images.unsplash.com/photo-1574484284002-952d924569dd?auto=format&fit=crop&w=900&q=80' },
  { id: 86, name: 'Shortbread', category: 'Snacks', slug: 'snacks', price: 280, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80' },
  { id: 87, name: 'Popcorn', category: 'Snacks', slug: 'snacks', price: 190, image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=900&q=80' },
  { id: 88, name: 'Trail Mix', category: 'Snacks', slug: 'snacks', price: 320, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80' },
  { id: 89, name: 'Nuts', category: 'Snacks', slug: 'snacks', price: 350, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80' },
  { id: 90, name: 'Cheese Crackers', category: 'Snacks', slug: 'snacks', price: 260, image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=900&q=80' },
  { id: 91, name: 'Wafers', category: 'Snacks', slug: 'snacks', price: 210, image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&w=900&q=80' },
  { id: 92, name: 'Muffins', category: 'Snacks', slug: 'snacks', price: 300, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80' },
  { id: 93, name: 'Crisps', category: 'Snacks', slug: 'snacks', price: 230, image: 'https://images.unsplash.com/photo-1585109649139-3665f4d2d0dd?auto=format&fit=crop&w=900&q=80' },
  { id: 94, name: 'Toffee', category: 'Snacks', slug: 'snacks', price: 170, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80' },
  { id: 95, name: 'Biscuit Pack', category: 'Snacks', slug: 'snacks', price: 290, image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=900&q=80' },
  { id: 96, name: 'Pretzels', category: 'Snacks', slug: 'snacks', price: 220, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80' },
  { id: 97, name: 'Dried Fruit', category: 'Snacks', slug: 'snacks', price: 340, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80' },
  { id: 98, name: 'Peanut Butter', category: 'Snacks', slug: 'snacks', price: 360, image: 'https://images.unsplash.com/photo-1574484284002-952d924569dd?auto=format&fit=crop&w=900&q=80' },
  { id: 99, name: 'Honey Sticks', category: 'Snacks', slug: 'snacks', price: 250, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { id: 100, name: 'Fruit Bars', category: 'Snacks', slug: 'snacks', price: 200, image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80' },
  // Dairy Products
  { id: 101, name: 'Milk Powder', category: 'Dairy Products', slug: 'dairy-products', price: 430, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80' },
  { id: 102, name: 'Fresh Milk', category: 'Dairy Products', slug: 'dairy-products', price: 220, image: 'https://images.unsplash.com/photo-1628084781712-215e6f1d2c6b?auto=format&fit=crop&w=900&q=80' },
  { id: 103, name: 'Yogurt', category: 'Dairy Products', slug: 'dairy-products', price: 260, image: 'https://images.unsplash.com/photo-1571212515414-0c3e8bcf1e9f?auto=format&fit=crop&w=900&q=80' },
  { id: 104, name: 'Cheese', category: 'Dairy Products', slug: 'dairy-products', price: 470, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80' },
  { id: 105, name: 'Butter', category: 'Dairy Products', slug: 'dairy-products', price: 380, image: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?auto=format&fit=crop&w=900&q=80' },
  { id: 106, name: 'Ghee', category: 'Dairy Products', slug: 'dairy-products', price: 640, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80' },
  { id: 107, name: 'Cream', category: 'Dairy Products', slug: 'dairy-products', price: 350, image: 'https://images.unsplash.com/photo-1571212515414-0c3e8bcf1e9f?auto=format&fit=crop&w=900&q=80' },
  { id: 108, name: 'Curd', category: 'Dairy Products', slug: 'dairy-products', price: 240, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80' },
  { id: 109, name: 'Ice Cream', category: 'Dairy Products', slug: 'dairy-products', price: 300, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80' },
  { id: 110, name: 'Flavored Milk', category: 'Dairy Products', slug: 'dairy-products', price: 220, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80' },
  { id: 111, name: 'Paneer', category: 'Dairy Products', slug: 'dairy-products', price: 520, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80' },
  { id: 112, name: 'Condensed Milk', category: 'Dairy Products', slug: 'dairy-products', price: 380, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=900&q=80' },
  { id: 113, name: 'Skim Milk', category: 'Dairy Products', slug: 'dairy-products', price: 260, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80' },
  { id: 114, name: 'Greek Yogurt', category: 'Dairy Products', slug: 'dairy-products', price: 320, image: 'https://images.unsplash.com/photo-1571212515414-0c3e8bcf1e9f?auto=format&fit=crop&w=900&q=80' },
  { id: 115, name: 'Chocolate Milk', category: 'Dairy Products', slug: 'dairy-products', price: 280, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=80' },
  { id: 116, name: 'Sour Yogurt', category: 'Dairy Products', slug: 'dairy-products', price: 240, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80' },
  { id: 117, name: 'Cheese Slice', category: 'Dairy Products', slug: 'dairy-products', price: 390, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80' },
  { id: 118, name: 'Butter Spread', category: 'Dairy Products', slug: 'dairy-products', price: 410, image: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?auto=format&fit=crop&w=900&q=80' },
  { id: 119, name: 'Cream Cheese', category: 'Dairy Products', slug: 'dairy-products', price: 460, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80' },
  { id: 120, name: 'Milk Carton', category: 'Dairy Products', slug: 'dairy-products', price: 230, image: 'https://images.unsplash.com/photo-1571212515414-0c3e8bcf1e9f?auto=format&fit=crop&w=900&q=80' },
  // Household
  { id: 121, name: 'Laundry Soap', category: 'Household', slug: 'household', price: 180, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 122, name: 'Washing Powder', category: 'Household', slug: 'household', price: 410, image: 'https://images.unsplash.com/photo-1618100706708-6e3f44f0a09d?auto=format&fit=crop&w=900&q=80' },
  { id: 123, name: 'Dish Wash', category: 'Household', slug: 'household', price: 260, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 124, name: 'Bathroom Cleaner', category: 'Household', slug: 'household', price: 320, image: 'https://images.unsplash.com/photo-1592878904946-8b03ab2cf3d4?auto=format&fit=crop&w=900&q=80' },
  { id: 125, name: 'Floor Cleaner', category: 'Household', slug: 'household', price: 300, image: 'https://images.unsplash.com/photo-1616628182502-3c2cf2b0511d?auto=format&fit=crop&w=900&q=80' },
  { id: 126, name: 'Detergent Bar', category: 'Household', slug: 'household', price: 180, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 127, name: 'Broom', category: 'Household', slug: 'household', price: 360, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80' },
  { id: 128, name: 'Dust Pan', category: 'Household', slug: 'household', price: 220, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 129, name: 'Trash Bags', category: 'Household', slug: 'household', price: 260, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 130, name: 'Paper Towels', category: 'Household', slug: 'household', price: 280, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 131, name: 'Air Freshener', category: 'Household', slug: 'household', price: 320, image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?auto=format&fit=crop&w=900&q=80' },
  { id: 132, name: 'Toilet Cleaner', category: 'Household', slug: 'household', price: 310, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 133, name: 'Mop', category: 'Household', slug: 'household', price: 520, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 134, name: 'Sponge', category: 'Household', slug: 'household', price: 150, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 135, name: 'Toilet Paper', category: 'Household', slug: 'household', price: 240, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 136, name: 'Vinegar', category: 'Household', slug: 'household', price: 220, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 137, name: 'Hand Soap', category: 'Household', slug: 'household', price: 190, image: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622?auto=format&fit=crop&w=900&q=80' },
  { id: 138, name: 'Dish Sponge', category: 'Household', slug: 'household', price: 140, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 139, name: 'Cleaning Cloth', category: 'Household', slug: 'household', price: 170, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  { id: 140, name: 'Scourer', category: 'Household', slug: 'household', price: 130, image: 'https://images.unsplash.com/photo-1581578731548-c846a2c1e096?auto=format&fit=crop&w=900&q=80' },
  // Personal Care
  { id: 141, name: 'Shampoo', category: 'Personal Care', slug: 'personal-care', price: 360, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 142, name: 'Toothpaste', category: 'Personal Care', slug: 'personal-care', price: 240, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 143, name: 'Face Wash', category: 'Personal Care', slug: 'personal-care', price: 320, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 144, name: 'Body Lotion', category: 'Personal Care', slug: 'personal-care', price: 420, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 145, name: 'Hair Oil', category: 'Personal Care', slug: 'personal-care', price: 290, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 146, name: 'Soap', category: 'Personal Care', slug: 'personal-care', price: 200, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 147, name: 'Deodorant', category: 'Personal Care', slug: 'personal-care', price: 280, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 148, name: 'Hand Cream', category: 'Personal Care', slug: 'personal-care', price: 260, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 149, name: 'Conditioner', category: 'Personal Care', slug: 'personal-care', price: 340, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 150, name: 'Toilet Soap', category: 'Personal Care', slug: 'personal-care', price: 220, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 151, name: 'Body Wash', category: 'Personal Care', slug: 'personal-care', price: 390, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 152, name: 'Hair Mask', category: 'Personal Care', slug: 'personal-care', price: 340, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 153, name: 'Razors', category: 'Personal Care', slug: 'personal-care', price: 260, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 154, name: 'Cotton Pads', category: 'Personal Care', slug: 'personal-care', price: 180, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 155, name: 'Nail Cutter', category: 'Personal Care', slug: 'personal-care', price: 160, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 156, name: 'Toothbrush', category: 'Personal Care', slug: 'personal-care', price: 190, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 157, name: 'Mouthwash', category: 'Personal Care', slug: 'personal-care', price: 300, image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?auto=format&fit=crop&w=900&q=80' },
  { id: 158, name: 'Face Towel', category: 'Personal Care', slug: 'personal-care', price: 220, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' },
  { id: 159, name: 'Sanitary Pads', category: 'Personal Care', slug: 'personal-care', price: 260, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=900&q=80' },
  { id: 160, name: 'Lip Balm', category: 'Personal Care', slug: 'personal-care', price: 240, image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80' }
];

function formatPrice(price) {
  return `Rs. ${price.toLocaleString('en-LK')}`;
}

function getImageUrl(product) {
  const separator = product.image.includes('?') ? '&' : '?';
  return `${product.image}${separator}sig=${product.id}`;
}

function renderCategoryCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = categories.map((category) => `
    <article class="category-card">
      <p class="eyebrow">${category.name}</p>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a class="text-link" href="./products.html?category=${category.slug}">Browse</a>
    </article>
  `).join('');
}

function populateCategoryFilter(selectEl) {
  if (!selectEl) return;
  const options = ['all', ...categories.map((category) => category.slug)];
  selectEl.innerHTML = options.map((value) => {
    const label = value === 'all' ? 'All categories' : categories.find((cat) => cat.slug === value)?.name || value;
    return `<option value="${value}">${label}</option>`;
  }).join('');
}

function renderFeaturedProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const featured = products.slice(0, 6);
  container.innerHTML = featured.map((product) => `
    <article class="product-card">
      <img class="product-image" src="${getImageUrl(product)}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80';" />
      <div class="product-body">
        <p class="category-chip">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-desc">Fresh quality item from FreshMart Sri Lanka.</p>
        <div class="product-footer">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="btn small-btn btn-primary" onclick="addToCart(${product.id})">Add Cart</button>
        </div>
      </div>
    </article>
  `).join('');
}

function renderProductGrid(containerId, searchText = '', categoryValue = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = categoryValue === 'all' || product.slug === categoryValue;
    return matchesSearch && matchesCategory;
  });

  if (!filtered.length) {
    container.innerHTML = '<div class="empty-state">No products match your search.</div>';
    return;
  }

  container.innerHTML = filtered.map((product) => `
    <article class="product-card">
      <img class="product-image" src="${getImageUrl(product)}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80';" />
      <div class="product-body">
        <p class="category-chip">${product.category}</p>
        <h3>${product.name}</h3>
        <div class="product-footer">
          <span class="price">${formatPrice(product.price)}</span>
          <div class="qty-row">
            <input class="qty-input" id="qty-${product.id}" type="number" min="1" value="1" />
            <button class="btn small-btn btn-primary" onclick="addToCart(${product.id}, document.getElementById('qty-${product.id}').value)">Add</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}
