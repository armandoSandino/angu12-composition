import { Component, OnInit } from '@angular/core';
import { movieJSON } from '../../_files/movie';
import { Movie } from '../../models/movie';
import { InfoSite } from '../../models/info-site';
import { infoSite } from '../../_files/info-site';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  infoSite: InfoSite =  infoSite;
  
  constructor() { }

  ngOnInit(): void {
  }

}
