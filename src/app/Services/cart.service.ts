import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [
    { id: 1, name: 'Apple', price: 0.99, quantity: 0 },
    { id: 2, name: 'Grapes', price: 0.59, quantity: 0 },
    { id: 3, name: 'Cherry', price: 2.99, quantity: 0 },
    { id: 4, name: 'Orange', price: 3.99, quantity: 0 },
  ];

  addToCart(products: any) {
    const addItem = this.items.find(item => item.id === products.id);
    if (addItem) {
      addItem.quantity++;
    }
  }
  removeFromCart(products: any) {
    const removeItem = this.items.find(item => item.id === products.id);
    if (removeItem && removeItem.quantity > 0) {
      removeItem.quantity--;
    }
  }
  getItems() {
    return this.items;
  }
  resetQuantities() {
    this.items.forEach(item => item.quantity = 0);
  }
}
