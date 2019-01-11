module.exports = {
    networks: {
        development: {
            privateKey: `ed74f0f3021ad2b6d3c6e9481b7d69aeba414e544f063e5ba9eede07fdf20728`,
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