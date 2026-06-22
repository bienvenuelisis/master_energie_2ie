# ⚡ Master GIS — Énergies Renouvelables  
## Plateforme de Révision Interactive

Bienvenue sur la plateforme de révision du **Master en Gestion des Infrastructures et Services, option Énergies Renouvelables**.

### 📂 Structure du projet

```
master_energie/
├── docs/
│   ├── cours/                          # PDFs des cours originaux
│   │   └── U06 - Comptabilité et planification énergétique/
│   └── revision/
│       └── ue06/
│           ├── 00-resume-express.md    # Fiche de révision rapide
│           └── 01-qcm-100-questions.md # 100 QCM avec réponses
├── website/                            # Site web interactif
│   ├── index.html                      # Application SPA
│   ├── css/style.css                   # Styles
│   └── js/
│       ├── data.js                     # Données (QCM, flashcards, formules)
│       └── app.js                      # Logique applicative
├── .github/workflows/deploy.yml        # Déploiement GitHub Pages
└── README.md
```

### 🚀 Fonctionnalités du site web

| Fonctionnalité | Description |
|---|---|
| 🃏 **Flashcards** | 36 cartes de révision rapide avec navigation clavier |
| 📝 **QCM Interactif** | 100 questions réparties en 5 blocs, avec score et explications |
| 📋 **Résumé Express** | Synthèse organisée par thèmes (accordéons) |
| 🧮 **Formules & Conversions** | Toutes les formules clés + coefficients AIE avec recherche |
| ☀️ **Technologies EnR** | Fiches détaillées par technologie |
| ⚖️ **Aspects Juridiques** | Instruments internationaux, ODD7, fiscalité |
| 📐 **Exercices Corrigés** | Exercices types avec solutions |

### 🔧 Déploiement sur GitHub Pages

Le site est déployé automatiquement via **GitHub Actions** :

1. Poussez le code sur la branche `main` (ou `master`)
2. Dans les paramètres du repo : **Settings → Pages → Source = GitHub Actions**
3. Le workflow `.github/workflows/deploy.yml` se déclenche automatiquement
4. Le site est accessible à `https://<votre-username>.github.io/<repo>/`

### 📱 Roadmap

- [x] Documents Markdown de révision (UE06)
- [x] QCM interactif (100 questions)
- [x] Site web interactif avec flashcards
- [x] Déploiement GitHub Pages automatisé
- [ ] UE suivantes (UExx...)
- [ ] Mode multijoueur / challenges en groupe
- [ ] Application mobile (PWA / React Native)
- [ ] Plateforme Web d'aide et d'apprentissage complète
- [ ] Intégration IA pour recommandations personnalisées

### 📚 Contenu UE06

- **M16** — Aspects juridiques, fiscaux et normatifs des projets EnR
- **M17** — Comptabilité et Planification Énergétique
- **Module 15** — Panorama des technologies d'énergies renouvelables

### 🛠️ Technologies utilisées

- HTML5, CSS3, JavaScript (Vanilla)
- GitHub Pages + GitHub Actions pour le déploiement
- Pas de dépendances externes (site 100% statique)

---

*Développé pour les étudiants du Master GIS — Énergies Renouvelables*
