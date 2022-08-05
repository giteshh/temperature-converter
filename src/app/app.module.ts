import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire/compat";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAnalytics, provideAnalytics} from "@angular/fire/analytics";
import {environment} from "../environments/environment";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getPerformance, providePerformance} from "@angular/fire/performance";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSliderModule,
    MatCardModule,
    DragDropModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
