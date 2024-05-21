const mongoose =require("mongoose");

const dbconnect = () => {
    mongoose.connect(process.env.ATLSDB_URL,{
        useNewUrlParser : trie,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("database connected successfully")})
    .catch((error) => {
        console.log("there is some problem in data base connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports  = dbconnect;