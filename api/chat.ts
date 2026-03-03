import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * Serverless function — proxy vers un LLM.
 *
 * Variable d'environnement requise sur Vercel (Settings > Environment Variables) :
 *   LLM_API_KEY    — clé API du provider (OpenAI, Mistral, Groq, OpenRouter...)
 *
 * Variable optionnelle :
 *   LLM_BASE_URL   — URL de base de l'API (défaut : OpenAI)
 *   LLM_MODEL      — modèle à utiliser (défaut : gpt-4o-mini)
 *
 * Le frontend appelle POST /api/chat avec :
 *   { "message": "texte de l'utilisateur" }
 *
 * La function renvoie :
 *   { "reply": "réponse du LLM" }
 */

const SYSTEM_PROMPT = `Tu es Chrono, le conseiller temporel de TimeTravel Agency — une agence de voyages dans le temps de luxe fondée en 2047.

Tu connais 3 destinations :
- Paris 1889 (Exposition Universelle, Tour Eiffel) — à partir de 12 500 €
- Crétacé -65M (safari dinosaures, T-Rex) — à partir de 34 900 €
- Florence 1504 (Renaissance, David de Michel-Ange) — à partir de 18 700 €

Ton ton est : professionnel, chaleureux, passionné d'histoire, crédible mais fictif.
Tu réponds toujours en français. Tes réponses font 2-4 phrases maximum.
Tu ne sors jamais du personnage. Si on te pose une question hors sujet, ramène poliment la conversation aux voyages temporels.`

interface ChatRequestBody {
  message?: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers pour les appels depuis le même domaine
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' })
  }

  // Valider le body
  const body = req.body as ChatRequestBody
  if (!body || typeof body.message !== 'string' || body.message.trim().length === 0) {
    return res.status(400).json({ error: 'Body must contain a non-empty "message" string.' })
  }

  const apiKey = process.env.LLM_API_KEY
  if (!apiKey) {
    // Pas de clé configurée — fallback mock pour ne pas casser le site
    return res.status(200).json({
      reply: "Je suis actuellement en mode hors-ligne. Veuillez réessayer plus tard.",
      mock: true,
    })
  }

  const baseUrl = process.env.LLM_BASE_URL || 'https://api.openai.com/v1'
  const model = process.env.LLM_MODEL || 'gpt-4o-mini'

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: body.message.slice(0, 500) },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`LLM API error ${response.status}: ${errorText}`)
      return res.status(502).json({ error: 'LLM provider returned an error.' })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      return res.status(502).json({ error: 'Empty response from LLM provider.' })
    }

    return res.status(200).json({ reply })
  } catch (err) {
    console.error('Serverless function error:', err)
    return res.status(500).json({ error: 'Internal server error.' })
  }
}
