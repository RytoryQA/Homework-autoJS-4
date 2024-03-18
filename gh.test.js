let page;

beforeEach(async () => {
  page = await browser.newPage();
 });

afterEach(() => {
  page.close();
});

describe("Github TeamPage tests", () => {
  beforeEach(async () => { await page.goto("https://github.com/team");});
  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const actual = await page.title();
    expect(actual).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 4000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 3000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain('Get started with Team')
  }, 2000);
});

describe("Github SecurityPage tests", () => {
  beforeEach(async () => { await page.goto("https://github.com/features/security");});
  test("The h1 header content", async () => {
    await page.waitForSelector('h1');
    const actual = await page.title();
    expect(actual).toEqual('Features · Security · GitHub');
  }, 2000);

  test("The page contains Request a demo button", async () => {
    const btnRequest = ".btn-mktg.mb-3.btn-large-mktg";
    await page.waitForSelector(btnRequest, {
      visible: true,
    });
    const actual = await page.$eval(btnRequest, link => link.textContent);
    expect(actual).toContain('Request a demo');
  }, 2000);

  test("", async () => {
    const btnContact = ".btn-mktg.mb-3.ml-md-2.btn-large-mktg.btn-muted-mktg";
    await page.waitForSelector(btnContact, {
      visible: true,
    });
    await page.click(btnContact);
    const actual = await page.title();
    expect(actual).toEqual('GitHub Advanced Security - Contact - GitHub Resources');
  }, 3000);
});

