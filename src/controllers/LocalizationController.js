import localization from "../models/localizationModel.js";

export default {

    async getCords(req,res){
        try {
            const latestCoord = await localization.findOne().sort({ _id: -1 }).limit(1);

            if (latestCoord) {
                // A coordenada mais recente foi encontrada
                res.status(200).json({ latitude: latestCoord.latitude, longitude: latestCoord.longitude });
              } else {
                // Não há coordenadas no banco de dados
                res.status(404).json({ message: "Nenhuma coordenada encontrada." });
              }
        } catch (error) {
             // Lidar com erros
            console.error("Erro ao buscar coordenadas:", error);
            res.status(500).json({ message: "Erro interno do servidor." })
        }
    },

    async submitLocalization(req,res){
        try {

            const newLocalization = await localization.create(req.body)
            return res.status(201).json({msg:"Localização cadastrada com sucesso", cords:newLocalization})

        } catch (error) {
            console.log("Erro na solicitação",error);
            return res.status(500).json({error: "Erro no servidor"})
        }
    }
}