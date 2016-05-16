import { Component } from '@angular/core';

export class Workout{
    name: string;
    difficulty: number;
}

@Component({
  moduleId: module.id,
  selector: 'workouts-app',
  template : `
  <h1>{{title}}</h1>
  <h2>Here goes the first workout, the {{workout.name}}</h2>
  <div>
  <label>name:</label>
  <input [(ngModel)]="workout.name" placeholder="name">
  </div>
  <div>
  <label>difficulty:</label>
  <input [(ngModel)]="workout.difficulty" placeholder="difficulty">
  </div>
  `,
  styleUrls: ['workouts.component.css']
})
export class WorkoutsAppComponent {
  title = 'The mighty workouts list works!';
  workout: Workout = {
      name : 'Murph',
      difficulty : 10
  };
}
