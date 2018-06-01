import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    setSize(size) {
        this.size = size;
        console.log(this.size);
    }
    size = 8;
    constructor(private http: HttpClient) { }
    URL = 'https://randomuser.me/api/?inc&results=' + this.size + '&nat=gb';
    getUsers(): Observable<URL[]> {
        return this.http.get(this.URL).pipe(map(data => {
            let usersList = data['results'];
            return usersList.map(function (user: any) {
                return {
                    name: user.name.title + ' ' + user.name.first + ' ' + user.name.last + ' ',
                    phone: user.phone,
                    adress: user.location.city + ', ' + user.location.street,
                    img: user.picture.large
                }
            });
        }));
    }
}