import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { IntroQuestionComponent } from './components/intro-question/intro-question.component';
import { SolutionComponent } from './components/solution/solution.component';
import { ProvaComponent } from './components/prova/prova.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { CtaComponent } from './components/cta/cta.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      HeaderComponent,
      IntroComponent,
      IntroQuestionComponent,
      SolutionComponent,
      ProvaComponent,
      ExplanationComponent,
      CtaComponent
    ]
})
export class AppComponent {
  title = 'Sexualidade do Homem';
}
