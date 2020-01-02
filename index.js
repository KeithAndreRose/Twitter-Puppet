const twitterPuppet = require("./twitter");
// const botUser = require('./env/botUser');

(async () => {
  await twitterPuppet.init();
  await twitterPuppet.login(botUser.name, botUser.password)

  debugger
  await twitterPuppet.shutdown()
})();
