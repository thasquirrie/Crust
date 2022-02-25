const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Form = require('../models/Form');

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
