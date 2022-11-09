module.exports = ({ env }) => ({
  url: env("PUBLIC_SERVER_URL", ""), // replaces `host` and `port` properties in the development environment
});
