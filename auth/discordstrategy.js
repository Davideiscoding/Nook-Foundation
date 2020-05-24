import Oauth from '../auth/oauth';
const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');


passport.use(new DiscordStrategy({
  clientID: Oauth.clientId,
  clientSecret: Oauth.clientSecret,
  redirectUri: Oauth.redirectUri,
  scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    console.log(profile.username);
    console.log(profile.id);
    console.log(profile.guilds.length);
}));

export default DiscordStrategy
