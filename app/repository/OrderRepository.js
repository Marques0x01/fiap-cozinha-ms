const { Database } = require("../config/DatabaseConfig.js").default;

class OrderRepository {

    async updateOrderStatus(id, status) {
        let TABLE = 'public."order"';
        const connection = new Database();

        const queryOrder = `update ${TABLE} set status = '${status}' where id = '${id}'`;

        let result = null
        try {
            result = await connection.query(queryOrder, null);
            console.log('Order Updated');
        } catch (err) {
            console.error('Error in updating order:', err.stack);
        } finally {
            await connection.end();
            return result.rows;
        }
    }

}

exports.default = { OrderRepository }