import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  constructor(private http: HttpClient) {}

  getUnGroupTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(
      'http://localhost:8080/trainers?grouped=false'
    );
  }

  addNewTrainer(name: string): Observable<Trainer> {
    return this.http.post<Trainer>('http://localhost:8080/trainers', { name });
  }
}
