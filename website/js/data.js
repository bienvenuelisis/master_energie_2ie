// ============================================
// UE06 – Data: QCM, Flashcards, Formules, etc.
// ============================================

// --- QCM Questions (100 questions, 5 blocs) ---
const QCM_BLOCS = [
  { id: 'bloc1', name: 'Unités & Concepts', icon: '📐' },
  { id: 'bloc2', name: 'Comptabilité Énerg.', icon: '📊' },
  { id: 'bloc3', name: 'Planification', icon: '🔧' },
  { id: 'bloc4', name: 'Technologies EnR', icon: '☀️' },
  { id: 'bloc5', name: 'Juridique & Exos', icon: '⚖️' }
];

const QCM_QUESTIONS = [
  // BLOC 1: Unités, Conversions, Concepts de base (Q1-Q20)
  { bloc: 'bloc1', q: 'Combien de joules équivalent à 1 calorie ?', opts: ['1 J', '3,6 J', '4,18 J', '10 J'], ans: 2, expl: '1 cal = 4,18 J. C\'est une constante physique fondamentale.' },
  { bloc: 'bloc1', q: '1 TEP (Tonne Équivalent Pétrole) correspond à :', opts: ['10 GJ', '42 GJ', '86 GJ', '100 GJ'], ans: 1, expl: '1 TEP = 42 GJ (ou 10¹⁰ calories, ou environ 7 barils).' },
  { bloc: 'bloc1', q: 'Combien de TEP représente 1 GWh d\'électricité ?', opts: ['0,86 TEP', '8,6 TEP', '86 TEP', '860 TEP'], ans: 2, expl: '1 GWh = 86 TEP selon la convention de l\'AIE. 1 MWh = 0,086 TEP.' },
  { bloc: 'bloc1', q: '1 baril de pétrole équivaut à environ :', opts: ['100 L', '159 L', '200 L', '259 L'], ans: 1, expl: '1 baril = 158,987 litres.' },
  { bloc: 'bloc1', q: 'Le PCI du bois de feu est d\'environ :', opts: ['0,2 tep/t', '0,4 tep/t', '0,7 tep/t', '1,0 tep/t'], ans: 1, expl: 'PCI bois de feu = 0,4 tep/tonne (soit environ 4000 kcal/kg).' },
  { bloc: 'bloc1', q: 'L\'énergie « primaire » est définie comme :', opts: ['L\'énergie après transformation', 'L\'énergie livrée au consommateur', 'L\'énergie n\'ayant subi aucune transformation', 'L\'énergie effectivement utilisée'], ans: 2, expl: 'L\'énergie primaire n\'a subi aucune transformation : pétrole brut, rayonnement solaire, vent, etc.' },
  { bloc: 'bloc1', q: 'L\'électricité basse tension livrée au client final est de l\'énergie :', opts: ['Primaire', 'Secondaire', 'Finale', 'Utile'], ans: 2, expl: 'L\'électricité BT livrée au consommateur = énergie finale. L\'électricité HT = énergie secondaire.' },
  { bloc: 'bloc1', q: 'La chaleur produite par un radiateur pour chauffer une pièce est de l\'énergie :', opts: ['Primaire', 'Secondaire', 'Finale', 'Utile'], ans: 3, expl: 'La chaleur effectivement utilisée = énergie utile (service énergétique rendu).' },
  { bloc: 'bloc1', q: 'Quelle source d\'énergie n\'est PAS renouvelable ?', opts: ['Géothermie', 'Biomasse', 'Gaz naturel', 'Énergie marémotrice'], ans: 2, expl: 'Le gaz naturel est une énergie fossile (énergie de stock), non renouvelable.' },
  { bloc: 'bloc1', q: 'La différence entre PCS et PCI est la plus élevée pour :', opts: ['Solides (2-5%)', 'Gaz naturel (10%)', 'Produits pétroliers (7-8%)', 'Charbon de bois'], ans: 1, expl: 'Gaz naturel : différence PCS/PCI ≈ 10% à cause de l\'eau de combustion.' },
  { bloc: 'bloc1', q: 'La constante solaire hors atmosphère est de :', opts: ['100 W/m²', '500 W/m²', '1400 W/m²', '2000 W/m²'], ans: 2, expl: 'Constante solaire = 1400 W/m² hors atmosphère. ~200 W/m² en moyenne au sol.' },
  { bloc: 'bloc1', q: 'En Afrique subsaharienne, l\'ensoleillement typique est de :', opts: ['1-2 kWh/m²/jour', '4-6 kWh/m²/jour', '8-10 kWh/m²/jour', '12-15 kWh/m²/jour'], ans: 1, expl: 'Zone tropicale Afrique : 4-6 kWh/m²/jour en moyenne. 800-2500 kWh/m²/an.' },
  { bloc: 'bloc1', q: 'Le gradient géothermique terrestre moyen est de :', opts: ['1°C/100 m', '3°C/100 m', '10°C/100 m', '30°C/100 m'], ans: 1, expl: 'Gradient géothermique moyen terrestre = 3°C/100 m (peut atteindre 100°C/100 m).' },
  { bloc: 'bloc1', q: 'La consommation moyenne mondiale d\'énergie par habitant est d\'environ :', opts: ['0,5 tep/hab/an', '1,6 tep/hab/an', '4 tep/hab/an', '8 tep/hab/an'], ans: 1, expl: 'Monde : ~12 GTEP/an pour ~7,5 Mds d\'habitants → environ 1,6 tep/hab/an.' },
  { bloc: 'bloc1', q: 'En Afrique, la consommation moyenne par habitant est d\'environ :', opts: ['0,2 tep/hab/an', '1 tep/hab/an', '2 tep/hab/an', '4 tep/hab/an'], ans: 0, expl: 'Afrique : environ 0,2 tep/hab/an. Très faible comparé à la moyenne mondiale.' },
  { bloc: 'bloc1', q: 'La part de la biomasse dans l\'énergie finale de nombreux PED est d\'environ :', opts: ['20%', '40%', '60%', '80%'], ans: 3, expl: 'Biomasse ≈ 80% de l\'énergie finale dans beaucoup de PED africains.' },
  { bloc: 'bloc1', q: 'Quel est le PCI du charbon de bois ?', opts: ['4000 kcal/kg', '6000 kcal/kg', '8000 kcal/kg', '11000 kcal/kg'], ans: 2, expl: 'PCI charbon de bois ≈ 8000 kcal/kg (vs 4000 pour bois brut, 11000 pour essence).' },
  { bloc: 'bloc1', q: 'Combien de TEP vaut 1000 m³ de gaz naturel ?', opts: ['0,086 TEP', '0,8 TEP', '8 TEP', '86 TEP'], ans: 1, expl: '1000 m³ de gaz naturel = 0,8 TEP selon la convention AIE.' },
  { bloc: 'bloc1', q: 'Quelle est l\'unité de puissance dans le SI ?', opts: ['Joule', 'Watt', 'Calorie', 'TEP'], ans: 1, expl: 'Le Watt (W) est l\'unité SI de puissance. Le Joule = unité d\'énergie.' },
  { bloc: 'bloc1', q: '1 MWh équivaut à :', opts: ['3,6 GJ', '36 GJ', '42 GJ', '86 GJ'], ans: 0, expl: '1 MWh = 3,6 GJ = 0,086 TEP.' },

  // BLOC 2: Comptabilité Énergétique (Q21-Q40)
  { bloc: 'bloc2', q: 'L\'équation du bilan énergétique : ATEP =', opts: ['CFT + Pertes', 'P + Im – Ex ± VS', 'P + Im + Ex', 'CFT – Pertes'], ans: 1, expl: 'ATEP = Production + Importations – Exportations – Soutages ± Variation de stocks.' },
  { bloc: 'bloc2', q: 'Dans le tableau de comptabilité, les inputs de transformation sont notés avec un signe :', opts: ['Positif (+)', 'Négatif (–)', 'Nul (0)', 'Variable'], ans: 1, expl: 'Inputs de transformation = signe négatif (–). Ce sont des consommations du secteur énergétique.' },
  { bloc: 'bloc2', q: 'Dans le tableau, les outputs de transformation sont notés avec un signe :', opts: ['Positif (+)', 'Négatif (–)', 'Nul (0)', 'Variable'], ans: 0, expl: 'Outputs de transformation = signe positif (+). Ce qui est produit.' },
  { bloc: 'bloc2', q: 'Le taux d\'indépendance énergétique se calcule comme :', opts: ['Importations / ATEP', 'Production nationale / ATEP', 'Exportations / ATEP', 'CFT / ATEP'], ans: 1, expl: 'Indépendance énergétique = Production nationale / ATEP × 100 (%).' },
  { bloc: 'bloc2', q: 'L\'intensité énergétique se mesure en :', opts: ['tep/habitant', 'kWh/habitant', 'tep/1000 $US de PIB', '%'], ans: 2, expl: 'Intensité énergétique = ATEP (ou CFT) / PIB, en tep/1000 $US.' },
  { bloc: 'bloc2', q: 'Si l\'élasticité-prix e = –0,24, la demande est :', opts: ['Très élastique', 'Peu élastique (inélastique)', 'Parfaitement élastique', 'Parfaitement inélastique'], ans: 1, expl: '|e| = 0,24 < 1 → demande inélastique (peu sensible au prix).' },
  { bloc: 'bloc2', q: 'L\'écart statistique représente :', opts: ['L\'erreur de mesure', 'Demande – Offre (CFT+TSEP vs AI+Transferts)', 'Les exportations non déclarées', 'La production non comptabilisée'], ans: 1, expl: 'Écart statistique = (CFT + TSEP) – (AI + Transferts) = Demande – Offre.' },
  { bloc: 'bloc2', q: 'Les soutages maritimes et aériens internationaux sont :', opts: ['Ajoutés aux importations', 'Retranchés de l\'ATEP', 'Ajoutés à la production', 'Ignorés'], ans: 1, expl: 'Les soutages internationaux sont retranchés (comme des exportations).' },
  { bloc: 'bloc2', q: 'Lequel fait partie du bloc « Transformations » ?', opts: ['Secteur résidentiel', 'Centrales électriques publiques', 'Transport routier', 'Industries alimentaires'], ans: 1, expl: 'Les centrales électriques font partie du bloc Transformation.' },
  { bloc: 'bloc2', q: 'Le Taux d\'électrification (TE) est égal à :', opts: ['TD + TCG', 'TD × TCG', 'TD / TCG', 'TCG / TD'], ans: 1, expl: 'TE = TD × TCG. Le taux d\'électrification est le produit des deux autres taux.' },
  { bloc: 'bloc2', q: 'Le Taux de desserte (TD) est :', opts: ['Ménages électrifiés / Total ménages', 'Ménages raccordés / Ménages en zone électrifiée', 'Ménages en zone électrifiée / Total ménages', 'Total ménages / Ménages raccordés'], ans: 1, expl: 'TD = ménages raccordés / ménages dans la zone électrifiée.' },
  { bloc: 'bloc2', q: 'Le Taux de couverture géographique (TCG) est :', opts: ['Ménages électrifiés / Total', 'Ménages raccordés / Ménages en zone', 'Ménages en zone électrifiée / Total', 'Total / Ménages en zone'], ans: 2, expl: 'TCG = ménages en zone électrifiée / total ménages.' },
  { bloc: 'bloc2', q: 'Une raffinerie apparaît dans le bilan au niveau du bloc :', opts: ['Approvisionnements (ATEP)', 'Transformations', 'Consommation finale', 'Pertes de distribution'], ans: 1, expl: 'Une raffinerie = transformation (pétrole brut → produits raffinés).' },
  { bloc: 'bloc2', q: 'Le coefficient d\'équivalence gazole est :', opts: ['1,000 tep/t', '1,035 tep/t', '1,070 tep/t', '0,960 tep/t'], ans: 1, expl: 'Gazole/Diesel = 1,035 tep/t selon l\'AIE.' },
  { bloc: 'bloc2', q: 'Une centrale consomme du gaz. Dans le bilan, ce gaz est en :', opts: ['Positif dans ATEP', 'Négatif dans Transformations (input)', 'Positif dans Consommation finale', 'Négatif dans ATEP'], ans: 1, expl: 'Gaz consommé par la centrale = input de transformation (–).' },
  { bloc: 'bloc2', q: 'La même centrale produit de l\'électricité. Cette production est en :', opts: ['Négatif dans Transformations', 'Positif dans Transformations (output)', 'Positif dans ATEP', 'Négatif dans CF'], ans: 1, expl: 'Électricité produite = output de transformation (+).' },
  { bloc: 'bloc2', q: 'Une augmentation des stocks de pétrole se traduit par une VS :', opts: ['Positive (+)', 'Négative (–)', 'Nulle', 'Dépend du pays'], ans: 1, expl: 'Augmentation des stocks = on stocke au lieu de consommer → retranché (–).' },
  { bloc: 'bloc2', q: 'Le bois pour produire du charbon apparaît dans :', opts: ['ATEP', 'Transformation (charbon de bois)', 'CF – Résidentiel', 'Pertes distribution'], ans: 1, expl: 'Production de charbon de bois = transformation (bois → charbon de bois).' },
  { bloc: 'bloc2', q: 'Un SIE (Système d\'Information Énergétique) sert à :', opts: ['Produire de l\'électricité', 'Collecter, traiter et valoriser les données', 'Distribuer le pétrole', 'Auditer les bâtiments'], ans: 1, expl: 'SIE = collecte, traitement et valorisation des informations énergétiques.' },
  { bloc: 'bloc2', q: 'Les données du bilan énergétique sont collectées :', opts: ['Mensuellement', 'Trimestriellement', 'Annuellement', 'Tous les 5 ans'], ans: 2, expl: 'Collecte annuelle via points focaux, validation en atelier national.' },

  // BLOC 3: Planification Énergétique (Q41-Q60)
  { bloc: 'bloc3', q: 'LEAP a été développé par :', opts: ['L\'AIE', 'Le SEI (Stockholm Environment Institute)', 'La Banque Mondiale', 'L\'ONU'], ans: 1, expl: 'LEAP = Stockholm Environment Institute. Gratuit pour les PED.' },
  { bloc: 'bloc3', q: 'LEAP est adapté aux PED car il prend en compte :', opts: ['Le nucléaire uniquement', 'Le bois de feu et la faible électrification rurale', 'Les fossiles uniquement', 'Le CO₂ uniquement'], ans: 1, expl: 'LEAP intègre le bois de feu, la faible électrification rurale, les scénarios multiples.' },
  { bloc: 'bloc3', q: 'MAED est utilisé pour :', opts: ['La production d\'électricité', 'L\'analyse de la demande en énergie', 'L\'optimisation des réseaux', 'La gestion de l\'eau'], ans: 1, expl: 'MAED = Model for Analysis of Energy Demand : analyse de la demande finale/utile.' },
  { bloc: 'bloc3', q: 'WEAP intègre :', opts: ['Les ressources en eau', 'Le réseau de gaz', 'Le transport ferroviaire', 'Le nucléaire'], ans: 0, expl: 'WEAP = Water Evaluation And Planning. Couplage possible WEAP/LEAP.' },
  { bloc: 'bloc3', q: 'La contribution FDE au Burkina est de :', opts: ['1 FCFA/kWh', '2 FCFA/kWh', '5 FCFA/kWh', '10 FCFA/kWh'], ans: 1, expl: 'FDE (Frais de Développement de l\'Électricité) = 2 FCFA/kWh au Burkina.' },
  { bloc: 'bloc3', q: 'La formule de projection de la demande est :', opts: ['Pₙ = P₀ × (1+α+β)ⁿ', 'Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ', 'Pₙ = P₀ × n × (α+β)', 'Pₙ = P₀ × α × β × n'], ans: 1, expl: 'Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ : produit des croissances démographique et économique.' },
  { bloc: 'bloc3', q: 'La Directive UEMOA 04/2020 concerne :', opts: ['L\'interdiction des lampes incandescentes', 'L\'étiquetage des lampes, frigos et clims', 'La construction des centrales', 'Les audits énergétiques'], ans: 1, expl: 'Directive 04/2020 = étiquetage obligatoire lampes, réfrigérateurs, climatiseurs.' },
  { bloc: 'bloc3', q: 'Un diagramme de Sankey représente :', opts: ['L\'évolution des prix', 'Les flux énergétiques de la source à la consommation', 'La courbe de charge', 'La production solaire'], ans: 1, expl: 'Le Sankey visualise les flux d\'énergie de l\'amont (primaire) vers l\'aval (finale).' },
  { bloc: 'bloc3', q: 'La méthode MEPRED utilise :', opts: ['Des modèles mathématiques complexes', 'Des livres blancs régionaux', 'Des données satellitaires', 'Des enquêtes ménages'], ans: 1, expl: 'MEPRED = approche régionale : livres blancs régionaux → livre blanc national.' },
  { bloc: 'bloc3', q: 'Les Pôles de Développement (PdD) sont :', opts: ['Les capitales régionales', 'Les zones à fort potentiel priorisées pour l\'électrification', 'Les zones industrielles', 'Les centres pétroliers'], ans: 1, expl: 'PdD = zones à fort potentiel socio-économique priorisées pour l\'électrification.' },
  { bloc: 'bloc3', q: 'EnergyPLAN permet une analyse :', opts: ['Annuelle uniquement', 'Heure par heure sur un an', 'Mensuelle', 'Journalière sur une semaine'], ans: 1, expl: 'EnergyPLAN (Université d\'Aalborg) = simulation heure par heure sur une année.' },
  { bloc: 'bloc3', q: 'L\'interdiction des lampes à incandescence est un instrument de :', opts: ['Normes produits', 'Régulation du marché', 'Codes thermiques', 'Audit énergétique'], ans: 1, expl: 'Interdire des produits = régulation du marché.' },
  { bloc: 'bloc3', q: 'Le Décret 2017-1015 du Burkina concerne :', opts: ['Le nucléaire', 'Les audits énergétiques obligatoires', 'L\'importation de pétrole', 'L\'environnement'], ans: 1, expl: 'Décret 2017-1015 = audits énergétiques obligatoires au Burkina Faso.' },
  { bloc: 'bloc3', q: 'L\'IPD (Indicateur du Potentiel de Développement) évalue :', opts: ['La production électrique', 'Santé, éducation, économie locale', 'Le PIB/habitant', 'Les ressources minières'], ans: 1, expl: 'IPD = comme l\'IDH : santé, éducation et économie locale.' },
  { bloc: 'bloc3', q: 'La méthode de planification simple pour PED a combien d\'étapes ?', opts: ['2', '4', '6', '8'], ans: 1, expl: '4 étapes : 1) Identifier problèmes 2) Options/scénarios 3) Évaluer 4) Sélectionner.' },
  { bloc: 'bloc3', q: 'Un CPE (Contrat de Performance Énergétique) :', opts: ['Contrat d\'achat d\'électricité', 'Contrat avec garantie d\'économies d\'énergie', 'Contrat de construction', 'Contrat d\'importation'], ans: 1, expl: 'CPE = le prestataire garantit des économies d\'énergie.' },
  { bloc: 'bloc3', q: 'Une ESE (Entreprise de Services Énergétiques) :', opts: ['Produit du solaire', 'Fournit des services d\'efficacité énergétique avec garantie', 'Distribue du pétrole', 'Exploite des mines'], ans: 1, expl: 'ESE = services d\'efficacité énergétique avec garantie de performance.' },
  { bloc: 'bloc3', q: 'Le net metering (comptage net) permet :', opts: ['De mesurer l\'eau', 'De revendre le surplus solaire au réseau', 'De facturer le gaz', 'De mesurer le CO₂'], ans: 1, expl: 'Net metering = revente du surplus de production solaire au réseau.' },
  { bloc: 'bloc3', q: 'Les indicateurs TIPEE couvrent combien de dimensions ?', opts: ['2', '3', '5', '7'], ans: 2, expl: 'TIPEE (HELIO International) = 5 dimensions : éco, sociale, techno, civique, environnementale.' },
  { bloc: 'bloc3', q: 'La SER (Situation Énergétique de Référence) :', opts: ['Décrit l\'état actuel avant intervention', 'Décrit le futur souhaité', 'Décrit le pire scénario', 'Décrit la production'], ans: 0, expl: 'SER = baseline, état du système énergétique avant toute intervention.' },

  // BLOC 4: Technologies EnR (Q61-Q80)
  { bloc: 'bloc4', q: 'La limite de Betz pour une éolienne est de :', opts: ['30%', '16/27 (≈59%)', '75%', '90%'], ans: 1, expl: 'Limite de Betz = 16/27 ≈ 59,3%. C\'est le maximum d\'énergie cinétique extractible.' },
  { bloc: 'bloc4', q: 'La puissance d\'une éolienne est proportionnelle à V à la puissance :', opts: ['1', '2', '3', '4'], ans: 2, expl: 'P ∝ V³. Si le vent double, la puissance est ×8.' },
  { bloc: 'bloc4', q: 'Distance minimale entre deux éoliennes :', opts: ['1-2 × diamètre', '5-10 × diamètre', '20-30 × diamètre', '50-100 × diamètre'], ans: 1, expl: '5-10 × diamètre rotor pour éviter l\'effet de sillage.' },
  { bloc: 'bloc4', q: 'Le coefficient α du profil de vent en mer est :', opts: ['0,13', '0,20', '0,24', '0,30'], ans: 0, expl: 'α mer = 0,13 ; plaine = 0,20 ; ville = 0,30.' },
  { bloc: 'bloc4', q: 'La distribution statistique du vent est :', opts: ['Normale (Gauss)', 'Poisson', 'Weibull', 'Binomiale'], ans: 2, expl: 'Distribution de Weibull : f(v) = (k/A)(v/A)^(k-1)exp[-(v/A)^k].' },
  { bloc: 'bloc4', q: 'Une turbine Pelton est pour :', opts: ['Basses chutes', 'Moyennes chutes', 'Hautes chutes (>300 m)', 'Toutes hauteurs'], ans: 2, expl: 'Pelton = turbine à action pour hautes chutes (> 300 m).' },
  { bloc: 'bloc4', q: 'Une turbine Francis est à :', opts: ['Action', 'Réaction', 'Impulsion', 'Traînée'], ans: 1, expl: 'Francis = turbine à réaction (radiale).' },
  { bloc: 'bloc4', q: 'Une turbine Kaplan est pour :', opts: ['Hautes chutes', 'Basses chutes', 'Chutes moyennes', 'Très hautes chutes'], ans: 1, expl: 'Kaplan = axiale, pales orientables, pour basses chutes (< 30 m).' },
  { bloc: 'bloc4', q: '500 kW à 2 MW = (UNIPEDE) :', opts: ['Pico-centrale', 'Micro-centrale', 'Mini-centrale', 'Petite centrale'], ans: 2, expl: 'Mini-centrale = 500 kW à 2 MW. Petite = 2-10 MW. Micro = 20-500 kW.' },
  { bloc: 'bloc4', q: 'Le barrage en béton pour vallées étroites est le :', opts: ['Barrage-poids', 'Barrage-voûte', 'Barrage à contreforts', 'Digue'], ans: 1, expl: 'Barrage-voûte = béton, forme arquée, vallées étroites.' },
  { bloc: 'bloc4', q: 'Rendement cellule PV monocristalline typique :', opts: ['5-8%', '12-16%', '20-25%', '30-35%'], ans: 1, expl: 'Monocristallin = 12-16%. Polycristallin = 11-14%. Amorphe = 5-8%.' },
  { bloc: 'bloc4', q: 'Dopage type p du silicium utilise :', opts: ['Phosphore', 'Bore', 'Arsenic', 'Antimoine'], ans: 1, expl: 'Dopage p = bore (déficit d\'électrons). Dopage n = phosphore (excès).' },
  { bloc: 'bloc4', q: 'Cellule PV la moins chère mais moins efficace :', opts: ['Monocristallin', 'Polycristallin', 'Silicium amorphe', 'GaAs'], ans: 2, expl: 'Amorphe : 5-8% rendement, ~0,5 €/Wc, flexible, low cost.' },
  { bloc: 'bloc4', q: 'Système PV « au fil du soleil » :', opts: ['Avec batteries', 'Sans stockage, utilisation directe', 'Connecté réseau', 'Revente totale'], ans: 1, expl: '« Au fil du soleil » = pas de batterie, usage direct (pompage solaire).' },
  { bloc: 'bloc4', q: 'Fluide caloporteur dominant en CSP :', opts: ['Eau', 'Huiles minérales', 'Sels fondus', 'Air comprimé'], ans: 2, expl: 'Sels fondus = 75% des projets CSP (jusqu\'à 650°C, permettent le stockage).' },
  { bloc: 'bloc4', q: 'La méthanisation produit principalement :', opts: ['H₂', 'CH₄ (méthane)', 'CO₂ pur', 'Éthanol'], ans: 1, expl: 'Méthanisation = digestion anaérobie → biogaz (> 90% CH₄).' },
  { bloc: 'bloc4', q: 'Temps de retour énergétique d\'une éolienne (20 ans) :', opts: ['1 mois', '< 6 mois', '2 ans', '5 ans'], ans: 1, expl: 'Temps de retour énergétique < 6 mois pour 20 ans de durée de vie.' },
  { bloc: 'bloc4', q: 'Potentiel géothermique du Rift Valley :', opts: ['900 MW', '9 000 MW', '90 000 MW', '900 000 MW'], ans: 1, expl: 'Great Rift Valley = 9 000 MW de potentiel géothermique.' },
  { bloc: 'bloc4', q: 'Durée de vie typique panneau PV :', opts: ['5-10 ans', '10-15 ans', '20-30 ans', '40-50 ans'], ans: 2, expl: 'Durée de vie panneau PV = 20-30 ans. Temps retour énergétique = 1,5-5 ans.' },
  { bloc: 'bloc4', q: 'L\'hydroélectricité représente quel % de l\'électricité mondiale ?', opts: ['5%', '10%', '16%', '25%'], ans: 2, expl: 'Hydro = 16% de l\'électricité mondiale (3ᵉ source après charbon 39% et gaz 23%).' },

  // BLOC 5: Juridique, Fiscal, Exercices (Q81-Q100)
  { bloc: 'bloc5', q: 'Les ODD ont été adoptés le :', opts: ['1er janvier 2000', '25 septembre 2015', '12 décembre 2010', '5 juin 2005'], ans: 1, expl: 'ODD adoptés le 25 septembre 2015 par l\'AG de l\'ONU.' },
  { bloc: 'bloc5', q: 'L\'ODD7 concerne :', opts: ['L\'éducation', 'La santé', 'L\'énergie propre et abordable', 'L\'eau potable'], ans: 2, expl: 'ODD7 = « Énergie propre et d\'un coût abordable ». Accès universel d\'ici 2030.' },
  { bloc: 'bloc5', q: 'Le GIEC a pour mission :', opts: ['Financer des projets', 'Fournir des avis scientifiques sur le climat', 'Réglementer les GES', 'Construire des centrales'], ans: 1, expl: 'GIEC = expertise scientifique, technique et socio-économique. Ne finance ni ne réglemente.' },
  { bloc: 'bloc5', q: 'La CNUCC date de :', opts: ['1987', '1992', '2005', '2015'], ans: 1, expl: 'CNUCC adoptée en 1992 (Sommet de Rio), entrée en vigueur en 1994.' },
  { bloc: 'bloc5', q: 'L\'Accord de Paris vise à limiter le réchauffement à :', opts: ['1°C', '< 2°C, idéalement 1,5°C', '3°C', '4°C'], ans: 1, expl: 'Accord de Paris (2015) : bien en dessous de 2°C, poursuivre les efforts vers 1,5°C.' },
  { bloc: 'bloc5', q: 'Le PRG du méthane (CH₄) à 100 ans est de :', opts: ['1', '21', '25', '298'], ans: 2, expl: 'PRG CH₄ = 25 (GIEC 2007, horizon 100 ans). L\'ancienne valeur était 21.' },
  { bloc: 'bloc5', q: 'Le PRG du protoxyde d\'azote (N₂O) à 100 ans est de :', opts: ['1', '25', '298', '22 800'], ans: 2, expl: 'PRG N₂O = 298. Durée de vie ≈ 114 ans.' },
  { bloc: 'bloc5', q: 'Émissions liées à l\'électricité achetée = quel Scope ?', opts: ['Scope 1', 'Scope 2', 'Scope 3', 'Scope 0'], ans: 1, expl: 'Électricité achetée = Scope 2 (émissions indirectes liées à l\'énergie).' },
  { bloc: 'bloc5', q: 'Déplacements des employés = quel Scope ?', opts: ['Scope 1', 'Scope 2', 'Scope 3', 'Hors scope'], ans: 2, expl: 'Déplacements employés = Scope 3 (autres émissions indirectes).' },
  { bloc: 'bloc5', q: '1 kg CO₂ = combien de kg équivalent carbone ?', opts: ['1 kg', '0,2727 kg', '3,67 kg', '0,5 kg'], ans: 1, expl: '1 kg CO₂ = 0,2727 kg éq. carbone (ratio masse C/CO₂ = 12/44).' },
  { bloc: 'bloc5', q: '[Exo] Camion : 20L/100km, 3,5 kg CO₂/L. Émissions pour 100 km ?', opts: ['20 kg', '35 kg', '70 kg', '100 kg'], ans: 2, expl: '20 L × 3,5 kg CO₂/L = 70 kg CO₂.' },
  { bloc: 'bloc5', q: '[Exo] Pop 20M, PIB 15,7Mds€, ATEP 5636 ktep. Intensité énergétique ?', opts: ['0,28 tep/1000€', '0,36 tep/1000€', '0,56 tep/1000€', '0,72 tep/1000€'], ans: 1, expl: '5 636 000 tep / 15 700 000 k€ = 0,359 ≈ 0,36 tep/1000€.' },
  { bloc: 'bloc5', q: '[Exo] Mêmes données. Consommation/habitant ?', opts: ['0,28 tep/hab', '0,36 tep/hab', '0,56 tep/hab', '1,20 tep/hab'], ans: 0, expl: '5 636 ktep / 20 M hab = 0,282 ≈ 0,28 tep/hab.' },
  { bloc: 'bloc5', q: '[Exo] P=60, Im=40, Ex=10, VS=+5. ATEP = ?', opts: ['100 tep', '95 tep', '85 tep', '90 tep'], ans: 2, expl: 'ATEP = 60+40–10–5 = 85 tep. Le stockage (+5) réduit l\'ATEP.' },
  { bloc: 'bloc5', q: '[Exo] Même pays, taux d\'indépendance ?', opts: ['60%', '63%', '67%', '71%'], ans: 3, expl: 'Indépendance = 60/85 = 70,6% ≈ 71%.' },
  { bloc: 'bloc5', q: '[Exo] 32M hab, 4 pers/ménage, 150W/ménage. P₀ = ?', opts: ['800 MW', '1200 MW', '1600 MW', '2000 MW'], ans: 1, expl: 'Nb ménages = 32M/4 = 8M. P₀ = 8M × 150W = 1200 MW.' },
  { bloc: 'bloc5', q: '[Exo] P₀=1200MW, α=5%. P₁₀ = ?', opts: ['1200 MW', '1500 MW', '1955 MW', '2500 MW'], ans: 2, expl: 'P₁₀ = 1200 × (1,05)¹⁰ = 1200 × 1,629 = 1955 MW.' },
  { bloc: 'bloc5', q: 'Rendement centrale : gaz 100 unités, élec 40 unités ?', opts: ['25%', '40%', '60%', '100%'], ans: 1, expl: 'Rendement = Output/Input = 40/100 = 40%.' },
  { bloc: 'bloc5', q: 'Quel instrument fiscal favorise les EnR ?', opts: ['TVA majorée sur panneaux', 'Exonération droits de douane', 'Taxe carbone sur EnR', 'Subventions aux fossiles'], ans: 1, expl: 'L\'exonération des droits de douane sur équipements EnR est une incitation fiscale.' },
  { bloc: 'bloc5', q: 'L\'Afrique = quel % des émissions mondiales de CO₂ ?', opts: ['< 3%', '~10%', '~20%', '~30%'], ans: 0, expl: 'Afrique < 3% des émissions mondiales mais subit les impacts les plus sévères.' }
];

// --- Flashcards ---
const FLASHCARDS = [
  // Concepts clés
  { topic: 'Unités', q: '1 GWh = ? TEP', a: '1 GWh = <strong>86 TEP</strong><br><small>1 MWh = 0,086 TEP = 3,6 GJ</small>' },
  { topic: 'Unités', q: '1 TEP = ? GJ', a: '1 TEP = <strong>42 GJ</strong> = 10¹⁰ calories ≈ 7 barils de pétrole' },
  { topic: 'Chaîne énergétique', q: 'Quelles sont les 4 étapes de la chaîne énergétique ?', a: '<strong>Primaire</strong> (brute) → <strong>Secondaire</strong> (transformée) → <strong>Finale</strong> (livrée) → <strong>Utile</strong> (service)' },
  { topic: 'Comptabilité', q: 'Quelle est l\'équation du bilan énergétique ?', a: '<strong>P + Im – Ex ± VS = Pt + Cne + Cf</strong><br>Production + Importations – Exportations ± Variation Stocks = Pertes + Conso non-énergétique + Conso finale' },
  { topic: 'Comptabilité', q: 'ATEP = ?', a: '<strong>ATEP = P + Im – Ex – Soutages ± VS</strong><br>Approvisionnements Totaux en Énergie Primaire' },
  { topic: 'Comptabilité', q: 'Signe des inputs/outputs de transformation ?', a: '<strong>Inputs = (–)</strong> négatifs<br><strong>Outputs = (+)</strong> positifs' },
  { topic: 'Indicateurs', q: 'Taux d\'indépendance énergétique ?', a: '<strong>Production nationale / ATEP</strong> × 100 (%)' },
  { topic: 'Indicateurs', q: 'Intensité énergétique ?', a: '<strong>CFT (ou ATEP) / PIB</strong><br>en tep/1000 $US' },
  { topic: 'Indicateurs', q: 'Relation TE, TD, TCG ?', a: '<strong>TE = TD × TCG</strong><br>Électrification = Desserte × Couverture Géographique' },
  { topic: 'Indicateurs', q: 'Élasticité de la demande ?', a: '<strong>e = (ΔQ/Q) / (ΔP/P)</strong><br>|e| < 1 → inélastique<br>|e| > 1 → élastique' },
  { topic: 'Carbone', q: 'PRG du CH₄ ?', a: '<strong>PRG CH₄ = 25</strong> (horizon 100 ans)<br>Durée de vie ~12 ans' },
  { topic: 'Carbone', q: 'PRG du N₂O ?', a: '<strong>PRG N₂O = 298</strong> (horizon 100 ans)<br>Durée de vie ~114 ans' },
  { topic: 'Carbone', q: 'Les 3 Scopes d\'émission ?', a: '<strong>Scope 1</strong> : directes (combustion)<br><strong>Scope 2</strong> : indirectes (électricité)<br><strong>Scope 3</strong> : autres indirectes (logistique)' },
  { topic: 'Planification', q: 'Citer 3 outils de planification', a: '<strong>LEAP</strong> (SEI, gratuit PED)<br><strong>MAED</strong> (analyse demande)<br><strong>MESSAGE</strong> (optimisation offre)<br><strong>EnergyPLAN</strong> (horaire annuel)' },
  { topic: 'Planification', q: 'Formule de projection de la demande ?', a: '<strong>Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ</strong><br>α = croissance démographique<br>β = croissance revenu/habitant' },
  { topic: 'Planification', q: 'Citer 4 instruments de planification', a: '• Normes produits<br>• Régulation marché<br>• Audits obligatoires<br>• Contributions intérêt public (FDE)' },
  { topic: 'Éolien', q: 'Limite de Betz ?', a: '<strong>16/27 ≈ 59,3%</strong><br>Maximum théorique d\'énergie extractible du vent' },
  { topic: 'Éolien', q: 'Puissance éolienne ∝ V^?', a: '<strong>P ∝ V³</strong><br>Vent ×2 → Puissance ×8<br>P = Cp × ½ρ × S × V³' },
  { topic: 'Éolien', q: 'Distribution statistique du vent ?', a: '<strong>Distribution de Weibull</strong><br>f(v) = (k/A)(v/A)^(k-1)exp[-(v/A)^k]<br>k ~ 2 en Europe' },
  { topic: 'Hydro', q: 'Turbine pour haute chute (>300m) ?', a: '<strong>Pelton</strong> (turbine à action)<br>Haute chute : Pelton<br>Moyenne : Francis (réaction)<br>Basse : Kaplan (axiale)' },
  { topic: 'Hydro', q: 'Types de barrages ?', a: '<strong>Poids</strong> (béton, masse)<br><strong>Voûte</strong> (vallées étroites)<br><strong>Contreforts</strong> (triangulaire)' },
  { topic: 'Solaire PV', q: 'Rendements des cellules Si ?', a: '<strong>Monocristallin</strong> : 12-16%<br><strong>Polycristallin</strong> : 11-14%<br><strong>Amorphe</strong> : 5-8% (flexible, low cost)' },
  { topic: 'Solaire PV', q: 'Dopage p et n du silicium ?', a: '<strong>Type p</strong> = Bore (déficit e⁻)<br><strong>Type n</strong> = Phosphore (excès e⁻)' },
  { topic: 'Solaire CSP', q: 'Fluide caloporteur dominant CSP ?', a: '<strong>Sels fondus</strong> (75% des projets)<br>Jusqu\'à 650°C, permettent stockage thermique' },
  { topic: 'Biomasse', q: 'Les 3 filières de valorisation ?', a: '<strong>Voie sèche</strong> : combustion<br><strong>Voie humide</strong> : méthanisation → biogaz<br><strong>Biocarburants</strong> : bioéthanol, biodiesel' },
  { topic: 'Géothermie', q: 'Gradient géothermique moyen ?', a: '<strong>3°C / 100 m</strong><br>Basse énergie : 80°C à 2000 m<br>Haute énergie : 300°C à 1000 m' },
  { topic: 'Juridique', q: 'Qu\'est-ce que l\'ODD7 ?', a: '« Garantir l\'accès de tous à des services énergétiques <strong>fiables, durables et modernes</strong> à un coût abordable » — Objectif 2030' },
  { topic: 'Juridique', q: 'Accord de Paris — objectif ?', a: 'Limiter le réchauffement climatique <strong>bien en dessous de 2°C</strong>, idéalement <strong>1,5°C</strong> par rapport aux niveaux préindustriels' },
  { topic: 'Conversions', q: '1 baril = ? litres', a: '1 baril = <strong>158,987 litres</strong>' },
  { topic: 'Conversions', q: '1000 m³ gaz naturel = ? TEP', a: '1000 m³ gaz naturel = <strong>0,8 TEP</strong>' },
  { topic: 'Conversions', q: 'PCI bois vs charbon vs essence', a: 'Bois : <strong>4000 kcal/kg</strong><br>Charbon de bois : <strong>8000 kcal/kg</strong><br>Essence : <strong>11000 kcal/kg</strong>' },
  { topic: 'Conversions', q: '1 cal = ? Joules', a: '1 cal = <strong>4,18 Joules</strong>' },
  { topic: 'Monde', q: 'Conso mondiale vs Afrique ?', a: 'Monde : <strong>1,6 tep/hab/an</strong><br>Afrique : <strong>0,2 tep/hab/an</strong><br>Amérique Nord : 8 / Europe : 4' },
  { topic: 'Monde', q: 'Part hydro dans l\'électricité mondiale ?', a: '<strong>16%</strong> — 3ᵉ source après charbon (39%) et gaz (23%)' },
  { topic: 'Afrique', q: 'Potentiel hydro inexploité Afrique ?', a: '<strong>474 GW</strong> — le plus grand potentiel mondial non exploité' },
];

// --- Formulas ---
const FORMULES = [
  { name: 'Bilan énergétique', math: 'P + Im – Ex ± VS = Pt + Cne + Cf', desc: 'Équation fondamentale de la comptabilité énergétique.' },
  { name: 'ATEP', math: 'ATEP = Production + Importations – Exportations – Soutages ± ΔStocks', desc: 'Approvisionnements Totaux en Énergie Primaire.' },
  { name: 'Taux d\'indépendance', math: 'TI = (Production nationale / ATEP) × 100', desc: 'En %. Mesure la dépendance énergétique.' },
  { name: 'Intensité énergétique', math: 'IE = CFT / PIB  [tep / 1000 $US]', desc: 'Quantité d\'énergie par unité de richesse produite.' },
  { name: 'Consommation / habitant', math: 'C/hab = CFT / Population  [tep/hab]', desc: 'Indicateur de développement énergétique.' },
  { name: 'Taux d\'électrification', math: 'TE = TD × TCG', desc: 'TE : électrification ; TD : desserte ; TCG : couverture géographique.' },
  { name: 'Élasticité de la demande', math: 'e = (ΔQ / Q) / (ΔP / P)', desc: '|e| < 1 = inélastique ; |e| > 1 = élastique.' },
  { name: 'Projection de la demande', math: 'Pₙ = P₀ × (1 + α)ⁿ × (1 + β)ⁿ', desc: 'α : croissance démographique ; β : croissance revenu/habitant.' },
  { name: 'Puissance éolienne', math: 'P = Cp × ½ρ × S × V³', desc: 'Cp ≤ 16/27 (Limite de Betz ≈ 59%).' },
  { name: 'Profil vertical du vent', math: 'V / V₀ = (h / h₀)^α', desc: 'α ≈ 0,13 (mer) ; 0,20 (plaine) ; 0,30 (ville).' },
  { name: 'Distribution de Weibull', math: 'f(v) = (k/A) · (v/A)^(k-1) · exp[–(v/A)^k]', desc: 'k ~ 2 pour les sites terrestres européens.' },
  { name: 'Puissance hydroélectrique', math: 'P ∝ H × Q', desc: 'H : hauteur de chute ; Q : débit.' },
  { name: 'Rendement de transformation', math: 'η = Output / Input', desc: 'Ex : centrale gaz → électricité.' },
  { name: 'Émissions CO₂', math: 'CO₂ = Consommation × Facteur d\'émission', desc: 'Ex : 20 L essence × 3,5 kg CO₂/L = 70 kg CO₂.' },
  { name: 'PRG (CO₂ équivalent)', math: 'CO₂e = Σ (masseᵢ × PRGᵢ)', desc: 'PRG CO₂=1, CH₄=25, N₂O=298, SF₆=22800.' },
  { name: 'Conversion carbone', math: '1 kg CO₂ = 0,2727 kg éq. C', desc: 'Ratio masse atomique C/CO₂ = 12/44.' },
  { name: 'Écart statistique', math: 'Écart = (CFT + TSEP) – (AI + Transferts)', desc: 'Mesure Demande – Offre.' },
  { name: 'TEP → GJ', math: '1 TEP = 42 GJ = 10¹⁰ cal', desc: 'Unité de référence internationale.' },
  { name: 'GWh → TEP', math: '1 GWh = 86 TEP', desc: 'Conversion la plus utilisée en comptabilité énergétique.' },
  { name: 'MWh → GJ', math: '1 MWh = 3,6 GJ = 0,086 TEP', desc: 'Conversion d\'énergie électrique.' },
];

// --- Detailed conversion coefficients ---
const COEFFS = [
  { product: 'Électricité', unit: 'GWh', tep: '86' },
  { product: 'Pétrole brut', unit: 't', tep: '1' },
  { product: 'Charbon minéral', unit: 't', tep: '0,62' },
  { product: 'GPL', unit: 't', tep: '1,13' },
  { product: 'Essence', unit: 't', tep: '1,07' },
  { product: 'Jet fuel', unit: 't', tep: '1,065' },
  { product: 'Kérosène', unit: 't', tep: '1,045' },
  { product: 'Gazole / Diesel', unit: 't', tep: '1,035' },
  { product: 'Fuel lourd', unit: 't', tep: '0,96' },
  { product: 'Naphta', unit: 't', tep: '1,075' },
  { product: 'Gaz naturel', unit: '1000 m³', tep: '0,8' },
  { product: 'Bois de feu', unit: 't', tep: '0,4' },
  { product: 'Charbon de bois', unit: 't', tep: '0,7' },
  { product: 'Déchets végétaux', unit: 't', tep: '0,3' },
  { product: 'Alcool', unit: 'm³', tep: '0,51' },
  { product: 'Jus de canne', unit: 't', tep: '0,057' },
];

// --- Tech details ---
const TECHNOS = [
  {
    name: 'Solaire Photovoltaïque', icon: '☀️',
    principe: 'Photon → semi-conducteur (Si) → excitation électron → courant DC',
    types: [
      'Monocristallin : 12-16%, 2,5 €/Wc',
      'Polycristallin : 11-14%, 2 €/Wc',
      'Amorphe : 5-8%, 0,5 €/Wc (flexible)',
      'HIT : ~20%',
      'CdTe couches minces : 9-10%',
      'GaAs labo : 25-31%'
    ],
    lcoe: 'Isolé 0,9-2 $/kWh ; Raccordé ~0,068 $/kWh',
    vie: '20-30 ans ; TRE : 1,5-5 ans',
    marche: '6,6 GW Afrique (2019) ; LCOE -82% entre 2010-2019'
  },
  {
    name: 'Solaire Thermique (CSP)', icon: '🔆',
    principe: 'Concentration du rayonnement solaire → chaleur → turbine → électricité',
    types: [
      'Cylindro-parabolique : 400°C',
      'Fresnel : 500°C',
      'Tour solaire : 600-1000°C',
      'Dish Stirling : moteur Stirling'
    ],
    lcoe: 'Fluides : huiles ≤400°C, sels fondus ≤650°C (75% projets)',
    vie: 'Stockage thermique → dispatchabilité',
    marche: 'Europe dominante ; MENA en croissance ; concurrencé par PV'
  },
  {
    name: 'Énergie Éolienne', icon: '💨',
    principe: 'Énergie cinétique du vent → rotation pales → génératrice → électricité',
    types: [
      'Axe horizontal (Danish) : 3 pales, jusqu\'à 7 MW',
      'Axe vertical Darrieus : portance, pas auto-démarrage',
      'Axe vertical Savonius : traînée, faible puissance',
      'VERGNET : pales repliables, résiste cyclones 250 km/h'
    ],
    lcoe: 'Limite Betz : 16/27 ≈ 59% ; P ∝ V³ ; TRE < 6 mois',
    vie: '20-25 ans ; Marché : 370 GW cumulé (2014)',
    marche: '3,5% électricité mondiale ; offshore 7 MW, rotor 160m'
  },
  {
    name: 'Hydroélectricité', icon: '🌊',
    principe: 'Énergie potentielle de l\'eau → turbine → alternateur → électricité',
    types: [
      'Haute chute (>300m) : Pelton (action)',
      'Moyenne chute (30-300m) : Francis (réaction)',
      'Basse chute (<30m) : Kaplan (axiale)'
    ],
    lcoe: 'Classification : petite 2-10MW, mini 500kW-2MW, micro 20-500kW',
    vie: '16% électricité mondiale ; 3ᵉ source ; Afrique 474 GW inexploités',
    marche: '1000 MWh = 256 foyers/an, 220 tep, 500t CO₂ évitées'
  },
  {
    name: 'Biomasse', icon: '🌿',
    principe: 'Matière organique → combustion / méthanisation / biocarburants',
    types: [
      'Voie sèche : combustion, gazéification → chaleur, électricité',
      'Voie humide : méthanisation → biogaz (>90% CH₄)',
      'Biocarburants : bioéthanol (betterave), biodiesel (colza)'
    ],
    lcoe: 'Bois : 2× moins cher que gaz, 3× moins cher que fioul',
    vie: '~80% énergie finale dans nombreux PED',
    marche: 'PCI bois 4000 kcal/kg ; charbon 8000 ; essence 11000'
  },
  {
    name: 'Géothermie', icon: '🌋',
    principe: 'Chaleur terrestre → vapeur/eau chaude → turbine ou chauffage direct',
    types: [
      'Basse énergie : 80°C à 2000m → chauffage',
      'Haute énergie : 300°C à 1000m → électricité'
    ],
    lcoe: 'Gradient moyen : 3°C/100m ; Flux : 0,05 W/m²',
    vie: 'Rift Valley africain : 9 000 MW potentiel',
    marche: '< 10% du potentiel exploité'
  }
];
