import { StateMgmtPage } from './app.po';

describe('state-mgmt App', () => {
  let page: StateMgmtPage;

  beforeEach(() => {
    page = new StateMgmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
