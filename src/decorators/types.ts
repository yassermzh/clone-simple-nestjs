export type Handler = {
  httpMethod: 'get' | 'post';
  path: string;
  handler: Function;
};
