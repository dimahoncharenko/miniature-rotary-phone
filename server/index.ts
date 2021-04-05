import express from "express";
import expHbs from "express-handlebars";
import cors from "cors";
import config from "config";

import articles from "../routes/Article.routes";
import { connect } from "../utils/connection";

connect();

let app = express();

app.set("PORT", process.env.PORT || config.get("PORT"));
app.set("view engine", "handlebars");
app.engine("handlebars", expHbs({ 
    defaultLayout: "main.handlebars", 
    helpers: {
        nextArticle: function(id: string, page: number, max: number) {
            ++page;
            if (page > max) {
                page = 1;
            }
            return `/articles/${id}/${page}`;
        },
        prevArticle: function(id: string, page: number, max: number) {
            --page;
            if (page < 1) {
                page = max;
            }
            return `/articles/${id}/${page}`;
        }
    }
}));

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/articles", articles);

app.listen(app.get("PORT"), () => console.log(`Server ready at port: ${app.get("PORT")}`));