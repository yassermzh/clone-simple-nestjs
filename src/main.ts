import 'reflect-metadata';
import * as express from 'express';
import { bootstrapDB } from './db';
import { ArticleController } from './article/article.controller';
import { Container } from 'typeorm-typedi-extensions';

async function bootstrap() {
  await bootstrapDB();

  const app = express();
  app.use('/', Container.get(ArticleController).getRouter());

  await app.listen(3000);
  console.log('server running...');
}

bootstrap();
