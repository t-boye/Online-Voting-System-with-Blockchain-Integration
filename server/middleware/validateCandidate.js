const { check, validationResult } = require('express-validator');

const validateCandidate = [
  check('name')
    .notEmpty()
    .withMessage('Name is required'),
  check('indexNumber')
    .notEmpty()
    .withMessage('Index number is required')
    .isLength({ min: 10, max: 10 })
    .withMessage('Index number must be 10 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateCandidate;