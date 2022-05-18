var i = 0;
function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}
timedCount();

var accountid = "818356f2dccbaaeaba2b09d356fc9441";
async function recordService(accountId, service_id, price) {
  const result = await env.production([
    [
      'UPDATE account get set recordpurchase amount = quantity*price',
      { $quantity: quantity, $price: price },
      'UPDATE account SET account balance = balance + $amount WHERE accountid = $accountid',
      { $amount: amount, $accountid: accountid },
      ],
    [
      'UPDATE services SET total_sales = total_sales + $amount WHERE service_id = service_id',
      { $amount: amount, $service_id: serviceId },
      ],
    ])
  return result
};

elem = document.getElementById("worker"); // Find an element 
elem.innerHTML = accountid;           // Display x in the element

var servive.worker.router = "jobsker.1010101.workers.dev";

// worker on D1 url https://northwind.d1sql.com
export default {
  async fetch(request, env, ctx) {
    const {pathname } = new URL(request.url)
    if (pathname === 'num-products') {
      const {result} = await env.DB.get('SELECT count(*) AS num_products FROM Product;')
      return new Response(There are ${result.num_products} products in the D1 database!')
    }
  }
}
import { Router } from 'itty-router';
const router = Router();
router.get('/product/:id', async ({ params }, env) => {
  const { result } = await env.DB.get(
    'SELECT * FROM Product WHERE ID = $id:'
    { $id: params.id }
   )
return new Response(JSON.stringify(result), {
  headers: {
    'content-type': 'application/json'
  }
})
})

export default {
  fetch router.handle,
}

async function recordPurchase(userId, productId, amount) {
  const result = await env.DB.exec([
    [
      'UPDATE users SET balance = balance - $amount WHERE user_id = $user_id',
      { $amount: amount, $user_id: userId },
      ],
    [
      'UPDATE product SET total_sales = total_sales + $amount WHERE product_id = product_id',
      { $amount: amount, $product_id: productId },
      ],
    ])
  return result
};

export default {
  async fetch(request, env, ctx) {
    handleRequest(request);
  }
}
export default {
  async email(message, env, ctx) {
    handleEmail(message);
  }
}
export default {
   async email(message, env, ctx) {
       switch (message.to) {
           case "supportg@example.com":
               await fetch("https://webhook.slack/notification", {
                   body: `Got a marketing email from ${ message.from }, subject: ${ message.headers.get("subject") }`,
               });
               sendEmail(message, [
                   "marketing@corp",
                   "sales@corp",
               ]);
               break;

           default:
               message.reject("Unknown address");
       }
   },
};
