import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root',
})
export class TraineeService {
  constructor(private http: HttpClient) {}

  getUnGroupTrainees(): Observable<Trainee[]> {
    return this.http.get<Trainee[]>(
      'http://localhost:8080/trainees?grouped=false'
    );
  }

  addNewTrainee(name: string): Observable<Trainee> {
    return this.http.post<Trainee>('http://localhost:8080/trainees', { name });
  }
}
