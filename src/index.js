const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

// decode the JWT so we can get the user id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put  the userId onto the req for future requst to acces
    req.userId = userId;
  }

  console.log(token, 'ini token');

  // saat di aplikasi ujian dan pengawas
  const { idUjian } = req.cookies;
  if (idUjian) {
    console.log(idUjian, 'ini idujian');
  }

  next();
});

// create a middleware that populates the user on each request
server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();

  const user = await db.query.user({ where: { id: req.userId } }, '{ id, permissions, email}');
  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: false,
    },
  },
  (deets) => {
    console.log(`server backend berjalan di http:/localhost${deets.port}`);
  },
);
