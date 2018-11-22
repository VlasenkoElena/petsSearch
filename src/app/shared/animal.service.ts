import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';


@Injectable()
export class AnimalService {
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    getPets(): Observable<Post[]> {
        return this.http.get<Post[]>('http://localhost:3000/animals');
    }

    addPet(body): Observable<any> {
        return this.http.post<any>('http://localhost:3000/animals', body, this.headers);
    }
}
