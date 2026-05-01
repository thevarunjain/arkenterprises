import { NextRequest, NextResponse } from "next/server"

const FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScnn5T5OrQ7F3qFV7Q5sTSAMzW1EgkQjRnIFYBCDkfG7f53mw/formResponse"

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log("[enquiry] received:", JSON.stringify(body))

  const params = new URLSearchParams({
    "entry.1633920210": body.name ?? "",
    "entry.227649005": body.email ?? "",
    "entry.790080973": body.address ?? "",
    "entry.1770822543": body.phone ?? "",
    "entry.1846923513": body.message ?? "",
    "fvv": "1",
    "pageHistory": "0",
    "fbzx": "6582853857070841925",
  })

  try {
    const res = await fetch(FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    })
    console.log("[enquiry] google response status:", res.status)
    return NextResponse.json({ ok: true, status: res.status })
  } catch (err) {
    console.error("[enquiry] google fetch error:", err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}
