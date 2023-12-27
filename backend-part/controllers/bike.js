const { Bike } = require("../models/bike");
const { HttpError, ctrlWrapper } = require("../helpers");


const getAllBike = async (req, res) => {

    const bikes = await Bike.find()

    if (!bikes) {
        throw HttpError(404, "Not found bla");
    }
    res.status(200).json(bikes);
}

const addBike = async (req, res) => {


    const result = await Bike.create({ ...req.body });
    res.status(201).json(result);
};

const updateStats = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const { stats } = req.body;

        if (!["available", "busy", "unavailable"].includes(stats)) {
            throw HttpError(400, "Invalid stats value");
        }

        const updatedStats = await Bike.findByIdAndUpdate(
            _id,
            { stats },
            { new: true }
        );

        if (!updatedStats) {
            throw HttpError(404, "Bike not found");
        }

        res.status(200).json(updatedStats);
    } catch (error) {
        next(error);
    }
};

const removeBike = async (req, res) => {
    const { _id } = req.params;

    const result = await Bike.findByIdAndDelete(_id);

    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.status(200).json({ message: "Bike deleted" });
};

module.exports = {
    getAllBike: ctrlWrapper(getAllBike),
    addBike: ctrlWrapper(addBike),
    updateStats: ctrlWrapper(updateStats),
    removeBike: ctrlWrapper(removeBike)

};

