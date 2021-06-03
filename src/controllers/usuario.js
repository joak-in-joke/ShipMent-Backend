import sequelize from "sequelize";
import user from "../models/usuario";



export function createUser(req,res){

    const {tipo} = req.body;
    try {
        let newUser = await user.create(
          {
            tipo = 'user'
          },
          {
            fields: ["tipo"],
          }
        );
        if (newUser) {
          return res.json({
            message: "User create",
            newUser,
          });
        }
    
    
            else{
                console.log(error);
                res.status(500).json({
                    message: 'Oops algo salio mal/:'
                })
            }
        }       
            catch(error){
            console.log(error);
            res.status(500).json({
                message: 'Oops algo salio mal/:'
            });
    }
    }