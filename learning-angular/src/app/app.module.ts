import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    TemplateSyntaxComponent,
    DataBindingComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
