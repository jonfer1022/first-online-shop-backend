global.rootRequire = path => require(`${__dirname}/${path}`);
const app = require('./app/app');

//Database
require('./config/connection');

const serverRunning = (error)=> {
  error ?
  console.log(`There was an error: ${error}`):
  console.log(`Server running on port: ${app.get('port')}`)
}

app.listen(app.get('port'), serverRunning)

// console.log("This is my server");
