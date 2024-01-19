import { Dialect } from "sequelize";


export const dbConfig = {
    HOST: process.env.DB_HOST as string,
    USER: process.env.DB_USER as string,
    PASSWORD: process.env.DB_PASSWORD as string,
    DB: process.env.DB_NAME as string,
    PORT: process.env.DB_PORT as unknown as number,
    dialect: "mysql" as Dialect,
}