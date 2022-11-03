const userSchema = require('../models/user')
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken')


exports.createUser =async(req,res)=>{

    try {
        const { email, name, lastName, password } = req.body;
        const isExist = await userSchema.findOne({ email });
                if (isExist) {
          return res.status(400).send("Email already used!");
        }
        const newUser = new userSchema(req.body);
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt)
        newUser.password = hash
        await newUser.save();
        res.status(200).send({msg:"user created",newUser});
        console.log(newUser);
          } catch (err) {
        res.status(500).send("cannot create user!");
        console.log(err);
      }
    }
    

    exports.loginUser = async (req,res) =>{

      const {email,password}=(req.body)
      try{
        const {email,password}=(req.body)
        const exist = await userSchema.findOne({email})
        if (!exist){
            return res.status(400).send("user not exist!");
        }
        const match =bcrypt.compare(password,exist.password)
        if(!match){
          return res.status(400).send("wrong password")

        }

var payload = {id :exist._id}
token = jwt.sign(payload,process.env.SECRET_KEY)



        res.status(200).send({msg:"token",token})

    }catch(err){
        console.log(err);
        res.status((500).send(err.msg))


    }

    }




