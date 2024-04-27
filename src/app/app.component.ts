import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { IntroQuestionComponent } from './components/intro-question/intro-question.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet, 
      HeaderComponent,
      IntroComponent,
      IntroQuestionComponent
    ]
})
export class AppComponent {
  title = 'Sexualidade do Homem';
}
