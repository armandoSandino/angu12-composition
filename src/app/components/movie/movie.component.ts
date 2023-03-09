import { Component, Input, OnInit } from '@angular/core';
import  { Movie } from '../../models/movie';
import { movieJSON } from '../../_files/movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input 
  currentMovie?: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
