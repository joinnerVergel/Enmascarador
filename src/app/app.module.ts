import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EnmascaramientoComponent } from './components/enmascaramiento/enmascaramiento.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EnmascaramientoComponent,
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent, children: [
          { path: '', redirectTo: "/R/error", pathMatch: 'full' },
          { path: ":link", component: EnmascaramientoComponent },
          { path: "R/error", component: ErrorComponent }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
