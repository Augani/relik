let routes = [];


const Login = {
    method: 'POST',
    path: '/api/login',
    handler: (request, h) => {
        return 'login';
    }
};
const Register = {
    method: 'POST',
    path: '/api/register',
    handler: (request, h) => {
        return 'register';
    }
};



routes  = [ Login, Register]


module.exports = routes;