const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
    const { _id } = req.params;
    console.log(req.params);

    if (!isValidObjectId(_id)) {
        next(HttpError(400, `${_id} is not valid`));
    }
    next();
};
module.exports = isValidId;