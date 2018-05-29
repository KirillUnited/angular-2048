import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-toggle',
  templateUrl: './btn-toggle.component.html',
  styleUrls: ['./btn-toggle.component.css']
})
export class BtnToggleComponent {
  name = {
    dark: "dark",
    light: "light"
  }
}
