import { Router } from "express";
import Article, { IArticle } from "../models/Article";

let router = Router();

router.get("/:id/:page", async (req, res) => {
    const id = req.params.id;
    const page = +req.params.page;
    const article: IArticle | null = await Article.findById(id);
    if (article == null) {
        return;
    }
    
    res.render("article", { 
        article: { 
            id, 
            page, 
            size: article.size, 
            heading: article.pages[page - 1].heading, 
            content: article.pages[page - 1].content 
        } 
    });
});

export default router;