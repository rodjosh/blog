module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb9675339e3845a4a0f4bb84c9b90631'),
  },
});
