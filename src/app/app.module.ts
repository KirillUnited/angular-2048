import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BtnToggleComponent } from './user/btn-toggle/btn-toggle.component';
import { HttpClientModule } from '@angular/common/http';
import { HoverDirective } from './hover.directive';
import { FormsModule } from "@angular/forms";
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RouterModule } from '@angular/router'
import { UsersService } from './users.service';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BtnToggleComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
