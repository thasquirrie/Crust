const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Form = require('../models/Form');
const multer = require('multer');
const { diskStorage } = require('multer');

const storage = diskStorage({
  destination: (req, file, cb) => {
    console.log('Yes this is called');
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];

    cb(null, `${file.originalname.split('.')[0]}-${Date.now()}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFiles = ['pdf', 'jpeg', 'png'];
  if (
    file.mimetype.split('/')[1].includes(...allowedFiles) ||
    file.mimetype.startsWith('image')
  ) {
    cb(null, true);
  } else {
    cb(
      new AppError(
        `The file type uploaded is '${
          file.mimetype.split('/')[1]
        }' and it's not allowed on this server`,
        400
      ),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

exports.uploads = upload.fields([
  {
    name: 'memart',
    maxCount: 1,
  },
  {
    name: 'certificateOfIncoporation',
    maxCount: 1,
  },
  {
    name: 'cac',
    maxCount: 1,
  },
]);

exports.getAllForms = catchAsync(async (req, res) => {
  const forms = await Form.find();

  req.status(200).json({
    status: 'success',
    length: forms.length,
    data: {
      forms,
    },
  });
});

exports.createForm = catchAsync(async (req, res, next) => {
  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  const form = await Form.create(req.body);

  console.log({ form });
  console.log(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      form,
    },
  });
});

exports.getForm = catchAsync(async (req, res, next) => {
  const form = await Form.findById(req.params.id);

  if (!form)
    return next(
      new AppError('No form with the specified id exist on this server', 404)
    );

  res.status(200).json({
    status: 'success',
    data: {
      form,
    },
  });
});

exports.editForm = catchAsync(async (req, res, next) => {
  const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!form)
    return next(
      new AppError('No form with the specified id exist on this server', 404)
    );

  res.status(200).json({
    status: 'success',
    data: {
      form,
    },
  });
});
