const express= require('express')

const app= express();
const dbCongig= require('./db')
const roomRoute=require('./routes/roomRoutes')

app.use('/api/rooms',roomRoute)
const port= process.env.PORT || 5000;


app.listen(port,()=>console.log(`Server running on PORT ${port}`));
