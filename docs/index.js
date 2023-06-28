const router = require('express').Router();
const swqaggerUi = require('swagger-ui-express');
const Yaml = require('yamljs');
const docs = Yaml.load('./docs/endpoints.yml');

router.use('/', swqaggerUi.serve, swqaggerUi.setup(docs));

module.exports = router;
