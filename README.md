# ⚡ Master GIS — Énergies Renouvelables  
## Plateforme de Révision Interactive — v2.0

Bienvenue sur la plateforme de révision du **Master en Gestion des Infrastructures et Services, option Énergies Renouvelables**.

### 📂 Structure du projet

```
master_energie/
├── docs/
│   ├── cours/
│   │   ├── U06 - Comptabilité et planification énergétique/
│   │   └── U07 - Infrastructure et Techniques de destruction/
│   ├── extracted/                     # Textes extraits des PDFs
│   └── revision/
│       └── ue06/
│           ├── 00-resume-express.md
│           └── 01-qcm-100-questions.md
├── website/                           # Site web interactif
│   ├── index.html                     # SPA multi-UE
│   ├── css/style.css                  # Design v2.0
│   ├── .nojekyll
│   └── js/
│       ├── data.js                    # 129 QCM + 32 flashcards + formules
│       └── app.js                     # Logique multi-UE + difficulté
├── .github/workflows/deploy.yml       # Déploiement GitHub Pages
└── README.md
```

### 🚀 Fonctionnalités — v2.0

| Fonctionnalité | Description |
|---|---|
| 🔀 **Multi-UE** | Basculez entre UE06 ⚡ et UE07 🏗️ via les onglets |
| ⭐ **Niveaux de difficulté** | Filtrez QCM par Facile / Moyen / Difficile |
| 🃏 **Flashcards améliorées** | Question visible au dos de la carte |
| 🎉 **Célébration** | Confettis pour les scores ≥ 90% |
| 📝 **QCM Interactif** | 100 (UE06) + 29 (UE07) questions, score, explications |
| 📋 **Résumé Express** | Synthèse par thèmes en accordéons |
| 🧮 **Formules & Conversions** | 18 formules clés + 13 coefficients AIE |
| 🔧 **Fiches Techniques** | 6 technos EnR + 4 techniques de déconstruction |
| ⚖️ **Aspects Juridiques** | Instruments internationaux, ODD7, fiscalité |
| 📐 **Exercices Corrigés** | Exercices types avec solutions |

### 📚 Contenu

| UE | Modules | QCM | Flashcards |
|---|---|---|---|
| ⚡ **UE06** — Comptabilité & Planification | M16, M17, Module 15 | 100 questions | 20 cartes |
| 🏗️ **UE07** — Infrastructure & Destruction | M18, M19 | 29 questions | 12 cartes |

### 🎨 Améliorations design (v2.0)

Inspiré des skills `.github/skills/` :

| Skill | Application |
|---|---|
| **frontend-design** | Nouvelle typographie Inter, palette cohérente, espacement rythmé |
| **colorize** | UE06 = bleu, UE07 = orange, difficultés codées par couleur |
| **bolder** | Hiérarchie visuelle marquée, hero pleine largeur, stats cards |
| **animate** | Transitions fluides, flip 3D, pulse correct, shake erreur |
| **delight** | Confettis pour ≥ 90%, messages encourageants, micro-interactions |
| **polish** | Tous les états (hover/focus/active/disabled), responsive complet |

### 🔧 Déploiement sur GitHub Pages

1. Poussez sur `main` (ou `master`)
2. **Settings → Pages → Source = GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` déploie automatiquement

### 📱 Roadmap

- [x] Documents Markdown de révision (UE06)
- [x] QCM interactif (100 questions)
- [x] Site web interactif avec flashcards
- [x] Déploiement GitHub Pages automatisé
- [x] UE07 intégrée + multi-UE
- [x] Niveaux de difficulté (⭐ à ⭐⭐⭐)
- [x] Design v2.0 inspiré des skills UI/UX
- [ ] UE suivantes (UExx...)
- [ ] Mode multijoueur / challenges en groupe
- [ ] Application mobile (PWA / React Native)
- [ ] Plateforme Web d'aide et d'apprentissage complète

### 🛠️ Technologies utilisées

- HTML5, CSS3, JavaScript (Vanilla)
- GitHub Pages + GitHub Actions
- Zéro dépendance externe — site 100% statique

---

*Développé pour les étudiants du Master GIS — Énergies Renouvelables*
