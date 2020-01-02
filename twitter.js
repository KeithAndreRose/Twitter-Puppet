const puppeteer = require("puppeteer");

const TWITTER_URL = `https://twitter.com/`;
// TODO: TWITTER_EXPLORE
// TODO: TWITTER_LOGIN
// TODO: TWITTER_PROFILE
// TODO: TWITTER_PROFILE_LIKES
// TODO: TWITTER_COMPOSE_TWEET


const self = {
  browser: null,
  page: null,

  init: async subreddit => {
    self.browser = await puppeteer.launch({
      headless: false
    });
    self.page = await self.browser.newPage();
  },
  login: async (user, passwd) => {
    // TODO: Goto "login"
    // TODO: Type in credintaial
    // TODO: Click "login"

    // await self.page.type('input[name="user"]', user, { delay: 30 });
    // await self.page.type('input[name="passwd"]', passwd, { delay: 30 });
    // await self.page.click("#login_login-main > div.submit > button");

    // TODO: waitFor (a[href="profile"]) or (LOGIN ERROR)
  
  },
  composeTweet: async (data = {}) => {
    // TODO: Compose Tweet (w/ data)
  },
  exploreResults: async () => {
  //  TODO: List Twitter Explor Tag Results
  },
  shutdown: async () => {
    console.log(`Shutting down`)
    await self.browser.close();
    self.browser.disconnect();
    process.exit(1);
  }
};

module.exports = self;
