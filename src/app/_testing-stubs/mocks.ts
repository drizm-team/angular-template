const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'patch', 'delete']);
const restServiceSpy = jasmine.createSpyObj('RestService', ['get$', 'post$', 'put$' , 'patch$', 'delete$']);

export {
  httpClientSpy,
  restServiceSpy
};
