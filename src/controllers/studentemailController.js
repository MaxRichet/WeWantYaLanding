const Studentemail = require('../models/studentemailModel');


exports.studentemailRegister = async (req, res) => {
    try{
            
        let newStudentemail = new Studentemail({...req.body});
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(regex.test(req.body.email)){
            let studentemail = await newStudentemail.save();
            res.status(201).json({message: `Utilisateur crée: ${studentemail.email}`});
        } else {
            res.status(401).json({message: "E-mail non valide"});
        }
    } catch(error) {
        console.log(error);
        res.status(401).json({message: "Requête invalide"});
    }
    
}