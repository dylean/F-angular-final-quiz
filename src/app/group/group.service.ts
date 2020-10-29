import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>('http://localhost:8080/groups');
  }

  autoGroups(): Observable<Group[]> {
    return this.http.post<Group[]>(
      'http://localhost:8080/groups/auto-grouping',
      null
    );
  }
}
