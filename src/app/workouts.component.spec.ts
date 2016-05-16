import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorkoutsAppComponent } from '../app/workouts.component';

beforeEachProviders(() => [WorkoutsAppComponent]);

describe('App: Workouts', () => {
  it('should create the app',
      inject([WorkoutsAppComponent], (app: WorkoutsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'workouts works!\'',
      inject([WorkoutsAppComponent], (app: WorkoutsAppComponent) => {
    expect(app.title).toEqual('workouts works!');
  }));
});
