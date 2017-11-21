import { GireFellowPage } from './app.po';

describe('gire-fellow App', () => {
  let page: GireFellowPage;

  beforeEach(() => {
    page = new GireFellowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
