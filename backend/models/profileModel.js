import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Profile = db.define('profile',{
    name:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Profile;