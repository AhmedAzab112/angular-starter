import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/shared/modal/modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  readonly imgList: any[] = [
    {src :'./assets/img/cabin.png', name: 'LOG CABIN'},
    {src :'./assets/img/cake.png', name: 'TASTY CAKE'},
    {src :'./assets/img/circus.png', name: 'CIRCUS TENT'},
    {src :'./assets/img/game.png', name: 'CONTROLLER'},
    {src :'./assets/img/safe.png', name: 'LOCKED SAFE'},
    {src :'./assets/img/submarine.png', name: 'SUBMARINE'}
  ];
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }


  openModal(img: any){
    this.dialog.open(ModalComponent, {
      height: '85%',
      width: '50%',
      data: { src: img.src, name: img.name },
    });
  }

}
