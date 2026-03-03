# TimeTravel Agency — Webapp Interactive

Webapp vitrine pour une agence de voyages temporels fictive, conçue et itérée entièrement avec des outils d'IA générative.

## 🛠️ Stack Technique

| Couche | Technologie |
|--------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styles | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Animations | CSS keyframes via Tailwind |
| Backend chatbot | Vercel Serverless Functions (TypeScript) |
| LLM API | Compatible OpenAI / Mistral / Groq / OpenRouter |
| Hébergement | Vercel |

## ✨ Features

- **Landing page immersive** — hero plein écran avec vidéo en fond, stats, section process 4 étapes, CTA
- **Catalogue de 3 destinations temporelles** — grille éditoriale avec cartes enrichies (note, difficulté, groupe max)
- **Pages de détail** — galerie, vidéo, highlights, risques, sidebar de réservation sticky
- **Chatbot IA « Chrono »** — conseiller temporel conversationnel, contextuel à chaque destination
- **Design system cohérent** — palette or/anthracite, typographie Playfair Display + Inter, composants réutilisables
- **Données centralisées** — toutes les constantes agence dans `src/data/config.ts`, toutes les destinations dans `src/data/destinations.ts`
- **Responsive** — mobile-first, adaptatif jusqu'aux très grands écrans

## 🤖 IA Utilisées

- **Code & itérations UI** : Bolt.new (Claude 3.5 Sonnet) + GitHub Copilot (Claude Sonnet 4.5)
- **Chatbot** : Mistral Small via API (modèle configurable via variable d'environnement)
- **Visuels** : Midjourney (illustrations d'époque) + Runway (vidéos d'ambiance)

## ⚙️ Variables d'environnement

Créer un fichier `.env.local` à la racine (ou les renseigner dans Vercel > Settings > Environment Variables) :

```env
LLM_API_KEY=your_api_key_here
LLM_BASE_URL=https://api.mistral.ai/v1   # optionnel, défaut OpenAI
LLM_MODEL=mistral-small-latest           # optionnel, défaut gpt-4o-mini
```

## 🚀 Démarrage local

```bash
npm install
npm run dev
```

## 📁 Structure du projet

```
src/
├── components/
│   ├── chat/          # Widget chatbot IA
│   ├── layout/        # Header, Footer
│   └── ui/            # DestinationCard, Section, AnimationWrapper
├── data/
│   ├── config.ts      # Constantes agence (nom, dates, stats…)
│   └── destinations.ts # Catalogue des 3 destinations
└── pages/
    ├── Home.tsx
    ├── Destinations.tsx
    └── DestinationDetail.tsx
api/
└── chat.ts            # Serverless function — proxy LLM
```

## 📄 Licence

Projet pédagogique — M1/M2 Digital & IA
