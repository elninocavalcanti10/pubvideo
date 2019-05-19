const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);
//key - hash  yuftyfr53#gghg-foto.jpg
        file.key = `${hash.toString('hex')}-${file.originalname}`;
        
        cb(null, file.key);
      })
    }
  })
};