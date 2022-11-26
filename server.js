const { app } = require("./app");
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })


const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`Runnig for PORT: ${PORT}`);
})