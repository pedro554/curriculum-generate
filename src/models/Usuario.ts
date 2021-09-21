import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'


export interface UserInstance extends Model {
    id: number,
    usuario: string,
    senha: string,
}

export const User = sequelize.define<UserInstance>('Usuarios', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    usuario: {
        type: DataTypes.STRING,
        get(){
            return this.getDataValue('name').toUpperCase();
        }
    },
    senha: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'usuarios',
    timestamps: false
})