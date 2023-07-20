// const util = require("util");
// const multer = require("multer");
// const { GridFsStorage } = require("multer-gridfs-storage");

// //Initialize the database
// const dbConfig = require("../setup/myurl");

// //creating the storage variable for multer
// // var storage = new GridFsStorage({
// //   url: dbConfig.mongoURl,
// //   options: { useNewUrlParser: true, useUnifiedTopology: true },
// //   file: (req, file) => {
// //     const match = ["image/jpeg", "image.png"];

// //     if (match.indexOf(file.mimetype) === -1) {
// //       const filename = `${Date.now()}-crop-${file.originalname}`;
// //       return filename;
// //     }
// //     return (filename = `${Date.now()}-crop-${file.originalname}`);
// //   },
// // });

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.filename + "-" + Date.now());
//   },
// });

// var uploadFiles = multer({ storage: storage }).array("files", 5);
// var uploadFilesMiddleware = util.promisify(uploadFiles);

// module.exports = uploadFilesMiddleware;
