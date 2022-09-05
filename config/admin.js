module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "c839b0bbcb7019fb9edd8755db3131a5"),
  },
  url: "/dashboard", // localhost:1337/dashboard
});
