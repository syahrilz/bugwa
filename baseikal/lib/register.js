
const fs = require('fs')
const chalk = require('chalk')

const _registered = JSON.parse(fs.readFileSync('./baseikal/dbnye/registered.json'));

const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
const addRegisteredUser = (userid, sender, age, time, serials) => {
            var obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./baseikal/dbnye/registered.json', JSON.stringify(_registered))
        }
        
const checkRegisteredUser = (sender) => {
            var status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
module.exports = {
        getRegisteredRandomId,
        addRegisteredUser,
        checkRegisteredUser
        }