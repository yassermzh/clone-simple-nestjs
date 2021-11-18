import { Request, Response, Router } from 'express';
import { Inject, Service } from 'typedi';
import { Article } from './article.entity';
import { ArticleService } from './article.service';

@Service()
class ArticleController {
  @Inject()
  private articleService: ArticleService;

  getAllArticles = async (_: Request, res: Response<Article[]>) => {
    const result = await this.articleService.getAllArticles();
    res.json(result);
  };
}

@Service()
export class ArticleRouter {
  router = Router();
  constructor(private controller: ArticleController) {
    this.router.get('/', this.controller.getAllArticles);
  }
  getRouter = () => {
    return this.router;
  };
}
