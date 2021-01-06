const mongoose = require('mongoose');

const database="widgets";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("you are now in the mainframe"))
    .catch(err => console.log(`something went wrong ${err}`))