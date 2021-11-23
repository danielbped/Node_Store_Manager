const sinon = require('sinon');
const { expect } = require('chai');

const ProductsServices = require('../../services/products');
const ProductsControllers = require('../../controllers/products');

describe('Testa controllers', () => {
  const invalidProduct = {
    name: 'na',
    quantity: 100
  };

  const validProduct = {
    name: 'nananas',
    quantity: 20,
  };

  const mockId = '619bfa5066bd33428f15bfbe';
  const wrongId = '123456';

  describe('testa create', () => {
    describe('quando um produto inválido é inserido', () => {
      const response = {};
      const request = {};
      
      const invalidNameError = {
        error: {
          err: {
            code: 'invalid_data',
            message: '"name" length must be at least 5 characters long',
          },
        },
      };
  
      before(() => {
        request.body = invalidProduct;
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
  
        sinon.stub(ProductsServices, 'create')
          .resolves(invalidNameError);
      });
  
      after(() => {
        ProductsServices.create.restore();
      });
  
      it('é chamado com um status code 422', async () => {
        await ProductsControllers.create(request, response);
  
        expect(response.status.calledWith(422)).to.be.true;
      });
  
      it('uma mensagem de erro é passada', async () => {
        await ProductsControllers.create(request, response);
  
        expect(response.json.calledWith(invalidNameError.error)).to.be.true;
      });
    });
  
    describe('quando o produto já existe', () => {
      const response = {};
      const request = {};
      
      const alreadyExistsError = {
        error: {
          err: {
            code: 'invalid_data',
            message: 'Product already exists',
          },
        },
      };
  
      before(() => {
        request.body = validProduct;
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
  
        sinon.stub(ProductsServices, 'create')
          .resolves(alreadyExistsError);
      });
  
      after(() => {
        ProductsServices.create.restore();
      });
  
      it('é chamado com um status code 422', async () => {
        await ProductsControllers.create(request, response);
        await ProductsControllers.create(request, response);
  
        expect(response.status.calledWith(422)).to.be.true;
      });
  
      it('uma mensagem de erro é passada', async () => {
        await ProductsControllers.create(request, response);
        await ProductsControllers.create(request, response);
  
        expect(response.json.calledWith(alreadyExistsError.error)).to.be.true;
      });
    });
  });

  describe('testa delete', () => {
    describe('quando um id inválido é inserido', () => {
      const response = {};
      const request = {};
      
      const invalidId = {
        error: {
          err: {
            code: 'invalid_data',
            message: 'Wrong id format',
          },
        },
      };
  
      before(() => {
        request.body = {};
        request.params = { id: wrongId }

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
  
        sinon.stub(ProductsServices, 'deleteProduct')
          .resolves(invalidId);
      });
  
      after(() => {
        ProductsServices.deleteProduct.restore();
      });

      it('é chamado com um status code 422', async () => {
        await ProductsControllers.deleteProduct(request, response);

        expect(response.status.calledWith(422)).to.be.true;
      });

      it('uma mensagem de erro é passada', async () => {
        await ProductsServices.deleteProduct(request, response);

        expect(response.json.calledWith(invalidId.error)).to.be.true;
      });
    });

    describe('quando um id válido é passado', () => {
      const response = {};
      const request = {};
  
      before(() => {
        request.body = {};
        request.params = { id: mockId }

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
  
        sinon.stub(ProductsServices, 'getById')
          .resolves({ _id: mockId, ...validProduct});
      });
  
      after(() => {
        ProductsServices.getById.restore();
      });

      it('é chamado com o status code 200', async () => {
        await ProductsControllers.deleteProduct(request, response);

        expect(response.status.calledWith(200)).to.be.true;
      });
    });
  });

  describe('testa getAll', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
    });

    it('é chamado com um status code 200', async () => {
      await ProductsControllers.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });
  });

  describe('testa getById', () => {
    const response = {};
    const request = {};

    const invalidId = {
      error: {
        err: {
          code: 'invalid_data',
          message: 'Wrong id format',
        },
      },
    };

    const notFound = {
      error: {
        err: {
          code: 'invalid_data',
          message: 'Can\'t find products with this id',
        },
      },
    };

    describe('se for passado um id inválido', () => {
      before(() => {
        request.body = {};
        request.params = { id: wrongId }
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
          sinon.stub(ProductsServices, 'getById')
          .resolves(invalidId);
      });
  
      after(() => {
        ProductsServices.getById.restore();
      });
  
      it('é chamado com um status code 422', async () => {
        await ProductsControllers.getById(request, response);
  
        expect(response.status.calledWith(422)).to.be.true;
      });

      it('retorna uma mensagem de erro', async () => {
        await ProductsControllers.getById(request, response);

        expect(response.json.calledWith(invalidId.error)).to.be.true;
      });
    });

    describe('se for passado o id de um produto que não existe', () => {
      before(() => {
        request.body = {};
        request.params = { id: mockId }
  
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();
          sinon.stub(ProductsServices, 'getById')
          .resolves(notFound);
      });
  
      after(() => {
        ProductsServices.getById.restore();
      });
  
      it('é chamado com um status code 404', async () => {
        await ProductsControllers.getById(request, response);
  
        expect(response.status.calledWith(404)).to.be.true;
      });

      it('retorna uma mensagem de erro', async () => {
        await ProductsControllers.getById(request, response);

        expect(response.json.calledWith(notFound)).to.be.true;
      });
    });
  });
});