const bodyParser = require('body-parser');
const EmployeeController = require('../app/controller/EmployeeController');
const promClient = require('prom-client');
const SecurityMiddleware = require('../app/middleware/auth');
// Enable the collection of default metrics
const register = new promClient.Registry();
register.setDefaultLabels({ app: 'JSW-DIMS' });
promClient.collectDefaultMetrics({ register });

function routes(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

   /**
    * @description this is for metrics promethius server (Will implement later)
    * @param {object} req
    * @param {object} res
    * @returns {json} metrics of system
    */
    app.get('/metrics', async (req, res) => {
        res.setHeader('Content-Type', register.contentType);
        res.send(await register.metrics());
    });
    // ------------------------ End ----------------------- //

    // ------ Employee Route function Starts ------ //
    employee(app);
    // ------ Employee Route function Ends ------ //
    

}


function employee(app) {
    /**
    * @description this function is for emoployee list
    * @param {object} req
    * @param {object} res
    * @returns {json} list of employee available
    */
    app.post('/employee-list', [SecurityMiddleware.AuthentiCateUserTokenMiddleware,SecurityMiddleware.throttle], (req, res) => {
        EmployeeController.employeeList(req,res);
    });

    /**
    * @description this function is for emoployee login
    * @param {object} req
    * @param {object} res
    * @returns {json} list of employee available
    */
    app.post('/login', (req, res) => {
        EmployeeController.login(req,res);
    });
}

module.exports = { routes }