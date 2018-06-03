import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-btn-toggle',
  templateUrl: './btn-toggle.component.html',
  styleUrls: ['./btn-toggle.component.css']
})
export class BtnToggleComponent {
  public color;
  public colorTheme;
  public toggle = false;
  name = {
    dark: "dark",
    light: "light"
  }
  colorThemeClasses = {
    dark: "bg_theme_dark",
    grey: "bg_theme_grey",
    blue: "bg_theme_blue"
  }
  ngOnInit() {
    this.color = this.name.dark;
  }
  changeBackground() {
    if (this.color == 'dark') {
      this.color = this.name.light;
    } else {
      this.color = this.name.dark;
    }
    this.toggle = !this.toggle;
    if (this.toggle == true) {
      this.colorTheme = this.colorThemeClasses.dark;
    } else {
      this.colorTheme = '';
    }
  }
  @Output() onChange = new EventEmitter<any>();
  change(){
    this.onChange.emit();
  }
}
