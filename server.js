const { app } = require("./app");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config({ path: './.env' })


mongoose.connect("mongodb+srv://renzocampisi:renzo123@cluster0.fu5nwtd.mongodb.net/db-users?retryWrites=true&w=majority")
.catch( err => console.log('Error connection database') )

mongoose.connection.on('open', () =>{
    console.log('Connection succesfull');
})


const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`Runnig for PORT: ${PORT}`);
})