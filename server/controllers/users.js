const User = require('../models').User;

module.exports = {
    /**
     * addNewApplicant: It is used to add/create new applicant.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    addNewApplicant(req, res) {
        return User
        .create(req.body)
        .then(user => {
            res.status(201).send(user)
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error)
        });
    },

    /**
     * listAllApplicants: It is used to fetch list of all applicants.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    listAllApplicants(req, res) {
        return User
        .findAll({})
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    },

    /**
     * fetchApplicantDetails: It is used to fetch applicant's details by applicant Id.
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    fetchApplicantDetails(req, res) {
        return User
        .findByPk(req.params.Id, {})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                  message: 'Applicant Not Found',
                });
            }
            res.status(200).send(user)
        })
        .catch(error => res.status(400).send(error));
    }

};