const dotenv = require('dotenv');
dotenv.config();
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
let ACCESSKEY = process.env.APIKEY;
let credentials = new CognitiveServicesCredentials(ACCESSKEY);
const NewsSearchAPIClient = require('azure-cognitiveservices-newssearch');
let client = new NewsSearchAPIClient(credentials);
//library for json webtoken
//var jwt = require('jsonwebtoken');

// // The login function is for jwt token generation testing
// // - help from documentation: https://www.npmjs.com/package/jsonwebtoken
// export const login = (req, res) => {
    

//     //Below is example user credentials used to generate the token.
//     //In a full web application, these credentials wold be stored in a
//     //database. 
//     const user = {
//         username: 'joewilliams',
//         email: 'joewilliams@bcpd.org'
//     };


//     //the token is retrieved using jwt.sign, which takes a user and generates a token
//     jwt.sign({user}, 'secretkey', (err, token) => {
//         res.json(
//             {
//                 token
//             }
//         );
//     }
// )};

export const searchNews = (req, res) => {
    //For JWT Verify - help from documentation: https://www.npmjs.com/package/jsonwebtoken
    
    // jwt.verify(req.token, 'secretkey',(err,userData) => {
    //     if(err) {
    //         res.sendStatus(403);
    //         console.log(err);
    //     } else {
            //pulls information from the body    
            let search_term = req.body.news_search;
            client.newsOperations.search(search_term).then((result) => {
                    res.json(result.value);
            }).catch((err) => {
                throw err;
            });

        //}
    //});



};


//Definition of middleware function for JWT token validation and header parsing. It takes the header's authorization
// from the request and splits it apart from the "Bearer" keyword so it is just the token
//It is then stored in the request object - help from documentation: https://www.npmjs.com/package/jsonwebtoken

// export const tokenCheck = (req, res, next) => {
//     const checkHeader = req.headers['authorization'];

//     if(typeof checkHeader !== 'undefined'){
//         const headerSplit = checkHeader.split(' ');
//         const token_header = headerSplit[1];
//         req.token = token_header;
//         console.log(token_header);
//         next();
//     }else{
//         res.sendStatus(403);
//         console.log(err);
//     }
// }