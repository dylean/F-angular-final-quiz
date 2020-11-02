import { Component, OnInit } from '@angular/core';
import { Trainee } from '../trainee/trainee';
import { TraineeService } from '../trainee/trainee.service';
import { Trainer } from './trainer';
import { TrainerService } from './trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  trainers: Trainer[];
  inputDisplay = true;

  constructor(private trainerService: TrainerService) {}

  getAllTrainers(): void {
    this.trainerService
      .getUnGroupTrainers()
      .subscribe((trainers) => (this.trainers = [...trainers]));
  }
  ngOnInit(): void {
    this.getAllTrainers();
  }

  // TODO GTB-4: - 命名和实现不一致，实现是toggle的逻辑
  displayInputButton(): void {
    this.inputDisplay = !this.inputDisplay;
  }

  addNewTrainer(value: string): void {
    this.trainerService.addNewTrainer(value).subscribe(() => {
      this.inputDisplay = !this.inputDisplay;
      this.getAllTrainers();
    });
  }
}
