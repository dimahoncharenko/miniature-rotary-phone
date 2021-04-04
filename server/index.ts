import express from "express";
import expHbs from "express-handlebars";

import articles from "../routes/Article.routes";
import { isConnect } from "../utils/connection";

isConnect();

let app = express();

app.set("PORT", process.env.PORT || 4000);
app.set("view engine", "handlebars");
app.engine("handlebars", expHbs({ 
    defaultLayout: "main.handlebars", 
    helpers: {
        nextArticle: function(id: number, max: number) {
            ++id;
            if (id > max) {
                id = 1;
            }
            return `/article/${id}`;
        },
        prevArticle: function(id: number, max: number) {
            --id;
            if (id < 1) {
                id = max;
            }
            return `/article/${id}`;
        }
    }
}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.use("/article", articles);

app.listen(app.get("PORT"), () => console.log(`Server ready at port: ${app.get("PORT")}`));