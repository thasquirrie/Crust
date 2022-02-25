const mongoose = require('mongoose');

const formationDocumentsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  certificationOfIncoporation: {
    type: String,
    required: [true, 'Certification of Incoportation is required'],
  },
  cac: {
    type: String,
    required: [true, 'CAC 1.1 Form is required'],
  },
  memart: {
    type: String,
    required: [true, 'Memorandum of Articles (MEMART) is required'],
  },
});

formationDocumentsSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'email',
  });
});

const FormationDocuments = mongoose.model(
  'FormationDocuments',
  formationDocumentsSchema
);

module.exports = FormatDocuments;
