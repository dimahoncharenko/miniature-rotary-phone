import { Model, DataTypes, Optional } from "sequelize";
import { sequelize } from "../utils/connection";

interface ArticleAttributes {
    id: number,
    heading: string,
    content: string | null
};

interface ArticleCreationAttributes extends Optional<ArticleAttributes, "id"> {};

class Article extends Model<ArticleAttributes, ArticleCreationAttributes> implements ArticleAttributes {
    public id!: number;
    public heading!: string;
    public content!: string | null;
};

Article.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    heading: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "article",
    timestamps: false
});

export default Article;