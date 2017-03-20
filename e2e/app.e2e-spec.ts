import { PbAngular2Page } from './app.po';

describe('pb-angular2 App', () => {
  let page: PbAngular2Page;

  beforeEach(() => {
    page = new PbAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
