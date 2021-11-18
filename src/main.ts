import 'reflect-metadata';
import * as express from 'express';
import { bootstrapDB } from './db';
import { ArticleRouter } from './article/article.controller';
import { Container } from 'typeorm-typedi-extensions';

async function bootstrap() {
  await bootstrapDB();
  const app = express();

  app.use('/article', Container.get(ArticleRouter).getRouter());

  await app.listen(3000);
  console.log('server running...');
}

bootstrap();
