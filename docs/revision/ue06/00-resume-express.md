# UE06 – Comptabilité et Planification Énergétique
## Fiche de Révision Express — Master GIS – Énergies Renouvelables

> **Dernière mise à jour :** Juin 2026  
> **Auteurs des cours :** Prof. Yezouma Coulibaly (2iE), Dafoura Paul MILLOGO (ANEREE), Dr. David TSUANYO  
> **Modules :** M16 (Aspects juridiques), M17 (Comptabilité & Planification), Module 15 (Panorama EnR)

---

## 📐 1. UNITÉS ET CONVERSIONS ESSENTIELLES

| Conversion | Valeur |
|---|---|
| 1 TEP (Tonne Équivalent Pétrole) | 42 GJ = 10¹⁰ cal = 7 barils |
| 1 MWh | 3,6 GJ = **0,086 TEP** |
| 1 GWh | **86 TEP** |
| 1 cal | 4,18 J |
| 1 Wh | 3 600 J = 860 cal |
| 1 baril | 158,987 L |
| 1 m³ gaz naturel | ≈ 0,8 TEP (1 000 m³ = 0,8 TEP) |

### Multiples
k (10³) → M (10⁶) → G (10⁹) → T (10¹²)

### PCI des principaux combustibles

| Combustible | PCI |
|---|---|
| Charbon (houille) | 26 GJ/t (≈ 0,62 tep) |
| Produits pétroliers bruts | 42 GJ/t (≈ 1 tep) |
| GPL | 46 GJ/t (≈ 1,10 tep) |
| Essence / kérosène | 44 GJ/t (≈ 1,05 tep) |
| Gazole / Diesel | 42-43 GJ/t (≈ 1,035 tep) |
| Bois de feu | ≈ 0,4 tep/t |
| Charbon de bois | ≈ 0,7 tep/t |
| Gaz naturel | 0,8 tep/1000 m³ |
| Électricité (primaire) | 1 GWh = 86 tep |

> **PCS vs PCI :** différence de 2-5% (solides) à 7-10% (gaz). On utilise le **PCI** en comptabilité énergétique.

---

## ⛓️ 2. LA CHAÎNE ÉNERGÉTIQUE

```
Énergie PRIMAIRE → Énergie SECONDAIRE → Énergie FINALE → Énergie UTILE
  (brute)            (transformée)       (livrée)         (service rendu)
  pétrole brut       électricité HT      électricité BT   chaleur, lumière
  rayonnement        butane, essence     essence pompe    force motrice
  vent, eau                             gaz bouteille     froid
```

- **Primaire :** aucune transformation (pétrole brut, solaire, vent, hydro, biomasse)
- **Secondaire :** après ≥ 1 transformation = « vecteurs énergétiques »
- **Finale :** livrée au consommateur
- **Utile :** service énergétique effectif

### Classification des énergies
- **Renouvelables** (flux) vs **Fossiles** (stock)
- **Commerciales** (marché) vs **Traditionnelles** (bois, charbon)
- **Conventionnelles** (charbon, pétrole, gaz, nucléaire)

---

## 📊 3. COMPTABILITÉ ÉNERGÉTIQUE

### Le Bilan Énergétique — Équation fondamentale

> **P + Im – Ex ± VS = Pt + Cne + Cf**

| Symbole | Signification |
|---|---|
| P | Production nationale |
| Im | Importations |
| Ex | Exportations |
| VS | Variation de stocks (+ si déstockage) |
| Pt | Pertes de transformation + autoconsommation |
| Cne | Consommations non énergétiques |
| Cf | Consommation finale |

### Structure du tableau (matrice)

**En colonnes :** vecteurs énergétiques (charbon, pétrole brut, gaz, GPL, hydro, élec, solaire, biomasse, électricité importée…)

**En lignes — 3 blocs :**
1. **ATEP** (Approvisionnements Totaux en Énergie Primaire)  
   ATEP = Production + Importations – Exportations – Soutages internationaux ± Variation de stocks
2. **Transformations & Pertes**  
   Inputs (–) → Outputs (+) ; pertes distribution (–) ; autoconsommation (–)
3. **CFT** (Consommation Finale Totale)  
   Industries / Transport / Résidentiel / Tertiaire / Agriculture / Usage non énergétique

> **Écart statistique** = CFT + TSEP – (AI + Transferts) → mesure Demande – Offre

### Coefficients d'équivalence AIE (principaux)

| Produit | Unité | TEP |
|---|---|---|
| Électricité | GWh | 86 |
| Pétrole brut | t | 1 |
| Charbon minéral | t | 0,62 |
| GPL | t | 1,13 |
| Essence | t | 1,07 |
| Jet fuel | t | 1,065 |
| Kérosène | t | 1,045 |
| Gazole/Diesel | t | 1,035 |
| Fuel lourd | t | 0,96 |
| Gaz naturel | 1000 m³ | 0,8 |
| Bois de feu | t | 0,4 |
| Charbon de bois | t | 0,7 |
| Déchets végétaux | t | 0,3 |
| Alcool | m³ | 0,51 |

---

## 📈 4. INDICATEURS ÉNERGÉTIQUES CLÉS

| Indicateur | Formule | Unité |
|---|---|---|
| **Taux d'indépendance énergétique** | Production nationale / ATEP | % |
| **Consommation par habitant** | CFT (ou ATEP) / Population | tep/hab |
| **Intensité énergétique du PIB** | CFT (ou ATEP) / PIB | tep/1000 $US |
| **Taux d'électrification** (TE) | Ménages électrifiés / Total ménages | % |
| **Taux de desserte** (TD) | Ménages raccordés / Ménages zone électrifiée | % |
| **Taux de couverture géographique** (TCG) | Ménages zone électrifiée / Total ménages | % |
| **Part EnR** | Production EnR / Production totale | % |
| **Élasticité de la demande** | e = (ΔQ/Q) / (ΔP/P) | — |

> **TE = TD × TCG**

### Élasticité
- Si \|e\| > 1 → demande **élastique**
- Si \|e\| < 1 → demande **inélastique** (cas typique de l'électricité)

### Ordres de grandeur Monde
- Consommation mondiale : **12 GTEP/an ≈ 1,6 tep/hab/an**
- Amérique du Nord : 8 tep/hab/an
- Europe : 4 tep/hab/an
- Chine : 1,5 — Brésil : 1 — Inde : 0,5
- Afrique : **0,2 tep/hab/an** ⚠️

---

## 🌿 5. COMPTABILITÉ CARBONE

### PRG (Pouvoir de Réchauffement Global) — horizon 100 ans (GIEC)

| Gaz | PRG | Durée de vie |
|---|---|---|
| CO₂ | **1** | ~100 ans |
| CH₄ (méthane) | **25** | ~12 ans |
| N₂O (protoxyde d'azote) | **298** | ~114 ans |
| SF₆ | **22 800** | — |
| HFC | 124 – 14 800 | — |
| PFC | 7 390 – 12 200 | — |

> 1 kg CO₂ = 0,2727 kg équivalent carbone

### Scopes d'émission (ISO 14064-1)

| Scope | Périmètre |
|---|---|
| **Scope 1** | Émissions directes (combustion, flotte propre) |
| **Scope 2** | Émissions indirectes (consommation d'électricité) |
| **Scope 3** | Autres indirectes (employés, logistique, amont/aval) |

> **Empreinte carbone** ≠ **Empreinte écologique** (en hag ou nombre de planètes)

---

## 🔧 6. PLANIFICATION ÉNERGÉTIQUE

### Instruments de planification

| Catégorie | Exemples |
|---|---|
| Normes & standards | Normes produits, codes thermiques du bâtiment |
| Régulation du marché | Interdiction lampes incandescentes, véhicules > 10 ans |
| Certification obligatoire | Directive UEMOA 04/2020 (étiquetage lampes, frigos, climatiseurs) |
| Programmes d'audit | Décret 2017-1015 (Burkina Faso) |
| Contributions d'intérêt public | FDE Burkina : 2 FCFA/kWh |
| Prêts bonifiés & PPP | Centrales solaires PV |
| Net metering | En cours au Burkina Faso |
| Accords volontaires | Crédits carbone |

### Outils de planification

| Outil | Description |
|---|---|
| **LEAP** | SEI, gratuit PED, multi-scénarios, prend en compte bois de feu, diagrammes Sankey |
| **MAED** | Analyse de la demande en énergie finale/utile, moyen/long terme |
| **MESSAGE** | Optimisation/simulation chaînes d'approvisionnement, analyse technico-économique |
| **EnergyPLAN** | Université d'Aalborg, analyse heure par heure sur un an |
| **WEAP** | Intégration ressources en eau, couplage WEAP/LEAP |
| **MARKAL/TIMES** | Modèles d'optimisation du système énergétique |

### Méthode simple pour PED
1. Identifier les problèmes/besoins
2. Identifier options/scénarios
3. Évaluer et comparer
4. Sélectionner la meilleure option

### Projection de la demande
> **Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ**  
> α = taux de croissance démographique, β = taux de croissance du revenu/habitant

---

## ☀️ 7. PANORAMA DES TECHNOLOGIES EnR

### 7.1 Solaire Photovoltaïque

| Technologie | Rendement | Coût indicatif |
|---|---|---|
| Monocristallin | 12-16% | 2,5 €/Wc |
| Polycristallin | 11-14% | 2 €/Wc |
| Amorphe | 5-8% | 0,5 €/Wc (flexible) |
| HIT (hétérojonction) | ~20% | — |
| CdTe couches minces | 9-10% industriel | — |
| GaAs (labo) | 25-31% | — |
| CPV (labo) | jusqu'à 46% | — |

- **Principe :** photon → semi-conducteur (Si) → excitation électron → courant DC
- **Cellule :** jonction p-n (bore = type p, phosphore = type n)
- **LCOE :** isolé 0,9-2 $/kWh, raccordé réseau 0,25-0,7 $/kWh (baisse de 82% entre 2010-2019 → ~0,068 $/kWh)
- **Durée de vie :** 20-30 ans ; **Temps de retour énergétique :** 1,5-5 ans

### 7.2 Solaire Thermique

**Basse température (< 100°C) :**
- Chauffe-eau : plan vitré (30-70°C), tubes sous vide (50-95°C)
- Séchoirs, distillateurs, cuiseurs solaires

**Haute température (CSP) :**
- Miroirs cylindro-paraboliques (400°C), Fresnel (500°C), Tour solaire (600-1000°C), Dish Stirling
- Fluides caloporteurs : huiles (≤400°C), sels fondus (≤650°C, 75% des projets)

### 7.3 Énergie Éolienne

- **Limite de Betz :** P_méca < **16/27 × P_max** (59% max théorique)
- **Puissance mécanique :** P = Cp × ½ρ × S × V₁³
- **Profil de vent :** V/V₀ = (h/h₀)^α (α ≈ 0,13 mer → 0,3 ville)
- **Distribution de Weibull :** f(v) = (k/A)·(v/A)^(k-1)·exp[-(v/A)^k] ; k ~ 2 en Europe

| Type éolienne | Caractéristiques |
|---|---|
| Axe horizontal (Danish) | 3 pales, face au vent, jusqu'à 7 MW (offshore 160 m rotor) |
| Axe vertical Darrieus | Portance, pas d'auto-démarrage |
| Axe vertical Savonius | Traînée, faible puissance (kW) |
| VERGNET | Pales repliables, résiste cyclones (250 km/h) |

- Espacement inter-éoliennes : **5-10 × diamètre rotor** (effet de sillage)
- Marché mondial : ~370 GW cumulé (2014), 3,5% électricité mondiale (2013)
- Temps de retour énergétique : < 6 mois pour 20 ans de vie

### 7.4 Hydroélectricité

- Hydro = **16%** électricité mondiale (3ᵉ source après charbon et gaz)
- **Puissance :** proportionnelle à la hauteur × débit

| Type | Hauteur | Turbine |
|---|---|---|
| Haute chute | > 300 m | **Pelton** (action) |
| Moyenne chute | 30-300 m | **Francis** (réaction) |
| Basse chute | < 30 m | **Kaplan** (axiale) |

- **Classification UNIPEDE :** petite (2-10 MW), mini (500 kW-2 MW), micro (20-500 kW), pico (< 20 kW)
- Barrages : poids (béton), voûte (vallées étroites), contreforts
- Alternateur : rotor (électro-aimants) + stator (bobinages cuivre)
- Afrique : **474 GW** non exploités (plus grand potentiel mondial)
- 1000 MWh → 256 foyers × 1 an, 220 tep économisées, 500 t CO₂ évitées

### 7.5 Biomasse

**3 filières de valorisation :**

| Filière | Procédé | Produits |
|---|---|---|
| **Voie sèche** | Combustion, gazéification, pyrolyse | Chaleur, électricité, cogénération |
| **Voie humide** | Méthanisation (digestion anaérobie) | Biogaz (>90% CH₄) |
| **Biocarburants** | Fermentation (betterave, blé), transestérification (colza) | Bioéthanol, biodiesel |

- Bois-énergie : 2× moins cher que le gaz, 3× moins cher que le fioul
- ~80% de l'énergie finale dans de nombreux PED
- PCI bois ≈ 4000 kcal/kg ; charbon bois ≈ 8000 kcal/kg

### 7.6 Géothermie

- Gradient moyen : **3°C/100 m** (peut atteindre 100°C/100 m)
- Flux : 0,05 W/m² (400× inférieur au solaire)
- Basse énergie : 80°C à 2000 m → chauffage
- Haute énergie : 300°C à 1000 m → électricité
- Rift Valley : **9 000 MW** potentiel

### 7.7 Énergies Marines
- Marémotrice, hydrolienne, houlomotrice, ETM (Énergie Thermique des Mers), osmotique

---

## ⚖️ 8. ASPECTS JURIDIQUES ET FISCAUX (M16)

### Instruments internationaux
- **CNUCC** (1992/1994) : stabiliser les concentrations de GES
- **Protocole de Kyoto** (1997/2005)
- **Accord de Paris** (2015) : limiter réchauffement < 2°C / 1,5°C
- **ODD** (25 sept. 2015) : 17 objectifs, dont **ODD7** — « Accès de tous à une énergie fiable, durable et moderne à un coût abordable »

### ODD7 — Cibles 2030
1. Accès universel à des services énergétiques modernes
2. Accroître nettement la part des EnR
3. Doubler le taux d'amélioration de l'efficacité énergétique
4. Coopération internationale pour R&D énergies propres
5. Développer les infrastructures énergétiques dans les PED

### Instruments juridiques et fiscaux nationaux
- Lois sur les EnR, codes de l'énergie
- Incitations fiscales : exonérations TVA/droits de douane sur équipements EnR
- Tarifs d'achat garantis (feed-in tariffs)
- Appels d'offres, concessions
- Normes et labels obligatoires (Directives UEMOA)

### Obstacles au développement des EnR
- Coûts d'investissement élevés
- Absence de réglementation adaptée
- Subventions aux énergies fossiles
- Manque de formation/capacités techniques
- Accès au financement limité

---

## 🧮 9. EXERCICES TYPES

### Exercice 1 — Bilan énergétique
Remplir un tableau de comptabilité énergétique à partir de données de production, import/export, transformation.  
→ Appliquer les coefficients de conversion (électricité : 1 GWh = 86 TEP ; bois : 1 t = 0,4 TEP ; etc.)  
→ Calculer ATEP, CFT, taux d'indépendance, intensité énergétique, consommation/habitant.

### Exercice 2 — Indicateurs
À partir de données nationales, calculer :
- ATEP/habitant (tep/hab)
- Intensité énergétique ATEP/PIB (tep/1000 $US)
- Consommation électrique/habitant
- Part de la consommation industrielle
- Taux d'indépendance énergétique

### Exercice 3 — Projection de la demande
> P₁₀ = P₀ × (1+α)^10 × (1+β)^10

Exemple : population 32 M, 4 pers/ménage, 150 W/ménage  
→ P₀ = 1200 MW ; avec α = 5%, P₁₀ = 1955 MW ; avec α = 5% + β = 8%, P₁₀ = 4220 MW

### Exercice 4 — Comptabilité carbone
Un camion consomme 20 L essence/100 km, émet 3,5 kg CO₂/L essence.  
→ Émissions CO₂ pour 100 km = 20 × 3,5 = **70 kg CO₂**

---

## 🧠 10. POINTS À RETENIR ABSOLUMENT

1. **1 GWh = 86 TEP** — la conversion la plus utilisée en comptabilité énergétique
2. **1 TEP = 42 GJ** — unité de référence internationale
3. **ATEP = P + Im – Ex ± VS** (et non CFT !)
4. **Pertes de transformation = Input (–) ; Output (+)** — attention aux signes !
5. **TE = TD × TCG** — les 3 taux d'électrification
6. **Limite de Betz = 16/27 ≈ 59%** — maximum théorique éolien
7. **Turbines hydro :** Pelton (haute chute), Francis (moyenne), Kaplan (basse)
8. **PRG CH₄ = 25**, N₂O = **298**, CO₂ = **1** (référence)
9. **3 piliers ODD :** fin pauvreté, lutte injustices, résoudre dérèglement climatique
10. **Le bilan énergétique** est le préalable indispensable à toute planification énergétique

---

*Fiche conçue pour révision de dernière minute — Master GIS Énergies Renouvelables*
