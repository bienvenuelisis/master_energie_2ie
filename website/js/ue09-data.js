// ============================================
// UE09 — Assainissement de l'Eau
// ============================================

const UE09_QCM_BLOCS = [
  { id:'u9b1', name:'Ressources & Accès à l\'Eau', icon:'💧' },
  { id:'u9b2', name:'Systèmes d\'AEP', icon:'🚰' },
  { id:'u9b3', name:'Gestion des Services Eau', icon:'📋' },
  { id:'u9b4', name:'Assainissement — Concepts', icon:'🔄' },
  { id:'u9b5', name:'Réseaux & Traitement Eaux Usées', icon:'🔬' },
  { id:'u9b6', name:'Gestion & Indicateurs', icon:'📊' }
];

const UE09_QCM = [
  // === BLOC 1: Ressources & Accès à l'Eau (13 questions) ===
  {bloc:'u9b1',diff:'facile',q:'Quel % de la Terre est recouvert d\'eau ?',opts:['50%','72%','85%','97%'],ans:1,expl:'72% de la surface terrestre est recouverte d\'eau.'},
  {bloc:'u9b1',diff:'facile',q:'Quel % de l\'eau terrestre est de l\'eau douce ?',opts:['1%','2,5%','10%','25%'],ans:1,expl:'2,5% seulement est de l\'eau douce. 97,5% est de l\'eau de mer.'},
  {bloc:'u9b1',diff:'moyen',q:'Quel % de l\'eau douce est constitué de glaciers ?',opts:['30%','50%','68%','80%'],ans:2,expl:'68% de l\'eau douce = glaciers et neiges éternelles. 29,9% = eaux souterraines. 0,3% = lacs et rivières.'},
  {bloc:'u9b1',diff:'facile',q:'Combien de personnes n\'ont pas accès à l\'eau potable dans le monde ?',opts:['100 millions','400 millions','768 millions','2 milliards'],ans:2,expl:'768 millions (11% de la population mondiale), dont 327 millions en Afrique sub-saharienne.'},
  {bloc:'u9b1',diff:'moyen',q:'Dans les PED, quel % des maladies sont d\'origine hydrique ?',opts:['20%','40%','60%','80%'],ans:3,expl:'80% des maladies dans les PED sont d\'origine hydrique (diarrhée, choléra, etc.).'},
  {bloc:'u9b1',diff:'moyen',q:'Le corps humain est composé d\'eau à',opts:['50%','60%','70%','80%'],ans:3,expl:'80% du corps humain est formé d\'eau.'},
  {bloc:'u9b1',diff:'facile',q:'Les eaux souterraines proviennent principalement',opts:['De la mer','De l\'infiltration des pluies','Des usines','Du ciel'],ans:1,expl:'Eaux souterraines = fraction des précipitations infiltrée dans le sol (formations aquifères).'},
  {bloc:'u9b1',diff:'moyen',q:'Une ressource en eau NON renouvelable est',opts:['Un cours d\'eau','Un lac','Une nappe phréatique superficielle','Un aquifère profond (>durée vie humaine)'],ans:3,expl:'Aquifères profonds : temps de régénération > durée de vie humaine → non renouvelables.'},
  {bloc:'u9b1',diff:'eleve',q:'Le dessalement produit actuellement quel % de l\'eau potable mondiale ?',opts:['0,1%','1%','5%','10%'],ans:1,expl:'Dessalement = 1% de l\'eau potable mondiale. Deux procédés : distillation et osmose inverse.'},
  {bloc:'u9b1',diff:'eleve',q:'L\'eau de ruissellement représente quelle proportion des eaux de surface ?',opts:['5-10%','20 à >50%','60-70%','80-90%'],ans:1,expl:'De 20% (zones arides/sableuses) à >50% (zones rocheuses à forte pluviosité).'},
  {bloc:'u9b1',diff:'facile',q:'Un puits jaillissant (artésien) exploite',opts:['Une nappe libre','Une nappe captive sous pression','L\'eau de pluie directe','L\'eau de mer'],ans:1,expl:'Puits jaillissant = nappe captive sous pression → l\'eau remonte naturellement.'},
  {bloc:'u9b1',diff:'moyen',q:'Un avantage majeur des eaux souterraines est',opts:['Toujours potables sans traitement','Souvent exemptes de bactéries pathogènes','Très salées','Abondantes partout'],ans:1,expl:'Eaux souterraines souvent exemptes de bactéries pathogènes, utilisables sans traitement.'},
  {bloc:'u9b1',diff:'tresdifficile',q:'L\'eau douce accessible au final représente',opts:['1 000 milliards de m³','12 500 milliards de m³','40 000 milliards de m³','110 000 milliards de m³'],ans:1,expl:'Sur 110 000 Mds m³ d\'eau douce utilisable, seuls 12 500 Mds sont accessibles (9 000 immédiatement, 3 500 en réservoirs).'},

  // === BLOC 2: Systèmes d'AEP (13 questions) ===
  {bloc:'u9b2',diff:'facile',q:'Le niveau 0 de service AEP correspond à',opts:['Un puits','Une pompe manuelle','Un marigot/eau de surface non traitée','Un réseau complet'],ans:2,expl:'Niveau 0 = marigot et eau de surface, situation des localités défavorisées, bidonvilles, camps de réfugiés.'},
  {bloc:'u9b2',diff:'facile',q:'Le niveau 1 de service AEP correspond à',opts:['Un marigot','Un puits','Une borne fontaine','Un réseau maillé'],ans:1,expl:'Niveau 1 = puits (ordinaires/creusés manuellement), service le plus répandu en Afrique.'},
  {bloc:'u9b2',diff:'moyen',q:'Le diamètre standard d\'un puits creusé manuellement est de',opts:['0,8 m','1,3 m','2,0 m','3,0 m'],ans:1,expl:'Diamètre standard = 1,3 m (pour 2 hommes). Minimum 1 m pour 1 homme.'},
  {bloc:'u9b2',diff:'moyen',q:'Une pompe manuelle à 30 m de profondeur donne un débit d\'environ',opts:['6 L/min','15 L/min','35 L/min','60 L/min'],ans:0,expl:'6 L/min à 30 m (1 homme). 35 L/min à 6 m (peu profonde). 15 L/min à 30 m avec 2 hommes (tête rotative).'},
  {bloc:'u9b2',diff:'facile',q:'Une borne fontaine (BF) doit desservir',opts:['10-20 habitants','50-100 habitants','300-600 habitants','1000-2000 habitants'],ans:2,expl:'1 BF pour 300-600 habitants, ou 1 BF à moins de 300 m de chaque usager.'},
  {bloc:'u9b2',diff:'moyen',q:'Un mini-réseau AEP correspond au niveau',opts:['Niveau 1','Niveau 2','Niveau 3','Niveau 4'],ans:2,expl:'Niveau 3 = mini-réseaux et bornes fontaines. Niveau 4 = système AEP complet avec branchements particuliers.'},
  {bloc:'u9b2',diff:'eleve',q:'La capacité d\'un réservoir AEP est généralement de',opts:['10-25% de la conso journalière','50-100% de la conso journalière + réserve incendie','200% de la conso journalière','Fixe à 50 m³'],ans:1,expl:'Capacité = 50-100% de la consommation journalière + réserve incendie. Minimum souhaité : 100 m³.'},
  {bloc:'u9b2',diff:'eleve',q:'Un forage + pompe électrique immergée est adapté pour',opts:['< 200 habitants','500-1000 habitants','> 1000 habitants','Toute population'],ans:2,expl:'Forage + pompe immergée → >1000 hab. Forage + PMH → 200-300 pers/forage. Puits fermé + PMH → 100-200 hab/puits.'},
  {bloc:'u9b2',diff:'facile',q:'Un réseau de distribution RAMIFIÉ a la forme',opts:['D\'un cercle','D\'un arbre','D\'un carré','D\'une étoile'],ans:1,expl:'Réseau ramifié = forme d\'arbre. Écoulement unidirectionnel, panne = arrêt en aval, moins cher.'},
  {bloc:'u9b2',diff:'moyen',q:'Un réseau de distribution MAILLÉ offre',opts:['Moins de sécurité','Plus de sécurité (isolement tronçon en panne)','Un coût plus faible','Un débit plus facile à contrôler'],ans:1,expl:'Réseau maillé = plus de sécurité (isolement), plus cher, écoulement bidirectionnel, zones denses.'},
  {bloc:'u9b2',diff:'tresdifficile',q:'La zone de protection autour d\'un captage gravitaire est de',opts:['1 m','3 m de sol minimum, exclusion 30-90 m','10 m','50 m'],ans:1,expl:'Zone de protection : 3 m de sol minimum, exclusion animaux/habitations dans 30-90 m autour.'},
  {bloc:'u9b2',diff:'eleve',q:'Une AEP gravitaire est adaptée pour',opts:['< 100 habitants','500 à 10 000 habitants','> 50 000 habitants','Toute population'],ans:1,expl:'AEP gravitaire = 500-10 000 hab. (1 BF/50-100 hab). Source en amont, débit d\'étiage suffisant.'},
  {bloc:'u9b2',diff:'tresdifficile',q:'L\'étude de qualité de l\'eau préalable doit durer',opts:['1 mois','6 mois','1 an au moins','5 ans'],ans:2,expl:'Étude de qualité préalable = 1 an au moins, plus si possible.'},

  // === BLOC 3: Gestion des Services Eau (11 questions) ===
  {bloc:'u9b3',diff:'facile',q:'La gestion communautaire de l\'eau repose sur',opts:['Des entreprises privées','Des comités de point d\'eau (CPE) et du bénévolat','L\'État uniquement','Des ONG internationales'],ans:1,expl:'Gestion communautaire = CPE, Associations d\'Usagers, Réparateurs Villageois, bénévolat.'},
  {bloc:'u9b3',diff:'facile',q:'Quel mode de gestion est jugé le PLUS ADAPTÉ pour l\'AEP ?',opts:['La régie municipale','L\'affermage','La gestion communautaire','La gratuité'],ans:1,expl:'Affermage = type jugé le plus adapté : efficacité, durabilité, universalité, transparence.'},
  {bloc:'u9b3',diff:'moyen',q:'Dans l\'affermage, la commune',opts:['Vend le réseau','Loue la gestion à un privé contre redevance','Gère directement','Abandonne ses responsabilités'],ans:1,expl:'Affermage = la commune loue la gestion à un opérateur privé contre une redevance.'},
  {bloc:'u9b3',diff:'moyen',q:'La concession se caractérise par',opts:['La gratuité du service','L\'investisseur prend en charge l\'investissement','La gestion par des bénévoles','L\'absence de contrat'],ans:1,expl:'Concession = l\'investisseur prend en charge une grande partie de l\'investissement, exploitation cédée pour durée déterminée.'},
  {bloc:'u9b3',diff:'eleve',q:'La gestion en régie d\'un service AEP',opts:['Est toujours la meilleure option','Ne permet généralement pas d\'assurer la durabilité','Est obligatoire en Afrique','Garantit la rentabilité'],ans:1,expl:'Les expériences montrent que la régie ne permet pas d\'assurer la durabilité du service.'},
  {bloc:'u9b3',diff:'moyen',q:'La projection de population pour le choix technique se fait sur',opts:['5 ans','10-25 ans','50 ans','100 ans'],ans:1,expl:'Population projetée sur 10-25 ans pour dimensionner les infrastructures AEP.'},
  {bloc:'u9b3',diff:'facile',q:'Le principe de NON-GRATUITÉ de l\'eau signifie que',opts:['L\'eau est gratuite pour tous','L\'accès doit être payant pour assurer la durabilité','Seuls les riches paient','L\'État paie tout'],ans:1,expl:'Principe de non-gratuité = l\'accès doit être payant, branchements encouragés par facilités de paiement.'},
  {bloc:'u9b3',diff:'eleve',q:'Les bénéfices d\'une eau saine sont atteints pour un service de',opts:['5-10 L/pers/jour','30-40 L/pers/jour','100 L/pers/jour','200 L/pers/jour'],ans:1,expl:'Bénéfices sanitaires atteints pour 30-40 L/personne/jour.'},
  {bloc:'u9b3',diff:'moyen',q:'L\'analyse multicritère sert à',opts:['Calculer le débit','Aider à la décision pour sélectionner la meilleure option technique','Mesurer la qualité de l\'eau','Dimensionner les canalisations'],ans:1,expl:'Analyse multicritère = outil d\'aide à la décision pour choisir l\'option technique la plus adaptée.'},
  {bloc:'u9b3',diff:'tresdifficile',q:'L\'intégration « hygiène et assainissement » à l\'AEP inclut',opts:['Uniquement la construction de puits','Lavage des mains au savon, latrines hygiéniques, protection de l\'eau','Uniquement le traitement de l\'eau','La distribution gratuite de savon'],ans:1,expl:'Approche intégrée : lavage des mains, latrines hygiéniques, protection entre prélèvement et utilisation.'},
  {bloc:'u9b3',diff:'facile',q:'La commune est le ________ du service AEP',opts:['Client','Maître d\'ouvrage','Opérateur privé','Sous-traitant'],ans:1,expl:'La commune est le maître d\'ouvrage, responsable du service public d\'eau potable.'},

  // === BLOC 4: Assainissement — Concepts (10 questions) ===
  {bloc:'u9b4',diff:'facile',q:'L\'assainissement concerne principalement',opts:['L\'eau potable uniquement','Les eaux usées et pluviales','L\'électricité','Les déchets solides'],ans:1,expl:'Assainissement = collecte, évacuation et traitement des eaux usées et eaux pluviales.'},
  {bloc:'u9b4',diff:'facile',q:'Un réseau d\'assainissement UNITAIRE évacue',opts:['Uniquement les eaux usées','Uniquement les eaux pluviales','Les eaux usées ET pluviales dans la même canalisation','Les déchets solides'],ans:2,expl:'Réseau unitaire = eaux usées + eaux pluviales dans la même conduite.'},
  {bloc:'u9b4',diff:'moyen',q:'Un réseau SÉPARATIF utilise',opts:['Une seule canalisation','Deux canalisations distinctes (EU et EP)','Trois canalisations','Aucune canalisation'],ans:1,expl:'Séparatif = 2 réseaux distincts : un pour eaux usées (EU), un pour eaux pluviales (EP).'},
  {bloc:'u9b4',diff:'facile',q:'L\'assainissement NON COLLECTIF (autonome) concerne',opts:['Les grandes villes','Les zones non raccordées au réseau collectif','Les industries uniquement','Les hôpitaux'],ans:1,expl:'ANC = assainissement autonome pour les habitations non raccordées au réseau collectif (fosses septiques, latrines).'},
  {bloc:'u9b4',diff:'moyen',q:'La DBO5 mesure',opts:['La température','La Demande Biologique en Oxygène sur 5 jours','Le débit','La pression'],ans:1,expl:'DBO5 = quantité d\'oxygène consommée par les micro-organismes en 5 jours pour dégrader la matière organique.'},
  {bloc:'u9b4',diff:'moyen',q:'La DCO (Demande Chimique en Oxygène) mesure',opts:['L\'oxygène dissous','La quantité d\'oxygène nécessaire pour oxyder chimiquement les matières','Le pH','La conductivité'],ans:1,expl:'DCO = oxydation chimique (bichromate de potassium). DCO > DBO5 car oxyde aussi les matières non biodégradables.'},
  {bloc:'u9b4',diff:'moyen',q:'Les MES (Matières En Suspension) désignent',opts:['Les gaz dissous','Les particules solides en suspension dans l\'eau','Les bactéries uniquement','L\'oxygène'],ans:1,expl:'MES = particules solides fines en suspension, décantables ou non, exprimées en mg/L.'},
  {bloc:'u9b4',diff:'eleve',q:'L\'Équivalent-Habitant (EH) correspond à',opts:['La consommation d\'eau','La pollution moyenne rejetée par un habitant par jour','La surface habitable','Le nombre de pièces'],ans:1,expl:'EH = unité de mesure de pollution : ~60 g DBO5/jour/habitant, ~150-200 L eau usée/jour.'},
  {bloc:'u9b4',diff:'facile',q:'Une STEP désigne',opts:['Une Station d\'Épuration','Un Service Technique','Une Société','Un Standard'],ans:0,expl:'STEP = Station d\'Épuration (traitement des eaux usées).'},
  {bloc:'u9b4',diff:'eleve',q:'Le ratio DCO/DBO5 indique',opts:['Le débit','La biodégradabilité de l\'effluent','La température','La pression'],ans:1,expl:'DCO/DBO5 < 2 → facilement biodégradable. > 3 → peu biodégradable (traitement physico-chimique nécessaire).'},

  // === BLOC 5: Réseaux & Traitement (10 questions) ===
  {bloc:'u9b5',diff:'facile',q:'Le PRÉTRAITEMENT des eaux usées comprend',opts:['La désinfection','Le dégrillage et le dessablage','La filtration fine','L\'osmose inverse'],ans:1,expl:'Prétraitement = dégrillage (retenir gros déchets) + dessablage/déshuilage (sables et graisses).'},
  {bloc:'u9b5',diff:'facile',q:'Le traitement PRIMAIRE vise à',opts:['Désinfecter','Éliminer les matières décantables (physique)','Éliminer les virus','Ajouter du chlore'],ans:1,expl:'Traitement primaire = décantation physique → élimine 50-60% des MES et 30-40% de la DBO5.'},
  {bloc:'u9b5',diff:'moyen',q:'Le traitement SECONDAIRE est un traitement',opts:['Chimique uniquement','Biologique (bactéries dégradent la pollution)','Physique uniquement','Thermique'],ans:1,expl:'Secondaire = traitement biologique (boues activées, lits bactériens, lagunage).'},
  {bloc:'u9b5',diff:'moyen',q:'Le traitement TERTIAIRE peut inclure',opts:['Le dégrillage','La décantation','La désinfection et l\'élimination des nutriments (N, P)','Le pompage'],ans:2,expl:'Tertiaire = traitements avancés : désinfection (chlore, UV, ozone), élimination azote/phosphore.'},
  {bloc:'u9b5',diff:'eleve',q:'Le procédé des BOUES ACTIVÉES consiste à',opts:['Filtrer l\'eau','Mettre en contact l\'eau usée avec une culture bactérienne aérée','Décanter uniquement','Chauffer l\'eau'],ans:1,expl:'Boues activées = bassin d\'aération + décanteur secondaire + recirculation des boues. Très répandu.'},
  {bloc:'u9b5',diff:'moyen',q:'Le LAGUNAGE est un traitement',opts:['Chimique','Biologique extensif utilisant des bassins peu profonds','Mécanique','Thermique'],ans:1,expl:'Lagunage = bassins peu profonds (1-2 m), temps de séjour long (20-60 jours), adapté aux petites collectivités.'},
  {bloc:'u9b5',diff:'eleve',q:'Le traitement des BOUES issues des STEP inclut',opts:['Uniquement le séchage','Épaississement, digestion, déshydratation, valorisation','Uniquement l\'incinération','Le rejet direct en rivière'],ans:1,expl:'Filière boues : épaississement → digestion (anaérobie) → déshydratation → valorisation agricole ou incinération.'},
  {bloc:'u9b5',diff:'tresdifficile',q:'Un réseau PSEUDO-SÉPARATIF se caractérise par',opts:['Une seule conduite','Deux conduites mais les eaux de toiture vont aux EU','Trois conduites','Aucune différence avec l\'unitaire'],ans:1,expl:'Pseudo-séparatif = séparatif où les eaux pluviales de toiture sont raccordées au réseau EU, le reste au réseau EP.'},
  {bloc:'u9b5',diff:'facile',q:'Le dégrillage retient les déchets de taille supérieure à',opts:['1 mm','Quelques centimètres (grille)','0,1 mm','1 m'],ans:1,expl:'Dégrillage = grille retenant les gros déchets (plastiques, branches, chiffons) > quelques cm.'},
  {bloc:'u9b5',diff:'eleve',q:'Le dessablage utilise le principe de',opts:['Filtration','Décantation gravitaire (vitesse ~0,3 m/s)','Flottation','Centrifugation'],ans:1,expl:'Dessablage = décantation des sables à vitesse contrôlée (~0,3 m/s) pour ne pas décanter la matière organique.'},

  // === BLOC 6: Gestion & Indicateurs (8 questions) ===
  {bloc:'u9b6',diff:'facile',q:'La gestion d\'un service d\'assainissement inclut',opts:['Uniquement la technique','Gestion technique, administrative et financière','Uniquement la finance','Uniquement les ressources humaines'],ans:1,expl:'Gestion = technique (infrastructures) + administrative (demandes) + financière (factures).'},
  {bloc:'u9b6',diff:'moyen',q:'Le maître d\'ouvrage d\'un service d\'assainissement est généralement',opts:['L\'État uniquement','La commune','L\'opérateur privé','Les usagers'],ans:1,expl:'La commune est généralement le maître d\'ouvrage. L\'État fixe le cadre légal et réglementaire.'},
  {bloc:'u9b6',diff:'facile',q:'Le taux de couverture en assainissement mesure',opts:['La quantité d\'eau','Le % de population ayant accès à un système d\'assainissement','Le débit','La pression'],ans:1,expl:'Taux de couverture = % population desservie par un système d\'assainissement amélioré.'},
  {bloc:'u9b6',diff:'moyen',q:'L\'ODD6 (Objectif de Développement Durable n°6) vise',opts:['L\'éducation','L\'accès universel à l\'eau et à l\'assainissement d\'ici 2030','La santé','L\'énergie'],ans:1,expl:'ODD6 = « Garantir l\'accès de tous à des services d\'alimentation en eau et d\'assainissement gérés de façon durable ». '},
  {bloc:'u9b6',diff:'eleve',q:'Un indicateur de performance d\'un service AEP inclut',opts:['Le nombre d\'employés','Le rendement du réseau, la continuité du service, la qualité de l\'eau','La couleur des canalisations','La marque des pompes'],ans:1,expl:'Indicateurs : rendement (volume facturé/volume produit), continuité (h/jour), qualité (conformité bactério).'},
  {bloc:'u9b6',diff:'moyen',q:'La redevance d\'assainissement est généralement',opts:['Fixe pour tous','Proportionnelle à la consommation d\'eau potable','Gratuite','Payée par l\'État'],ans:1,expl:'Redevance assainissement = proportionnelle au volume d\'eau potable consommé (principe pollueur-payeur).'},
  {bloc:'u9b6',diff:'tresdifficile',q:'Le CLUES (Community-Led Urban Environmental Sanitation) est',opts:['Une norme ISO','Une approche de planification participative de l\'assainissement urbain','Un type de canalisation','Un produit chimique'],ans:1,expl:'CLUES = approche de planification participative pour l\'assainissement urbain, impliquant la communauté.'},
  {bloc:'u9b6',diff:'facile',q:'Le pS-Eau est',opts:['Une marque d\'eau','Un programme de Solidarité Eau (ONG française)','Un type de pompe','Une norme'],ans:1,expl:'pS-Eau = programme Solidarité Eau, ONG française d\'appui aux services AEP et assainissement dans les PED.'}
];

// --- UE09 Flashcards ---
const UE09_FLASHCARDS = [
  {topic:'Eau monde',q:'Répartition eau terrestre ?',a:'<strong>97,5%</strong> eau de mer<br><strong>2,5%</strong> eau douce (68% glaciers, 30% souterraine, 0,3% lacs/rivières)'},
  {topic:'Accès',q:'Accès à l\'eau potable ?',a:'<strong>768 millions</strong> sans accès (11% pop.), dont <strong>327 M</strong> en Afrique sub-saharienne.<br><strong>80%</strong> maladies PED = hydriques.'},
  {topic:'Niveaux',q:'5 niveaux de service AEP ?',a:'<strong>N0</strong> : Marigot<br><strong>N1</strong> : Puits<br><strong>N2</strong> : Pompes manuelles<br><strong>N3</strong> : Mini-réseaux + BF<br><strong>N4</strong> : Réseau complet'},
  {topic:'Puits',q:'Diamètre standard d\'un puits ?',a:'<strong>1,3 m</strong> (2 hommes). Minimum 1 m. Revêtement béton armé recommandé.'},
  {topic:'BF',q:'Borne fontaine — desserte ?',a:'<strong>1 BF/300-600 hab.</strong> ou <strong>1 BF à <300 m</strong> de chaque usager.'},
  {topic:'Réseau',q:'Ramifié vs Maillé ?',a:'<strong>Ramifié</strong> : arbre, unidirectionnel, moins cher<br><strong>Maillé</strong> : sécurité, bidirectionnel, plus cher'},
  {topic:'Gestion',q:'Modes de gestion AEP ?',a:'<strong>Communautaire</strong> (CPE, bénévolat)<br><strong>Affermage</strong> (location au privé — le + adapté)<br><strong>Concession</strong> (investissement privé)<br><strong>Régie</strong> (municipale, peu durable)'},
  {topic:'Gestion',q:'Non-gratuité de l\'eau ?',a:'L\'accès doit être <strong>payant</strong> pour assurer la <strong>durabilité</strong> du service. Branchements encouragés par facilités de paiement.'},
  {topic:'Réseau',q:'Types de réseaux assainissement ?',a:'<strong>Unitaire</strong> : EU+EP même conduite<br><strong>Séparatif</strong> : 2 réseaux distincts<br><strong>Pseudo-séparatif</strong> : toitures → EU'},
  {topic:'Traitement',q:'Étapes traitement eaux usées ?',a:'<strong>Prétraitement</strong> : dégrillage, dessablage<br><strong>Primaire</strong> : décantation<br><strong>Secondaire</strong> : biologique<br><strong>Tertiaire</strong> : N, P, désinfection'},
  {topic:'Indicateurs',q:'DBO5, DCO, MES ?',a:'<strong>DBO5</strong> : pollution biodégradable (5j, 20°C)<br><strong>DCO</strong> : oxydable chimiquement<br><strong>MES</strong> : matières en suspension<br><strong>EH</strong> : ~60g DBO5/j/hab'},
  {topic:'ODD',q:'ODD6 ?',a:'<strong>Accès universel</strong> à l\'eau et l\'assainissement d\'ici <strong>2030</strong>, gérés de façon durable.'},
  {topic:'STEP',q:'Boues activées ?',a:'Bassin d\'<strong>aération</strong> + décanteur + <strong>recirculation</strong> des boues. Procédé biologique le plus répandu.'},
  {topic:'Lagunage',q:'Lagunage ?',a:'Bassins <strong>peu profonds</strong> (1-2m), temps séjour <strong>20-60 jours</strong>. Adapté petites collectivités, extensif.'},
  {topic:'Dimension',q:'Capacité réservoir AEP ?',a:'<strong>50-100%</strong> conso journalière + réserve incendie. Minimum : <strong>100 m³</strong>.'}
];

// --- UE09 Technologies ---
const UE09_TECHNOS = [
  {name:'Puits',icon:'🕳️',principe:'Excavation atteignant la nappe phréatique',types:['Creusé manuellement (Ø1,3m)','Foré (nappe captive)','Revêtement béton armé'],lcoe:'100-200 hab/puits (fermé+PMH)',vie:'Protection 30-90m autour'},
  {name:'Borne Fontaine / Mini-réseau',icon:'🚰',principe:'Captage → traitement → réservoir → distribution',types:['Gravitaire (source en hauteur)','Pompage (nappe profonde)','Traitement simplifié'],lcoe:'1 BF/300-600 hab',vie:'500-10 000 hab (gravitaire)'},
  {name:'Réseau AEP complet',icon:'🏙️',principe:'Captage → station traitement → réseau → branchements',types:['Ramifié (arbre, économique)','Maillé (sécurité, zones denses)'],lcoe:'>1000 hab (forage+pompe)',vie:'Réservoir 50-100% conso/j'},
  {name:'Station d\'Épuration (STEP)',icon:'🔬',principe:'Prétraitement → primaire → secondaire → tertiaire',types:['Boues activées (intensif)','Lagunage (extensif)','Lits bactériens'],lcoe:'DBO5/DCO/MES en mg/L',vie:'EH = ~60g DBO5/j/hab'}
];

// --- UE09 Formules ---
const UE09_FORMULES = [
  {name:'HMT pompage',math:'HMT = Hgéo + Σpertes',desc:'Hauteur Manométrique Totale [m].'},
  {name:'Puissance pompe',math:'P = ρ·g·HMT·Q/η',desc:'P en Watts, Q en m³/s, HMT en m.'},
  {name:'NPSH disponible',math:'NPSHd = 10,33 – Hma – Jasp – Pv/ρg',desc:'10,33 m au niveau mer, réduit en altitude.'},
  {name:'DBO5',math:'DBO5 = OD₀ – OD₅',desc:'Demande Biologique en Oxygène (5 jours, 20°C).'},
  {name:'Rendement épuration',math:'η = (Centrée – Csortie)/Centrée × 100',desc:'En % pour DBO5, DCO, MES.'},
  {name:'Charge polluante',math:'Charge = Concentration × Débit',desc:'En kg/j = mg/L × m³/j × 10⁻³.'},
  {name:'Équivalent-Habitant',math:'EH = Charge polluante / 60 g DBO5/j',desc:'1 EH ≈ 60 g DBO5/jour/habitant.'},
  {name:'Temps de séjour',math:'Ts = Volume / Débit',desc:'En heures ou jours (bassin, lagune).'},
  {name:'Capacité réservoir',math:'V = 50-100% × Conso journalière',desc:'+ réserve incendie. Min 100 m³.'},
  {name:'DCO/DBO5',math:'Ratio = DCO/DBO5',desc:'<2 biodégradable, >3 traitement physico-chimique.'},
  {name:'Population projetée',math:'Pn = P₀(1+α)ⁿ',desc:'α = taux croissance, n = horizon (10-25 ans).'},
  {name:'Rendement réseau',math:'R = Volume facturé / Volume produit',desc:'En %, indicateur de performance AEP.'},
  {name:'Taux couverture',math:'T = Pop. desservie / Pop. totale × 100',desc:'Couverture AEP ou assainissement.'},
  {name:'Charge hydraulique',math:'Ch = Q/S',desc:'Débit par unité de surface [m³/m²/j].'},
  {name:'Taux dilution',math:'D = Qrivière / Qrejet',desc:'Capacité du milieu récepteur à diluer le rejet.'}
];

// --- Register ---
registerUE('ue09', {
  qcmBlocs: UE09_QCM_BLOCS,
  qcm: UE09_QCM,
  flashcards: UE09_FLASHCARDS,
  formules: UE09_FORMULES,
  technos: UE09_TECHNOS
});
registerFormules(UE09_FORMULES);
registerTechnos(UE09_TECHNOS);
