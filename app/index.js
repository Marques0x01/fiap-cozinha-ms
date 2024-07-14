const { KitchenService } = require("./service/KitchenService.js").default;

exports.handler = async (event) => {

  const method = event.path + "-" + event.httpMethod;
  const kitchenService = new KitchenService();

  try {
    let response;
    switch (method) {
      case "/fiap-lanches/kitchen/order-status-PUT":
        response = await kitchenService.updateStatus(JSON.parse(event.body));
        break;

      default:
        return {
          statusCode: 404,
          body: JSON.stringify({
            message: `Resource not found: ${method}`,
            statusCode: 404
          })
        };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ resp: response })
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};