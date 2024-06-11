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
  products: any;
  sortValue: string = 'asc';
  prodList: any;
  collectionSize: any;
  pageNumber: number = 1;
  pageSize = 30;
  receipeDataWithPagination = [];
  documentTypeArray: any = [];
  selectedValue: any;
  filterData: any = [];
  selectedSortValue: any;
  sortByOptions = ['name', 'cuisine']; // Add more options if needed
  selectedSortOption: string = 'name';
 
  constructor(
    private serviceapi: SharedApiService,
  ) { }
 
  ngOnInit(): void {
    this.getAll();
    // this.showGroup();
    // this.filterBy();
  }
 
  refreshData() {
    this.receipeDataWithPagination = this.dataList
      .map((id: any, i: any) => ({ id: i + 1, ...id }))
      .slice((this.pageNumber - 1) * this.pageSize, (this.pageNumber - 1) * this.pageSize + this.pageSize);
    this.getAll();
  }
 
  getAll() {
    this.serviceapi.getData('limit', 30).subscribe((res: any) => {
      if (res?.data) {
        this.dataList = res?.data?.recipes;
        this.collectionSize = res?.data?.total;
        this.receipeFilter();
      }
      else {
        this.dataList = [];
      }
    }, err => {
      this.dataList = [];
      err = 'No data found';
    })
  }
 
  // sortPrice(event: any) {
  //   console.log(event);
  //   if (this.sortValue === event.target.value) {
  //     this.dataList = this.dataList.sort((a, b) => b.price - a.price);
  //   } else {
  //     this.dataList = this.dataList.sort((a, b) => a.price - b.price);
  //   }
  // }
 
  filter(ev: any) {
    console.log(ev.target.value);
    if (ev.target.value) {
      this.serviceapi.getByParam('q', ev.target.value).subscribe((res: any) => {
        this.dataList = res.data.recipes;
        console.log(res);
      }, err => {
        err = 'No data found';
      })
    }
    else {
      this.getAll();
    }
  }
 
  receipeFilter() {
    console.log(this.dataList);
    this.dataList?.forEach((element: any) => {
      this.documentTypeArray.push(element.difficulty);
    });
    this.documentTypeArray = [...new Set(this.documentTypeArray)];
  }
 
  onDifficultyChange(event: any) {
    this.selectedValue = event;
    this.filterData = this.filterData.length > 0 ? this.filterData : this.dataList.slice();
    if (event) {
      this.dataList = this.filterData.filter((item: any) => item.difficulty == event);
    } else {
      this.dataList = [...this.filterData]
    }
    console.log(this.dataList);
  }
 
  onSortChange(eve: any) {
    console.log(eve);
    if (this.sortValue === eve) {
      this.dataList = this.dataList.sort((a: any, b: any) => b.name - a.name);
    } else {
      this.dataList = this.dataList.sort((a: any, b: any) => a.name - b.name);
    }
  }
 
 onSortOptionChange(selectedOption: string) {
    if(selectedOption){
      this.selectedSortOption = selectedOption;
    } else{
      this.selectedSortOption = 'name';
    }
  }
}