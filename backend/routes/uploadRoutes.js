const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

router.post(
  '/certificateOfIncoporation',
  uploadController.uploadCOI,
  uploadController.uploadFile
);
router.post('/cac', uploadController.uploadCAC, uploadController.uploadFile);
router.post(
  '/memart',
  uploadController.uploadMemart,
  uploadController.uploadFile
);

module.exports = router;
