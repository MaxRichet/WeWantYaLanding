const Startupemail = require('../models/startupemailModel');


exports.startupemailRegister = async (req, res) => {
    try{
            
        let newStartupemail = new Startupemail({...req.body});
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(regex.test(req.body.email)){
            let startupemail = await newStartupemail.save();
            res.status(201).json({message: `Utilisateur crée: ${startupemail.email}`});
        } else {
            res.status(401).json({message: "E-mail non valide"});
        }
    } catch(error) {
        console.log(error);
        res.status(401).json({message: "Requête invalide"});
    }
    
}