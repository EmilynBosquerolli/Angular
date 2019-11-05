import { Component, OnInit } from '@angular/core';
import { ItasService } from '../itas.service';

@Component({
  selector: 'app-ita',
  templateUrl: './ita.component.html',
  styleUrls: ['./ita.component.css']
})
export class ItaComponent implements OnInit {

  chuckJ: string = "";

  constructor(private joke: ItasService) { }

  ngOnInit() {
    this.joke.getJoke().subscribe(
      res=>{  
        this.chuckJ = res['value'];
        console.log(res);
      }
    );
  }

}
