const listEndpoints = require('express-list-endpoints')

let app = require('express')();
var x = 2;

app.route('/')
    // .all(function (req, res) {
    //     // Handle request
    // })
    .get(function (request, response) {
        // Handle request
        response.send('this.x');

        // function task(x) {
        //     return x * Math.pow(this.x, this.x);
        // }
    })
    // .post(function (req, res) {
    //     // Handle request
// });



console.log(listEndpoints(app));