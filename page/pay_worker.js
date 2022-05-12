export default {
  async fetch(request, env, ctx) {
    const {pathname } = new URL(request.url)
    if (pathname === 'num-payments') {
      const {result} = await env.DB.get('SELECT count(*) AS num_payments FROM Payment;')
      return new Response(There are ${result.num_payments} payments in the D1 database!')
    }
  }
}
import { Router } from 'itty-router';
const router = Router();
router.get('/payment/:id', async ({ params }, env) => {
  const { result } = await env.DB.get(
    'SELECT * FROM Payment WHERE ID = $id:'
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

async function recordPay(sender, beneficiary, amount, content) {
  const result = await env.DB.exec([
    [
      'UPDATE account SET x = x + $amount WHERE balance = $x',
      { $amount: amount, $account: account },
      ],
    [
      'UPDATE account SET balance = $x + $amount WHERE beneficiary = account or bankaccount',
      { $amount: amount, $x: x },
      ],
    ])
  return result
}
