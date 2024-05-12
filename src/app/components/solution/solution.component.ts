import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  standalone: true,
  imports: [],
  templateUrl: './solution.component.html',
  styleUrl: './solution.component.scss'
})
export class SolutionComponent {

  replaceWithVideo() {
    const video = document.querySelector<HTMLVideoElement>('video#vdPlayerSolution');
    const image = document.querySelector<HTMLImageElement>('img#imageSolution');

    if (image) {
      image.style.display = 'none';
    } else {
      console.error('img#imageSolution not found');
    }
    
    if (video) {
      video.style.display = 'block';
      video.play();
    } else {
      console.error('video#vdPlayerSolution not found');
    }    
  }
}
