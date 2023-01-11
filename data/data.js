import Category from '../models/category';
import Grocery from '../models/grocery';

export const CATEGORIES = [
  new Category('c1', 'Produce', '#7054FF'),
  new Category('c2', 'Deli', '#7054FF'),
  new Category('c3', 'Dairy', '#7054FF'),
  new Category('c4', 'Meat', '#7054FF'),
  new Category('c5', 'Dry/Baking Goods', '#7054FF'),
  new Category('c6', 'Canned/Jarred Goods', '#7054FF'),
  new Category('c7', 'Beverages', '#7054FF'),
  new Category('c8', 'Personal Care', '#7054FF'),
  new Category('c9', 'Cleaners', '#7054FF'),
  new Category('c10', 'Paper Goods', '#7054FF'),
];

export const GROCERIES = [
  new Grocery('m1', ['c1'], 'Cilantro'),
  new Grocery('m2', ['c1'], 'Cabbage'),
  new Grocery('m3', ['c2'], 'New York Steak'),
];
