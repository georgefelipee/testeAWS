import mongoose, { Mongoose } from "mongoose";

const localizationSchema = new mongoose.Schema({
    latitude: {type: Number},
    longitude: {type: Number}
})

const localization = mongoose.model("localizations", localizationSchema);

export default localization;