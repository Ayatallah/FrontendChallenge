describe('userSrv', function(){

  beforeEach(module('TaskApp'));
  
  it('Should test userSrv', inject(function(userSrv) {
  	expect(userSrv.getUsers()).toEqual(['Aya','Ahmed']);
  }));

});