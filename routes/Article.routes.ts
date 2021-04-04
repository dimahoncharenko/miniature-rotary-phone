import { Router } from "express";
import Article from "../models/Article";

let router = Router();

router.get("/:id", async (req, res) => {
    const id = +req.params.id;
    const article = await Article.findOne({ where: { id }});
    if (article == null) {
        return;
    }
    res.render("article", { article: { id: article.get("id"), heading: article.get("heading"), content: article.get("content") } });
});

export default router;