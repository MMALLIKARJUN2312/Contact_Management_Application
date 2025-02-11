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
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({
            message: "Contact created successfully",
            contact : newContact
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

const updateContact = async (req,res) => {
    try {
        const contactId = req.params.id;
        const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {new : true});
        if (!updatedContact) {
            return res.status(404).json({message: "Contact not found"});
        }
        res.status(200).json({
            message : "Contact updated successfully",
            contact : updatedContact
        });
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
}

const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const deletedContact = await Contact.findByIdAndDelete(contactId);
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
        const contactId = req.params.id;
        const contact = await Contact.findById(contactId);
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

        const searchResults = await Contact.find({
            $or: [
                {name : { $regex : query, $options : 'i'}},
                {email : { $regex : query, $options: 'i'}}
            ]
        });

        if (searchResults.length === 0) {
            return res.status(404).json({message: "No Contacts found"})
        }

        res.status(200).json({contacts: searchResults});
    }
    catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({message: error.message});
    }
}

module.exports = {getAllContacts, createContact, getContactById, updateContact, deleteContact, searchForContact};