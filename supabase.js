import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "PASTE_YOUR_URL"
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_KEY"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)


// REGISTER USER
export async function registerUser(name, email, sponsor_email){

  const { data, error } = await supabase
    .from("users")
    .insert([{
      name,
      email,
      sponsor_email,
      affiliate_id: "AFF" + Date.now()
    }]);

  return { data, error };
}


// PROCESS ORDER AFTER PAYMENT
export async function processOrder(buyerEmail, totalAmount, totalPV){

  const response = await fetch(
    `${SUPABASE_URL}/functions/v1/process-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY
      },
      body: JSON.stringify({
        buyerEmail,
        orderTotal: totalAmount,
        orderPV: totalPV
      })
    }
  );

  return await response.json();
    }
