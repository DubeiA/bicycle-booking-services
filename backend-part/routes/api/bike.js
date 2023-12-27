const express = require("express");
const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/bike");

const {
    getAllBike,
    updateStats,
    addBike,
    removeBike
} = require("../../controllers/bike");


const router = express.Router();

router.get("/", getAllBike);

router.post("/add", validateBody(schemas.bikesSchema), addBike);

router.patch(
    "/:_id/stats",
    validateBody(schemas.statsSchema),
    updateStats
);

router.delete("/:_id", isValidId, removeBike);

// router.get("/:contactId",  isValidId, getContactById);

// router.post("/", validateBody(addJoiSchema), addContact);

// router.put(
//     "/:contactId",

//     isValidId,
//     validateBody(addJoiSchema),
//     updateContact
// );

// router.patch(
//     "/:contactId/favorite",

//     isValidId,
//     validateBody(favoriteJoiSchema),
//     updateStatusContact
// );

// router.delete("/:contactId",  isValidId, removeContact);

module.exports = router;