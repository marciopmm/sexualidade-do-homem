import { Component } from '@angular/core';

@Component({
  selector: 'app-explanation',
  standalone: true,
  imports: [],
  templateUrl: './explanation.component.html',
  styleUrl: './explanation.component.scss'
})
export class ExplanationComponent {
  replaceWithVideo() {
    const video = document.querySelector<HTMLVideoElement>('video#vdPlayerExplanation');
    const image = document.querySelector<HTMLImageElement>('img#imageExplanation');

    if (image) {
      image.style.display = 'none';
    } else {
      console.error('img#imageExplanation not found');
    }
    
    if (video) {
      video.style.display = 'block';
      video.play();
    } else {
      console.error('video#vdPlayerExplanation not found');
    }    
  }
}
