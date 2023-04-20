import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { StartComponent } from './start/start.component';
import { FooterComponent } from './footer/footer.component';
import { FirstcontentComponent } from './firstcontent/firstcontent.component';
import { SecondcontentComponent } from './secondcontent/secondcontent.component';
import { ThirdcontentComponent } from './thirdcontent/thirdcontent.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    HeadComponent,
    StartComponent,
    FooterComponent,
    FirstcontentComponent,
    SecondcontentComponent,
    ThirdcontentComponent,
    ContactComponent
  ],
  imports: [
    FormsModule, 
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
