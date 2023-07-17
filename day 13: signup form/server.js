const bodyParser = require('body-parser')
let express = require('express')
let app = express()
let path = require('path')
let mongoose = require('mongoose')
let crypto = require('crypto')
const { Schema } = require('mongoose')
require('dotenv').config()


const userSchema = new mongoose.Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    password: Schema.Types.String,
    tel: Schema.Types.String
},{ collection: 'Practice' })

const User = mongoose.model('User',userSchema)

const hashPass = (hashtype,hashsecret,pw)=>{
    return crypto.createHmac(hashtype,hashsecret).update(pw,'utf-8').digest('hex')
}


app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));



app.get('/',(req,res)=>{
    if(req.method == 'post'){
        console.log(req.body)
    }
    res.sendFile(path.join(__dirname,'public','index.html'))
})



app.post('/signup',(req,res)=>{
    console.log(req.body)
    let hashedpw = hashPass('sha256',req.body.tel,req.body.password)
    console.log(hashedpw)
    let data = {
        name : req.body.name,
        email: req.body.email,
        password: hashedpw,
        tel: req.body.tel
    }

    mongoose.connect(process.env.DB_URI,{ useNewUrlParser : true, useUnifiedTopology : true }).then(
        User.create(data).then((err)=>{
            if(err)
                console.error(err)
            res.sendFile(path.join(__dirname,'public','success.html'))
        }).catch((err)=>{
            console.log(err)
        })
    ).catch((err)=>{
        console.error(err)
    })
})



app.listen(process.env.PORT,()=>{
    console.log('Server is running on port',process.env.PORT)
})