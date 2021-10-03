Libraries used:

- Express -> For Server, Routes and App,
- Mongoose -> Driver and ORM for the MongoDB,
- Yup -> Payload schema validator,
- Jest and SuperTest

How to run?

1. **yarn** or **npm i** to install node modules
2. **yarn start** or **npm start**

API is deployed on Heroku under this URL:

- https://getir-jeton.herokuapp.com/
  The endpoint on which I worked is: `/data`
  It can be tested under this full url: 
  https://getir-jeton.herokuapp.com/data.

- Accepts POST Method with a payload body as a JSON:
```
{
    "startDate": "2016-01-26", 
    "endDate": "2018-02-02", 
    "minCount": 2700, 
    "maxCount": 3000
}
```

Postman ready to use collection to test the endpoint:
https://www.postman.com/collections/196ce7b37fe29cbbf7b7

How to run tests?
**yarn test** or **npm test**

Node Version: **14.18.0**
