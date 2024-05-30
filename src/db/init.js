
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.URL_MONGODB}`, {});
const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
    date: { type: Number, default: () => Date.now() }
});
const Url = mongoose.model('Url', urlSchema);
module.exports = {
    Url
}