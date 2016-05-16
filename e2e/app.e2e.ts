import { WorkoutsPage } from './app.po';

describe('workouts App', function() {
  let page: WorkoutsPage;

  beforeEach(() => {
    page = new WorkoutsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('workouts works!');
  });
});
