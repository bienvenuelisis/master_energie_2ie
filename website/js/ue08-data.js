// ============================================
// UE08 — Hydraulique & Cycle de l'Eau
// ============================================

const UE08_QCM_BLOCS = [
  { id:'u8b1', name:'Concepts & Écoulements', icon:'💧' },
  { id:'u8b2', name:'Pertes de charge & Conduites', icon:'📏' },
  { id:'u8b3', name:'Écoulements à surface libre', icon:'🌊' },
  { id:'u8b4', name:'Pompes & Turbopompes', icon:'⚙️' },
  { id:'u8b5', name:'Qualité & Traitement de l\'Eau', icon:'🧪' },
  { id:'u8b6', name:'Cycle de l\'Eau & Hydrologie', icon:'🔄' }
];

const UE08_QCM = [
  // === BLOC 1: Concepts & Écoulements (13 questions) ===
  {bloc:'u8b1',diff:'facile',q:'L\'hydraulique est l\'étude',opts:['De la pression uniquement','Des écoulements','De la température de l\'eau','De la composition chimique'],ans:1,expl:'L\'hydraulique est l\'étude des écoulements (en charge et à surface libre).'},
  {bloc:'u8b1',diff:'facile',q:'Un écoulement en charge se caractérise par',opts:['Une surface libre','L\'eau remplit complètement la canalisation','Un débit variable','L\'absence de pression'],ans:1,expl:'Écoulement en charge = confiné, pression > pression atmosphérique, canalisation pleine.'},
  {bloc:'u8b1',diff:'facile',q:'Un écoulement à surface libre se trouve dans',opts:['Les canalisations d\'eau potable','Les rivières et canaux','Les conduites forcées','Les pompes'],ans:1,expl:'Surface libre = interface eau-air (rivières, canaux, réseaux d\'assainissement).'},
  {bloc:'u8b1',diff:'facile',q:'Le nombre de Reynolds (Re) caractérise',opts:['La température','Le régime d\'écoulement (laminaire/turbulent)','La pression','La qualité de l\'eau'],ans:1,expl:'Re = U×DH/ν — détermine si l\'écoulement est laminaire (Re<2000) ou turbulent (Re>4000).'},
  {bloc:'u8b1',diff:'moyen',q:'Un écoulement est laminaire si Re est',opts:['Re < 2000','2000 < Re < 4000','Re > 4000','Re > 10000'],ans:0,expl:'Re < 2000 = laminaire. 2000-4000 = transitoire. >4000 = turbulent.'},
  {bloc:'u8b1',diff:'moyen',q:'La viscosité cinématique ν de l\'eau à 20°C est environ',opts:['1,01 × 10⁻⁶ m²/s','1,79 × 10⁻³ m²/s','1,01 × 10⁻³ m²/s','1,79 × 10⁻⁶ m²/s'],ans:0,expl:'ν ≈ 1,01×10⁻⁶ m²/s à 20°C. La viscosité dynamique μ ≈ 1,01×10⁻³ Pa·s.'},
  {bloc:'u8b1',diff:'moyen',q:'La charge hydraulique H (énergie totale) est',opts:['H = z + p/ρg + V²/2g','H = z × p/ρg','H = V²/2g uniquement','H = p/ρg uniquement'],ans:0,expl:'H = z (position) + p/ρg (pression) + V²/2g (cinétique) — énergie totale par unité de poids [m].'},
  {bloc:'u8b1',diff:'moyen',q:'Le théorème de Bernoulli suppose un fluide',opts:['Compressible','Incompressible (ρ constante)','Visqueux uniquement','Gazeux'],ans:1,expl:'Bernoulli = incompressible (ρ constante), écoulement permanent, gravité seule force extérieure.'},
  {bloc:'u8b1',diff:'eleve',q:'Le nombre de Reynolds pour une conduite circulaire vaut',opts:['Re = UD/ν','Re = 4Q/(πDν)','Re = Q/(νD)','Re = UD²/ν'],ans:1,expl:'Pour conduite circulaire : Re = 4Q/(πDν). S = πD²/4, U = Q/S → Re = UD/ν = 4Q/(πDν).'},
  {bloc:'u8b1',diff:'eleve',q:'Le rayon hydraulique RH d\'une conduite circulaire pleine est',opts:['RH = D','RH = D/2','RH = D/4','RH = D/8'],ans:2,expl:'RH = S/P = (πD²/4)/(πD) = D/4. Le diamètre hydraulique DH = 4×RH = D.'},
  {bloc:'u8b1',diff:'eleve',q:'Un écoulement permanent uniforme en charge a',opts:['Q, S et P invariables','Q variable','P variable','S variable'],ans:0,expl:'Permanent uniforme = Q, S, P invariables — tuyaux rectilignes à diamètre constant.'},
  {bloc:'u8b1',diff:'tresdifficile',q:'La formule de la viscosité cinématique selon Swame (2004) dépend de',opts:['La pression uniquement','La température T (°C)','Le débit','Le diamètre'],ans:1,expl:'ν = 1,792×10⁻⁶ × [1+(T/25)^1,165]⁻¹. ν diminue quand T augmente.'},
  {bloc:'u8b1',diff:'facile',q:'L\'écoulement NON permanent se caractérise par',opts:['Q et U constants','Q et U qui changent dans le temps','S constant','P constant'],ans:1,expl:'Non permanent = Q et U varient dans le temps (ex: fermeture de vanne, arrêt de pompe).'},

  // === BLOC 2: Pertes de charge & Conduites (15 questions) ===
  {bloc:'u8b2',diff:'facile',q:'Les pertes de charge sont dues',opts:['À la gravité uniquement','Aux frottements du fluide contre les parois','À la température','Au débit uniquement'],ans:1,expl:'Pertes de charge = perte d\'énergie par frottement contre les parois et dans les singularités.'},
  {bloc:'u8b2',diff:'facile',q:'Les pertes de charge linéaires dépendent',opts:['Du débit uniquement','De la longueur, du diamètre et de la rugosité','De la température uniquement','De la pression atmosphérique'],ans:1,expl:'Linéaires ∝ longueur L, dépendent du diamètre D, de la rugosité k et du débit Q.'},
  {bloc:'u8b2',diff:'moyen',q:'La formule de Darcy-Weisbach pour les pertes linéaires est',opts:['ΔH = λ(L/D)(U²/2g)','ΔH = K·U²/2g','ΔH = J×L²','ΔH = Q²×L/D'],ans:0,expl:'Darcy-Weisbach : ΔH = λ·(L/D)·(U²/2g). λ = coefficient de perte de charge.'},
  {bloc:'u8b2',diff:'moyen',q:'L\'équation de Colebrook-White relie',opts:['Q et D uniquement','λ, Re et k/D (rugosité relative)','P et T','U et g uniquement'],ans:1,expl:'Colebrook-White : 1/√λ = -2log(k/(3,71D) + 2,51/(Re√λ)).'},
  {bloc:'u8b2',diff:'moyen',q:'Le coefficient de Strickler KS pour le PVC est d\'environ',opts:['60','80','100','120'],ans:3,expl:'PVC et plastique : KS ≈ 120. Béton centrifugé : 100. Fonte non revêtue neuve : 80.'},
  {bloc:'u8b2',diff:'eleve',q:'La formule de Manning-Strickler pour une conduite circulaire est',opts:['ΔH = 10,294×Q²×L/(KS²×D^(16/3))','ΔH = Q×L/(KS×D²)','ΔH = λ×L×U²/(2gD)','ΔH = Q²/(KS×D)'],ans:0,expl:'Manning-Strickler : ΔH ≈ 10,294×Q²×L/(KS²×D^(16/3)).'},
  {bloc:'u8b2',diff:'moyen',q:'Les pertes de charge singulières se calculent par',opts:['ΔH = K×U²/(2g)','ΔH = J×L','ΔH = λ×L×U²/(2gD)','ΔH = Q×D'],ans:0,expl:'Singulières : ΔHS = K×U²/(2g). K dépend du type de singularité.'},
  {bloc:'u8b2',diff:'eleve',q:'Pour des conduites en série, on a',opts:['Même Q, ΔH total = ΣΔHᵢ','Même ΔH, Q total = ΣQᵢ','Q et ΔH identiques','Aucune relation'],ans:0,expl:'Série : même Q partout, ΔH totale = somme des pertes de chaque tronçon.'},
  {bloc:'u8b2',diff:'eleve',q:'Pour des conduites en parallèle, on a',opts:['Même Q, ΔH total = ΣΔHᵢ','Même ΔH, Q total = ΣQᵢ','Q et ΔH identiques','Aucune relation'],ans:1,expl:'Parallèle : même ΔH aux bornes, Q total = somme des débits de chaque branche.'},
  {bloc:'u8b2',diff:'tresdifficile',q:'La rugosité k d\'une fonte non revêtue neuve est d\'environ',opts:['0,05 mm','0,25 mm','1 mm','2 mm'],ans:2,expl:'Fonte acier non revêtu neuf : k ≈ 1 mm. PVC : k ≈ 0. Béton : k ≈ 0,25 mm.'},
  {bloc:'u8b2',diff:'tresdifficile',q:'L\'approximation de Swame et Jain pour λ est valable pour',opts:['Re < 2000','Re ≥ 4000','Re quelconque','Re = 0'],ans:1,expl:'Swame et Jain : λ = 0,25/[log(k/(3,71D)+5,74/Re^0,9)]², valable pour Re ≥ 4000.'},
  {bloc:'u8b2',diff:'eleve',q:'Dans une conduite gravitaire, le diamètre théorique D est proportionnel à',opts:['Q^(3/8)','Q^(1/2)','Q²','Q^(3/16)'],ans:3,expl:'Avec Manning-Strickler : D ∝ Q^(3/16). D = (10,294×Q²×L/(KS²×ΔH))^(3/16).'},
  {bloc:'u8b2',diff:'moyen',q:'La formule de Chézy pour les pertes de charge est',opts:['J = U²/(C²×RH)','J = λU²/(2gD)','J = KS×RH^(2/3)×√I','J = Q/(S×C)'],ans:0,expl:'Chézy : J = (1/RH)×(U²/C²). C = coefficient de Chézy [L^(1/2)/T].'},
  {bloc:'u8b2',diff:'facile',q:'Les pertes de charge se mesurent en',opts:['Pascal (Pa)','Mètres (m)','Watts (W)','Newtons (N)'],ans:1,expl:'Les pertes de charge s\'expriment en mètres de colonne d\'eau (hauteur équivalente).'},
  {bloc:'u8b2',diff:'tresdifficile',q:'La formule inverse pour calculer Q à partir de ΔH utilise',opts:['U = -2√δ × log(k/(3,71D) + 2,51ν/(D√δ))','Q = KS×S×RH^(2/3)','Q = πD²U/4 avec U quelconque','Aucune méthode'],ans:0,expl:'Formule inverse : δ=2gDΔH/L, U=-2√δ×log(k/(3,71D)+2,51ν/(D√δ)), Q=U×πD²/4.'},

  // === BLOC 3: Écoulements à surface libre (13 questions) ===
  {bloc:'u8b3',diff:'facile',q:'Le nombre de Froude (Fr) caractérise',opts:['La viscosité','Le régime d\'écoulement (fluvial/torrentiel)','La température','La pression'],ans:1,expl:'Fr = U/√(g×ym). Fr<1 = fluvial (subcritique), Fr>1 = torrentiel (supercritique).'},
  {bloc:'u8b3',diff:'facile',q:'Un écoulement est torrentiel si Fr est',opts:['Fr < 1','Fr = 1','Fr > 1','Fr = 0'],ans:2,expl:'Fr > 1 = torrentiel/supercritique. Fr < 1 = fluvial/subcritique. Fr = 1 = critique.'},
  {bloc:'u8b3',diff:'moyen',q:'La formule de Manning-Strickler pour un canal est',opts:['Q = KS×S×RH^(2/3)×√I','Q = λ×S×U²','Q = KS×S×I','Q = S×RH×√I'],ans:0,expl:'Manning-Strickler canal : Q = KS×S×RH^(2/3)×√I. U = KS×RH^(2/3)×√I.'},
  {bloc:'u8b3',diff:'moyen',q:'La profondeur critique yc pour un canal rectangulaire est',opts:['yc = (Q²/(b²g))^(1/3)','yc = Q/(b×g)','yc = Q²/(b×g)','yc = (Q×b/g)^(1/2)'],ans:0,expl:'yc = (Q²/(b²×g))^(1/3) pour canal rectangulaire. Dépend du débit et de la largeur.'},
  {bloc:'u8b3',diff:'eleve',q:'Si yn > yc, le régime est',opts:['Torrentiel','Critique','Fluvial','Laminaire'],ans:2,expl:'yn > yc → régime fluvial (subcritique). yc > yn → régime torrentiel (supercritique).'},
  {bloc:'u8b3',diff:'moyen',q:'Le tirant d\'eau y est',opts:['La largeur du canal','La distance verticale surface libre → fond','Le périmètre mouillé','La pente'],ans:1,expl:'Tirant d\'eau y = hauteur d\'eau, distance verticale entre la surface libre et le fond du canal.'},
  {bloc:'u8b3',diff:'eleve',q:'La section hydrauliquement favorable pour un trapèze vérifie',opts:['b = 2y(√(1+m²) - m)','b = y×m','b = y/2','b = y'],ans:0,expl:'Section favorable : b = 2y(√(1+m²)-m). U maximale pour I et Q donnés, ou Q max pour S fixé.'},
  {bloc:'u8b3',diff:'facile',q:'Un seuil dénoyé se caractérise par',opts:['L\'eau chute à l\'aval','Le tirant d\'eau aval est important','Aucune chute','Une vanne fermée'],ans:0,expl:'Seuil dénoyé : l\'eau chute librement à l\'aval. Seuil noyé : tirant d\'eau aval élevé, pas de chute.'},
  {bloc:'u8b3',diff:'tresdifficile',q:'La profondeur normale yn pour canal rectangulaire (Achour 2006) utilise',opts:['qn = Q/(KS×b^(8/3)×√I)','qn = Q/(b×y)','qn = Q²/(g×b)','qn = U/√(g×y)'],ans:0,expl:'Achour & Bedjaoui (2006) : qn = Q/(KS×b^(8/3)×√I), puis yn = b×(qn^0,6 + 4/5×qn^1,2 + ...).'},
  {bloc:'u8b3',diff:'moyen',q:'La pente critique Ic est',opts:['Ic = Q²/(KS²×Sc²×Rc^(4/3))','Ic = Q/S','Ic = U²/g','Ic = yc/L'],ans:0,expl:'Ic = Q²/(KS²×Sc²×Rc^(4/3)). Pente pour laquelle l\'écoulement est critique.'},
  {bloc:'u8b3',diff:'tresdifficile',q:'Pour un canal circulaire, la profondeur critique yc dépend de',opts:['Q* = Q/√(g×D⁵)','Q uniquement','D uniquement','U uniquement'],ans:0,expl:'yc = f(Q*) où Q* = Q/√(g×D⁵). Approximation : yc ≈ (D/0,3)×Asinh(0,312×Q*^0,52).'},
  {bloc:'u8b3',diff:'eleve',q:'La vitesse moyenne dans un canal est maximale',opts:['Au fond','À la surface','Au tiers de la profondeur','Au milieu exact'],ans:2,expl:'Vitesse max au tiers de la profondeur depuis la surface. Formule de Prony : U = 0,82×Vmax.'},
  {bloc:'u8b3',diff:'facile',q:'La mesure du débit au moulinet utilise la formule',opts:['V = a×n + b','V = Q/S','V = √(2gh)','V = KS×RH^(2/3)×√I'],ans:0,expl:'Moulinet : V = a×n + b. a,b = coefficients d\'étalonnage, n = vitesse de rotation de l\'hélice.'},

  // === BLOC 4: Pompes & Turbopompes (15 questions) ===
  {bloc:'u8b4',diff:'facile',q:'Une pompe centrifuge transforme l\'énergie',opts:['Cinétique → Pression','Pression → Cinétique','Thermique → Mécanique','Électrique → Thermique'],ans:0,expl:'Pompe centrifuge : ΔP/ρ = -Δ(U²/2). Diminution de vitesse → augmentation de pression.'},
  {bloc:'u8b4',diff:'facile',q:'Le NPSH (Net Pressure Suction Head) concerne',opts:['Le refoulement','La cavitation à l\'aspiration','Le rendement','La puissance'],ans:1,expl:'NPSH = charge nette à l\'aspiration. NPSHdis > NPSHreq + 0,5 pour éviter la cavitation.'},
  {bloc:'u8b4',diff:'moyen',q:'La cavitation se produit quand la pression descend',opts:['En dessous de la pression atmosphérique','En dessous de la pression de vapeur saturante','Au-dessus de 10 bars','À zéro'],ans:1,expl:'Cavitation = p < pv → ébullition → bulles de vapeur qui implosent → détérioration de la pompe.'},
  {bloc:'u8b4',diff:'moyen',q:'La vitesse spécifique Ns d\'une pompe se calcule par',opts:['Ns = N√Q/H^(3/4)','Ns = Q×H/N','Ns = N×H/Q','Ns = N×Q×H'],ans:0,expl:'Ns = N√Q/H^(3/4). N en tr/min, Q en m³/s, H en m. Détermine le type de pompe.'},
  {bloc:'u8b4',diff:'eleve',q:'Si Ns ≤ 20, il faut une pompe',opts:['Centrifuge monocellulaire','Centrifuge multicellulaire','Hélico-centrifuge','À hélice'],ans:1,expl:'Ns ≤ 20 → multicellulaire. 20-60 → monocellulaire. 60-100 → double corps. >150 → hélice.'},
  {bloc:'u8b4',diff:'moyen',q:'La HMT (Hauteur Manométrique Totale) est',opts:['HMT = Hgéo + Jasp + Jref + (PB-PA)/ρg','HMT = Hgéo uniquement','HMT = Jasp + Jref','HMT = Q×H'],ans:0,expl:'HMT = hauteur géométrique + pertes aspiration + pertes refoulement + différence de pression.'},
  {bloc:'u8b4',diff:'eleve',q:'Quand on change la vitesse N d\'une pompe, Q varie comme',opts:['Q₂ = Q₁×(N₂/N₁)','Q₂ = Q₁×(N₂/N₁)²','Q₂ = Q₁×(N₂/N₁)³','Q₂ = Q₁ constant'],ans:0,expl:'Changement de vitesse : Q∝N, H∝N², P∝N³. Loi de similitude des turbopompes.'},
  {bloc:'u8b4',diff:'eleve',q:'Quand on change la vitesse N d\'une pompe, H varie comme',opts:['H₂ = H₁×(N₂/N₁)','H₂ = H₁×(N₂/N₁)²','H₂ = H₁×(N₂/N₁)³','H₂ = H₁ constant'],ans:1,expl:'H ∝ N². Si on double la vitesse, la hauteur est multipliée par 4.'},
  {bloc:'u8b4',diff:'tresdifficile',q:'La hauteur maximale d\'aspiration au niveau de la mer est de',opts:['5,33 m','7,00 m','10,33 m','15,00 m'],ans:2,expl:'Ha max théorique au niveau mer = 10,33 m. À l\'altitude Z : Ha = 10,33 - 0,0012×Z.'},
  {bloc:'u8b4',diff:'moyen',q:'Le rognage de la roue (≤15%) modifie le débit selon',opts:['Q₂ = Q₁×(D₂/D₁)²','Q₂ = Q₁×(D₂/D₁)','Q₂ = Q₁ constant','Q₂ = Q₁×(D₂/D₁)³'],ans:0,expl:'Rognage ≤10-15% : Q∝D², H∝D², P∝D⁴.'},
  {bloc:'u8b4',diff:'facile',q:'Les 4 courbes caractéristiques d\'une pompe sont',opts:['Q/H, Q/P, Q/η, Q/NPSHreq','Q/t, Q/p, Q/V, Q/T','H/t, P/t, η/t, NPSH/t','Aucune'],ans:0,expl:'Courbes : débit-hauteur (HMT), débit-puissance, débit-rendement, débit-NPSH requis.'},
  {bloc:'u8b4',diff:'tresdifficile',q:'La formule de Bresse pour le diamètre économique est',opts:['Φ = 1,5×√Q × 1000 [mm]','Φ = √Q × 1000 [mm]','Φ = Q × 1000 [mm]','Φ = 0,5×√Q × 1000 [mm]'],ans:0,expl:'Bresse : Φth = 1,5×√Q(m³/s)×1000 [mm]. Vm ≈ 0,57 m/s. Bonnin : Φth = √Q×1000, Vm ≈ 1,27 m/s.'},
  {bloc:'u8b4',diff:'tresdifficile',q:'Le paramètre S (vitesse spécifique d\'aspiration) vaut',opts:['S = N√Q/NPSHr^(3/4)','S = Q/H','S = N×H','S = D×Q'],ans:0,expl:'S = N√Q/NPSHr^(3/4). Pompe 1 ouïe : S≈180. 2 ouïes/multicellulaire : S≈160. 160-210 = bonne aspiration.'},
  {bloc:'u8b4',diff:'facile',q:'Une pompe immergée est utilisée pour',opts:['Les petits débits','Les forages profonds (70-300m)','Les surfaces','Les fontaines'],ans:1,expl:'Pompes immergées = forages profonds, moteur dans l\'eau, rotor noyé.'},
  {bloc:'u8b4',diff:'moyen',q:'À l\'aspiration, la crépine doit être immergée d\'au moins',opts:['0,10 m','0,30 m','1,00 m','2,00 m'],ans:1,expl:'Norme NF CR13932 : crépine immergée ≥0,30m sous basses eaux, ≥0,50m sous la crépine.'},

  // === BLOC 5: Qualité & Traitement de l'Eau (11 questions) ===
  {bloc:'u8b5',diff:'facile',q:'Selon l\'OMS, les coliformes totaux dans l\'eau potable doivent être',opts:['0/100mL','10/100mL','100/100mL','1000/100mL'],ans:0,expl:'OMS, CEE, normes françaises : 0 coliformes totaux et fécaux / 100 mL.'},
  {bloc:'u8b5',diff:'facile',q:'La maladie hydrique causée par Salmonella typhi est',opts:['Le choléra','La fièvre typhoïde','La bilharziose','L\'ambiase'],ans:1,expl:'Fièvre typhoïde = Salmonella typhi. Survit des semaines/mois, jusqu\'à 5 mois dans la glace.'},
  {bloc:'u8b5',diff:'moyen',q:'Le choléra est causé par',opts:['Salmonella typhi','Vibrio cholerae','Shigella','Entamoeba histolytica'],ans:1,expl:'Choléra = Vibrio cholerae. Endémique Asie/Afrique. Très sensible au chlore.'},
  {bloc:'u8b5',diff:'moyen',q:'La bilharziose (schistosomiase) est causée par',opts:['Une bactérie','Un virus','Un ver parasite (Schistosoma)','Un champignon'],ans:2,expl:'Bilharziose = Schistosoma mansoni, ver parasite. Milieux tropicaux.'},
  {bloc:'u8b5',diff:'eleve',q:'La méthémoglobinémie est causée par',opts:['Le plomb','Les nitrates/nitrites','Le mercure','Le fluor'],ans:1,expl:'Nitrate/nitrite → méthémoglobinémie (surtout nourrissons) + cancer estomac.'},
  {bloc:'u8b5',diff:'eleve',q:'Le saturnisme est causé par l\'accumulation de',opts:['Mercure','Plomb','Cadmium','Arsenic'],ans:1,expl:'Saturnisme = plomb. Accumulation os, anémie, paralysie.'},
  {bloc:'u8b5',diff:'moyen',q:'Le fluor dans l\'eau, à plus de 4 g/m³, provoque',opts:['Des caries','Des macules dentaires','La croissance osseuse','Rien'],ans:1,expl:'Fluor >4 g/m³ → macules dentaires. >15 g/m³ → fluorose osseuse.'},
  {bloc:'u8b5',diff:'tresdifficile',q:'La formule du Niveau Autorisé (NA) pour substances toxiques est',opts:['NA = ADI×60/FI','NA = ADI×FI','NA = ADI/60','NA = FI×60/ADI'],ans:0,expl:'NA = ADI×60/FI. ADI = prise moyenne quotidienne, FI = facteur d\'impact, 60-65 kg = poids moyen.'},
  {bloc:'u8b5',diff:'facile',q:'Une eau potable doit être',opts:['Incolore, insipide, inodore','Colorée et parfumée','Trouble et sucrée','Salée'],ans:0,expl:'Eau potable = saine, goût agréable, attrayante, incolore, insipide, inodore.'},
  {bloc:'u8b5',diff:'moyen',q:'Le pH de l\'eau potable selon les normes françaises doit être entre',opts:['5,0 et 7,0','6,5 et 8,5','7,0 et 10,0','4,0 et 6,0'],ans:1,expl:'Normes françaises : pH 6,5-8,5. Directive UE : 6,5-9,5 (objectif 6,5-8,5).'},
  {bloc:'u8b5',diff:'eleve',q:'La maladie de Minamata est causée par',opts:['Le plomb','Le mercure','Le cadmium','L\'arsenic'],ans:1,expl:'Mercure → maladie de Minamata. Gingivite, stomatite, tumeurs, atteinte système nerveux.'},

  // === BLOC 6: Cycle de l'Eau & Hydrologie (8 questions) ===
  {bloc:'u8b6',diff:'facile',q:'Le cycle de l\'eau est alimenté principalement par',opts:['La gravité','L\'énergie solaire','Le vent','La géothermie'],ans:1,expl:'Le soleil fournit l\'énergie pour l\'évaporation, moteur principal du cycle de l\'eau.'},
  {bloc:'u8b6',diff:'facile',q:'L\'évapotranspiration combine',opts:['Évaporation + transpiration des plantes','Pluie + neige','Infiltration + ruissellement','Condensation + précipitation'],ans:0,expl:'Évapotranspiration = évaporation du sol + transpiration des végétaux.'},
  {bloc:'u8b6',diff:'moyen',q:'Un aquifère est',opts:['Une rivière souterraine','Une formation géologique perméable contenant de l\'eau','Un lac','Un glacier'],ans:1,expl:'Aquifère = formation géologique perméable capable de stocker et transmettre l\'eau souterraine.'},
  {bloc:'u8b6',diff:'moyen',q:'Le bassin versant est défini comme',opts:['Un réservoir','Le territoire drainé par un cours d\'eau et ses affluents','Une nappe phréatique','Un barrage'],ans:1,expl:'Bassin versant = surface topographique où toutes les eaux convergent vers un même exutoire.'},
  {bloc:'u8b6',diff:'eleve',q:'L\'infiltration est le processus par lequel l\'eau',opts:['S\'évapore','Pénètre dans le sol','Ruisselle en surface','Est pompée'],ans:1,expl:'Infiltration = pénétration de l\'eau dans le sol, alimentant les nappes phréatiques.'},
  {bloc:'u8b6',diff:'eleve',q:'Le ruissellement se produit quand',opts:['Le sol est sec','L\'intensité de pluie > capacité d\'infiltration du sol','Il n\'y a pas de pente','La température est basse'],ans:1,expl:'Ruissellement = excès d\'eau quand l\'intensité de pluie dépasse la capacité d\'infiltration.'},
  {bloc:'u8b6',diff:'moyen',q:'Une nappe phréatique est dite libre quand',opts:['Elle est sous pression','Sa surface est à la pression atmosphérique','Elle est très profonde','Elle est polluée'],ans:1,expl:'Nappe libre = surface à pression atmosphérique. Nappe captive = confinée entre 2 couches imperméables, sous pression.'},
  {bloc:'u8b6',diff:'tresdifficile',q:'Le bilan hydrologique simplifié s\'écrit',opts:['P = ETR + R + I','P = ETR - R','P = R - ETR','P = ETR × R'],ans:0,expl:'Bilan : P (précipitations) = ETR (évapotranspiration réelle) + R (ruissellement) + I (infiltration).'}
];

// --- UE08 Flashcards ---
const UE08_FLASHCARDS = [
  {topic:'Régimes',q:'Laminaire vs Turbulent ?',a:'<strong>Re < 2000</strong> : laminaire<br><strong>2000-4000</strong> : transitoire<br><strong>Re > 4000</strong> : turbulent'},
  {topic:'Régimes',q:'Fluvial vs Torrentiel ?',a:'<strong>Fr < 1</strong> : fluvial (subcritique)<br><strong>Fr > 1</strong> : torrentiel (supercritique)<br><strong>Fr = 1</strong> : critique'},
  {topic:'Bernoulli',q:'Charge hydraulique H ?',a:'<strong>H = z + p/ρg + V²/2g</strong><br>Position + Pression + Cinétique'},
  {topic:'Pertes',q:'Darcy-Weisbach ?',a:'<strong>ΔH = λ(L/D)(U²/2g)</strong><br>λ via Colebrook-White'},
  {topic:'Pertes',q:'Manning-Strickler (conduite) ?',a:'<strong>ΔH ≈ 10,294×Q²×L/(KS²×D^(16/3))</strong><br>PVC : KS=120'},
  {topic:'Canal',q:'Manning-Strickler (canal) ?',a:'<strong>Q = KS×S×RH^(2/3)×√I</strong><br>U = KS×RH^(2/3)×√I'},
  {topic:'Pompe',q:'Vitesse spécifique Ns ?',a:'<strong>Ns = N√Q/H^(3/4)</strong><br>Ns≤20 → multicellulaire<br>20-60 → monocellulaire'},
  {topic:'Pompe',q:'Similitude : Q, H, P vs N ?',a:'<strong>Q ∝ N</strong><br><strong>H ∝ N²</strong><br><strong>P ∝ N³</strong>'},
  {topic:'Pompe',q:'Cavitation et NPSH ?',a:'<strong>NPSHdis > NPSHreq + 0,5</strong><br>Cavitation = p < pv → ébullition'},
  {topic:'Pompe',q:'Hauteur max aspiration ?',a:'<strong>10,33 m</strong> au niveau de la mer<br>Réduite en altitude : -0,0012×Z'},
  {topic:'Diamètre',q:'Formule de Bresse ?',a:'<strong>Φ = 1,5×√Q × 1000 [mm]</strong><br>Vm ≈ 0,57 m/s'},
  {topic:'Eau',q:'Qualité — Coliformes ?',a:'<strong>0/100 mL</strong><br>OMS, CEE, normes françaises'},
  {topic:'Eau',q:'Principales maladies hydriques ?',a:'<strong>Typhoïde</strong> (Salmonella)<br><strong>Choléra</strong> (Vibrio)<br><strong>Bilharziose</strong> (Schistosoma)'},
  {topic:'Eau',q:'Métaux toxiques et effets ?',a:'<strong>Plomb</strong> → saturnisme<br><strong>Mercure</strong> → Minamata<br><strong>Cadmium</strong> → reins<br><strong>Arsenic</strong> → cancer'},
  {topic:'Cycle',q:'Bilan hydrologique ?',a:'<strong>P = ETR + R + I</strong><br>Précipitations = Évapotranspiration + Ruissellement + Infiltration'},
  {topic:'Aquifère',q:'Nappe libre vs captive ?',a:'<strong>Libre</strong> : surface à Patm<br><strong>Captive</strong> : confinée entre 2 imperméables, sous pression'}
];

// --- UE08 Technologies ---
const UE08_TECHNOS = [
  {name:'Écoulement en charge',icon:'🔧',principe:'Conduite circulaire pleine, pression > Patm',types:['Réseaux eau potable','Conduites forcées','Adductions'],lcoe:'Darcy-Weisbach / Manning-Strickler',vie:'PVC KS=120, Fonte KS=80'},
  {name:'Écoulement à surface libre',icon:'🌊',principe:'Interface eau-air, pression atmosphérique',types:['Rivières et canaux naturels','Réseaux assainissement','Canaux d\'irrigation'],lcoe:'Manning-Strickler canal',vie:'Fr<1 fluvial, Fr>1 torrentiel'},
  {name:'Pompe centrifuge',icon:'⚙️',principe:'ΔP/ρ = -Δ(U²/2) : vitesse→pression',types:['Monocellulaire (Ns 20-60)','Multicellulaire (Ns≤20)','Hélico-centrifuge (Ns 100-150)'],lcoe:'NPSH, HMT, rendement η',vie:'Rognage ≤15%, similitude N'},
  {name:'Traitement de l\'eau',icon:'🧪',principe:'Rendre l\'eau potable : saine, agréable',types:['Physique (filtration, décantation)','Chimique (chlore, ozone, coagulants)','Biologique (charbon actif)'],lcoe:'OMS : 0 coliformes/100mL',vie:'pH 6,5-8,5, turbidité <2 NTU'}
];

// --- UE08 Formules ---
const UE08_FORMULES = [
  {name:'Reynolds',math:'Re = U×DH/ν = 4Q/(πDν)',desc:'Laminaire <2000, Turbulent >4000.'},
  {name:'Froude',math:'Fr = U/√(g×ym)',desc:'Fluvial <1, Torrentiel >1.'},
  {name:'Bernoulli',math:'H = z + p/ρg + V²/2g',desc:'Charge hydraulique totale [m].'},
  {name:'Darcy-Weisbach',math:'ΔH = λ·(L/D)·(U²/2g)',desc:'Pertes linéaires en charge.'},
  {name:'Colebrook-White',math:'1/√λ = -2log(k/(3,71D)+2,51/(Re√λ))',desc:'λ = f(Re, k/D).'},
  {name:'Manning-Strickler (conduite)',math:'ΔH ≈ 10,294×Q²×L/(KS²×D^(16/3))',desc:'PVC:KS=120; Béton:KS=100.'},
  {name:'Manning-Strickler (canal)',math:'Q = KS×S×RH^(2/3)×√I',desc:'U = KS×RH^(2/3)×√I.'},
  {name:'Profondeur critique',math:'yc = (Q²/(b²g))^(1/3)',desc:'Canal rectangulaire.'},
  {name:'Vitesse spécifique',math:'Ns = N√Q/H^(3/4)',desc:'Type de pompe.'},
  {name:'Similitude pompes',math:'Q₂/Q₁=N₂/N₁, H₂/H₁=(N₂/N₁)²',desc:'P₃∝N³.'},
  {name:'HMT',math:'HMT = Hgéo + Jasp + Jref + ΔP/ρg',desc:'Hauteur Manométrique Totale.'},
  {name:'NPSH',math:'NPSHdis > NPSHreq + 0,5',desc:'Condition anti-cavitation.'},
  {name:'Bresse (diamètre)',math:'Φ = 1,5×√Q × 1000 [mm]',desc:'Diamètre économique.'},
  {name:'Bilan hydrologique',math:'P = ETR + R + I',desc:'Précipitations = ETR + Ruissellement + Infiltration.'},
  {name:'Qualité (NA)',math:'NA = ADI×60/FI',desc:'Niveau Autorisé substances toxiques.'}
];

// --- Register ---
registerUE('ue08', {
  qcmBlocs: UE08_QCM_BLOCS,
  qcm: UE08_QCM,
  flashcards: UE08_FLASHCARDS,
  formules: UE08_FORMULES,
  technos: UE08_TECHNOS
});
registerFormules(UE08_FORMULES);
registerTechnos(UE08_TECHNOS);
