import { Component, OnInit } from '@angular/core';
import { ItasService } from '../itas.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-good-jokes',
  templateUrl: './good-jokes.component.html',
  styleUrls: ['./good-jokes.component.css']
})
export class GoodJokesComponent implements OnInit {

  chuckJ: string ="";
  goodJok: any = [];
  categories: any = [];
  selectedCategory: any[];

  constructor(private joke: ItasService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getCategories();
  }

  goodJokes(){
    this.goodJok.push(this.chuckJ);
    console.log(this.goodJok);
  }

  getAJoke(){
  this.joke.getJoke().subscribe(
    res=>{  
      this.chuckJ = res['value'];  
    } 
  );  
  }

  removeJoke(i){
    this.goodJok.splice(i, 1);
  }

  getCategories(){
    this.spinner.show();
    this.joke.getCategories().subscribe(
      res=>{  
        this.categories =res;  
        this.spinner.hide();
      } 
    );
  }

  selectCategory(){
    console.log(this.selectedCategory);
  }

  getAJokeByCategory(){
    this.joke.getJokeByCategory(this.selectedCategory).subscribe(
      res=>{  
        this.chuckJ =res['value'];  
      } 
    );
    
  }
}
