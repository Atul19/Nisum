import { Component, OnInit, ViewChild } from '@angular/core';
import { WestlmService } from '../service/westlm.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  originalProductList;
  productList;
  productImages;

  constructor(private service: WestlmService) { }

  ngOnInit() {

    this.service.getProductsList().subscribe(
      (list) => {
        this.originalProductList = list; 
        this.productList = this.originalProductList.groups;
        console.log('this.productList: ', this.productList);
      }
    );
  }

  @ViewChild('frame') frame: ModalDirective;
  
  
    showCarousel(images) {
      this.productImages = [...images];
      console.log('this.productImages: ', this.productImages);
      this.frame.show();
    }

}
