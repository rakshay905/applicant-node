const usersController = require('../controllers').users;
const schemas = require('../schemas/schemas');
const middleware = require('../middleware/validate');

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Users API!',
    }));
    app.post('/api/users', middleware(schemas.user, 'body'), usersController.addNewApplicant);
    app.get('/api/users', usersController.listAllApplicants);
    app.get('/api/users/:Id', usersController.fetchApplicantDetails);
};