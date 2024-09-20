// Import necessary modules
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('./app'); // Assuming your Express app is exported from app.js

// Use chaiHttp for HTTP request testing
chai.use(chaiHttp);

describe('Basic API Tests', () => {
    // Test the root route
    it('should return status 200 for the root route', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done(); // Call done when the test is complete
            });
    });

    // Test a specific route, e.g., /api/hello
    it('should return a JSON object from /api/hello', (done) => {
        chai.request(app)
            .get('/api/hello')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('message').eql('Hello, world!');
                done();
            });
    });
});
