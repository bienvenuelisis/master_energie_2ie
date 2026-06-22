// ============================================
// UE07 — Infrastructure & Techniques de Destruction
// ============================================

const UE07_QCM_BLOCS = [
  { id:'u7b1', name:'Concepts & Définitions', icon:'📖' },
  { id:'u7b2', name:'Évaluation Infra', icon:'🔍' },
  { id:'u7b3', name:'Méthodes Déconstruction', icon:'🔨' },
  { id:'u7b4', name:'Sécurité & Environnement', icon:'🛡️' }
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
  {bloc:'u7b4',diff:'tresdifficile',q:'Décontamination sols après déconstruction',opts:['Optionnelle','Obligatoire si pollution','N\'existe pas','Avant démolition'],ans:1,expl:'Obligatoire en cas de pollution avérée.'}
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
  {topic:'Sécurité',q:'Risques amiante et plomb ?',a:'<strong>Amiante</strong> : cancers respiratoires<br><strong>Plomb</strong> : saturnisme (peintures anciennes)'}
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
