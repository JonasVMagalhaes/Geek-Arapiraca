import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AnswerByThemeComponent } from './features/answer-by-theme/answer-by-theme.component';

export const routes: Routes = [
    { path: "", redirectTo: "answer-by-theme", pathMatch: "full" },
    { path: "answer-by-theme", component: AnswerByThemeComponent },
    { path: "*", component: AnswerByThemeComponent },
    { path: "**", component: PageNotFoundComponent },
];
