'use strict'

module.exports = function (sequelize, DataTypes) {
    let Subscription = sequelize.define('subscriptions', {
        userId: {
            type: DataTypes.INTERGER
        },
        kungfuId: {
            type: DataTypes.INTERGER
        }
    })

    Subscription.associate = function (models){
        Subscription.belongsTo(models.User)
        Subscription.belongsTo(models.Kungfu)
    }

    return Subscription
}