module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c839b0bbcb7019fb9edd8755db3131a5'),
  },
});
