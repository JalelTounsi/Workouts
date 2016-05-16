export class WorkoutsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('workouts-app h1')).getText();
  }
}
