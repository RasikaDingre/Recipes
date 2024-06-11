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

  ngAfterViewInit() {
    this.Activatedroute.params.subscribe(params => {
      let id = params['id'];
      this.recipeDetails(id);
    });
  }

  recipeDetails(id: any) {
    this.serviceapi.getById(id).subscribe((res: any) => {
      this.dataList = res.data;
      console.log(this.dataList);
    }, err => {
      err = 'No data found';
    })
  }
}
