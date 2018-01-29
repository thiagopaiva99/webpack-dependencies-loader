#! /usr/bin/env node
'use strict'

const dependencies = () => {
    const object = require('./package.json').dependencies

    const keyValue = Object.keys(object)

    let keys = []

    keyValue.map(key => keys.push(key))

    return keys
}

module.exports = dependencies