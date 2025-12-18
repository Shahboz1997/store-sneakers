//Словарь
const categories = {
  new: "Новые поступления",
  adults:"Кроссовки для взрослых ",
  children:"Кроссовки для детей",
  abroad:"Из-за рубежа",
  sale:"Распродажа",
  everyday:"Повседневные",
  fitness:"Фитнес",
  travel:"Путешествие",
  office:"Для офиса",
  accessories:"Аксессуары",
  };

// Данные
let productData = [
{
  id: 0,
  img: 'img/5.webp',
  name: 'Nike',
  price: 500,
  stock:'9222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:"#ff0000",
  size:['36', '38'],
  category:'abroad',
  rating:4,
  overview:'Достоинства: Очень красивые. лучше, чем на фото.',
  review: '51 отзыв',
  new: true,
},
{
    id: 1,
    img:'img/11.webp',
    name: 'Nike',
    price: 300,
    stock:'8222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#008000',
    size:['40'],
    category:'abroad',
    rating:4.5,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: false,
},
    {
    id: 2,
    img: 'img/15.webp',
    name: 'Nike',
    price: 4000,
    stock:'9092 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#2c2929ff',
    size:['44', '38'],
    category:'children',
    rating:4.6,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 3,
    img:'img/19.webp',
    name: 'Nike',
    price: 800,
    stock:'7222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffffff',
    size:['38', '46', '36'],
    category:'adults',
    rating:3.4,
    review: '51 отзыв',
    new: false,
},
    {
    id: 4,
    img: 'img/100.JPG',
    name: 'Nike',
    price: 909,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#c2b5b5ff',
    size:['38', '46'],
    category:'everyday',
    rating:4.9,
    review: '51 отзыв',
    new: true,
},
{
    id: 5,
    img: 'img/23.webp',
    name: 'Nike',
    price: 1000,
    stock:'11222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffff00',
    size:['40', '44','36'],
    category:'fitness',
    rating:5,
    review: '51 отзыв',
    new: true,

},
  {
    id: 6,
    img: 'img/27.webp',
    name: 'Nike',
    price: 1100,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#0a0a63ff',
    size:['46', '44'],
    category:'accessories',
    rating:4.8,
    review: '51 отзыв',
    new: true,
},
  {
    id: 7,
    img: 'img/114.jpg',
    name: 'Nike',
    price: 1200,
    stock:'1922 ₽',
    leftover: '90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#f3ebe3ff',
    size:['44', '40', '42'],
    category:'office',
    rating:3.4,
    review: '51 отзыв',
    new: true,
},
  {
    id: 8,
    img: 'img/2.jpg',
    name: 'Nike',
    price: 1300,
    stock:'10222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#706f67ff',
    size:['46', '36'],
    category:'travel',
    rating:2.4,  
    review: '51 отзыв',  
    new: true,
},
  {
    id: 9,
    img: 'img/114.webp',
    name: 'Nike',
    price: 1400,
    stock:'9322 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#d84e65ff',
    size:['46', '38'],
    category:'sale',
    rating:2.5,
    review:'51 отзыв',
    new: true,
},
      {
    id: 10,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
  {
    id: 11,
    img: 'img/23.webp',
    name: 'Nike',
    price: 1000,
    stock:'11222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffff00',
    size:['40', '44','36'],
    category:'fitness',
    rating:5,
    review: '51 отзыв',
    new: true,

},
  {
    id: 12,
    img: 'img/27.webp',
    name: 'Nike',
    price: 1100,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#0a0a63ff',
    size:['46', '44'],
    category:'accessories',
    rating:4.8,
    review: '51 отзыв',
    new: true,
},
        {
    id: 13,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 14,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 15,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
{
    id: 16,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
      {
    id: 17,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40', '42', '44'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 18,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 19,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 20,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 21,
    img: 'img/5.webp',
    name: 'Nike',
    price: 500,
    stock:'9222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:"#ff0000",
    size:['36', '38'],
    category:'abroad',
    rating:4,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 22,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    
{
    id: 23,
    img: 'img/23.webp',
    name: 'Nike',
    price: 1000,
    stock:'11222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffff00',
    size:['40', '44','36'],
    category:'fitness',
    rating:5,
    review: '51 отзыв',
    new: true,

},
  {
    id: 24,
    img: 'img/27.webp',
    name: 'Nike',
    price: 1100,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#0a0a63ff',
    size:['46', '44'],
    category:'accessories',
    rating:4.8,
    review: '51 отзыв',
    new: true,
},
        {
    id: 25,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 26,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 27,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
        {
    id: 28,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 29,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 30,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 31,
    img: 'img/5.webp',
    name: 'Nike',
    price: 500,
    stock:'9222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:"#ff0000",
    size:['36', '38'],
    category:'abroad',
    rating:4,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 32,
    img:'img/11.webp',
    name: 'Nike',
    price: 300,
    stock:'8222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#008000',
    size:['40'],
    category:'abroad',
    rating:4.5,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: false,
},
{
    id: 33,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
      {
    id: 34,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40', '42', '44'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 35,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 36,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 37,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 38,
    img: 'img/5.webp',
    name: 'Nike',
    price: 500,
    stock:'9222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:"#ff0000",
    size:['36', '38'],
    category:'abroad',
    rating:4,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 39,
    img:'img/11.webp',
    name: 'Nike',
    price: 300,
    stock:'8222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#008000',
    size:['40'],
    category:'abroad',
    rating:4.5,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: false,
},
    {
    id: 40,
    img: 'img/15.webp',
    name: 'Nike',
    price: 4000,
    stock:'9092 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#2c2929ff',
    size:['44', '38'],
    category:'children',
    rating:4.6,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 41,
    img:'img/19.webp',
    name: 'Nike',
    price: 800,
    stock:'7222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffffff',
    size:['38', '46', '36'],
    category:'adults',
    rating:3.4,
    review: '51 отзыв',
    new: false,
},
    {
    id: 42,
    img: 'img/100.JPG',
    name: 'Nike',
    price: 909,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#c2b5b5ff',
    size:['38', '46'],
    category:'everyday',
    rating:4.9,
    review: '51 отзыв',
    new: true,
},
{
  id: 43,
  img: 'img/23.webp',
  name: 'Nike',
  price: 1000,
  stock:'11222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#ffff00',
  size:['40', '44','36'],
  category:'fitness',
  rating:5,
  review: '51 отзыв',
  new: true,

},
{
  id: 44,
  img: 'img/27.webp',
  name: 'Nike',
  price: 1100,
  stock:'6222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#0a0a63ff',
  size:['46', '44'],
  category:'accessories',
  rating:4.8,
  review: '51 отзыв',
  new: true,
},
{
  id: 45,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 46,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 47,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size: ['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 48,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 49,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 0,
  img: 'img/5.webp',
  name: 'Nike',
  price: 500,
  stock:'9222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:"#ff0000",
  size:['36', '38'],
  category:'abroad',
  rating:4,
  overview:'Достоинства: Очень красивые. лучше, чем на фото.',
  review: '51 отзыв',
  new: true,
},
{
  id: 1,
  img:'img/11.webp',
  name: 'Nike',
  price: 300,
  stock:'8222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#008000',
  size:['40'],
  category:'abroad',
  rating:4.5,
  overview:'Достоинства: Очень красивые. лучше, чем на фото.',
  review: '51 отзыв',
  new: false,
},
{
  id: 2,
  img: 'img/15.webp',
  name: 'Nike',
  price: 4000,
  stock:'9092 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#2c2929ff',
  size:['44', '38'],
  category:'children',
  rating:4.6,
  overview:'Достоинства: Очень красивые. лучше, чем на фото.',
  review: '51 отзыв',
  new: true,
},
{
  id: 3,
  img:'img/19.webp',
  name: 'Nike',
  price: 800,
  stock:'7222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#ffffff',
  size:['38', '46', '36'],
  category:'adults',
  rating:3.4,
  review: '51 отзыв',
  new: false,
},
{
  id: 4,
  img: 'img/100.JPG',
  name: 'Nike',
  price: 909,
  stock:'6222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#c2b5b5ff',
  size:['38', '46'],
  category:'everyday',
  rating:4.9,
  review: '51 отзыв',
  new: true,
},
{
  id: 5,
  img: 'img/23.webp',
  name: 'Nike',
  price: 1000,
  stock:'11222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#ffff00',
  size:['40', '44','36'],
  category:'fitness',
  rating:5,
  review: '51 отзыв',
  new: true,

},
{
  id: 6,
  img: 'img/27.webp',
  name: 'Nike',
  price: 1100,
  stock:'6222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#0a0a63ff',
  size:['46', '44'],
  category:'accessories',
  rating:4.8,
  review: '51 отзыв',
  new: true,
},
{
  id: 7,
  img: 'img/114.jpg',
  name: 'Nike',
  price: 1200,
  stock:'1922 ₽',
  leftover: '90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#f3ebe3ff',
  size:['44', '40', '42'],
  category:'office',
  rating:3.4,
  review: '51 отзыв',
  new: true,
},
{
  id: 8,
  img: 'img/2.jpg',
  name: 'Nike',
  price: 1300,
  stock:'10222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#706f67ff',
  size:['46', '36'],
  category:'travel',
  rating:2.4,  
  review: '51 отзыв',  
  new: true,
},
{
  id: 9,
  img: 'img/114.webp',
  name: 'Nike',
  price: 1400,
  stock:'9322 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#d84e65ff',
  size:['46', '38'],
  category:'sale',
  rating:2.5,
  review:'51 отзыв',
  new: true,
},
      {
    id: 10,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
  {
    id: 11,
    img: 'img/23.webp',
    name: 'Nike',
    price: 1000,
    stock:'11222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffff00',
    size:['40', '44','36'],
    category:'fitness',
    rating:5,
    review: '51 отзыв',
    new: true,

},
  {
    id: 12,
    img: 'img/27.webp',
    name: 'Nike',
    price: 1100,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#0a0a63ff',
    size:['46', '44'],
    category:'accessories',
    rating:4.8,
    review: '51 отзыв',
    new: true,
},
        {
    id: 13,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 14,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 15,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
{
    id: 16,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
      {
    id: 17,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40', '42', '44'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 18,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 19,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 20,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 21,
    img: 'img/5.webp',
    name: 'Nike',
    price: 500,
    stock:'9222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:"#ff0000",
    size:['36', '38'],
    category:'abroad',
    rating:4,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 22,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    
{
    id: 23,
    img: 'img/23.webp',
    name: 'Nike',
    price: 1000,
    stock:'11222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#ffff00',
    size:['40', '44','36'],
    category:'fitness',
    rating:5,
    review: '51 отзыв',
    new: true,

},
  {
    id: 24,
    img: 'img/27.webp',
    name: 'Nike',
    price: 1100,
    stock:'6222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#0a0a63ff',
    size:['46', '44'],
    category:'accessories',
    rating:4.8,
    review: '51 отзыв',
    new: true,
},
        {
    id: 25,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 26,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 27,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
        {
    id: 28,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 29,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 30,
    img: 'img/113.webp',
    name: 'Nike',
    price: 1400,
    stock:'14222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size: ['38', '40'],
    category:'sale',
    rating:2,
    review:'51 отзыв',
    new: true,
},
    {
    id: 31,
    img: 'img/5.webp',
    name: 'Nike',
    price: 500,
    stock:'9222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:"#ff0000",
    size:['36', '38'],
    category:'abroad',
    rating:4,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: true,
},
{
    id: 32,
    img:'img/11.webp',
    name: 'Nike',
    price: 300,
    stock:'8222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#008000',
    size:['40'],
    category:'abroad',
    rating:4.5,
    overview:'Достоинства: Очень красивые. лучше, чем на фото.',
    review: '51 отзыв',
    new: false,
},
{
    id: 33,
    img: 'img/31.webp',
    name: 'Nike',
    price: 1400,
    stock:'13222 ₽',
    leftover:'90 штук осталось',
    description: 'Для бега и прогулок по городу',
    color:'Цвет ',
    circle:'#000000',
    size:['38', '40'],
    category:'sale',
    rating:1.3,
    review:'51 отзыв',
    new: false,
},
{
  id: 34,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40', '42', '44'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 35,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
  id: 36,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
id: 34,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40', '42', '44'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
id: 35,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
id: 36,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
id: 35,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
id: 36,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
  id: 34,
  img: 'img/113.webp',
  name: 'Nike',
  price: 1400,
  stock:'14222 ₽',
  leftover:'90 штук осталось',
  description: 'Для бега и прогулок по городу',
  color:'Цвет ',
  circle:'#000000',
  size:['38', '40', '42', '44'],
  category:'sale',
  rating:2,
  review:'51 отзыв',
  new: true,
},
{
id: 35,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
{
id: 36,
img: 'img/113.webp',
name: 'Nike',
price: 1400,
stock:'14222 ₽',
leftover:'90 штук осталось',
description: 'Для бега и прогулок по городу',
color:'Цвет ',
circle:'#000000',
size:['38', '40'],
category:'sale',
rating:2,
review:'51 отзыв',
new: true,
},
]

const productsContainer = document.querySelector(".products-container");
const productsTemplate = document.querySelector(".product-card-template");
const fragment = document.createDocumentFragment();

function renderProducts() {
     productData.forEach(product => {                           
            const clone = productsTemplate.content.cloneNode(true);                 
            const card = clone.querySelector('.product-card');
          
            const imgContainer = card.querySelector(".product-img");
            const productImage = imgContainer.querySelector(".image");
            productImage.src = product.img;                 
            productImage.alt = product.name;    
            const productInfo = card.querySelector('.info');

            productInfo.querySelector('.name').textContent = product.name;                 
            productInfo.querySelector('.price').querySelector("span").textContent = product.price;
            productInfo.querySelector('.stock').textContent = product.stock;  
            productInfo.querySelector('.left-over').textContent = product.leftover;               
            productInfo.querySelector('.description').textContent = product.description; 
            productInfo.querySelector('.color').textContent = product.color;  
            productInfo.querySelector('.circle').style.backgroundColor = product.circle;
            productInfo.querySelector('.category').textContent = categories[product.category];                
            productInfo.querySelector('.rating').textContent = product.rating;   
            productInfo.querySelector('.re-view').textContent = product. review;   

        
            fragment.appendChild(card); 

        });              
                  
        productsContainer.innerHTML = '';             
        productsContainer.appendChild(fragment);  
             
    }          

document.addEventListener('DOMContentLoaded', renderProducts);

// Поисковик
let copyProductData = productData.slice();


const search = document.querySelector(".input-cnt");

const productsList = document.getElementById("productData");


const searchInput = search.querySelector("#search-input");

const searchIcon = search.querySelector(".material-icons");

let query = null;

// Обработчик ввода в поле поиска 
searchInput.addEventListener("input", function(){
    query = this.value.toLowerCase();
});

// Обработчик клика на кнопку поиска
searchIcon.addEventListener("click", function (){
    const resultArray = [];

    productData.forEach(item => {
       const dataItem = Object.values(item);
       let isFind = false;
       dataItem.forEach(str => {
        if (str.toString().toLowerCase().includes(query)) {
            isFind = true;
            return;
        };
       });
       if (isFind) {
        resultArray.push(item);
       }
    });

    productData = [...resultArray];
    renderProducts();
});

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const categoryArrow = document.getElementById("category");
// const categorySection =categoryArrow.getElementById("filter-section-category");
const categoryNew = document.getElementById("new");



const priceListCollection = dropdownMenu.querySelectorAll(".pricelist");

let activeSortType = "notchoice";

const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});


//Сортировка
function sortProducts(sortType) {
  let copyArray = copyProductData.slice();

  switch (sortType) {
    case "notchoice":
      break;
    case "raiting":
      copyArray = copyArray.sort((a, b) => b.rating - a.rating);
      break;
    case "pricemore":
      copyArray = copyArray.sort((a, b) => a.price - b.price);
      break;
    case "priceless":
      copyArray = copyArray.sort((a, b) => b.price - a.price);
      break;
    case "sale":
      copyArray = copyArray.filter(item => item.category == "sale");
      break;
    case "top":
      copyArray = copyArray.filter(item => item.new);
      break;
  }
  return copyArray;
}

priceListCollection.forEach(item => {
  item.addEventListener("click", (evt) => {
    const element = evt.target;
    const elementSortMenu = element.closest(".pricelist");
    
    priceListCollection.forEach(item => {
      item.classList.remove("active");
    });
    elementSortMenu.classList.add("active");

    activeSortType = elementSortMenu.id;
    productData = [...sortProducts(activeSortType)];
    renderProducts();
  })
})

//Левые фильтры
const leftFiltersContainer = document.querySelector("#left-filters-container");


const leftFiltersButton = leftFiltersContainer.querySelector("#left-filters-button");


const dropLeftFilters = leftFiltersContainer.querySelector("#drop-left-filters");


const arrow = leftFiltersContainer.querySelector("#arrow-list");


const leftFiltersShow = function () {
  dropLeftFilters.classList.toggle("show");
  arrow.classList.toggle("arrow");

};

leftFiltersButton.addEventListener("click", function (element) {
  element.stopPropagation();
  leftFiltersShow();
});

//Фильтры цвета 
let initialProductData = productData.slice();
const colorButton = document.querySelector("#color-button");
const colorCollection = document.querySelector("#color-collection");

colorButton.addEventListener("click", function (element) {
  if(colorCollection.style.display === "none"){
    colorCollection.style.display = "block";  // показываем список
  }
  else{
    colorCollection.style.display = "none"; // Скрываем список
  }
});
const collectionInputColor = colorCollection.querySelectorAll(".filter-color-collection-item");

let colorArray = [];

collectionInputColor.forEach((item) => {
  item.addEventListener("change", function(element){
    const inputElement = element.target;
    const inputElementId = inputElement.id;

    const filterColorContainer = inputElement.closest(".filter-color-container");
    
    const filterColorLabel = filterColorContainer.querySelector(".filter-color-label");

    const colorValue = filterColorLabel.id;
    const svg = filterColorContainer.querySelector("svg");
    if (inputElement.checked) {
      inputElement.classList.remove("bg-white");
      colorArray.push(colorValue);
      svg.style.fill = inputElement.dataset.color;
      svg.style.stroke = inputElement.dataset.color;
    }
    else{
      svg.style.fill = "";
      svg.style.stroke = "";
      inputElement.classList.remove("bg-white");
      const index = colorArray.indexOf(colorValue);
      colorArray.splice(index, 1);
    }
    if(colorArray.length > 0) {
      copyProductData = initialProductData.filter(item => colorArray.includes(item.circle));
    }else{
      copyProductData = [...initialProductData];
    }
    productData = [...copyProductData];
    renderProducts();
  });
})

//Категория/Фильтр
let saveProductData = productData.slice();
const categoryButton = document.querySelector("#category-button");
const filterSectionCategory= document.querySelector("#filter-section-category");

const collectionInputCategory = filterSectionCategory.querySelectorAll(".filter-category-item");

let categoryArray = [];

categoryButton.addEventListener("click", function(element){
  if(filterSectionCategory.style.display === "none"){
    filterSectionCategory.style.display = "block";
  }
  else{
    filterSectionCategory.style.display ="none";
  }
});

collectionInputCategory.forEach((item) => {
  item.addEventListener("change", function(element){
    const inputElement = element.target;
    const inputElementId = inputElement.id;
    const filterCategoryContainer = inputElement.closest(".filter-category-container");
    
    const filterCategoryLabel = filterCategoryContainer.querySelector(".filter-category-label");

    const categoryValue = filterCategoryLabel.id;

    if (inputElement.checked) {
      categoryArray.push(categoryValue);
    }
    else{
      const index = categoryArray.indexOf(categoryValue);
      categoryArray.splice(index, 1);
    }
    if(categoryArray.length > 0) {
      copyProductData = saveProductData.filter(item => categoryArray.includes(item.category));//?
    }else{
      copyProductData = [...saveProductData];
    }
    productData = [...copyProductData];
    renderProducts();
  });
});

//фильтр размера
//Копия массива
let saveProductSize = productData.slice();
//Кнопка открытия фильтров размера
const sizeButton= document.querySelector("#size-sneakers");
//Блок с фильтрами размера 
const filterSectionSize= document.querySelector("#filter-section-size");
// Коллекция фильтров размера
const collectionFilterSize = filterSectionSize.querySelectorAll(".filter-size-item");
//Массив размеров выбранных пользователем
let sizeArray = [];

sizeButton.addEventListener("click", function(element){
  if(filterSectionSize.style.display === "none"){
    filterSectionSize.style.display = "block";
  }
  else{
    filterSectionSize.style.display ="none";
  }
});

// Работа с фильтрами размера
collectionFilterSize.forEach((item) => {
  //Добавляем каждому слушатель изменения
  item.addEventListener("change", function(element){
    //Выясняем на какой элемент нажал user 
    const inputElement = element.target;
    //Выясняем к какому контейнеру принадлежит этот элемент 
    const filterSizeContainer = inputElement.closest(".filter-size-container");
    // Ищем внутри этого контейнера Label
    const filterSizeLabel = filterSizeContainer.querySelector(".filter-size-label");
   // Определяем значение
    const sizeValue = filterSizeLabel.id;
    
    if (inputElement.checked) {
      //Добавляем в массив выбранных элементов
      sizeArray.push(sizeValue);
      console.log("sizeArray", sizeArray);
    }
    else{
    //Удаляем: Определяем индекс и удаляем по индексу
      const index = sizeArray.indexOf(sizeValue);
      sizeArray.splice(index, 1);
      console.log("sizeArray", sizeArray);
    }
  if(sizeArray.length > 0) {
      copyProductSize = saveProductSize.filter(item => 
        item.size.some(element => sizeArray.includes(element))
      );
    } else{
      copyProductSize = [...saveProductData];
}
  productData = [...copyProductSize];
  renderProducts();
  // Нужна сверять массивы: массив выбранных размеров сверять с каждым массивом размеров у товаров
  // Нужны такие карточки, где есть хотя бы одно совпадение.
  // Пример: юзер выбрал 38 и 40, нам нужны все карточки, где в поле размер в массиве есть 38 или 40. 
  });
});
// Фильтр цены
const priceButton = document.querySelector("#price-button");
const priceCollection = document.querySelector("#price-collection");
const priceInputContainer = document.querySelector(".price-filters-container");
const priceInputCollection = priceInputContainer.querySelectorAll(".price-item");
let copyPriceProduct = productData.slice();

priceButton.addEventListener("click", function(element){
  if(priceCollection.style.display === "none"){
    priceCollection.style.display = "block";
  }
  else{
    priceCollection.style.display ="none";
  };
})
priceInputCollection.forEach(item => {
item.addEventListener("change", event => {
  const element = event.target;
  const elementType = element.id;
  const elementValue = Number(element.value);
  if(elementValue > 0 && elementType === "price-item-min" ){
    console.log("price");
    copyPriceProduct = copyPriceProduct.filter(item => item.price >= elementValue);
  }
  if(elementValue > 0 && elementType === "price-item-max" ){
    console.log("1");
    copyPriceProduct = copyPriceProduct.filter(item => item.price <= elementValue);
  }
    productData = [...copyPriceProduct];
    renderProducts();
});
})


// document.addEventListener('DOMContentLoaded', function () {
//   const productContainer = document.querySelector('.products-container'); 
//   const itemsPerPage = 10;
//   let currentPage = 0;
//   const items = Array.from(productContainer.querySelectorAll('.product-card')).slice(0);
  
//   function showPage(page) {
//     const startIndex = (page-1)*10 + itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     items.forEach((item, index) => {
//       item.classList.toggle('hidden', index < startIndex || index >= endIndex);
//     });
//     updateActiveButtonStates();
//   }

//   function createPageButtons() {
//     const totalPages = Math.ceil(items.length / itemsPerPage);
//     const paginationNumbers = document.querySelector('.pagination-numbers');
//     console.log("paginationNumbers", paginationNumbers);
//     const paginationContainer = document.createElement('div');
//     const paginationDiv = paginationNumbers.appendChild(paginationContainer);
//     paginationContainer.classList.add('pagination');

//     // Add page buttons
//     for (let i = 0; i < totalPages; i++) {
//       const pageButton = document.createElement('button');
//       pageButton.textContent = i + 1;
//       pageButton.addEventListener('click', () => {
//         currentPage = i;
//         showPage(currentPage);
//         updateActiveButtonStates();
//     });
//         paginationNumbers.appendChild(paginationContainer);
//         paginationDiv.appendChild(pageButton);
//       }
//   }

//   function updateActiveButtonStates() {
//     const pageButtons = document.querySelectorAll('.pagination button');
//     pageButtons.forEach((button, index) => {
//       if (index === currentPage) {
//         button.classList.add('active');
//       } else {
//         button.classList.remove('active');
//       }
//     });
//   }

  // const arrowPrev = paginationNumbers.querySelector("#prev");
  // const arrowNext = paginationNumbers.querySelector("#next");

  // arrowPrev.addEventListener("click", (evt) => {
  //   const element = evt.target;
  //   const arrowElement = element.closest(".button-pagination");
  //   console.log("-1");
  // })

  // arrowNext.addEventListener("click", (evt) => {
  //   const element = evt.target;
  //   const arrowElement = element.closest(".button-pagination");
  //   console.log("+1");
  // })

//   createPageButtons(); 
//   showPage(currentPage);
// });
const ITEMS_PER_PAGE = 10;
let currentPage = 0;
let items = [];
let productContainer = null;

function initializePagination() {
  productContainer = document.querySelector('.products-container');
  items = Array.from(productContainer.querySelectorAll('.product-card'));
  
  createPageButtons();
  showPage(currentPage);
}

function showPage(page) {
  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  items.forEach((item, index) => {
    item.classList.toggle('hidden', index < startIndex || index >= endIndex);
  });
  
  updateActiveButtonStates();
}
function createPageButtons() {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const paginationNumbers = document.querySelector('.pagination-numbers');
  
  if (!paginationNumbers) return;
  
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination');
  
  for (let i = 0; i < totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i + 1;
     pageButton.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
     paginationContainer.appendChild(pageButton);
  }
   paginationNumbers.appendChild(paginationContainer);
}

function updateActiveButtonStates() {
  const pageButtons = document.querySelectorAll('.pagination button');
  
  pageButtons.forEach((button, index) => {
    if (index === currentPage) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initializePagination);



