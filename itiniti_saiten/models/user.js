const mongoose = require('mongoose');
//全てのバリーデータ(データが使用に沿って記述されているのかを判断)に使えるrequiredがあってこれは必須制約(nullはだめという制約)をかける
const UserSchema  = new mongoose.Schema({
  name :{
      type  : String,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true
} ,
date :{
    type : Date,
    default : Date.now
}
});
const User= mongoose.model('User',UserSchema);

module.exports = User;
