module.exports = (error, req, res, next) => {
  let status = 500;
  let message = 'intenal server error';
  switch (error.name) {
    case 'SequelizeValidationError':
    case 'SequelizeUniqueConstraintError':
      status = 400;
      message = error.errors[0].message;
      res.status(status).json({ message });
      break;
    case 'not_found':
      status = 404;
      message = 'not found';
      res.status(status).json({ message });
      break;
    case 'JsonWebTokenError':
    case 'un_authorize':
      status = 401;
      message = 'invalid token';
      res.status(status).json({ message });
      break;
    case 'forbidden':
      status = 403;
      message = 'unauthorized';
      res.status(status).json({ message });
      break;
    default:
      res.status(status).json({ message });
  }
  console.log(`Error name: ${error.name}`);
};
