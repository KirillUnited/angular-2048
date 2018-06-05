import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.sass'],
    providers: []
})
export class UserComponent { 
    @Input() user;
    isChecked = false;
    onClick() {
        this.isChecked = !this.isChecked;
        console.log("yes");   
    }
}