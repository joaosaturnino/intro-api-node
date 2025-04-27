const multer = require('multer');

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null,  './public/upload/medicamentos/');
    },
    filename : function (req, file, cb) {
        //let data = new Date(). toISOString(). replace(/:g, '-') + '-';
        //let data = Date.now().toString();
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // identificar extensão
        const ext = file.mimetype === 'image/jpeg' ? '.jpeg' : file.mimetype.slice(file.mimetype.length - 3);
        cd(null, file.fieldname + '-' + uniqueSuffix + ext);
        //cd(null, data + '_' + file.originalname);
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = (multer({
    storage: storage,
        limits: {
            fileSize: 1024 * 1024 * 5 // 5MB
        },
        fileFilter: filefilter
}));