const Contact = require('../models/contactModel');

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }
    catch (error) {
        res.status(500).json({message:error.message});
    }
}

const createContact = async (req, res) => {
    try {
        const newContact = new contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateContact = async (req,res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new : true});
        if (!updatedContact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json(updatedContact);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({message: 'Contact not found'});
        }
        res.status(200).json({message: "Contact deleted successfully"})
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json(contact);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

const searchForContact = async (req, res) => {
    try {
        const {query} = req.query;

        if (!query) {
            return res.status(400).json({message: 'Query parameter is required'});
        }

        const contacts = await Contact.find();

        const searchResults = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(query.toLowerCase()) || 
                    contact.email.toLowerCase().includes(query.toLowerCase());
        });
        res.status(200).json(searchResults);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllContacts, createContact, getContactById, updateContact, deleteContact, searchForContact};