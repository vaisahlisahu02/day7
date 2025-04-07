
const jwt = require('jsonwebtoken')


module.exports.authUser = (req, res, next)=>{
try{
    const token = req.cookies.jwt;
    if(!token){
        return res.send("you are not logged in")
    }
    const decoded = jwt.verify(token,"Backend-secret");
    req.user = decoded;
    next();
}
catch(error){
    return res.send("you are not logged in")
}
  
}