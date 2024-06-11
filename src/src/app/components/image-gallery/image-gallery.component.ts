import { Component, OnInit } from '@angular/core';
import { SharedApiService } from 'src/app/shared/shared-api.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
  dataList: any = [];
  flag: boolean | undefined;
  products: any;
  sortValue: string = 'asc';
  prodList: any;
  categories: any = [];
  nameInput: any = [];

  constructor(
    private serviceapi: SharedApiService,
    private _service: LoginService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getAll();
    // this.showGroup();
    // this.filterBy();
  }
  getAll() {
    this.serviceapi.getData().subscribe((res:any) => {
      console.log(res);
      this.dataList = res.recipes;
    }, err => {
      err = 'No data found';
    })
  }
  // showGroup() {
  //   //First, group the products by category
  //   //this.prodList 
  //   const group = this.prodList.reduce((acc: any, curr:any) => {
  //     let key = curr.category;
  //     if (!acc[key]) {
  //       acc[key] = [];
  //     }
  //     acc[key].push(curr);
  //     return acc;
  //   }, {});

  //   //Get the categories and product related.
  //   this.categories = Object.keys(group ).map(key => ({
  //     category: key,
  //     products: group[key]
  //   }));

  // }
  logout(event: any) {
    window.alert("You are successfully logged out")
    this.flag = true;
    this._service.logout();
  }

  sortPrice(event: any) {
    if (this.sortValue === event.target.value) {
      this.prodList = this.dataList.products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    } else {
      this.prodList = this.dataList.products.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
    }

  }

  filterBy(nameInput: HTMLInputElement) {
    if (nameInput.value) {
      this.dataList.products = this.dataList.products.filter((p: { name: string; }) => p.name === nameInput.value)
    }
  }

  filter(ev: any) {
    console.log(ev.target.value);
    if (ev.target.value) {
      this.serviceapi.getByParam('q', ev.target.value).subscribe((res:any) => {
        this.dataList = res.data.recipes;
        console.log(res);
      }, err => {
        err = 'No data found';
      })

    }
  }
  moreProductDetails(val: any) {
    this.router.navigate(['/recipe-details', val.id]);
  }
}
