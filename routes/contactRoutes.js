const express = require('express');
const {getAllContacts, createContact, getContactById, updateContact, deleteContact, searchForContact} = require('../controllers/contactController');
const {validate} = require('../middleware/validation');

const router = express.Router();

router.get('/', getAllContacts);

router.post('/create', validate, createContact);

router.get('/:id', getContactById);

router.put('/:id', validate, updateContact);

router.delete('/:id', deleteContact);

router.post('/search', searchForContact);

module.exports = router;