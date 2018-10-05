import { AppPage } from './app.po';

describe('Testing Home Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Class');
  });

  it('Thee Items in Navigation', () => {
    page.navigateTo();
    expect(page.getAllLinks()).toEqual(['Home', 'My Todos', 'About']);
  });

});
