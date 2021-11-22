const chai = require('chai')
const chaiHttp = require('chai-http')
let expect = chai.expect
chai.use(chaiHttp)
const server = require('../app')

let User = require('../server/models').User
let testUserID;
var modelData = {
    guest_count: 3,
    first_name: "Ajay",
    middle_name: "Mahipal",
    last_name: "Rana",
    email: "rakshay905@gmail.com",
    phone_number: "9671352509",
    date_of_birth: "14/12/1995",
    address: {
        street: "Mohan Nagar",
        unit: "unit1",
        city: "Yamuna Nagar",
        state: "Haryana",
        zip_code: "135001",
        type: "house"
    },
    preferred_deductible: "Na",
    industry: "Information Technology",
    occupation: "Engineer",
    education: "b.tech",
    residence_status: "Indian"
}

describe(`User Model`, function () {
    it(`should create a new user `, function (done) {
        User.create(modelData).then(function (user) {
            User.destroy({
                where: {
                    id: user.id
                }
            })
            done()
        })
    });
    it(`should create and fetch new user `, function (done) {
        User.create(modelData).then(function (user) {
            try {
                User.findOne({
                    where: {
                        id: user.id
                    }
                }).then(function() {
                    User.destroy({
                        where: {
                            id: user.id
                        }
                    })
                    done()
                })
            } catch (err) {
                expect(user.first_name).to.undefined; 
                if (err) {
                    done(err)
                }
            }
        })
    });
    it(`should delete a user from the database`, function () {
        User.create(modelData).then(function (user) {
            User.destroy({
                where: {
                    id: user.id
                }
            })
            try {
                User.findOne({
                    where: {
                        id: user.id
                    }
                })
            } catch (err) {
                expect(user.first_name).to.undefined; 
                if (err) {
                    done(err)
                }
            }
        })
    })
    it(`should update the user entry in the database`, function () {
        User.create(modelData).then(function (user) {
            //after user is created, then update a value
            let data = JSON.parse(JSON.stringify(modelData))
            data.guest_count = 12
            data.first_name = 'test applicant 12'
            User.update(data, {
                where: {
                    id: user.id
                }
            }).then(function(getUser) {
                User.findOne({
                    where: {
                        id: user.id
                    }
                }).then(function (data) {
                    expect(data.first_name).to.equal('test applicant 12');
                }).then(function (data) {
                    User.destroy({
                        where: {
                            id: user.id
                        }
                    })
                    done()
                })
            })
        })
    })
})

describe(`Use APIs`, function() {
    before(function() {
        User.destroy({
            where: {
                first_name: 'Test',
                last_name: 'Test'
            }
        })
    })
    describe(`Create APIs`, function() {
        it(`Should create new user/applicant`, function(done) {
            delete modelData['guest_count']
            modelData.middle_name = 'Test'
            modelData.first_name = 'Test'
            modelData.last_name = 'Test'
            chai.request(server)
            .post('/api/users')
            .send(modelData)
            .end((error, response) => {
                expect(response.status).to.be.equal(201)
                testUserID = response.body.id
                done();
            })
        })
        it(`Should create new user/applicant without middle_name`, function(done) {
            delete modelData['guest_count']
            delete modelData['middle_name']
            modelData.first_name = 'Test'
            modelData.last_name = 'Test'
            chai.request(server)
            .post('/api/users')
            .send(modelData)
            .end((error, response) => {
                expect(response.status).to.be.equal(201)
                testUserID = response.body.id
                done();
            })
        })
        it(`Should return true when there is a validation issues in creating new user/applicant`, function(done) {
            delete modelData['guest_count']
            delete modelData['middle_name']
            delete modelData['education']
            modelData.first_name = 'Test'
            modelData.last_name = 'Test'
            chai.request(server)
            .post('/api/users')
            .send(modelData)
            .end((error, response) => {
                expect(response.status).to.be.equal(400)
                // testUserID = response.body.id
                done();
            })
        })
    })
    describe(`Get APIs`, function() {
        it(`Should fetch user/applicant by ID`, function(done) {
            chai.request(server)
            .get('/api/users/' + testUserID)
            .end((error, response) => {
                expect(response.status).to.be.equal(200)
                done();
            })
        })
        it(`Should fetch user/applicant with all required keys`, function(done) {
            chai.request(server)
            .get('/api/users/' + testUserID)
            .end((error, response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.have.keys('first_name', 'last_name', 'email', 'middle_name', 'education',
                'address', 'preferred_deductible', 'industry', 'occupation', 'date_of_birth', 'phone_number', 'residence_status',
                'id', 'createdAt', 'updatedAt')
                expect(response.body.address).to.have.keys('street', 'unit', 'city', 'state', 'zip_code',
                'type')
                done();
            })
        })
        it(`Should fetch list of users/applicants `, function(done) {
            chai.request(server)
            .get('/api/users/')
            .end((error, response) => {
                expect(response.status).to.be.equal(200)
                done();
            })
        })
        it(`Should return true when no user/applicant present `, function(done) {
            chai.request(server)
            .get('/api/users/')
            .end((error, response) => {
                expect(response.status).to.be.equal(404)
                done();
            })
        })
        it(`Should return true when there is some issue in fetching all users/applicants `, function(done) {
            chai.request(server)
            .get('/api/users/')
            .end((error, response) => {
                expect(response.status).to.be.equal(400)
                done();
            })
        })
        it(`Should return true when user with ID=12 is not present `, function(done) {
            chai.request(server)
            .get('/api/users/12')
            .end((error, response) => {
                expect(response.status).to.be.equal(404)
                done();
            })
        })
    })
    describe(`Update APIs`, function() {
        it(`Should fetch and update user/applicant `, (done) => {
            chai.request(server)
            .get('/api/users/' + testUserID)
            .end((error, response) => {
                expect(response.status).to.be.equal(200)
                expect(response.body).to.be.a('object')
                let userData = response.body
                userData['education'] = 'M.tech'
                userData['industry'] = 'Teaching'
                userData['phone_number'] = '9896178650'
                userData['middle_name'] = 'update'
                delete userData['id']
                delete userData['createdAt']
                delete userData['updatedAt']
                chai.request(server)
                .put('/api/users/' + testUserID)
                .send(userData)
                .end((updateError, updateResponse) => {
                    expect(updateResponse.status).to.be.equal(200)
                    expect(updateResponse.body.education).to.be.equal('M.tech')
                    done()
                })
            })
        })
    })
})