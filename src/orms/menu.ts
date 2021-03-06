import { DataTypes } from 'sequelize';
import { Orm } from './orm';

export class MenuOrm extends Orm {
  public constructor() {
    super('menu', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  }
}
