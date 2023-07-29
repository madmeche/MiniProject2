"use strict"

const userController = {
    getUserData: (req, res) => {
        res.send({message:'User data retrieved successfully'})
        .then((data) => {
            console.log(data);
        })
        .catch((err => {
            console.log("error: ", err);
            throw err;
        }))
    }
};

module.exports = {
    userController
};