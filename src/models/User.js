module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: DataTypes.INTERGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'users',
        underscored: true,
      }
    );
  
      User.associate = (models) => {
      User.hasMany(models.BlogPost, { 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        foreignKey: 'user_id',
        as: 'user', 
      });
    };
  
    return User;
  };