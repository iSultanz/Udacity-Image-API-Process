# Image-API-Process
Image API Process is done following Udacity requirement the project aim to take an image as input then resize using sharp library



### Scripts
-Install dependencies: ```npm install``` 
-To start the server: ```npm run start``` 
-To start the server with nodemon```npm run start:dev```
-to start the dist: ```npm run start:prod```
-to create the dist: ```npm run build```
-To Format with prettier: ```npm run prettier```
-To run the Eslint: ```npm run lint``` 



the file structuer
```
-Image-API-Process
├── dist                 
├── assets
│   │── full         
│   └── thumb 
├── node_module
├── src
│   │── routes
│   │   │── api
│   │   │    │
│   │   │    └── images.ts
│   │   └── routes.ts
│   │── types
│   │   │── query.ts         
│   │   └── shapeResize.ts 
│   │── util
│   │   │── query-validation.ts         
│   │   └── resize-image.ts 
│   └── indext.ts 
├── .eslintrc.json                  
├── .prettierrc
├── nodemon.json                  
├── package.json
├── README.md                  
├── tsconfig.json
└── yarn.lock
```
