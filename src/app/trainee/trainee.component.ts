import { Component, OnInit } from '@angular/core';
import { TraineeService } from './trainee.service';
import { Trainee } from './trainee';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.scss'],
})
export class TraineeComponent implements OnInit {
  trainees: Trainee[];
  inputDisplay = true;

  constructor(private traineeService: TraineeService) {}

  getAllTrainees(): void {
    this.traineeService
      .getUnGroupTrainees()
      .subscribe((trainees) => (this.trainees = [...trainees]));
  }

  ngOnInit(): void {
    this.getAllTrainees();
  }

  displayInputButton(): void {
    this.inputDisplay = !this.inputDisplay;
  }

  addNewTrainee(value: string): void {
    this.traineeService.addNewTrainee(value).subscribe(() => {
      this.inputDisplay = !this.inputDisplay;
      this.getAllTrainees();
    });
  }
}
