import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { environment } from '../../environments/environment';


@Injectable()
export class AnimalService {
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    getPets(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}`);
    }

    addPet(body): Observable<Post> {
        return this.http.post<Post>(`${environment.apiUrl}`, body, this.headers);
    }

    deletePet(id) {
        return this.http.delete(`${environment.apiUrl}/${id}`);
    }
}
