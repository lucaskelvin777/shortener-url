require('dotenv').config();
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const { ShortenController, GetById, GetAllByDate, GetByShorted } = require('./src/controllers/Controllers');
const PORT = process.env.PORT || 3000;

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(express.json());

app.post('/shorten', ShortenController);

app.get('/:id', GetByShorted);
app.get('/id/:id', GetById);

app.get('/all/:date', GetAllByDate);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
