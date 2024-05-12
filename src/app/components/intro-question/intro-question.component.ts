import { Component } from '@angular/core';

@Component({
  selector: 'app-intro-question',
  standalone: true,
  imports: [],
  templateUrl: './intro-question.component.html',
  styleUrl: './intro-question.component.scss'
})
export class IntroQuestionComponent {

  replaceWithVideo() {
    const video = document.querySelector<HTMLVideoElement>('video#vdPlayer');
    const image = document.querySelector<HTMLImageElement>('img#image');

    if (image) {
      image.style.display = 'none';
    } else {
      console.error('img#Image not found');
    }
    
    if (video) {
      video.style.display = 'block';
      video.play();
    } else {
      console.error('video#vdPlayer not found');
    }    
  }

}
