import mongoose from "mongoose";

// o campo "descriptions" será um documento aninhado
const descriptionSchema = new mongoose.Schema({
    type : String, // tipo do prato
    ingredients : String, //ingredientes do prato
    hmpds : Number, // quantas pessoas o prato serve (how much people does it serve)
})

const pratoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  status: Boolean,
  descriptions : descriptionSchema
});

const Prato = mongoose.model("Prato", pratoSchema);

export default Prato;
