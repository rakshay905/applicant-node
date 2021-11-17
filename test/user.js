const chai = require('chai')
let expect = chai.expect
let User = require('../server/models').User
var modelData = {
    guest_count: 3,
    start_date: "2018-01-11T00:00:00.000Z",
    end_date: "2018-01-12T00:00:00.000Z",
    first_name: "Ajay",
    middle_name: "Mahipal12",
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
            modelData.guest_count = 12
            modelData.first_name = 'test applicant 12'
            User.update(modelData, {
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