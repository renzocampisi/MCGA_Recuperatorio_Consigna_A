const { app } = require("./app");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config({ path: './.env' })


mongoose.connect(process.env.DATABASE_URL)
.catch( err => console.log('🔴 Error connection database') )

mongoose.connection.on('open', () =>{
    console.log("🟢 DB Connected");
})


const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`🚗 Server running on port: ${PORT}`);
})