import { InfoPaginasService } from './../../services/info-paginas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public infoServicio: InfoPaginasService) { }

  ngOnInit(): void {
  }

}
