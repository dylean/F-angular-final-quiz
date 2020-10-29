import { Trainee } from '../trainee/trainee';
import { Trainer } from '../trainer/trainer';

export interface Group {
  id: number;
  name: string;
  trainees: Trainee[];
  trainers: Trainer[];
}
