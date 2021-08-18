const { response } = require('express')


const getUsers = (req, res = response) => {
    res.json({
        msg: 'holaMundito'
    })
}

module.exports = getUsers;