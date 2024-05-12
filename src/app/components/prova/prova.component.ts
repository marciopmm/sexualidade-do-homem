import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.scss'
})
export class ProvaComponent {

  popupShow: boolean = false;
  imgSource: string = 'assets/img/20201126_071729_min.jpg';

  constructor() { }

  imgClick(urlImg: string) {
    console.log('Image ' + urlImg + ' clicked');
    this.imgSource = urlImg;
    this.popupShow = true;
  }

  popupClose() {
    console.log('Close clicked');
    this.popupShow = false;
  }
}
