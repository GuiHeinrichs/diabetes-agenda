import { db } from "../config/firebase.js";

const createAction = async (req, res) => {
    try {
        const { period, actionType, actionValue } = req.body;
        const newAction = db.collection("action").add({
            period,
            actionType,
            actionValue
        });
        res.status(201).json({message: "Success: Action has been created!"});
    } catch (error) {
        res.status(500).json({message: "Error: Cannot create the action."});
    }
};

const getActions = async (req, res) => {
    try {
        const actions = db.collection("action").get();
        
        res.status(201).json({message: "Success: Actions listeds!"})
    } catch (error) {
        res.status(500).json({message: "Error: Cannot read the actions."});
    }
};

export default {
    createAction
};