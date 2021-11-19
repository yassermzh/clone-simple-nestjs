import { Article } from './article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class ArticleService {
  @InjectRepository(Article)
  private articleRepo: Repository<Article>;

  getAllArticles(): Promise<Article[]> {
    return this.articleRepo.find();
  }

  create(createArticleDto: CreateArticleDto) {
    const article = this.articleRepo.create(createArticleDto);
    return this.articleRepo.save(article);
  }
}
