import  express  from "express";
import LocalizationRoutes from "./localizationRoutes.js";

const routes = (app) => {
    app.route('/').get((req,res) => {
       console.log('Recebeuu');
       return res.status(200).send("Api Ok !")
        
    })

    app.use(express.json(),LocalizationRoutes )
}

export default routes