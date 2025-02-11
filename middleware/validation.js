const {body, validationResult} = require('express-validator');

const contactValidation = () => {
    return [
        body('name').notEmpty().withMessage("Name is required"),
        body('email').notEmpty().withMessage("Email is required"),
        body('phoneNumber').notEmpty().withMessage("Phone number is required"),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({errors : errors.array()});
}

module.exports = {contactValidation, validate};