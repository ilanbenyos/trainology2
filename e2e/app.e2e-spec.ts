import { Trainology1Page } from './app.po';

describe('trainology1 App', function() {
  let page: Trainology1Page;

  beforeEach(() => {
    page = new Trainology1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
