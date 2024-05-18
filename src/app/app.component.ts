import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { IntroQuestionComponent } from './components/intro-question/intro-question.component';
import { SolutionComponent } from './components/solution/solution.component';
import { ProvaComponent } from './components/prova/prova.component';
import { ExplanationComponent } from './components/explanation/explanation.component';
import { CtaComponent } from './components/cta/cta.component';
import { AuthorComponent } from './components/author/author.component';
import { FinalComponent } from './components/final/final.component';
import { FooterComponent } from './components/footer/footer.component';

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
      CtaComponent,
      AuthorComponent,
      FinalComponent,
      FooterComponent
    ]
})
export class AppComponent {
  title = 'Sexualidade do Homem';
}
