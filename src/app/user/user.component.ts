import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass']
})
export class UserComponent { 
    @Input() user;
    isChecked = false;
    onClick() {
        this.isChecked = !this.isChecked;
        console.log("yes");   
    }
}