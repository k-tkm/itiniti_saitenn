const express = require('express');
const mongoose = require('mongoose');
// ルーティングとはネットワーク上で行われる道案内的なものらしい
// ルーテインぐのモジュール化を行い管理を簡単にする
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");

//passport config:
require('./config/passport')(passport)
//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);

//css
app.use(express.static(__dirname + '/public'));

//  拡張子 htm,htmlのテンプレートエンジンを指定
app.engine('htm', require('ejs').renderFile);
app.engine('html', require('ejs').renderFile);   

//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })
    
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

app.listen(3000); 
