import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { Group } from './group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  groups: Group[];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService
      .getAllGroups()
      .subscribe((groups) => (this.groups = [...groups]));
  }

  groupAllTraineeAndTrainer(): void {
    this.groupService
      .autoGroups()
      .subscribe((groups) => (this.groups = [...groups]));
  }
}
