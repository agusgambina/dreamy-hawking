"use strict";
import { expect } from 'chai';
import chai from 'chai';
import chaiExclude from 'chai-exclude';

import sequelize from '../../../../utils/databaseMock';

chai.use(chaiExclude);

const users = sequelize.import('../../../../../src/sequelize/models/users');

describe('users', function(){
  this.timeout(5000); 
  
  beforeEach(async function() {
    await sequelize.sync();
    return true;
  });

  beforeEach(async function() {
    users.destroy({
      where: {}
    }).then(function(msg) {
    })
    .catch(function(err) {
        console.log('err =====================> ', err);
    });
    users.bulkCreate([
      { id: 1, email: "user1@test.com", firstName: "First", lastName: "Last", password: "123456" },
      { id: 2, email: "user2@test.com", firstName: "Second", lastName: "Test User", password: "123456" },
      { id: 3, email: "user3@test.com", firstName: "Third", lastName: "Random", password: "123456" }
    ]).then(function(msg) {
    })
    .catch(function(err) {
        console.log('err =====================> ', err);
    });
  });

  it('should find user by id', (done) => {
    users.findByPk(2)
    .then((retrievedUser) => {
      expect(retrievedUser.dataValues).excludingEvery(['createdAt', 'updatedAt']).to.deep.equal(JSON.parse('{ "id": 2, "email": "user2@test.com", "firstName": "Second", "lastName": "Test User", "password": "123456" }'));
      done();
    })
    .catch((err) => {
      done(err);
    })
  });

});