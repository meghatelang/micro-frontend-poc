/**
 * Created by iSmile on 1/21/2020.
 */

const path = require("path");
const webpack = require("webpack");

module.exports = env => require(`./build/${env}.js`);