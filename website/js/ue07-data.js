// ============================================
// UE07 — Infrastructure & Techniques de Destruction
// ============================================

const UE07_QCM_BLOCS = [
  { id:'u7b1', name:'Concepts & Définitions', icon:'📖' },
  { id:'u7b2', name:'Évaluation Infra', icon:'🔍' },
  { id:'u7b3', name:'Méthodes Déconstruction', icon:'🔨' },
  { id:'u7b4', name:'Sécurité & Environnement', icon:'🛡️' },
  { id:'u7b5', name:'Réglementation & Normes', icon:'📜' },
  { id:'u7b6', name:'Amiante, Plomb & Diag', icon:'☣️' },
  { id:'u7b7', name:'Déchets & Valorisation', icon:'♻️' }
];

const UE07_QCM = [
  // === BLOC 1: Concepts & Définitions (7 questions) ===
  {bloc:'u7b1',diff:'facile',q:'Déconstruction =',opts:['Démolition classique','Démolition intelligente avec valorisation','Rénovation','Agrandissement'],ans:1,expl:'Déconstruction = tri et valorisation des matériaux.'},
  {bloc:'u7b1',diff:'facile',q:'Infrastructure (sens large) =',opts:['Routes uniquement','Toutes installations nécessaires à une communauté','Bâtiments uniquement','Réseaux électriques uniquement'],ans:1,expl:'Ensemble des équipements nécessaires à la vie d\'une communauté.'},
  {bloc:'u7b1',diff:'facile',q:'Curage =',opts:['Nettoyer façade','Retirer éléments non structuraux','Peindre','Installer échafaudages'],ans:1,expl:'Retrait des éléments non porteurs avant déconstruction.'},
  {bloc:'u7b1',diff:'moyen',q:'Évaluation infrastructure vise à',opts:['Démolir uniquement','Orienter vers renforcement, réparation ou remplacement','Construire du neuf','Vendre'],ans:1,expl:'Décision : renforcer, réparer, remplacer, adapter ou démolir.'},
  {bloc:'u7b1',diff:'moyen',q:'Démolition vs Déconstruction',opts:['Aucune différence','Déconstruction trie et valorise','Démolition est plus lente','Déconstruction est plus bruyante'],ans:1,expl:'Déconstruction = démontage sélectif.'},
  {bloc:'u7b1',diff:'eleve',q:'Désamiantage obligatoire',opts:['Après démolition','Avant toute déconstruction','Pendant','Si demandé'],ans:1,expl:'Étape préalable obligatoire (risque sanitaire).'},
  {bloc:'u7b1',diff:'tresdifficile',q:'CCTP =',opts:['Coût total','Cahier des Clauses Techniques Particulières','Contrat de travail','Calcul temps partiels'],ans:1,expl:'Document contractuel définissant les spécifications techniques.'},

  // === BLOC 2: Évaluation Infrastructures (5 questions) ===
  {bloc:'u7b2',diff:'facile',q:'Archives des infrastructures importantes pour',opts:['Décoration','Connaître l\'historique pour évaluation','Marketing','Vente'],ans:1,expl:'Historique des interventions nécessaire à l\'évaluation.'},
  {bloc:'u7b2',diff:'moyen',q:'Évaluation intervient en phase',opts:['Conception','Construction','Exploitation','Toutes'],ans:2,expl:'Principalement en phase d\'exploitation/maintenance.'},
  {bloc:'u7b2',diff:'moyen',q:'Fin de vie d\'une infrastructure =',opts:['Démolition uniquement','Démolition, déconstruction ou réhabilitation','Conservation uniquement','Vente uniquement'],ans:1,expl:'3 options : démolir, déconstruire ou réhabiliter.'},
  {bloc:'u7b2',diff:'eleve',q:'Amortissement sert à',opts:['Augmenter valeur','Déterminer valeur résiduelle','Calculer impôts uniquement','Planifier construction'],ans:1,expl:'Méthode comptable de détermination de valeur résiduelle.'},
  {bloc:'u7b2',diff:'tresdifficile',q:'Méthode d\'évaluation comptable =',opts:['Visuelle','Par amortissement','Destructive','Expérimentale'],ans:1,expl:'Méthode par amortissement comptable.'},

  // === BLOC 3: Méthodes de Déconstruction (9 questions) ===
  {bloc:'u7b3',diff:'facile',q:'Nombre de techniques de déconstruction',opts:['2','3','4','5'],ans:2,expl:'4 : manuelle, mécanique, explosifs, expansion.'},
  {bloc:'u7b3',diff:'facile',q:'Le dérasement est une technique',opts:['Mécanique','Manuelle','Explosive','Chimique'],ans:1,expl:'Technique manuelle par le haut.'},
  {bloc:'u7b3',diff:'moyen',q:'Sapement =',opts:['Saper le moral','Attaquer la base de la structure','Couper le toit','Peindre'],ans:1,expl:'Attaque manuelle par la base.'},
  {bloc:'u7b3',diff:'moyen',q:'Déconstruction mécanique utilise',opts:['Marteaux et burins','Pelles hydrauliques avec BRH, cisailles','Explosifs','Mortier expansif'],ans:1,expl:'Engins lourds avec accessoires spécialisés.'},
  {bloc:'u7b3',diff:'moyen',q:'Explosifs adaptés pour',opts:['Petits bâtiments','Immeubles de grande hauteur isolés','Maisons','Rénovations'],ans:1,expl:'Foudroyage : grands immeubles, ouvrages d\'art.'},
  {bloc:'u7b3',diff:'moyen',q:'Vérins hydrauliques = technique',opts:['Manuelle','Mécanique','Explosive','Par expansion'],ans:3,expl:'Expansion mécanique.'},
  {bloc:'u7b3',diff:'eleve',q:'Mortier expansif = technique',opts:['Manuelle','Mécanique','Explosive','Par expansion'],ans:3,expl:'Expansion chimique.'},
  {bloc:'u7b3',diff:'eleve',q:'Technique sans vibration ni bruit',opts:['Manuelle','Mécanique','Explosifs','Expansion (mortier)'],ans:3,expl:'Mortier expansif = expansion silencieuse.'},
  {bloc:'u7b3',diff:'tresdifficile',q:'Foudroyage =',opts:['Déconstruction manuelle','Déconstruction par explosifs','Déconstruction mécanique','Déconstruction chimique'],ans:1,expl:'Foudroyage = technique par explosifs pour grands ouvrages.'},

  // === BLOC 4: Sécurité & Environnement (8 questions) ===
  {bloc:'u7b4',diff:'facile',q:'EPI =',opts:['Équipements Protection Individuelle','Éléments Production Industrielle','Études Projet Ingénierie','Équipements Première Intervention'],ans:0,expl:'Casques, gants, lunettes, masques.'},
  {bloc:'u7b4',diff:'facile',q:'Amiante dangereuse car',opts:['Maux de tête','Cancers respiratoires','Allergies cutanées','Fatigue'],ans:1,expl:'Fibres cancérogènes → cancers pulmonaires.'},
  {bloc:'u7b4',diff:'moyen',q:'Plomb dans bâtiments =',opts:['Fondations','Anciennes peintures','Béton','Verre'],ans:1,expl:'Céruse dans anciennes peintures.'},
  {bloc:'u7b4',diff:'moyen',q:'Déchets classés en',opts:['Durs et mous','Dangereux et non dangereux','Lourds et légers','Chers et gratuits'],ans:1,expl:'Dangereux (amiante) et non dangereux (inertes/non inertes).'},
  {bloc:'u7b4',diff:'moyen',q:'Nuisances chantier =',opts:['Odeurs','Bruit, poussière, vibrations, trafic','Chaleur','Lumière'],ans:1,expl:'4 nuisances principales à gérer.'},
  {bloc:'u7b4',diff:'moyen',q:'Gravats peuvent être',opts:['Enfouis uniquement','Concassés et recyclés en granulats','Brûlés','Abandonnés'],ans:1,expl:'Concassage → granulats recyclés.'},
  {bloc:'u7b4',diff:'eleve',q:'Valorisation déchets =',opts:['Enfouir','Réutiliser/recycler','Brûler sans récupération','Exporter'],ans:1,expl:'Réemploi, recyclage, valorisation matière/énergétique.'},
  {bloc:'u7b4',diff:'tresdifficile',q:'Décontamination sols après déconstruction',opts:['Optionnelle','Obligatoire si pollution','N\'existe pas','Avant démolition'],ans:1,expl:'Obligatoire en cas de pollution avérée.'},

  // === BLOC 5: Réglementation & Normes (10 questions) ===
  {bloc:'u7b5',diff:'facile',q:'Le permis de démolir est délivré par',opts:['Le propriétaire','L\'administration (mairie)','L\'entreprise','L\'architecte'],ans:1,expl:'Autorisation administrative obligatoire dans les zones protégées.'},
  {bloc:'u7b5',diff:'facile',q:'Le permis de démolir est OBLIGATOIRE en zone',opts:['Zone industrielle','Monuments historiques et patrimoine protégé','Zone rurale','Zone commerciale'],ans:1,expl:'Obligatoire en zones de protection du patrimoine (monuments, sites, quartiers protégés).'},
  {bloc:'u7b5',diff:'moyen',q:'Le permis de démolir n\'est PAS obligatoire pour',opts:['Bâtiment classé','Démolition imposée par décision de justice','Zone patrimoniale','Site protégé'],ans:1,expl:'Non obligatoire si imposé par administration ou décision de justice, ou pour ouvrages vétustes/insalubres.'},
  {bloc:'u7b5',diff:'eleve',q:'La norme ISO 13822:2001 concerne',opts:['La sécurité incendie','L\'évaluation des constructions existantes','Le calcul parasismique','La gestion des déchets'],ans:1,expl:'ISO 13822 = Bases du calcul des constructions — Évaluation des constructions existantes.'},
  {bloc:'u7b5',diff:'eleve',q:'La norme NF P 01-010 définit',opts:['La résistance du béton','La durée de référence d\'un produit','Les dimensions des briques','La couleur des peintures'],ans:1,expl:'NF P 01-010 : durée de référence = durée de vie théorique retenue pour l\'unité fonctionnelle.'},
  {bloc:'u7b5',diff:'eleve',q:'L\'interdiction de l\'amiante en France date du',opts:['1er janvier 1990','1er janvier 1997','1er janvier 2000','1er janvier 2005'],ans:1,expl:'Interdiction totale (fabrication, transformation, vente, importation) au 1er janvier 1997.'},
  {bloc:'u7b5',diff:'tresdifficile',q:'Le désamiantage est obligatoire avant démolition depuis',opts:['1er janvier 1997','1er janvier 2002','1er janvier 2005','1er janvier 2010'],ans:1,expl:'Obligatoire depuis le 1er janvier 2002 pour les bâtiments construits avant le 1er juillet 1997.'},
  {bloc:'u7b5',diff:'moyen',q:'La Loi Grenelle 2 (France) concerne',opts:['La construction neuve','La gestion des déchets du BTP','La couleur des bâtiments','Les assurances'],ans:1,expl:'Grenelle 2 = gestion des déchets du BTP, objectif 70% de valorisation matière.'},
  {bloc:'u7b5',diff:'tresdifficile',q:'Que signifient PGC et PPSPS dans le CCTP ?',opts:['Plan Général Coordination / Plan Particulier Sécurité Protection Santé','Plan Gestion Chantier / Plan Prévention','Projet Général Construction / Plan Particulier','Aucune de ces réponses'],ans:0,expl:'PGC = Plan Général de Coordination ; PPSPS = Plan Particulier de Sécurité et de Protection de la Santé.'},
  {bloc:'u7b5',diff:'hard',q:'L\'objectif européen de valorisation matière des déchets BTP non dangereux est de',opts:['30%','50%','70%','90%'],ans:2,expl:'Objectif européen : 70% de valorisation matière.'},

  // === BLOC 6: Amiante, Plomb & Diagnostics (11 questions) ===
  {bloc:'u7b6',diff:'facile',q:'Le seuil réglementaire amiante dans l\'air est de',opts:['1 fibre/L','5 fibres/L','10 fibres/L','50 fibres/L'],ans:1,expl:'Seuil = 5 fibres par litre d\'air.'},
  {bloc:'u7b6',diff:'moyen',q:'L\'amiante-ciment représente quel % de l\'usage de l\'amiante ?',opts:['30%','50%','70%','90%'],ans:3,expl:'Amiante-ciment = 90% de l\'usage total.'},
  {bloc:'u7b6',diff:'eleve',q:'Combien de catégories de classement pour l\'amiante ?',opts:['3','5','7','9'],ans:3,expl:'9 catégories : brut, poudre, liquide, feuille, tressé, résine, ciment, noir, équipement.'},
  {bloc:'u7b6',diff:'eleve',q:'Quel appareil est la MÉTHODE DE RÉFÉRENCE pour mesurer l\'amiante ?',opts:['Microscope optique (MOCP)','Microscope électronique à transmission (MET)','Microscope électronique à balayage (MEB)','Appareil à rayon laser (Phazir)'],ans:1,expl:'MET = méthode de référence, couplé cristallographie + spectrométrie X. Norme AFNOR X 43 050.'},
  {bloc:'u7b6',diff:'tresdifficile',q:'Selon la norme AFNOR X 43 050, une fibre d\'amiante a un diamètre',opts:['< 1 µm','< 3 µm','< 5 µm','< 10 µm'],ans:1,expl:'Diamètre < 3 µm, longueur ≥ 5 µm, rapport L/l > 3.'},
  {bloc:'u7b6',diff:'facile',q:'La maladie causée par le plomb s\'appelle',opts:['La silicose','Le saturnisme','L\'asbestose','La tuberculose'],ans:1,expl:'Saturnisme = intoxication au plomb, une des plus vieilles maladies connues.'},
  {bloc:'u7b6',diff:'moyen',q:'Le plomb s\'accumule principalement dans',opts:['Le foie','Les reins','Les os','Le cerveau'],ans:2,expl:'S\'accumule dans les os pendant plusieurs dizaines d\'années.'},
  {bloc:'u7b6',diff:'moyen',q:'La fluorescence X mesure le plomb avec un seuil de',opts:['0,1 mg/cm²','1 mg/cm²','5 mg/cm²','10 mg/cm²'],ans:1,expl:'Fluorescence X : concentration surfacique, seuil < 1 mg/cm², résultats en quelques secondes.'},
  {bloc:'u7b6',diff:'eleve',q:'Quelle technique de déplombage utilise de l\'air chaud < 450°C ?',opts:['Sablage','Grattage','Décapage chimique','Décapage thermique'],ans:3,expl:'Décapage thermique : air chaud < 450°C ; si dépassé → fumées toxiques.'},
  {bloc:'u7b6',diff:'tresdifficile',q:'Le diagnostic amiante (vente) est valable',opts:['6 mois','1 an','3 ans','10 ans'],ans:2,expl:'Amiante vente : 3 ans (art. L.1334-13). Termites : 6 mois. Plomb : 1 an. DPE : 10 ans.'},
  {bloc:'u7b6',diff:'moyen',q:'Le DDT (location) comprend combien de diagnostics ?',opts:['3','5','7','9'],ans:1,expl:'DDT location = 5 diagnostics : amiante, ERNT, DPE, CREP, mesurage superficie.'},

  // === BLOC 7: Déchets & Valorisation (10 questions) ===
  {bloc:'u7b7',diff:'facile',q:'Les déchets de classe 1 sont',opts:['Inertes','Non dangereux','Déchets industriels spéciaux','Ordures ménagères'],ans:2,expl:'Classe 1 = déchets industriels spéciaux (hydrocarbures, pesticides, amiante).'},
  {bloc:'u7b7',diff:'moyen',q:'Les déchets inertes (gravats, béton) sont de classe',opts:['Classe 1','Classe 2','Classe 3','Classe 4'],ans:2,expl:'Classe 3 = inertes (gravats, briques, mortier, ciment, béton).'},
  {bloc:'u7b7',diff:'eleve',q:'La valorisation matière se distingue en 3 types',opts:['Incinération, compostage, enfouissement','Réemploi, réutilisation, recyclage','Collecte, tri, transport','Aucune de ces réponses'],ans:1,expl:'3 types : réemploi (même usage), réutilisation (usage différent), recyclage (réintroduction en production).'},
  {bloc:'u7b7',diff:'eleve',q:'Le réemploi se définit comme',opts:['Détruire et refabriquer','Nouvel emploi en l\'état pour usage analogue','Transformer chimiquement','Brûler pour énergie'],ans:1,expl:'Réemploi = nouvel emploi en l\'état pour un usage analogue (ex: terre végétale, déblais-remblais).'},
  {bloc:'u7b7',diff:'tresdifficile',q:'La valorisation énergétique utilise principalement',opts:['Le compostage','L\'incinération de déchets ménagers','Le recyclage mécanique','La méthanisation exclusive'],ans:1,expl:'Valorisation énergétique = principalement incinération → électricité et/ou chaleur.'},
  {bloc:'u7b7',diff:'facile',q:'Le marché français de la déconstruction pèse environ',opts:['100 millions €','500 millions €','1 milliard €','5 milliards €'],ans:2,expl:'Environ 1 milliard d\'euros en 2011 (démolition + curage + désamiantage).'},
  {bloc:'u7b7',diff:'moyen',q:'Production annuelle de déchets de chantier en France',opts:['10 Mt','25 Mt','40 Mt','80 Mt'],ans:2,expl:'40 millions de tonnes/an de déchets de chantier. 500 Mt/an de déchets de démolition.'},
  {bloc:'u7b7',diff:'moyen',q:'Pour réduire les nuisances sonores, on privilégie',opts:['Le BRH en continu','Le croquage plutôt que la percussion','Plus de camions','Les charges explosives'],ans:1,expl:'Croquage (plutôt que percussion), arase par sciage, purge au broyeur plutôt que BRH.'},
  {bloc:'u7b7',diff:'eleve',q:'L\'arme la plus efficace contre les rejets de poussière est',opts:['Le vent','L\'eau (vaporisation en nuage)','Les bâches','La ventilation'],ans:1,expl:'Eau = seule arme efficace ; vaporisation en nuage + arrosage continu du chantier.'},
  {bloc:'u7b7',diff:'tresdifficile',q:'Le débourbeur de roue est utilisé pour',opts:['Augmenter la vitesse','Nettoyer les roues des camions en sortie de chantier','Réduire le bruit','Améliorer le rendement'],ans:1,expl:'Débourbeur de roue = dispositif de nettoyage à la sortie du chantier pour éviter la dispersion de boue/poussière.'},

  // === BLOC 8: Évaluation & Cycle de Vie (12 questions) ===
  {bloc:'u7b2',diff:'moyen',q:'Une évaluation EX ANTE est réalisée',opts:['Après le projet','Pendant le projet','Avant adoption définitive','Jamais'],ans:2,expl:'Ex ante = à priori, avant adoption définitive du projet.'},
  {bloc:'u7b2',diff:'moyen',q:'Une évaluation EX POST est réalisée',opts:['Avant le projet','Pendant le projet','Juste après la fin','Bien après la fin du programme'],ans:3,expl:'Ex post = à posteriori, après la fin du programme pour mesurer l\'impact.'},
  {bloc:'u7b2',diff:'eleve',q:'L\'évaluation se distingue du contrôle car',opts:['C\'est la même chose','Le contrôle vérifie la conformité à des normes','L\'évaluation est plus rapide','Le contrôle est facultatif'],ans:1,expl:'Contrôle = conformité à des normes prédéterminées. Évaluation = jugement avec référentiel ad hoc.'},
  {bloc:'u7b2',diff:'eleve',q:'La durée de vie d\'une couche de roulement est de',opts:['5 ans','10 ans','20 ans','30 ans'],ans:1,expl:'Couche de roulement = 10 ans. Couche de forme = 30 ans.'},
  {bloc:'u7b2',diff:'tresdifficile',q:'La durée de service des ouvrages d\'art selon les Eurocodes est de',opts:['30 ans','50 ans','75 ans','100 ans'],ans:3,expl:'Ouvrages d\'art (Eurocodes) = durée de service de 100 ans.'},
  {bloc:'u7b2',diff:'tresdifficile',q:'Un pont est classé « ouvrage non courant » si une travée >',opts:['20 m','30 m','40 m','60 m'],ans:2,expl:'SETRA 1994 : travée > 40 m ou surface > 1200 m² ou mur > 9 m.'},
  {bloc:'u7b2',diff:'facile',q:'Les infrastructures DURES (hard) incluent',opts:['La formation','Les institutions financières','Les routes et autoroutes','La sécurité sociale'],ans:2,expl:'DURES = physiques : routes, ponts, ports, voies ferrées, aéroports, énergie.'},
  {bloc:'u7b2',diff:'moyen',q:'Les infrastructures SOUPLES (soft) incluent',opts:['Les ponts','Les aéroports','La formation et la R&D','Les hôpitaux'],ans:2,expl:'SOUPLES = immatérielles : formation, institutions financières, R&D, transfert de technologie.'},
  {bloc:'u7b2',diff:'eleve',q:'Les 3 finalités de l\'évaluation selon Stuffelbeam sont',opts:['Technique, économique, sociale','Mobilisatrice, stratégique, démocratique','Préventive, curative, palliative','Aucune'],ans:1,expl:'Stuffelbeam (1980) : 3 finalités = mobilisatrice, stratégique, démocratique.'},
  {bloc:'u7b2',diff:'moyen',q:'Le cycle de vie d\'une infrastructure comprend',opts:['2 étapes','4 étapes','Conception, réalisation, exploitation, fin de vie','Uniquement construction et démolition'],ans:2,expl:'Cycle complet : conception → réalisation → exploitation → fin de vie.'},
  {bloc:'u7b2',diff:'tresdifficile',q:'Les 6 méthodes d\'auscultation non destructive sont',opts:['Visuelle, sonore, olfactive, tactile, gustative, intuitive','Ondes mécaniques, EM, thermiques, électriques, radiographiques, optiques','Manuelle, mécanique, explosive, chimique, thermique, électrique','Aucune'],ans:1,expl:'6 méthodes : ondes mécaniques, électromagnétiques, thermiques, électriques/électrochimiques, radiographiques, optiques.'},
  {bloc:'u7b2',diff:'moyen',q:'Les 4 procédés d\'évaluation économique sont',opts:['Coût, bénéfice, risque, durée','Marchande, comptable, coût de production, subjective','Visuelle, mécanique, chimique, thermique','Aucune'],ans:1,expl:'4 procédés : valeur marchande, valeur comptable, coût de production, valeur subjective/théorique.'}
];

// --- UE07 Flashcards ---
const UE07_FLASHCARDS = [
  {topic:'Concepts',q:'Déconstruction vs Démolition ?',a:'<strong>Déconstruction</strong> = démolition intelligente avec <strong>tri et valorisation</strong>.<br><strong>Démolition</strong> = destruction sans tri.'},
  {topic:'Concepts',q:'3 options fin de vie infrastructure ?',a:'<strong>1.</strong> Démolition<br><strong>2.</strong> Déconstruction<br><strong>3.</strong> Réhabilitation'},
  {topic:'Étapes',q:'Étapes préalables à la déconstruction ?',a:'<strong>1. Désamiantage</strong><br><strong>2. Déplombage</strong><br><strong>3. Curage</strong> (retrait éléments non porteurs)'},
  {topic:'Techniques',q:'4 techniques de déconstruction ?',a:'<strong>1. Manuelle</strong> (dérasement, sapement)<br><strong>2. Mécanique</strong> (BRH, cisailles)<br><strong>3. Explosifs</strong> (foudroyage)<br><strong>4. Expansion</strong> (vérins, mortier)'},
  {topic:'Techniques',q:'Dérasement vs Sapement ?',a:'<strong>Dérasement</strong> = attaque par le haut<br><strong>Sapement</strong> = attaque par la base'},
  {topic:'Sécurité',q:'EPI ?',a:'<strong>Équipements de Protection Individuelle</strong> : casque, gants, lunettes, chaussures sécurité, masque.'},
  {topic:'Déchets',q:'2 catégories de déchets ?',a:'<strong>Dangereux</strong> : amiante, plomb, solvants<br><strong>Non dangereux</strong> : inertes (gravats) et non inertes (bois, plastiques)'},
  {topic:'Déchets',q:'Devenir des gravats ?',a:'<strong>Concassage → granulats recyclés</strong> pour nouvelles constructions.'},
  {topic:'Évaluation',q:'Utilité de l\'évaluation ?',a:'Orienter la décision : <strong>renforcement, réparation, remplacement, adaptation, réhabilitation ou démolition.</strong>'},
  {topic:'Planification',q:'PIC contient ?',a:'<strong>Plan d\'Installation de Chantier</strong> : accès, stockage, zones de tri, bureaux, vestiaires, sécurité.'},
  {topic:'Juridique',q:'CCTP ?',a:'<strong>Cahier des Clauses Techniques Particulières</strong> — document contractuel du chantier.'},
  {topic:'Sécurité',q:'Risques amiante et plomb ?',a:'<strong>Amiante</strong> : cancers respiratoires<br><strong>Plomb</strong> : saturnisme (peintures anciennes)'},
  {topic:'Réglementation',q:'Permis de démolir obligatoire ?',a:'Obligatoire en zones protégées : <strong>monuments historiques, patrimoine urbain/paysager/architectural</strong>.'},
  {topic:'Réglementation',q:'Amiante : interdiction et seuil ?',a:'Interdiction France : <strong>1er janvier 1997</strong><br>Seuil air : <strong>5 fibres/L</strong><br>Désamiantage obligatoire : <strong>1er janvier 2002</strong>'},
  {topic:'Amiante',q:'9 catégories d\'amiante ?',a:'I:Brut II:Poudre III:Liquide IV:Feuille V:Tressé VI:Résine <strong>VII:Ciment (90%)</strong> VIII:Noir IX:Équipement'},
  {topic:'Plomb',q:'4 techniques de déplombage ?',a:'<strong>1. Sablage</strong><br><strong>2. Grattage</strong><br><strong>3. Décapage chimique</strong><br><strong>4. Décapage thermique</strong> (<450°C)'},
  {topic:'Diagnostics',q:'Durées validité diagnostics ?',a:'Amiante : <strong>3 ans</strong><br>Termites : <strong>6 mois</strong><br>Plomb : <strong>1 an</strong><br>DPE : <strong>10 ans</strong>'},
  {topic:'Déchets',q:'3 classes de déchets ?',a:'<strong>Classe 1</strong> : dangereux (amiante)<br><strong>Classe 2</strong> : non dangereux (bois, plastiques)<br><strong>Classe 3</strong> : inertes (gravats, béton)'},
  {topic:'Valorisation',q:'3 types de valorisation ?',a:'<strong>Biologique</strong> : compostage, méthanisation<br><strong>Énergétique</strong> : incinération<br><strong>Matière</strong> : réemploi, réutilisation, recyclage'},
  {topic:'Évaluation',q:'Ex ante vs Ex post ?',a:'<strong>Ex ante</strong> = avant adoption<br><strong>Ex post</strong> = bien après la fin<br><strong>Concomitante</strong> = en continu'},
  {topic:'Cycle de vie',q:'Durées de vie clés ?',a:'Couche roulement : <strong>10 ans</strong><br>Couche forme : <strong>30 ans</strong><br>Ouvrages d\'art : <strong>100 ans</strong>'}
];

// --- UE07 Technologies (Déconstruction) ---
const UE07_TECHNOS = [
  {name:'Manuelle',icon:'✋',principe:'Intervention humaine directe',types:['Dérasement (par le haut)','Sapement (par la base)'],lcoe:'Marteaux-piqueurs, burins',vie:'Petits ouvrages'},
  {name:'Mécanique',icon:'🚜',principe:'Engins lourds avec accessoires',types:['BRH (Brise-Roche Hydraulique)','Cisailles acier/béton','Pinces de tri'],lcoe:'Pelles hydrauliques',vie:'Tout type d\'ouvrage'},
  {name:'Explosifs',icon:'💥',principe:'Charges explosives → effondrement',types:['Foudroyage immeubles','Ouvrages d\'art'],lcoe:'Bâtiment isolé requis',vie:'Grands ouvrages'},
  {name:'Expansion',icon:'🔩',principe:'Pression mécanique ou chimique',types:['Vérins/Écarteurs hydrauliques','Mortier expansif (chimique)'],lcoe:'Sans vibration ni bruit',vie:'Zones sensibles'}
];

// --- Register ---
registerUE('ue07', {
  qcmBlocs: UE07_QCM_BLOCS,
  qcm: UE07_QCM,
  flashcards: UE07_FLASHCARDS,
  technos: UE07_TECHNOS
});
registerTechnos(UE07_TECHNOS);
