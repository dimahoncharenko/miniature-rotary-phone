import { Schema, model, Document } from "mongoose";

interface Page {
    heading: string,
    content: string,
    page: number
}

export interface IArticle extends Document {
    title: string,
    size: number,
    pages: Page[]
}

const schema = new Schema({
    title: {
        type: String,
        require: true
    },
    size: {
        type: Number
    },
    pages: [
        {
            heading: {
                type: String,
            },
            content: {
                type: String,
            },
            page: {
                type: Number,
            }
        }
    ]
});

const Article = model<IArticle>("Article", schema);
export default Article;