const Widget = require("../models/widget.model");
// const widgetRoutes = require("../routes/widget.routes");

module.exports = {
    index:(req,res) => {
        Widget.find()
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    create:(req,res) => {
        Widget.create(req.body)
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    show:(req,res) => {
        Widget.findOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    update:(req,res) => {
        Widget.findOneAndUpdate({_id:req.params.id},req.body,{new:true,useFindAndModify:false})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    destroy:(req,res) => {
        Widget.deleteOne({_id:req.params.id})
            .then(data => res.json({results:data}))
            .catch(err => res.json(err.errors))
    },
    // random:(req,res) => {
    //     Widget.find()
    //         .then(data => {
    //             let rand = Math.floor(Math.random() * data.length);

    //             res.json({results:data[rand]})
    //         })
    //         .catch(err => res.json(err.errors))
    // }
}