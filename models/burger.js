var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    updateOne: function (devoured, id, cb) {
        orm.updateOne("burgers", devoured, id, function (res) {
            cb(res);
        })
    },
    insertOne: function (burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, function (res) {
            cb(res);
        })
    },
    deleteOne: function (id, cb) {
        orm.deleteOne("burgers", id, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;