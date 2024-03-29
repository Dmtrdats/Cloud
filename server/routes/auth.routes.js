const Router = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const config = require('config');
const {check, validationResult} = require('express-validator');
const router = new Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth.middleware');
const fileService = require('../services/fileService')
const File = require('../models/File')

router.post('/registration', 
[
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'password must be 3-12 length').isLength({min: 3, max: 12}),
], async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: 'Uncorrect request', errors})
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exists`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword})
        await user.save()
        await fileService.createDir(new File({user:user._id, name: ''}))
        return res.json({message: `User was created`})

    } catch (error) {
        console.log(error)
        res.send({message: 'Server error'})
    }
})

router.post('/login', 
async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user || user.length === 0) {
            return res.status(404).json({message: 'User not found'});
        }
        const isPassValid = await bcrypt.compare(password, user.password);
        if (!isPassValid || isPassValid.length === 0) {
            return res.status(400).json({message: 'Password is incorrect'})
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"} )
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
            }
        })
    } catch (error) {
        console.log(error)
        res.send({message: 'Server error'})
    }
})

router.get('/auth', authMiddleware, 
async (req, res) => {
    try {
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"} )
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
            }
        })
        }
     catch (error) {
        console.log(error)
        res.send({message: 'Server error'})
    }
})

module.exports = router