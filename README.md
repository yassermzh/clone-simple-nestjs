The goal here is to get some idea how [nestjs](https://nestjs.com/) framework does the [DI](https://en.wikipedia.org/wiki/Dependency_injection) and uses decorators to setup a very basic REST API.

- I am playing around [typedi](https://github.com/typestack/typedi) to support DI. 
- Using TypeOrm for database connection.
- For linting, typescript, and prettier, I simply copied over basic config files from a nestjs project. 

Issues so far:
- How to handle async dependencies?
- How to create decorators to make controllers easier to write (similar to nestjs).