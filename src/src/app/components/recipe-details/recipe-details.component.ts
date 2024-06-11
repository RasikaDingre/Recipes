import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedApiService } from 'src/app/shared/shared-api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  dataList: any;
  itemId: any;
  
  constructor(
    private Activatedroute: ActivatedRoute,
    private serviceapi: SharedApiService) {
  }
  ngOnInIt(){
    // this.title = this.Activatedroute.snapshot.paramMap.get('title');
    this.itemId = this.Activatedroute.snapshot.paramMap.get('id');
    console.log(this.itemId);
  }
  recipeDetails(){
    this.serviceapi.getById(this.itemId).subscribe((res:any) => {
      console.log(res);
      this.dataList = res.recipes;
    }, err => {
      err = 'No data found';
    })
  }
}
