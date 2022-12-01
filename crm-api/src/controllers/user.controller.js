const User = require('../models/Users');
const bcrypt = require('bcrypt');

const UserController = {
    async create(req, res) {
        const user = new User(req.body);

        // user.password = await bcrypt.hash(user.password, 10);

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({
                error: error.message
            });
        }
    },
    async update(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.params, req.body) 
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send({
                error: error.message
            });
        }
    },
    async delete(req, res) {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.send(user);
    },
    async getAll(req, res) {
        const users = await User.find();
        res.json(users);
    },
    async getOne(req, res) {
        const { id } = req.params
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.send(user);
    },
    getAllByCustomer : async (req, res) => {
        // const id = req.params.id
        // const user = await User.findById(id).populate('customers');  

        // if (!user) {
        //     return res.status(404).json({ message: "User not found" })
        // }

        // res.send(user.customers)
        res.send('getAllByCustomer')
    }
}

module.exports = UserController;