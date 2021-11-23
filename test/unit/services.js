const sinon = require('sinon');
const { expect } = require('chai');

const ProductsModels = require('../../models/products');
const ProductsServices = require('../../services/products');

describe('Testa services', () => {
  const invalidProduct = {
    name: 'na',
    quantity: 100
  };

  const validProduct = {
    name: 'nanana',
    quantity: 20,
  };

  const updatedProduct = {
    name: 'banana',
    quantity: 20,
  };

  const mockId = '619bfa5066bd33428f15bfbe';

  describe('Insere um novo produto no DB', () => {
    describe('quando o produto é inválido', () => {
      const invalidNameError = {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      };
  
      before(() => {
        sinon.stub(ProductsModels, 'create')
          .resolves(invalidNameError);
      });
  
      after(() => ProductsModels.create.restore());
  
      it('retorna um objeto de erro', async () => {
        const response = await ProductsServices.create(invalidProduct);
  
        expect(response.error.err).to.be.deep.equal(invalidNameError);
      });
    });
  
    describe('quando o produto é válido', () => {
      it('retorna o produto inserido', async () => {
        const response = await ProductsServices.create(validProduct);
  
        expect(response.ops[0]).to.be.includes(validProduct);
      });
    });
  });
  
  describe('Deleta um produto do DB', () => {
    describe('quando o produto é deletado com sucesso', () => {
      it('retorna um objeto', async () => {
        const product = await ProductsServices.create(validProduct);
        const productId = product.insertedId;
        
        const response = await ProductsServices.deleteProduct(productId);

        expect(response).to.be.an('object');
        expect(response.deletedCount).to.be.equal(1);
      });
    });
  });

  describe('Procura um produto pelo id', () => {
    it('quando o produto existe', async () => {
      const product = await ProductsServices.create(validProduct);
      const productId = product.insertedId;
      const response = await ProductsServices.getById(productId);

      expect(response).to.be.an('object');
    });

    it('quanto o produto não existe', async () => {
      const response = await ProductsServices.getById(mockId);

      expect(response).to.be.null;
    });
  });

  // describe('Lista todos os produtos', () => {
  //   it('retorna um array com todos os produtos', async () => {
  //     await ProductsServices.create(validProduct);
  //     const response = await ProductsServices.getAll();

  //     expect(response).to.be.an('array');
  //     expect(response.length).to.be.equal(1);
  //   });

  //   it('se não houverem produtos, retorna um array vazio', async () => {
  //     const response = await ProductsServices.getAll();

  //     expect(response).to.be.an('array');
  //     expect(response).to.be.empty;
  //   });
  // });

  describe('Atualiza um produto', () => {
    it('atualiza o produto com sucesso', async () => {
      const product = await ProductsServices.create(validProduct);
      const productId = product.insertedId;
      await ProductsServices.update({ id: productId, ...updatedProduct });

      const response = await ProductsServices.getById(productId);

      expect(response).to.be.deep.equal({ _id: productId, ...updatedProduct });
    });
  });
});