# Hello World for Angular 2.0 on Typescript

1. Clone this repository.
1. Install npm modules:
```
npm install
``` 
1. Install Typescript definition files:
```
tsd reinstall
```
1. Rebuild the application:
```
tsc -m commonjs -t es5 --emitDecoratorMetadata app.ts
```
1. Run the server on port 8008 or whatever:
```
npm install -g http-server
http-server -p 8008
```

