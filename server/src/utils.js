const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-aw3some';

function getTokenPayload(token) {
  return jwt.verify(token, APP_SECRET);
}

function setToken(user_id) {
  return jwt.sign({ userId: user_id }, APP_SECRET);
}

function getUserId(req) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = getTokenPayload(token);
      return userId;
    }
  }

  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  setToken,
  getUserId
};
