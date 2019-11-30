import { searchNews } from '../controllers/newsController';
//for JWT only
//import { login, tokenCheck } from '../controllers/newsController';

const routes = (app) => {
    app.route('/news')

    
    //POST Endpoint
    .post((req, res, next) =>{
        //middleware   
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, searchNews);
//Replace the line above with the line below with JWT
//  }, tokenCheck, searchNews);

    //JWT uses /login route
    // app.route('/login')

    // .post((req, res, next) => {
    //     next();
    // },login);


}
export default routes;