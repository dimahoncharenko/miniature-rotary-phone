import { Sequelize } from "sequelize";
import config from "config";

export const sequelize: Sequelize = new Sequelize(config.get("DB"), config.get("DB_USER"), config.get("USER_PASS"), {
    host: "localhost",
    port: config.get("DB_PORT"),
    dialect: "postgres"
});

sequelize.sync({ force: false });

export const isConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected To DB!");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};