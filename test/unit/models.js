const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const CreateProductsModel = require('../../models/products/create');
const DeleteProductsModel = require('../../models/products/delete');
const FindByNameProductsModel = require('../../models/products/findByName');
const GetAllProductsModel = require('../../models/products/getAll');
const GetByIdProductsModel = require('../../models/products/getById');
const UpdateProductsModel = require('../../models/products/update');

describe('Testa camada de Model de Produtos', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;

  const payloadProduct = {
    name: 'Papete do Senninha',
    quantity: 10,
  };

  const updatedPayloadProduct = {
    name: 'Papete do Senninha',
    quantity: 100,
  };

  before(async () => {
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then((conn) => conn.db('StoreManager'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Testa create', () => {
    describe('Quando o produto é inserido corretamente', () => {
      it('retorna um objeto', async () => {
        const response = await CreateProductsModel(payloadProduct);

        expect(response).to.be.an('object');
      });

      it('o objeto contém as keys "_id", "name", "quantity"', async () => {
        const response = await CreateProductsModel(payloadProduct);

        const result = await response.ops[0];

        expect(result).to.deep.include.keys(['_id', 'name', 'quantity']);
      });

      it('o produto criado é exatamente o inserido', async () => {
        const response = await CreateProductsModel(payloadProduct);

        const result = await response.ops[0];

        expect(result.name).to.be.equal(payloadProduct.name);
        expect(result.quantity).to.be.equal(payloadProduct.quantity);
      });
    })
  })

  describe('Testa delete', () => {
    describe('Quando o ID do produto é inserido corretamente', async () => {
      it('retorna um objeto vazio', async () => {
        const product = await CreateProductsModel(payloadProduct);
        const productId = await product.insertedId
        const response = await DeleteProductsModel(productId);

        expect(response).to.be.an('object');
        expect(response.ops).to.be.undefined;
      });

      it('o produto deletado não existe mais no DB', async () => {
        const product = await CreateProductsModel(payloadProduct);
        const productId = await product.insertedId
        await DeleteProductsModel(productId);
        const findProduct = await FindByNameProductsModel(productId);

        expect(findProduct).to.be.null;
      })
    })
  });

  describe('Testa findByName', () => {
    it('retorna um objeto', async () => {
      await CreateProductsModel(payloadProduct);

      const response = await FindByNameProductsModel(payloadProduct.name);

      expect(response).to.be.an('object');
    });

    it('o produto encontrado é igual ao inserido anterimente', async () => {
      await CreateProductsModel(payloadProduct);

      const response = await FindByNameProductsModel(payloadProduct.name);

      const { name, quantity } = response;

      expect(name).to.be.equal(payloadProduct.name)
      expect(quantity).to.be.equal(payloadProduct.quantity)
    });
  });

  describe('Testa getAll', () => {
    it('retorna um objeto', async () => {
      const response = await GetAllProductsModel();

      expect(response).to.be.an('array');
    });
  })

  describe('Testa getById', () => {
    it('retorna um objeto', async () => {
      const product = await CreateProductsModel(payloadProduct);
      const productId = await product.insertedId;

      const response = await GetByIdProductsModel(productId);

      expect(response).to.be.an('object');
    });

    it('o produto encontrado é igual ao inserido anterimente', async () => {
      await CreateProductsModel(payloadProduct);

      const response = await FindByNameProductsModel(payloadProduct.name);

      const { name, quantity } = response;

      expect(name).to.be.equal(payloadProduct.name)
      expect(quantity).to.be.equal(payloadProduct.quantity)
    });
  })

  describe('Testa update', () => {
    it('retorna um objeto', async () => {
      const product = await CreateProductsModel(payloadProduct);
      const productId = await product.insertedId;

      const response = await UpdateProductsModel({ productId, ...updatedPayloadProduct });

      expect(response).to.be.an('object');
    });

    it('o produto foi atualizado com sucesso', async () => {
      const product = await CreateProductsModel(payloadProduct);
      const productId = await product.insertedId;
      await UpdateProductsModel({ id: productId, ...updatedPayloadProduct });

      const response = await GetByIdProductsModel(productId);

      const { name, quantity } = response;

      expect(name).to.be.equal(updatedPayloadProduct.name)
      expect(quantity).to.be.equal(updatedPayloadProduct.quantity)
    });
  })
})