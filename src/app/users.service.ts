import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
    constructor(private http: HttpClient) { }
    URL = 'https://randomuser.me/api/?inc&results=8&nat=gb';

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


    // users = [
    //     {
    //         title: 'title1',
    //         text: 'I am a very simple card. I am good at containing small bits of information.'
    //     },
    //     {
    //         title: 'title2',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title3',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title4',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title5',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title6',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title7',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     },
    //     {
    //         title: 'title8',
    //         text: 'I am convenient because I require little markup to use effectively.'
    //     }
    // ]

}