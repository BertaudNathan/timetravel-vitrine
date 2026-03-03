import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const INITIAL_MESSAGE: Message = {
  id: 0,
  text: "Bienvenue chez TimeTravel Agency ! Je suis Chrono, votre conseiller temporel. Comment puis-je vous aider aujourd'hui ?",
  sender: 'bot',
}

// ---------------------------------------------------------------------------
// Mock local — utilisé en dev ou si l'API serverless n'est pas disponible
// ---------------------------------------------------------------------------
function getMockResponse(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes('prix') || lower.includes('tarif') || lower.includes('co\u00fbt') || lower.includes('combien')) {
    return "Nos tarifs varient selon la destination et la dur\u00e9e du s\u00e9jour. Paris 1889 d\u00e9marre \u00e0 12 500 \u20ac, Florence 1504 \u00e0 18 700 \u20ac et notre safari au Cr\u00e9tac\u00e9 \u00e0 34 900 \u20ac. Tous les prix sont par voyageur, tout compris : transport temporel, h\u00e9bergement d'\u00e9poque, guide et assurance quantique."
  }

  if (lower.includes('paris') || lower.includes('eiffel') || lower.includes('1889')) {
    return "Paris 1889, c'est l'\u00e9poque de l'Exposition Universelle ! Vous assisterez \u00e0 l'inauguration de la Tour Eiffel, d\u00e9couvrirez Montmartre \u00e0 son apog\u00e9e et go\u00fbterez la gastronomie parisienne du XIXe si\u00e8cle. Une exp\u00e9rience romantique et culturelle inoubliable. Souhaitez-vous plus de d\u00e9tails ?"
  }

  if (lower.includes('dinosaure') || lower.includes('cr\u00e9tac\u00e9') || lower.includes('t-rex') || lower.includes('dino')) {
    return "Notre safari au Cr\u00e9tac\u00e9 est notre exp\u00e9rience la plus intense ! Vous observerez les derniers dinosaures depuis un observatoire blind\u00e9 s\u00e9curis\u00e9, avec survol en a\u00e9ronef temporel. Combinaison respiratoire fournie. C'est l'aventure ultime pour les amateurs de sensations fortes !"
  }

  if (lower.includes('florence') || lower.includes('renaissance') || lower.includes('michel-ange') || lower.includes('1504')) {
    return "Florence 1504, c'est le c\u0153ur de la Renaissance ! Vous serez pr\u00e9sent lors du d\u00e9voilement du David de Michel-Ange et pourrez visiter l'atelier de L\u00e9onard de Vinci. Une immersion unique dans l'une des p\u00e9riodes les plus cr\u00e9atives de l'histoire humaine."
  }

  if (lower.includes('risque') || lower.includes('danger') || lower.includes('s\u00e9curit\u00e9') || lower.includes('s\u00fbr')) {
    return "La s\u00e9curit\u00e9 est notre priorit\u00e9 absolue. Chaque voyage est valid\u00e9 par le Conseil Temporel International. Nous fournissons un \u00e9quipement adapt\u00e9 \u00e0 chaque \u00e9poque (vaccinations, combinaisons, trousses m\u00e9dicales). Nos guides chrononautes sont form\u00e9s pour g\u00e9rer toute situation. Z\u00e9ro incident en 42 ans d'activit\u00e9 !"
  }

  if (lower.includes('conseiller') || lower.includes('conseil') || lower.includes('recommand') || lower.includes('h\u00e9site')) {
    return "Bien s\u00fbr, je suis l\u00e0 pour vous aider ! Pour un premier voyage temporel, je recommande souvent Paris 1889 : c'est accessible, romantique et culturellement riche. Si vous \u00eates plus aventurier, le Cr\u00e9tac\u00e9 est une exp\u00e9rience unique. Et pour les amateurs d'art, Florence 1504 est incontournable. Qu'est-ce qui vous attire le plus ?"
  }

  if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hello') || lower.includes('coucou')) {
    return "Bonjour et bienvenue ! Ravi de vous accueillir chez TimeTravel Agency. Vous r\u00eavez d'explorer une \u00e9poque particuli\u00e8re ? Je suis l\u00e0 pour vous guider \u00e0 travers notre catalogue temporel !"
  }

  if (lower.includes('merci')) {
    return "C'est un plaisir ! N'h\u00e9sitez pas si vous avez d'autres questions. Chez TimeTravel Agency, votre voyage commence d\u00e8s maintenant. \u00c0 bient\u00f4t \u00e0 travers le temps !"
  }

  return "C'est une excellente question ! Je peux vous renseigner sur nos destinations (Paris 1889, Cr\u00e9tac\u00e9, Florence 1504), nos tarifs, les mesures de s\u00e9curit\u00e9, ou vous aider \u00e0 choisir le voyage id\u00e9al. Sur quel sujet souhaitez-vous en savoir plus ?"
}

// ---------------------------------------------------------------------------
// Appel API serverless — avec fallback automatique sur le mock
// ---------------------------------------------------------------------------
async function getBotResponse(input: string): Promise<string> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    if (!res.ok) throw new Error(`API ${res.status}`)

    const data = await res.json()
    return data.reply
  } catch {
    // API indisponible (dev local, pas de clé, erreur réseau) → mock
    return getMockResponse(input)
  }
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nextId = useRef(1)

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      setIsOpen(true)
      if (detail) {
        setTimeout(() => {
          const userMsg: Message = { id: nextId.current++, text: detail, sender: 'user' }
          setMessages((prev) => [...prev, userMsg])
          setIsLoading(true)
          getBotResponse(detail).then((reply) => {
            const botMsg: Message = { id: nextId.current++, text: reply, sender: 'bot' }
            setMessages((prev) => [...prev, botMsg])
            setIsLoading(false)
          })
        }, 300)
      }
    }
    window.addEventListener('open-chat', handler)
    return () => window.removeEventListener('open-chat', handler)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const userMsg: Message = { id: nextId.current++, text, sender: 'user' }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    const reply = await getBotResponse(text)
    const botMsg: Message = { id: nextId.current++, text: reply, sender: 'bot' }
    setMessages((prev) => [...prev, botMsg])
    setIsLoading(false)
  }

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] bg-gray-900 rounded-2xl border border-gold-900/30 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gold-900/30">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-display text-sm font-bold text-gold-400">Chrono — Conseiller temporel</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Fermer le chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="chat-messages flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[50vh]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gold-600 text-gray-950 rounded-br-md'
                      : 'bg-gray-800 text-gray-200 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-400 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm">
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce [animation-delay:0ms]">.</span>
                    <span className="animate-bounce [animation-delay:150ms]">.</span>
                    <span className="animate-bounce [animation-delay:300ms]">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gold-900/30 p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Posez-moi vos questions sur les voyages temporels..."
                disabled={isLoading}
                className="flex-1 bg-gray-800 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 border border-gray-700 disabled:opacity-50"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                className="bg-gold-600 hover:bg-gold-500 text-gray-950 p-2.5 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Envoyer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 bg-gold-600 hover:bg-gold-500 text-gray-950 rounded-full shadow-lg hover:shadow-gold-500/20 transition-all duration-200 flex items-center justify-center"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </>
  )
}

export default ChatWidget
