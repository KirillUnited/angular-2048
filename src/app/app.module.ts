import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BtnToggleComponent } from './user/btn-toggle/btn-toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './hover.directive';
import { FormsModule } from "@angular/forms";
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BtnToggleComponent,
    HoverDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
