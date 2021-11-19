import { Inject } from 'typedi';
import { Controller } from '../decorators/controller';
import { Get } from '../decorators/get';
import { ArticleService } from './article.service';

@Controller('/article')
export class ArticleController {
  @Inject()
  private articleService: ArticleService;

  @Get('/')
  getAllArticles() {
    return this.articleService.getAllArticles();
  }

  getRouter: Function; // still no idea how to get rid of this
}
