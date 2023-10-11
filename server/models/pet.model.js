const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet Name is required"],
      minlength: [3, "The Pets name must have at least three characters"],
      unique: true,
    },
    type: {
      type: String,
      required: [true, "Each pet must have a type!"],
      minlength: [3, "The Pets type must have at least three characters"],
    },
    description: {
      type: String,
      required: [true, "Each pet must have a description!"],
      minlength: [
        3,
        "The Pets description must have at least three characters",
      ],
    },
    skills: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports.Pet = mongoose.model("Pet", PetSchema);
