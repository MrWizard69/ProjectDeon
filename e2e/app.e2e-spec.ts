import { ProjectDeonPage } from './app.po';

describe('project-deon App', () => {
  let page: ProjectDeonPage;

  beforeEach(() => {
    page = new ProjectDeonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
