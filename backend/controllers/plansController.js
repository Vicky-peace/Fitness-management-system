import sql from 'mssql';
import config from '../db/config.js';
// get all plans
export const getAllplans = async (req,res) =>{
    try{
        let pool = await sql.connect(config.sql);
        const result= await pool.request()
        .query("SELECT *FROM Plans")
        res.status(200).json(result.recordset);
    } catch (error){
        console.error(error)
        res.status(500).json({message:'An Errorr Occured'});
    } finally{
        sql.close();
    }
};

// Get Plan By ID

export const getPlanById = async (req,res) =>{
    const {plan_id} = req.params;
    try{
        let pool = await sql.connect(config.sql);
        const result= await pool.request()
       .input('plan_id',sql.Int,plan_id)
       .query("SELECT *FROM Plans WHERE plan_id = @plan_id")
        res.status(200).json(result.recordset);
    } catch (error){
        console.error(error)
        res.status(500).json({message:'An Errorr Occured'});
    } finally{
        sql.close();
    }
};

// Choose a plan 
export const choosePlan = async (req,res) =>{
    const {user_id, plan_id} = req.params;
    
    // Check if user is signed in
    if(!user_id){
        return res.redirect('/signin'); //Redirect to the sign-in page

    }

    try{
        let pool = await sql.connect(config.sql);
        const result= await pool.request()
      .input('plan_id',sql.Int,plan_id)
      .query('SELECT * FROM Users HWERE user_id= @user_id');

    //   Check if user exists 
    if(result.recordset.length === 0){
            return res.redirect('/signup'); //Redirect to the signup page
        }
        // User exists , continue with choosing a plan
        const plansResult = await pool.request()
        .query('SELECT * FROM Plans WHERE plan_id = @plan_id');

        if(plansResult.recordset.length === 0){
            res.status(404).json({message:'Plan not found'});
        } else {
            // save the users plans choice in the database
        await pool.request()
        .query('INSERT INTO Subscriptions (user_id, plan_id, subscription_date) VALUES (@user_id, plan_id, GETDATE());')
        }
    }catch (error){
        res.status(500).json({message:'An error occurred'});
    } finally {
        sql.close();
    }
}
