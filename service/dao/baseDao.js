
/*
第一个参数'test1' 是数据库名。
第二个参数'root'是登录用户名。
第三个参数'123456'是登录用户对应的密码。
第四个参数：
host：数据库主机地址
dialect：'mysql'|'sqlite'|'postgres'|'mssql'
*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node', 'root', '123', {
  host : 'localhost',
  dialect : 'mysql',
  // Specify options, which are used when sequelize.define is called.
  // The following example:
  //   define: { timestamps: false }
  // is basically the same as:
  //   sequelize.define(name, attributes, { timestamps: false })
  // so defining the timestamps for each model will be not necessary
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci'
    },
    timestamps: false
  },
  /*连接池*/
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // SQLite only
  //storage: 'path/to/database.sqlite'
});

// Or you can simply use a connection uri
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


//You can use the .authenticate() function like this to test the connection.
/*
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
*/
  //Models are defined with sequelize.define('name', {attributes}, {options}).

  const User = sequelize.define('tb_sys_user', {
    id: {
      type : Sequelize.STRING,
      primaryKey : true
    },
	  tlr_id : {
      type : Sequelize.STRING
	  },
	  login_name : {
		  type : Sequelize.STRING
	  },
    pass_word : {
		  type : Sequelize.STRING
	  }},
	  {timestamps : false}
  );

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    id : "1",
    tlr_id: 'John',
    login_name: 'Hancock',
    pass_word:"123456"
  });
});

//Executing raw SQL queries
// Arguments for raw queries
//sequelize.query('your query', [, options])
// Quick example
sequelize.query("SELECT * FROM tb_sys_user").then(myTableRows => {
  debugger;
  console.log("myTablRows:" + myTableRows);
})



/*
// If you want to return sequelize instances use the model options.
// This allows you to easily map a query to a predefined model for sequelize e.g:
sequelize
  .query('SELECT * FROM projects', { model: Projects })
  .then(projects => {
    // Each record will now be mapped to the project's model.
    console.log(projects)
  })


  //Replacements in a query can be done in two different ways, either using named parameters (starting with :), or unnamed, represented by a ?
  //The syntax used depends on the replacements option passed to the function:
  //If an array is passed, ? will be replaced in the order that they appear in the array
  //If an object is passed, :key will be replaced with the keys from that object. If the object contains keys not found in the query or vice versa, an exception will be thrown.
sequelize
  .query(
    'SELECT * FROM projects WHERE status = ?',
    { raw: true, replacements: ['active']
  )
  .then(projects => {
    console.log(projects)
  })

sequelize
  .query(
    'SELECT * FROM projects WHERE status = :status ',
    { raw: true, replacements: { status: 'active' } }
  )
  .then(projects => {
    console.log(projects)
  })
*/
