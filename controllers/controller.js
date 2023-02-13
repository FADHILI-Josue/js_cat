const { arrayBuffer } = require("node:stream/consumers");

const add = async(req,res)=>{
try {

   const {num1, num2} = req.body;
   console.log(Number (num1)+Number( num2))
      res.sendStatus(200)
      res.status(200).send(Number (num1)+Number( num2))






} catch (error) {
 console.log(error)  
}
};


const multiply = async(req,res)=>{
   try {   
      const {num1, num2} = req.body;
      console.log(Number (num1)*Number( num2))
      const product  = Number (num1)*Number( num2);
      res.sendStatus(200)
      res.send(product)
   } catch (error) {
    console.log(error)  
   }
   };
module.exports = {add, multiply}