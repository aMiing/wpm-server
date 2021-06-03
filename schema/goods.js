
module.exports = function(sequelize,DataTypes){
    return sequelize.define('goods',{
        uuid:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //名称
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        //图片
        img:{
            type: DataTypes.STRING,
            allowNull: true,
            field: 'img'
        },
        //描述
        description:{
            type: DataTypes.STRING,
            allowNull: true,
            field:'description'
        },
        //厂商
        author:{
            type: DataTypes.STRING,
            allowNull: true,
            field: 'author'
        },
        // 创建时间
        datetime:{
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt:{
            type: DataTypes.DATE
        },
        online: {
            type: DataTypes.BOOLEAN,
            default: true
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },{
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    });
}