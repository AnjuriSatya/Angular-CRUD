import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:any[] = [];
  constructor(private cartService:CartService,private router:Router) { }


  ngOnInit(): void {
    this.products = this.cartService.getItems()
  }
  addToCart(data:any) {
    this.cartService.addToCart(data);
  }
  
  removeFromCart(data:any) {
    this.cartService.removeFromCart(data);
  }
  AddToCart(){
      this.router.navigate(['/cart']);
  }

}
