const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

module.exports = async (token, next) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_API,
    });
    return ticket.getPayload();
  } catch (error) {
    next(error);
  }
};