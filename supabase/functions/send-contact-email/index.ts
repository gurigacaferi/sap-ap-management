import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, message } = await req.json()
    
    console.log("[send-contact-email] Processing contact form submission:", { 
      firstName, lastName, email, company 
    });

    if (!RESEND_API_KEY) {
      console.error("[send-contact-email] RESEND_API_KEY is not set in Supabase Secrets.");
      return new Response(
        JSON.stringify({ error: "Email service not configured. Please set RESEND_API_KEY in Supabase." }),
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
        from: 'AP EVO Contact Form <onboarding@resend.dev>',
        to: ['info@ap-evo.com'],
        subject: `New Inquiry from ${firstName} ${lastName} (${company})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0B1B35; border-bottom: 2px solid #39B54A; padding-bottom: 10px;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              ${message}
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 20px;">
              This email was sent from the AP EVO website contact form.
            </p>
          </div>
        `,
      }),
    })

    const resData = await res.json()

    if (res.ok) {
      console.log("[send-contact-email] Email sent successfully via Resend:", resData);
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    } else {
      console.error("[send-contact-email] Resend API error:", resData);
      throw new Error(resData.message || "Failed to send email via Resend")
    }
  } catch (error) {
    console.error("[send-contact-email] Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})