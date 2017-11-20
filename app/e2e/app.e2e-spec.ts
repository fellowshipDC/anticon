import { AnticonForzadaPage } from './app.po';

describe('anticon-forzada App', () => {
  let page: AnticonForzadaPage;

  beforeEach(() => {
    page = new AnticonForzadaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
