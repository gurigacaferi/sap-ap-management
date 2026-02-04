import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, message } = await req.json()
    
    console.log("[send-contact-email] Attempting to send email for:", email);

    if (!RESEND_API_KEY) {
      console.error("[send-contact-email] Missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "API Key missing in Supabase secrets." }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AP EVO Contact <onboarding@resend.dev>',
        to: ['info@ap-evo.com'], // TIP: Change this to your Resend signup email for testing!
        subject: `Contact Form: ${firstName} ${lastName}`,
        html: `
          <h3>New Inquiry</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    })

    const responseData = await res.json()

    if (!res.ok) {
      console.error("[send-contact-email] Resend API error:", responseData);
      
      // Provide helpful hints for common Resend errors
      let errorMessage = responseData.message || "Failed to send email";
      if (res.status === 403) {
        errorMessage = "Resend Permission Denied: Ensure your API key is correct and that you've verified your domain (or are sending to your own signup email).";
      }

      return new Response(
        JSON.stringify({ error: errorMessage, details: responseData }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: res.status }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )

  } catch (error) {
    console.error("[send-contact-email] Critical error:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})