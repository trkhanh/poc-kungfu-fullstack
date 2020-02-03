'usestrict'

module.exports = function (sequelize, DataTypes) {
    let Kungfu = sequelize.define('kungfus', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })


    Kungfu.associate = function (models) {
        Kungfu.hasMany(model.Subscription)
    }

    return Kungfu
}