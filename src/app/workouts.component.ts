import { Component } from '@angular/core';

export class Workout {
    name: string;
    composition: string;
    format: string;
}

@Component(
{
  moduleId: module.id,
  selector: 'workouts-app',
  template : `
  <h1>{{title}}</h1>
  <h2>Here goes the workout list</h2>
  <div>
    <ul class='workouts'>
  <li *ngFor="let workout of workouts"
  [class.selected]="workout === selectedWorkout"
  (click)="onSelect(workout)">
            <span class="badge">{{workout.format}}</span>
            {{workout.name}}
  </li>
  </ul>
  </div>

  <div *ngIf="selectedWorkout">
      <h2>{{selectedWorkout.name}} details!</h2>
      <div><label>format: </label>{{selectedWorkout.format}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedWorkout.name" placeholder="name"/>
      </div>
      <div>
        <label>composition: </label>
        <input [(ngModel)]="selectedWorkout.composition" placeholder="composition"/>
      </div>
    </div>
  `,
  styleUrls: ['workouts.component.css']
})

export class WorkoutsAppComponent {
  title = 'The mighty workouts list works!';
  workouts = WORKOUTS;
  selectedWorkout: Workout;
  onSelect(workout: Workout) {this.selectedWorkout = workout; }
}

var WORKOUTS: Workout[] = [
    {'name' : 'Murph', composition: 'run, pullup, situp, squat, run', 'format': 'FT'},
    {'name' : 'Fran', composition : 'thrusters, pullup', 'format': 'FT'},
    {'name' : 'The Seven', composition : 'handstand pushup, thruster, knees to elbow, deadlift, burpee, kettlebell swing, pullup', 'format': 'FT'},
    {'name' : 'Glen', composition : 'clean jerk, run, robe climb, run, burpee', 'format': 'AMRAP'},
    {'name' : 'Cindy XXX', composition : 'pullup, pushup, squat', 'format': 'AMRAP'},
    {'name' : 'OPEN 15.5', composition : 'thrusters, calories row', 'format': 'FT'},
    {'name' : 'The Ryan', composition : 'muscleup, burpee', 'format': 'FT'},
    {'name' : 'King Kong', composition : 'deadlift, muscleup, squat clean, handstand pushup', 'format': 'FT'},
    {'name' : 'Air Force One', composition : 'thrusters, sumo deadlift, push jerk, overhead squat, front squat, burpee', 'format':'FT'}
];
