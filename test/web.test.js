const TodoListContract = require('../build/contracts/TodoList.json');
const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
var _ = require('lodash');

jest.setTimeout(80000);
describe('tronweb invoke method', () => {
    let tronWeb;
    let instance;

    beforeAll(async () => {
        const fullNode = new HttpProvider('http://127.0.0.1:8090');
        const solidityNode = new HttpProvider('http://127.0.0.1:8091');
        const eventServer = 'http://127.0.0.1:8092';
        const privateKey = "46923151804b911d50f272dcd60033e6ee48a08fad1946dce16d2dddfc9c2210";
        const contractAddr = "";
        tronWeb = new TronWeb(
            fullNode,
            solidityNode,
            eventServer,
            privateKey
        );
        instance = await tronWeb.contract(TodoListContract.abi, contractAddr);
    });

    it('testAdd', async () => {
        //expect(1+1).toEqual(23);
    });

    it('testRemove', async () => {
        //expect(1 + 1).toEqual(23);
    });

     
});