import Sequelize from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  database: 'lex_machine_3',
  username: 'postgres',
  password: null,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true,
  },
});



const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.sync().then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.findAll().then(users => {
  console.log(users)
})

export default sequelize