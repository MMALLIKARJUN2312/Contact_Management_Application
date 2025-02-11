const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactsRoutes = require('./routes/contactRoutes');
const {errorHandler, notFound} = require('./utils/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/contacts', contactsRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
});