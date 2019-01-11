module.exports = {
    networks: {
        development: {
            privateKey: `e84df039ba10caa61bf61f15350a213da881e3a8c185347fcebe21b616d2d4ff`,
            consume_user_resource_percent: 30,
            fee_limit: 100000000,

            fullNode: `http://127.0.0.1:8090`,
            solidityNode: `http://127.0.0.1:8091`,
            eventServer: `http://127.0.0.1:8092`,

            network_id: `*`,
        },

        mainnet: {
            // Don`t put your private key here:
            privateKey: process.env.PK,
            /*
            Create a .env file (it must be gitignored) containing something like

                export PK=4E7FECCB71207B867C495B51A9758B104B1D4422088A87F4978BE64636656243

            Then, run the migration with:

                source .env && tronbox migrate --network mainnet

            */
            consume_user_resource_percent: 30,
            fee_limit: 100000000,

            fullHost: `https://api.trongrid.io`,

            network_id: `*`,
        },

        shasta: {
            privateKey: process.env.PK,
            consume_user_resource_percent: 30,
            fee_limit: 100000000,

            fullHost: `https://api.shasta.trongrid.io`,
            network_id: `*`,
        }
    }
}