# Image-API-Process
Image API Process is done following Udacity requirement the project aim to take an image as input then resize using sharp library



<h2> Scripts</h2>
`npm install` Install dependencies
`npm run start` to start the application
`npm run start:dev` to start with nodemon
`npm run start:prod` to build the app using `npx tsc` then start the dist `node dist/index.js`
`npm run build` to build the app using `npx tsc`
`npm run prettier` to format the code using the config file .prettierrc
`npm run lint` to run the eslint to check for error and warrning within the app



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
