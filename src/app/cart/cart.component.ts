import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService,private router:Router) {
   
   }

  ngOnInit(): void {
  }
  get items() {
    return this.cartService.getItems();
  }
  backToProduct(){
    this.router.navigate(['/products']);
  }
  
  editProduct(){
    this.router.navigate(['/products']);
  }
  clickEdit(){
    this.router.navigate(['/products']);
    this.cartService.resetQuantities();
  }
}
