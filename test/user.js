const chai = require('chai')
const chaiHttp = require('chai-http')
let expect = chai.expect
chai.use(chaiHttp)
const server = require('../app')

let User = require('../server/models').User
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
                middle_name: 'Test'
            }
        })
    })
    describe(`Create APIs`, function() {
        it(`Should create new user/applicant `, function(done) {
            delete modelData['guest_count']
            modelData.middle_name = 'Test'
            chai.request(server)
            .post('/api/users')
            .send(modelData)
            .end((error, response) => {
                expect(response.status).to.be.equal(201)
                done();
            })
        })
    })
    describe(`Get APIs`, function() {
        it(`Should fetch user/applicant `, function(done) {
            chai.request(server)
            .get('/api/users')
            .end((error, response) => {
                console.log(response.body)
                expect(response.status).to.be.equal(200)
                done();
            })
        })
    })
})