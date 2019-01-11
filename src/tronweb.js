const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
var _ = require('lodash');
const TodoListContract = require('./contracts/TodoList.json');


const fullNode = new HttpProvider('http://127.0.0.1:8090');
const solidityNode = new HttpProvider('http://127.0.0.1:8091');
const eventServer = 'http://127.0.0.1:8092';

const privateKey = "e84df039ba10caa61bf61f15350a213da881e3a8c185347fcebe21b616d2d4ff";
const contractAddr = "TWq2U2iM4tcJvvCTiqgxSktV4zewd7XXyB";

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

export const instanceContract = () => {
    return new Promise(res => {
        res(tronWeb.contract(TodoListContract.abi, contractAddr))
    })
}

export const mapReponseToJSON = (contractResponse, parameters, type) => {
    switch (type) {
        case 'arrayOfObject':
            {
                const result = [];
                contractResponse.forEach((paramValues, paramIndex) => {
                    const paramName = parameters[paramIndex];

                    paramValues.forEach((paramValue, itemIndex) => {
                        const item = _.merge({}, _.get(result, [itemIndex], {}));
                        item[paramName] = tronWeb.toBigNumber(paramValue._hex).toNumber();
                        result[itemIndex] = item;
                    })
                });

                return result;
            }
        default:
            return contractResponse;
    }
}