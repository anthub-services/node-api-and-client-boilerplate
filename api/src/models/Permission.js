'use strict';

export default (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    permissionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    path: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  return Permission;
};
