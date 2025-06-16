const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '.public/upload/farmacias/');
  },
  filename: function (req, file, cb) {
    //let data = new Date().toISOString().replace(/:/g, '-') + '-';
    //let data = Date.now().toString();
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // identica a extensão
    const ext = file.mimetype === 'image/jpeg' ? '.jpeg' : file.mimetype.slice(file.mimetype.length - 3);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    // cb(null, data + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image')
}