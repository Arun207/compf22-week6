//require modules for the user Model
let mongoose = require('mongoose');
let passportLocalMOngoose = require('passport-local-mongoose');

let User=mongoose.Schema(
    {
        username:
        {
            type:String,
            default:'',
            trim: true,
            required : "username is required"
        },

        /*
        password:{
            type:String,
            default:"",
            trim: true,
            required : "password is required"
        }
        */
       email:{
            type:String,
            default:'',
            trim: true,
            required : "email is required"
       },
       displayName:{
             type:String,
            default:'',
            trim: true,
            required : "Display Name is required"
       },
       created:{
             type:Date,
            default:Date.now
       },
       update:{
            type:Date,
            default:Date.now
       }
    },
    {
        collection:"users"
    }
);

//configure option for user Model
let options= ({missingPasswordError: 'Wrong /Missing Password'});
User.plugin(passportLocalMOngoose, options);

module.exports.User = mongoose.model('User',User);