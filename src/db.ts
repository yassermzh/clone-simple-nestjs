import { createConnection, useContainer as typeOrmUseContainer } from 'typeorm';
import { Container as TypeOrmTypediContainer } from 'typeorm-typedi-extensions';

typeOrmUseContainer(TypeOrmTypediContainer);

export async function bootstrapDB() {
  await createConnection();
  console.log('connected to dababase');
}
