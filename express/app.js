// ...
const mongoose = require('mongoose');

// ...

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 连接数据库
mongoose.connect(`mongodb://localhost:27017/test`);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));