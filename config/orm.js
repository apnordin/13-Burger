const { query } = require("express");
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ")"
        console.log(queryString)
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function () { }
};

module.exports = orm;