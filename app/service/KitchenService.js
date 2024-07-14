const { OrderRepository } = require("../repository/OrderRepository.js").default;

class KitchenService {
    async updateStatus(bodyUpdateStatusOder) {
        let orderRepository = new OrderRepository();
        await orderRepository.updateStatus(bodyUpdateStatusOder.id, bodyUpdateStatusOder.status).then(resp => resp);

        return {
            statusCode: 200,
            body: JSON.stringify({
              message: (`Order updated`),
              statusCode: 200,
              orders: result,
              id: bodyUpdateStatusOder.id,
              status: bodyUpdateStatusOder.status
            })
          }
    }

}

exports.default = { KitchenService }