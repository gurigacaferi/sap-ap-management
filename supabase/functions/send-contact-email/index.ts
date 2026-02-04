import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, message } = await req.json()
    
    console.log("[send-contact-email] Processing submission:", { firstName, lastName, email, company });

    if (!RESEND_API_KEY) {
      console.error("[send-contact-email] RESEND_API_KEY is missing");
      return new Response(
        JSON.stringify({ error: "Email service configuration missing." }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
          status: 500 
        }
      )
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'AP EVO <onboarding@resend.dev>',
        to: ['info@ap-evo.com'], 
        subject: `New Inquiry: ${firstName} ${lastName} from ${company}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2 style="color: #0B1B35;">New Inquiry Received</h2>
            <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 4px solid #39B54A; padding-left: 15px;">${message}</blockquote>
          </div>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("[send-contact-email] Resend API Error:", data);
      return new Response(
        JSON.stringify({ error: data.message || "Failed to send email via provider" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
          status: res.status 
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 200 
      }
    )
  } catch (error) {
    console.error("[send-contact-email] Fatal Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    )
  }
})