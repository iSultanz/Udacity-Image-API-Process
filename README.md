# Image-API-Process
Image API Process is done following Udacity requirement the project aim to take an image as input then resize using sharp library
The system will create the assets folder if not exists the images should be in the full folder


### Scripts
- Install dependencies: ```npm install``` 
- To start the server: ```npm run start``` 
- To start the server with nodemon```npm run start:dev```
- To start the dist: ```npm run start:prod``` ```node dist/index.js```
- To start the test: ```npm run start:test```
- To create the dist: ```npm run build```
- To run jasmine test: ```npm run jasmine```
- To Format with prettier: ```npm run prettier```
- To run the Eslint: ```npm run lint``` 


### Endpoint
change the param of filename width and height it can't be less than or equal 1
- http://localhost:3000 the main page of the server
- http://localhost:3000/api/images?filename=santamonica to view the original image
- http://localhost:3000/api/images?filename=santamonica&width=1920&height=1080 for resize



### The File Structure
```
-Image-API-Process
├── assets
│   │── full         
│   └── thumb 
├── dist                 
├── node_module
├── spec
│   └── support 
│         └── jasmine.json 
├── src
│   │── routes
│   │   │── api
│   │   │    └── images.ts
│   │   └── routes.ts
│   │── tests
│   │   │── helpers
│   │   │    └── reporter.ts
│   │   │──imagesSpec.ts
│   │   └── indexSpec.ts
│   │── types
│   │   │── query.ts         
│   │   └── shapeResize.ts 
│   │── util
│   │   │── query-validation.ts         
│   │   └── resize-image.ts 
│   └── index.ts 
├── .eslintrc.json                  
├── .prettierrc
├── nodemon.json                  
├── package.json
├── README.md                  
├── tsconfig.json
└── yarn.lock
```
