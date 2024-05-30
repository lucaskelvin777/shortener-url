
const shortid = require('shortid');
const { Url } = require('../db/init');
async function ShortenController(req, res) {
    const { originalUrl } = req.body;
    let url = await Url.findOne({ originalUrl });

    if (url) {
        res.json({
            id: url.id,
            originalUrl: url.originalUrl,
            shortUrl: url.shortUrl,
            fullShortUrl: `${process.env.FULL_HOST}/${url.shortUrl}`
        });
    }
    else {
        const shortUrl = shortid.generate();
        const newUrl = new Url({ originalUrl, shortUrl,  date: Date.now()});
        await newUrl.save();
        res.json({
            id: newUrl.id,
            originalUrl: newUrl.originalUrl,
            shortUrl: newUrl.shortUrl,
            fullShortUrl: `${process.env.FULL_HOST}/${shortUrl}`
        });
    }
}
async function GetByShorted(req, res) {
    const url = await Url.findOne({ shortUrl: req.params.id });

    if (url)
        res.redirect(url.originalUrl);
    else
        res.status(404).json('Url não encontrada');

}
async function GetById(req, res) {
    const url = await Url.findById(req.params.id);

    if (url)
        res.redirect(url.originalUrl);
    else
        res.status(404).json('Url não encontrada');

}

async function GetAllByDate(req, res) {
    let urls;
    try {
        const dateParts = req.params.date.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1;
        const day = parseInt(dateParts[2]);
        const startOfDay = new Date(year, month, day, 0, 0, 0).getTime();
        const endOfDay = new Date(year, month, day, 23, 59, 59).getTime();
        urls = await Url.find({ date: { $gte: startOfDay, $lte: endOfDay } });
    } catch (ex) {
        res.status(500).json("Ocorreu um erro ao processar a solicitação.");
        return;
    }

    if (urls?.length) {
        const result = urls.map(url => {
            return {
                id: url.id,
                originalUrl: url.originalUrl,
                shortUrl: url.shortUrl,
                fullShortUrl: `${process.env.FULL_HOST}/${url.shortUrl}`
            };
        });
        res.json(result);
    } else {
        res.status(404).json('Não foram encontradas URLs nessa data informada');
    }
}



module.exports = {
    ShortenController,
    GetById,
    GetByShorted,
    GetAllByDate
}