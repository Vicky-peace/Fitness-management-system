import sql from 'mssql';
import bcrypt from 'bcrypt'
import config from '../db/config.js';
import jwt from 'jsonwebtoken';



// Create a user 
export const createUser = async(req,res) => {
 const { username, email, password,isAdmin} = req.body

//  hash the password
const hashedpwd = bcrypt.hashSync(password, 10);

   try{
    let pool = await sql.connect(config.sql);
    let insertUser= await pool.request()
    .input('username',sql.VarChar,username)
    .input('password',sql.VarChar,hashedpwd)
    .input('email',sql.VarChar,email)
    .input('isAdmin',sql.Bit,isAdmin)
    .query('INSERT INTO Users ( username,email, password,isAdmin) VALUES ( @username, @email, @password,@isAdmin)')
    res.status(200).json({
        status: 'success',
        data: insertUser
    })
   } catch(error){
    console.error(error);
    res.status(404).json(error);
   }finally{
    sql.close();
   }
}

// login a user

export const loginUser = async(req,res) => {
   
    try{
        console.log(req.body);
        console.log(process.env.SECRET);
        const {email, password} = req.body
    
        // The connection to the DB
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
        .input('email',sql.VarChar,email)
        .query('SELECT * FROM Users WHERE email = @email');
        const user = result.recordset[0];
        console.log(user);
        if(!user){
            res.status(404).json({
                            status: 'error',
                            message: 'User not found'
                        })
        } else {
            if (!bcrypt.compareSync(password,user.password)){

                                res.status(404).json({
                            status: 'error',
                            message: 'Invalid credentials'
                        })
            } else{
                // create a jwt token store 
                const token = `${jwt.sign({email:user.email,isAdmin:user.isAdmin},process.env.SECRET,{expiresIn:process.env.EXPIRY})}`

                res.status(200).json({
                    status:'success',
                    data:user,
                    accesToken:token
                })
            }
        }
        
    } catch(error){
        console.error(error);
        res.status(404).json(err);
    }finally{
        sql.close();
    }
}

// Get all users

export const getAllUsers = async(req,res) =>{
    try{
      let pool = await sql.connect(config.sql);
      let users = await pool.request()
      .query('SELECT * FROM Users');
      res.status(200).json({
              status:'success',
              data:users.recordsets
            })
    }catch(error){
  res.status(404).json(error);
    } finally{
      sql.close();
    }
}

// Get one user 
export const getOneUser = async(req,res) =>{
    const {user_id} = req.params;
    try{
        let pool = await sql.connect(config.sql);
                let user = await pool.request()
               .input('user_id',sql.Int,user_id)
               .query('SELECT * FROM Users WHERE user_id= @user_id')
               console.log(user.recordset[0])
               !user.recordset[0] ? res.status(404).json({message:'User not found'}) : res.status(200).json({
                status:'success',
                user:user.recordset[0]
            })

    } catch(error){
  res.status(404).json({message: err.message});
    } finally{
       sql.close();
    }
}


// Update a user
export const updateUser = async(req,res) =>{
    const {user_id} = req.params;
    try{
        const {username,email,password,isAdmin} = req.body;
        let pool = await sql.connect(config.sql);
        let updateUser = await pool.request()
        .input('user_id',sql.Int,user_id)
        .input('username',sql.VarChar,username)
        .input('email',sql.VarChar,email)
        .input('password',sql.VarChar,password)
        .input('isAdmin',sql.Bit, isAdmin)
        .query('UPDATE Users SET username=@username,email=@email,password=@password,isAdmin=@isAdmin WHERE user_id= @user_id')

        res.status(200).json({
            status:'success',
            message: 'User updated successfully',
            data:updateUser
        })
    } catch (error){
   res.status(404).json({message: error.message});
    } finally{
        sql.close();
    }
}

// Delete a user
export const deleteUser = async(req,res) =>{
    const {user_id} = req.params;
    try{
        let pool = await sql.connect(config.sql);
        await pool.request()
       .input('user_id',sql.Int,user_id)
       .query('DELETE FROM Users WHERE user_id= @user_id')
       res.status(200).json({
                   status:'success',
                   message: 'User deleted successfully'
               })
           
} catch (error){
    res.status(404).json({message: error.message});
} finally{
    sql.close();
}
}