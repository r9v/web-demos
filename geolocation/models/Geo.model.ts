import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

var GeoSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  continent_name: {
    type: String,
    required: true,
  },
  country_name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
});

GeoSchema.plugin(mongoosePaginate);

export default mongoose.models.Geo || mongoose.model("Geo", GeoSchema);
