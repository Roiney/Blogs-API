const categoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });
  
    Category.associate = (models) => {
    //   User.hasMany(models.BlogPost, {
    //     foreignKey: 'userId',
    //     as: 'posts',
    //   });
    };
  
    return Category;
  };
  
  module.exports = categoryModel;