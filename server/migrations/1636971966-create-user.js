module.exports = {
    up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        middle_name: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        preferred_deductible: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        residence_status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        industry: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        occupation: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        education: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
    }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Users'),
};