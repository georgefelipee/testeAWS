import mongoose, { Mongoose } from "mongoose";

const localizationSchema = new mongoose.Schema({
    latitude: {type: String},
    longitude: {type: String}
})

const localization = mongoose.model("localizations", localizationSchema);

export default localization;