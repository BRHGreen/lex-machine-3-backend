import Sequelize from 'sequelize';

const Models = sequelize.import(__dirname + "./models")

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

Models.users.sync({ force: true }).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

console.log(Models)


export default sequelize