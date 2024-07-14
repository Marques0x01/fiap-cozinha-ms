const { OrderRepository } = require("../repository/OrderRepository.js").default;

class KitchenService {
    async updateStatus(bodyUpdateStatusOder) {
        let orderRepository = new OrderRepository();
        let clientId = await orderRepository.updateStatus(bodyUpdateStatusOder.id, bodyUpdateStatusOder.status).then(resp => resp);

        return {
            statusCode: 200,
            body: JSON.stringify({
              message: (`Order updated`),
              statusCode: 200,
              orders: result,
              id: id,
              status: status
            })
          }
    }

}

exports.default = { KitchenService }