const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  let server;

  // Démarrer le serveur avant les tests
  beforeAll((done) => {
    server = app.listen(3000, () => done());
  });

  // Fermer le serveur après les tests
  afterAll((done) => {
    server.close(() => done());
  });

  it('Répond avec message JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});
