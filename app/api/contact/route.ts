import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = body.name
    const telefon = body.telefon
    const email = body.email
    const nachricht = body.nachricht

    if (!name || !email || !nachricht) {
      return Response.json(
        {
          error: 'Bitte füllen Sie Name, E-Mail und Nachricht aus.',
          received: body,
        },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'MXB Anfrage <onboarding@resend.dev>',
      to: ['moh8060@hotmail.com'],
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <h2>Neue Anfrage über mxb-h.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${telefon || 'Nicht angegeben'}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)

    return Response.json(
      { error: 'Die Anfrage konnte nicht gesendet werden.' },
      { status: 500 }
    )
  }
}