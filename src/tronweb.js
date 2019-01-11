const TronWeb = require('tronweb');
const HttpProvider = TronWeb.providers.HttpProvider;
var _ = require('lodash');
const TodoListContract = require('./contracts/TodoList.json');


const fullNode = new HttpProvider('http://127.0.0.1:8090');
const solidityNode = new HttpProvider('http://127.0.0.1:8091');
const eventServer = 'http://127.0.0.1:8092';

const privateKey = "217146ea4ae44ce4c00f93bcac99f5b3415372b86f58488861f3f41b7a81b5ee";
const contractAddr = "TFyEw5qRRiZTJ5boLZJxZnv2hnhpBuvkjm";

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