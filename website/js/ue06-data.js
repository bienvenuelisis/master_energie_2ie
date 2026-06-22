// ============================================
// UE06 — Comptabilité & Planification Énergétique
// ============================================

// --- QCM (99 questions, 4 difficulty levels) ---
const UE06_QCM_BLOCS = [
  { id:'b1', name:'Unités & Concepts', icon:'📐' },
  { id:'b2', name:'Comptabilité Énerg.', icon:'📊' },
  { id:'b3', name:'Planification', icon:'🔧' },
  { id:'b4', name:'Technologies EnR', icon:'☀️' },
  { id:'b5', name:'Juridique & Exos', icon:'⚖️' }
];

const UE06_QCM = [
  // === BLOC 1: Unités & Concepts (20 questions) ===
  // -- Facile (7) --
  {bloc:'b1',diff:'facile',q:'Combien de joules = 1 calorie ?',opts:['1 J','3,6 J','4,18 J','10 J'],ans:2,expl:'1 cal = 4,18 J.'},
  {bloc:'b1',diff:'facile',q:'1 TEP = ?',opts:['10 GJ','42 GJ','86 GJ','100 GJ'],ans:1,expl:'1 TEP = 42 GJ ≈ 7 barils.'},
  {bloc:'b1',diff:'facile',q:'1 baril = ?',opts:['100 L','159 L','200 L','259 L'],ans:1,expl:'1 baril = 158,987 L.'},
  {bloc:'b1',diff:'facile',q:'PCI bois de feu ?',opts:['0,2 tep/t','0,4 tep/t','0,7 tep/t','1,0 tep/t'],ans:1,expl:'PCI bois = 0,4 tep/t (~4000 kcal/kg).'},
  {bloc:'b1',diff:'facile',q:'Énergie primaire =',opts:['Après transformation','Livrée au client','Aucune transformation','Service rendu'],ans:2,expl:'Primaire = brute (pétrole brut, vent, soleil).'},
  {bloc:'b1',diff:'facile',q:'NON renouvelable ?',opts:['Géothermie','Biomasse','Gaz naturel','Marémotrice'],ans:2,expl:'Gaz naturel = fossile.'},
  {bloc:'b1',diff:'facile',q:'Ensoleillement Afrique subsaharienne ?',opts:['1-2 kWh/m²/j','4-6 kWh/m²/j','8-10','12-15'],ans:1,expl:'4-6 kWh/m²/j en zone tropicale.'},
  // -- Moyen (7) --
  {bloc:'b1',diff:'moyen',q:'1 GWh = ? TEP',opts:['0,86','8,6','86','860'],ans:2,expl:'1 GWh = 86 TEP (AIE).'},
  {bloc:'b1',diff:'moyen',q:'Électricité BT livrée = énergie',opts:['Primaire','Secondaire','Finale','Utile'],ans:2,expl:'BT = finale. HT = secondaire.'},
  {bloc:'b1',diff:'moyen',q:'Chaleur radiateur = énergie',opts:['Primaire','Secondaire','Finale','Utile'],ans:3,expl:'Service rendu = utile.'},
  {bloc:'b1',diff:'moyen',q:'Différence PCS/PCI max ?',opts:['Solides 2-5%','Gaz naturel 10%','Pétrole 7-8%','Charbon bois'],ans:1,expl:'Gaz : ~10% (eau combustion).'},
  {bloc:'b1',diff:'moyen',q:'Constante solaire ?',opts:['100 W/m²','500 W/m²','1400 W/m²','2000 W/m²'],ans:2,expl:'1400 W/m² hors atmosphère.'},
  {bloc:'b1',diff:'moyen',q:'% biomasse énergie finale PED ?',opts:['20%','40%','60%','80%'],ans:3,expl:'~80% dans beaucoup de PED.'},
  {bloc:'b1',diff:'moyen',q:'PCI charbon de bois ?',opts:['4000 kcal/kg','6000','8000','11000'],ans:2,expl:'8000 kcal/kg (vs bois 4000, essence 11000).'},
  // -- Élevé (6) --
  {bloc:'b1',diff:'eleve',q:'Gradient géothermique moyen ?',opts:['1°C/100m','3°C/100m','10°C/100m','30°C/100m'],ans:1,expl:'3°C/100m en moyenne.'},
  {bloc:'b1',diff:'eleve',q:'Conso mondiale/habitant ?',opts:['0,5 tep/hab/an','1,6','4','8'],ans:1,expl:'~12 GTEP ÷ 7,5 Mds ≈ 1,6.'},
  {bloc:'b1',diff:'eleve',q:'Conso Afrique/habitant ?',opts:['0,2 tep/hab/an','1','2','4'],ans:0,expl:'0,2 tep/hab/an. Très faible.'},
  {bloc:'b1',diff:'eleve',q:'1000 m³ gaz = ? TEP',opts:['0,086','0,8','8','86'],ans:1,expl:'0,8 TEP/1000m³ (AIE).'},
  {bloc:'b1',diff:'eleve',q:'Unité SI puissance ?',opts:['Joule','Watt','Calorie','TEP'],ans:1,expl:'Watt = puissance.'},
  {bloc:'b1',diff:'eleve',q:'1 MWh = ?',opts:['3,6 GJ','36 GJ','42 GJ','86 GJ'],ans:0,expl:'1 MWh = 3,6 GJ = 0,086 TEP.'},

  // === BLOC 2: Comptabilité Énergétique (20 questions) ===
  // -- Facile (5) --
  {bloc:'b2',diff:'facile',q:'Équation bilan : ATEP =',opts:['CFT+Pertes','P+Im–Ex±VS','P+Im+Ex','CFT–Pertes'],ans:1,expl:'ATEP = P+Im–Ex–Soutages±VS.'},
  {bloc:'b2',diff:'facile',q:'Taux indépendance =',opts:['Imports/ATEP','Production/ATEP','Exports/ATEP','CFT/ATEP'],ans:1,expl:'Production nationale / ATEP.'},
  {bloc:'b2',diff:'facile',q:'Bloc Transformations =',opts:['Résidentiel','Centrales électriques','Transport','Industries'],ans:1,expl:'Centrales = bloc Transformation.'},
  {bloc:'b2',diff:'facile',q:'SIE =',opts:['Produire élec','Collecter données','Distribuer pétrole','Audit'],ans:1,expl:'Système Information Énergétique.'},
  {bloc:'b2',diff:'facile',q:'Collecte données =',opts:['Mensuelle','Trimestrielle','Annuelle','5 ans'],ans:2,expl:'Annuelle, atelier validation.'},
  // -- Moyen (5) --
  {bloc:'b2',diff:'moyen',q:'Inputs transformation : signe ?',opts:['+','–','0','Variable'],ans:1,expl:'Inputs = (–).'},
  {bloc:'b2',diff:'moyen',q:'Outputs transformation : signe ?',opts:['+','–','0','Variable'],ans:0,expl:'Outputs = (+).'},
  {bloc:'b2',diff:'moyen',q:'Intensité énergétique en',opts:['tep/hab','kWh/hab','tep/1000$US','%'],ans:2,expl:'IE = ATEP/PIB en tep/1000$US.'},
  {bloc:'b2',diff:'moyen',q:'Soutages internationaux',opts:['+Imports','–ATEP','+Production','Ignorés'],ans:1,expl:'Retranchés comme exports.'},
  {bloc:'b2',diff:'moyen',q:'TE =',opts:['TD+TCG','TD×TCG','TD/TCG','TCG/TD'],ans:1,expl:'TE = TD × TCG.'},
  // -- Élevé (5) --
  {bloc:'b2',diff:'eleve',q:'Raffinerie = bloc',opts:['ATEP','Transformations','CFT','Pertes'],ans:1,expl:'Transformation pétrole brut.'},
  {bloc:'b2',diff:'eleve',q:'Coeff gazole',opts:['1,000','1,035','1,070','0,960'],ans:1,expl:'1,035 tep/t.'},
  {bloc:'b2',diff:'eleve',q:'Centrale brûle gaz → bilan',opts:['+ATEP','–Transfo (input)','+CFT','–ATEP'],ans:1,expl:'Input = (–).'},
  {bloc:'b2',diff:'eleve',q:'Centrale produit élec → bilan',opts:['–Transfo','+Transfo (output)','+ATEP','–CFT'],ans:1,expl:'Output = (+).'},
  {bloc:'b2',diff:'eleve',q:'Bois→charbon = bloc',opts:['ATEP','Transformation','CFT Résidentiel','Pertes'],ans:1,expl:'Transformation.'},
  // -- Très difficile (5) --
  {bloc:'b2',diff:'tresdifficile',q:'e=–0,24 → demande',opts:['Très élastique','Inélastique','Parfaitement élastique','Parfaitement inélastique'],ans:1,expl:'|e|<1 = inélastique.'},
  {bloc:'b2',diff:'tresdifficile',q:'Écart statistique =',opts:['Erreur mesure','Demande–Offre','Exports cachés','Production cachée'],ans:1,expl:'(CFT+TSEP)–(AI+Transferts).'},
  {bloc:'b2',diff:'tresdifficile',q:'TD =',opts:['Électrifiés/Total','Raccordés/Zone','Zone/Total','Total/Raccordés'],ans:1,expl:'Taux de desserte.'},
  {bloc:'b2',diff:'tresdifficile',q:'↑Stocks → VS',opts:['+','–','0','Variable'],ans:1,expl:'Stockage = retranché.'},
  {bloc:'b2',diff:'tresdifficile',q:'TCG =',opts:['Électrifiés/Total','Raccordés/Zone','Zone/Total','Total/Zone'],ans:2,expl:'Ménages en zone / total.'},

  // === BLOC 3: Planification (20 questions) ===
  // -- Facile (4) --
  {bloc:'b3',diff:'facile',q:'Sankey =',opts:['Prix','Flux énergétiques','Charge','Solaire'],ans:1,expl:'Flux amont→aval.'},
  {bloc:'b3',diff:'facile',q:'Méthode simple PED = étapes',opts:['2','4','6','8'],ans:1,expl:'4 étapes.'},
  {bloc:'b3',diff:'facile',q:'Net metering =',opts:['Eau','Revente surplus PV','Gaz','CO₂'],ans:1,expl:'Surplus solaire au réseau.'},
  {bloc:'b3',diff:'facile',q:'SER =',opts:['État actuel','Futur','Pire scénario','Production'],ans:0,expl:'Situation Énergétique de Référence.'},
  // -- Moyen (6) --
  {bloc:'b3',diff:'moyen',q:'LEAP par',opts:['AIE','SEI Stockholm','Banque Mondiale','ONU'],ans:1,expl:'SEI, gratuit PED.'},
  {bloc:'b3',diff:'moyen',q:'LEAP adapté PED car',opts:['Nucléaire','Bois de feu+électrification','Fossiles','CO₂'],ans:1,expl:'Spécificités PED.'},
  {bloc:'b3',diff:'moyen',q:'WEAP intègre',opts:['Eau','Gaz','Rail','Nucléaire'],ans:0,expl:'Water Evaluation And Planning.'},
  {bloc:'b3',diff:'moyen',q:'FDE Burkina =',opts:['1 FCFA/kWh','2','5','10'],ans:1,expl:'2 FCFA/kWh.'},
  {bloc:'b3',diff:'moyen',q:'Dir. UEMOA 04/2020 =',opts:['Interdire lampes','Étiquetage lampes/frigos','Centrales','Audits'],ans:1,expl:'Étiquetage obligatoire.'},
  {bloc:'b3',diff:'moyen',q:'PdD =',opts:['Capitales','Zones fort potentiel','Zones industrielles','Centres pétroliers'],ans:1,expl:'Priorisées pour électrification.'},
  // -- Élevé (5) --
  {bloc:'b3',diff:'eleve',q:'CPE =',opts:['Achat élec','Garantie économies','Construction','Importation'],ans:1,expl:'Contrat Performance Énergétique.'},
  {bloc:'b3',diff:'eleve',q:'ESE =',opts:['Solaire','Services EE garantis','Pétrole','Mines'],ans:1,expl:'Entreprise Services Énergétiques.'},
  {bloc:'b3',diff:'eleve',q:'Interdire lampes incand. =',opts:['Normes','Régulation marché','Codes thermiques','Audit'],ans:1,expl:'Régulation du marché.'},
  {bloc:'b3',diff:'eleve',q:'Décret 2017-1015 =',opts:['Nucléaire','Audits obligatoires','Pétrole','Environnement'],ans:1,expl:'Audits Burkina Faso.'},
  {bloc:'b3',diff:'eleve',q:'EnergyPLAN analyse',opts:['Annuelle','Horaire/an','Mensuelle','Journalière'],ans:1,expl:'Simulation horaire annuelle.'},
  // -- Très difficile (5) --
  {bloc:'b3',diff:'tresdifficile',q:'MAED =',opts:['Production élec','Analyse demande','Réseaux','Eau'],ans:1,expl:'Model for Analysis of Energy Demand.'},
  {bloc:'b3',diff:'tresdifficile',q:'Projection =',opts:['P₀(1+α+β)ⁿ','P₀(1+α)ⁿ(1+β)ⁿ','P₀n(α+β)','P₀αβn'],ans:1,expl:'Produit des croissances.'},
  {bloc:'b3',diff:'tresdifficile',q:'MEPRED =',opts:['Modèles math','Livres blancs régionaux','Satellites','Enquêtes'],ans:1,expl:'Approche régionale.'},
  {bloc:'b3',diff:'tresdifficile',q:'IPD évalue',opts:['Production élec','Santé/éducation/économie','PIB/hab','Ressources minières'],ans:1,expl:'Comme IDH.'},
  {bloc:'b3',diff:'tresdifficile',q:'TIPEE = dimensions',opts:['2','3','5','7'],ans:2,expl:'5 dimensions (HELIO).'},

  // === BLOC 4: Technologies EnR (20 questions) ===
  // -- Facile (5) --
  {bloc:'b4',diff:'facile',q:'Limite de Betz =',opts:['30%','16/27≈59%','75%','90%'],ans:1,expl:'59,3% max extractible.'},
  {bloc:'b4',diff:'facile',q:'Pelton = chute',opts:['Basse','Moyenne','Haute >300m','Toutes'],ans:2,expl:'Haute chute, turbine à action.'},
  {bloc:'b4',diff:'facile',q:'Kaplan = chute',opts:['Haute','Basse','Moyenne','Très haute'],ans:1,expl:'Basse chute, axiale.'},
  {bloc:'b4',diff:'facile',q:'Méthanisation→',opts:['H₂','CH₄','CO₂ pur','Éthanol'],ans:1,expl:'Biogaz >90% CH₄.'},
  {bloc:'b4',diff:'facile',q:'Durée vie PV =',opts:['5-10 ans','10-15 ans','20-30 ans','40-50 ans'],ans:2,expl:'20-30 ans.'},
  // -- Moyen (5) --
  {bloc:'b4',diff:'moyen',q:'P éolienne ∝ V^?',opts:['1','2','3','4'],ans:2,expl:'P∝V³.'},
  {bloc:'b4',diff:'moyen',q:'Distance inter-éoliennes',opts:['1-2×D','5-10×D','20-30×D','50-100×D'],ans:1,expl:'Éviter effet sillage.'},
  {bloc:'b4',diff:'moyen',q:'Francis =',opts:['Action','Réaction','Impulsion','Traînée'],ans:1,expl:'Turbine à réaction.'},
  {bloc:'b4',diff:'moyen',q:'TRE éolien (20ans) =',opts:['1 mois','<6 mois','2 ans','5 ans'],ans:1,expl:'<6 mois.'},
  {bloc:'b4',diff:'moyen',q:'Hydro = % élec mondiale',opts:['5%','10%','16%','25%'],ans:2,expl:'16%, 3ᵉ source.'},
  // -- Élevé (5) --
  {bloc:'b4',diff:'eleve',q:'PV monocristallin =',opts:['5-8%','12-16%','20-25%','30-35%'],ans:1,expl:'12-16% de rendement.'},
  {bloc:'b4',diff:'eleve',q:'Dopage p du Si =',opts:['Phosphore','Bore','Arsenic','Antimoine'],ans:1,expl:'Bore = déficit e⁻.'},
  {bloc:'b4',diff:'eleve',q:'PV moins cher =',opts:['Mono','Poly','Amorphe','GaAs'],ans:2,expl:'Amorphe 5-8%, ~0,5€/Wc.'},
  {bloc:'b4',diff:'eleve',q:'500kW-2MW =',opts:['Pico','Micro','Mini','Petite'],ans:2,expl:'Mini-centrale (UNIPEDE).'},
  {bloc:'b4',diff:'eleve',q:'Barrage vallée étroite =',opts:['Poids','Voûte','Contreforts','Digue'],ans:1,expl:'Barrage-voûte.'},
  // -- Très difficile (5) --
  {bloc:'b4',diff:'tresdifficile',q:'α vent en mer =',opts:['0,13','0,20','0,24','0,30'],ans:0,expl:'α mer=0,13; plaine=0,20; ville=0,30.'},
  {bloc:'b4',diff:'tresdifficile',q:'Distribution vent =',opts:['Normale','Poisson','Weibull','Binomiale'],ans:2,expl:'Weibull.'},
  {bloc:'b4',diff:'tresdifficile',q:'Au fil du soleil =',opts:['Batteries','Sans stockage','Réseau','Revente'],ans:1,expl:'Direct, usage immédiat.'},
  {bloc:'b4',diff:'tresdifficile',q:'Fluide dominant CSP =',opts:['Eau','Huiles','Sels fondus','Air'],ans:2,expl:'75% projets, ≤650°C.'},
  {bloc:'b4',diff:'tresdifficile',q:'Rift Valley potentiel =',opts:['900 MW','9000 MW','90000 MW','900000 MW'],ans:1,expl:'9000 MW géothermie.'},

  // === BLOC 5: Juridique & Exercices (19 questions) ===
  // -- Facile (4) --
  {bloc:'b5',diff:'facile',q:'ODD adoptés le',opts:['1/1/2000','25/9/2015','12/12/2010','5/6/2005'],ans:1,expl:'25 septembre 2015.'},
  {bloc:'b5',diff:'facile',q:'ODD7 =',opts:['Éducation','Santé','Énergie propre','Eau'],ans:2,expl:'Accès universel énergie.'},
  {bloc:'b5',diff:'facile',q:'Paris = limiter à',opts:['1°C','<2°C→1,5°C','3°C','4°C'],ans:1,expl:'Bien <2°C, idéal 1,5°C.'},
  {bloc:'b5',diff:'facile',q:'Afrique=%CO₂ mondial',opts:['<3%','~10%','~20%','~30%'],ans:0,expl:'<3% mais subit impacts.'},
  // -- Moyen (4) --
  {bloc:'b5',diff:'moyen',q:'GIEC =',opts:['Finance','Avis scientifiques','Réglemente','Construit'],ans:1,expl:'Expertise climat.'},
  {bloc:'b5',diff:'moyen',q:'CNUCC =',opts:['1987','1992','2005','2015'],ans:1,expl:'Rio 1992.'},
  {bloc:'b5',diff:'moyen',q:'PRG CH₄ =',opts:['1','21','25','298'],ans:2,expl:'25 (GIEC 2007).'},
  {bloc:'b5',diff:'moyen',q:'PRG N₂O =',opts:['1','25','298','22800'],ans:2,expl:'298.'},
  // -- Élevé (5) --
  {bloc:'b5',diff:'eleve',q:'Électricité achetée = Scope',opts:['1','2','3','0'],ans:1,expl:'Scope 2.'},
  {bloc:'b5',diff:'eleve',q:'Déplacements employés = Scope',opts:['1','2','3','0'],ans:2,expl:'Scope 3.'},
  {bloc:'b5',diff:'eleve',q:'Fiscal EnR =',opts:['TVA majorée','Exonération douane','Taxe EnR','Subventions fossiles'],ans:1,expl:'Incitation fiscale.'},
  {bloc:'b5',diff:'eleve',q:'Gaz100→élec40. η=?',opts:['25%','40%','60%','100%'],ans:1,expl:'40/100=40%.'},
  {bloc:'b5',diff:'eleve',q:'[Exo] 20L×3,5kgCO₂/L=?',opts:['20','35','70','100'],ans:2,expl:'70 kg CO₂.'},
  // -- Très difficile (6) --
  {bloc:'b5',diff:'tresdifficile',q:'1kg CO₂=?kg C',opts:['1','0,2727','3,67','0,5'],ans:1,expl:'12/44=0,2727.'},
  {bloc:'b5',diff:'tresdifficile',q:'[Exo] Pop20M,PIB15,7Mds€,ATEP5636. IE=?',opts:['0,28','0,36','0,56','0,72'],ans:1,expl:'5636/15700=0,36 tep/1000€.'},
  {bloc:'b5',diff:'tresdifficile',q:'[Exo] Mêmes données. C/hab=?',opts:['0,28','0,36','0,56','1,20'],ans:0,expl:'5636/20M=0,28 tep/hab.'},
  {bloc:'b5',diff:'tresdifficile',q:'[Exo] P=60,Im=40,Ex=10,VS=+5. ATEP=?',opts:['100','95','85','90'],ans:2,expl:'60+40–10–5=85.'},
  {bloc:'b5',diff:'tresdifficile',q:'[Exo] Même. Indépendance=?',opts:['60%','63%','67%','71%'],ans:3,expl:'60/85=70,6%≈71%.'},
  {bloc:'b5',diff:'tresdifficile',q:'[Exo] P₀=1200MW,α=5%. P₁₀=?',opts:['1200','1500','1955','2500'],ans:2,expl:'1200×1,05¹⁰=1955.'}
];

// --- UE06 Flashcards ---
const UE06_FLASHCARDS = [
  {topic:'Unités',q:'1 GWh = ? TEP',a:'<strong>86 TEP</strong><br><small>1 MWh = 0,086 TEP = 3,6 GJ</small>'},
  {topic:'Unités',q:'1 TEP = ? GJ',a:'<strong>42 GJ</strong> = 10¹⁰ cal ≈ 7 barils'},
  {topic:'Chaîne',q:'4 étapes chaîne énergétique ?',a:'<strong>Primaire</strong> → <strong>Secondaire</strong> → <strong>Finale</strong> → <strong>Utile</strong>'},
  {topic:'Bilan',q:'Équation du bilan ?',a:'<strong>P + Im – Ex ± VS = Pt + Cne + Cf</strong>'},
  {topic:'Bilan',q:'ATEP = ?',a:'<strong>ATEP = P + Im – Ex – Soutages ± VS</strong>'},
  {topic:'Bilan',q:'Signes inputs/outputs ?',a:'<strong>Inputs = (–)</strong><br><strong>Outputs = (+)</strong>'},
  {topic:'Indicateurs',q:'Taux d\'indépendance ?',a:'<strong>Production nationale / ATEP × 100</strong>'},
  {topic:'Indicateurs',q:'TE, TD, TCG ?',a:'<strong>TE = TD × TCG</strong><br>Électrification = Desserte × Couverture'},
  {topic:'Carbone',q:'PRG CH₄ et N₂O ?',a:'<strong>CH₄ = 25</strong> (12 ans)<br><strong>N₂O = 298</strong> (114 ans)'},
  {topic:'Carbone',q:'3 Scopes ?',a:'<strong>1</strong> = direct<br><strong>2</strong> = électricité<br><strong>3</strong> = autres indirect'},
  {topic:'Outils',q:'3 outils planification ?',a:'<strong>LEAP</strong> (SEI)<br><strong>MAED</strong> (demande)<br><strong>EnergyPLAN</strong> (horaire)'},
  {topic:'Projection',q:'Formule projection ?',a:'<strong>Pₙ = P₀(1+α)ⁿ(1+β)ⁿ</strong>'},
  {topic:'Éolien',q:'Limite de Betz ?',a:'<strong>16/27 ≈ 59%</strong>'},
  {topic:'Éolien',q:'P ∝ V^?',a:'<strong>P ∝ V³</strong>'},
  {topic:'Hydro',q:'Pelton, Francis, Kaplan ?',a:'<strong>Pelton</strong> >300m<br><strong>Francis</strong> 30-300m<br><strong>Kaplan</strong> <30m'},
  {topic:'Solaire',q:'Rendements cellules Si ?',a:'<strong>Mono</strong> 12-16%<br><strong>Poly</strong> 11-14%<br><strong>Amorphe</strong> 5-8%'},
  {topic:'Solaire',q:'Dopage p et n ?',a:'<strong>p = Bore</strong><br><strong>n = Phosphore</strong>'},
  {topic:'Biomasse',q:'3 filières ?',a:'<strong>Sèche</strong> (combustion)<br><strong>Humide</strong> (méthanisation)<br><strong>Biocarburants</strong>'},
  {topic:'ODD',q:'ODD7 ?',a:'Énergie <strong>fiable, durable et moderne</strong> à coût abordable pour tous.'},
  {topic:'Conversions',q:'PCI bois/charbon/essence ?',a:'Bois <strong>4000</strong> | Charbon <strong>8000</strong> | Essence <strong>11000</strong> kcal/kg'}
];

// --- UE06 Formules ---
const UE06_FORMULES = [
  {name:'Bilan',math:'P+Im–Ex±VS=Pt+Cne+Cf',desc:'Équation fondamentale.'},
  {name:'ATEP',math:'ATEP=P+Im–Ex–Soutages±ΔStocks',desc:'Approvisionnements Totaux.'},
  {name:'Indépendance',math:'TI=Production/ATEP×100',desc:'En %.'},
  {name:'Intensité',math:'IE=CFT/PIB [tep/1000$US]',desc:'Énergie par unité de PIB.'},
  {name:'Conso/hab',math:'C/hab=CFT/Population',desc:'tep/hab.'},
  {name:'Électrification',math:'TE=TD×TCG',desc:'Les 3 taux.'},
  {name:'Élasticité',math:'e=(ΔQ/Q)/(ΔP/P)',desc:'|e|<1 inélastique.'},
  {name:'Projection',math:'Pₙ=P₀(1+α)ⁿ(1+β)ⁿ',desc:'α=démo, β=revenu.'},
  {name:'Éolien',math:'P=Cp·½ρ·S·V³',desc:'Cp≤16/27 (Betz).'},
  {name:'Profil vent',math:'V/V₀=(h/h₀)^α',desc:'α≈0,13 mer; 0,30 ville.'},
  {name:'Weibull',math:'f(v)=(k/A)(v/A)^(k-1)e^[-(v/A)^k]',desc:'k~2 Europe.'},
  {name:'Hydro',math:'P∝H×Q',desc:'H=hauteur, Q=débit.'},
  {name:'Rendement',math:'η=Output/Input',desc:'Ex: centrale 40%.'},
  {name:'CO₂',math:'CO₂=Conso×Facteur',desc:'Ex: 20L×3,5=70kg.'},
  {name:'PRG',math:'CO₂e=Σ(masseᵢ×PRGᵢ)',desc:'CH₄=25, N₂O=298.'},
  {name:'TEP→GJ',math:'1 TEP=42 GJ',desc:'Unité référence.'},
  {name:'GWh→TEP',math:'1 GWh=86 TEP',desc:'Conversion clé.'},
  {name:'MWh→GJ',math:'1 MWh=3,6 GJ=0,086 TEP',desc:'Énergie électrique.'}
];

// --- UE06 Coefficients ---
const UE06_COEFFS = [
  {product:'Électricité',unit:'GWh',tep:'86'},{product:'Pétrole brut',unit:'t',tep:'1'},
  {product:'Charbon',unit:'t',tep:'0,62'},{product:'GPL',unit:'t',tep:'1,13'},
  {product:'Essence',unit:'t',tep:'1,07'},{product:'Jet fuel',unit:'t',tep:'1,065'},
  {product:'Kérosène',unit:'t',tep:'1,045'},{product:'Gazole/Diesel',unit:'t',tep:'1,035'},
  {product:'Fuel lourd',unit:'t',tep:'0,96'},{product:'Gaz naturel',unit:'1000m³',tep:'0,8'},
  {product:'Bois de feu',unit:'t',tep:'0,4'},{product:'Charbon de bois',unit:'t',tep:'0,7'},
  {product:'Déchets végétaux',unit:'t',tep:'0,3'}
];

// --- UE06 Technologies ---
const UE06_TECHNOS = [
  {name:'Solaire PV',icon:'☀️',principe:'Photon→Si→e⁻→courant DC',types:['Mono 12-16%','Poly 11-14%','Amorphe 5-8%'],lcoe:'~0,068$/kWh',vie:'20-30 ans'},
  {name:'CSP',icon:'🔆',principe:'Concentration→chaleur→turbine',types:['Cylindro-parabolique 400°C','Tour solaire 600-1000°C'],lcoe:'Sels fondus',vie:'Stockage'},
  {name:'Éolien',icon:'💨',principe:'Vent→rotation→génératrice',types:['Horizontal 3 pales','Vertical Darrieus/Savonius'],lcoe:'Betz 59%',vie:'20-25 ans'},
  {name:'Hydro',icon:'🌊',principe:'Eau→turbine→alternateur',types:['Pelton >300m','Francis 30-300m','Kaplan <30m'],lcoe:'16% élec mondiale',vie:'474 GW Afrique'},
  {name:'Biomasse',icon:'🌿',principe:'Matière organique→énergie',types:['Sèche: combustion','Humide: CH₄','Biocarburants'],lcoe:'80% PED',vie:'Renouvelable'},
  {name:'Géothermie',icon:'🌋',principe:'Chaleur terrestre→vapeur',types:['Basse: 80°C/2000m','Haute: 300°C/1000m'],lcoe:'3°C/100m',vie:'Rift 9000 MW'}
];

// --- Register ---
registerUE('ue06', {
  qcmBlocs: UE06_QCM_BLOCS,
  qcm: UE06_QCM,
  flashcards: UE06_FLASHCARDS,
  formules: UE06_FORMULES,
  coeffs: UE06_COEFFS,
  technos: UE06_TECHNOS
});
registerFormules(UE06_FORMULES);
registerCoeffs(UE06_COEFFS);
registerTechnos(UE06_TECHNOS);
