import mongoose from "mongoose";
//senha: APe838B18pvpCX5T
//user:georgefelipe
async function connectMongoAtlas(){
    mongoose.connect('mongodb+srv://georgefelipe:APe838B18pvpCX5T@gps-bd.9y2cwnc.mongodb.net/?retryWrites=true&w=majority')

    return mongoose.connection;
}

export default connectMongoAtlas;
