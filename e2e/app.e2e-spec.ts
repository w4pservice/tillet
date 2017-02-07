import { WorkTilletPage } from './app.po';

describe('work-tillet App', function() {
  let page: WorkTilletPage;

  beforeEach(() => {
    page = new WorkTilletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
