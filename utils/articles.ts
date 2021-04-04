/*
* Цей клас відповідає за свайп статей  
* 
* 
* 
* 
* 
*/

class SlideArticle<T extends unknown[]> {
    private current = 0;
    private length: number;

    constructor(private articles: T) {
        this.length = articles.length - 1;
    }

    currentArticle() {
        return this.articles[this.current];
    }

    nextArticle() {
        this.current += 1;
        if (this.current > this.length) {
            this.current = 0;
        }
        return this.articles[this.current];
    }

    prevArticle() {
        this.current -= 1;
        if (this.current < 0) {
            this.current = this.length;
        }
        return this.articles[this.current];
    }
};

export default SlideArticle;