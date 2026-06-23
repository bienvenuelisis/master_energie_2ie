// ============================================
// Master GIS — App v3.0: Multi-UE, Difficulty, QCM Generator
// ============================================

let currentPage='all-ues', qcmBlockFilter='all', qcmDiffFilter='all',
    qcmCurrentIdx=0, qcmAnswers={}, qcmQuestions=[], qcmQSize=20,
    flashcardIdx=0, flashcardFlipped=false;

document.addEventListener('DOMContentLoaded',()=>{initNavigation();navigateTo('all-ues');updateSidebar();});

function updateSidebar(){
  const ue=UES[currentUE];
  document.querySelectorAll('.ue-only,.ue06-only,.ue07-only').forEach(el=>{
    const show=el.classList.contains('ue06-only')?currentUE==='ue06':el.classList.contains('ue07-only')?currentUE==='ue07':true;
    el.style.display=show?'':'none';
  });
  document.querySelectorAll('.ue-tab').forEach(t=>t.classList.toggle('active',t.dataset.ue===currentUE));
  document.querySelector('.sidebar-header h1').textContent=ue.icon+' '+ue.name;
}

function initNavigation(){
  document.querySelectorAll('.nav-links a').forEach(l=>l.addEventListener('click',e=>{e.preventDefault();navigateTo(l.dataset.page);}));
  document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('mainContent').addEventListener('click',()=>document.getElementById('sidebar').classList.remove('open'));
}

function switchUE(ueId){
  currentUE=ueId;
  qcmAnswers={};qcmCurrentIdx=0;flashcardIdx=0;flashcardFlipped=false;qcmBlockFilter='all';qcmDiffFilter='all';qcmQuestions=[];
  updateSidebar();
  navigateTo('accueil');
}

function navigateTo(page){
  currentPage=page;
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const al=document.querySelector(`[data-page="${page}"]`);if(al)al.classList.add('active');
  const main=document.getElementById('mainContent');main.innerHTML='';
  switch(page){
    case'all-ues':renderAllUEs(main);break;
    case'accueil':renderAccueil(main);break;
    case'resume':renderResume(main);break;
    case'flashcards':renderFlashcards(main);break;
    case'qcm':renderQCM(main);break;
    case'formules':renderFormules(main);break;
    case'technos':renderTechnos(main);break;
    case'juridique':renderJuridique(main);break;
    case'exercices':renderExercices(main);break;
    default:renderAllUEs(main);
  }
  window.scrollTo(0,0);
  document.getElementById('sidebar').classList.remove('open');
}

// ============================================
// ALL UEs — Card view
// ============================================
function renderAllUEs(container){
  container.innerHTML=`
    <h2>📚 Toutes les Unités d'Enseignement</h2>
    <p style="color:var(--text-secondary);margin-bottom:1.5rem">Sélectionnez une UE pour accéder à ses contenus de révision.</p>
    <div class="ue-cards-grid">
      ${ALL_UE_IDS.map(id=>{
        const ue=UES[id],data=getUEData(id);
        const qcmCount=data?.qcm?.length||0,fcCount=data?.flashcards?.length||0;
        return`<div class="ue-card" style="--ue-color:${ue.color};--ue-light:${ue.colorLight}" onclick="switchUE('${id}')">
          <div class="ue-card-badge">${id===ALL_UE_IDS[0]?'✨ Le plus récent':''}</div>
          <div class="ue-card-icon">${ue.icon}</div>
          <h3>${ue.name}</h3>
          <p class="ue-card-title">${ue.title}</p>
          <p class="ue-card-modules">${ue.modules}</p>
          <div class="ue-card-stats">
            <span>📝 ${qcmCount} QCM</span>
            <span>🃏 ${fcCount} flashcards</span>
          </div>
          <button class="btn-primary btn-sm" style="margin-top:.6rem;background:${ue.color}">Explorer →</button>
        </div>`;
      }).join('')}
    </div>`;
}

// ============================================
// ACCUEIL
// ============================================
function renderAccueil(container){
  const ue=UES[currentUE],data=getUEData();
  container.innerHTML=`
    <div class="hero" style="background:linear-gradient(135deg,${ue.colorDark} 0%,${ue.color} 100%)">
      <h2>${ue.icon} ${ue.name} — ${ue.title}</h2>
      <p>Master GIS — Gestion des Infrastructures et Services, option Énergies Renouvelables</p>
      <p><small>${ue.modules}</small></p>
      <div class="hero-actions">
        <button class="btn-accent btn-lg" onclick="navigateTo('flashcards')">🃏 Flashcards</button>
        <button class="btn-primary btn-lg" onclick="navigateTo('qcm')">📝 QCM (${data.qcm.length} questions)</button>
        <button class="btn-outline-light btn-lg" onclick="navigateTo('resume')">📋 Résumé</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card" onclick="navigateTo('flashcards')" style="cursor:pointer;border-top-color:${ue.color}"><div class="stat-value">${data.flashcards.length}</div><div class="stat-label">🃏 Flashcards</div></div>
      <div class="stat-card" onclick="navigateTo('qcm')" style="cursor:pointer;border-top-color:${ue.color}"><div class="stat-value">${data.qcm.length}</div><div class="stat-label">📝 Questions QCM</div></div>
      <div class="stat-card" style="cursor:pointer;border-top-color:${ue.color}"><div class="stat-value">${data.formules?data.formules.length:'—'}</div><div class="stat-label">🧮 Formules</div></div>
      <div class="stat-card" onclick="navigateTo('technos')" style="cursor:pointer;border-top-color:${ue.color}"><div class="stat-value">${data.technos.length}</div><div class="stat-label">🔧 Fiches</div></div>
    </div>
    <div class="card"><h3>📖 Contenu ${ue.name}</h3>${currentUE==='ue06'?renderUE06Summary():renderUE07Summary()}</div>
    <div class="card" style="background:${ue.colorLight};border-color:${ue.color}">
      <h4>💡 Conseil</h4><p style="font-size:.9rem">Commencez par les <strong>Flashcards</strong>, puis testez-vous avec le <strong>QCM</strong>. Filtrez par difficulté et choisissez votre nombre de questions.</p>
    </div>`;
}
function renderUE06Summary(){return`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:1rem"><div><h4>📊 Comptabilité</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Chaîne énergétique</li><li>Bilan & matrice</li><li>Coefficients AIE</li><li>Indicateurs</li><li>Carbone (Scopes 1-2-3)</li></ul></div><div><h4>🔧 Planification</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Instruments</li><li>Outils (LEAP, MAED)</li><li>Projection demande</li></ul></div><div><h4>☀️ Technologies EnR</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Solaire PV & CSP</li><li>Éolien (Betz, Weibull)</li><li>Hydro (Pelton, Francis, Kaplan)</li></ul></div><div><h4>⚖️ Juridique</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Droit international</li><li>ODD7 & Accord de Paris</li><li>Fiscalité EnR</li></ul></div></div>`;}
function renderUE07Summary(){return`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-top:1rem"><div><h4>📖 Concepts</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Déconstruction vs Démolition</li><li>Curage, désamiantage</li><li>CCTP</li></ul></div><div><h4>🔍 Évaluation</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Cycle de vie</li><li>Amortissement</li><li>3 options fin de vie</li></ul></div><div><h4>🔨 Techniques</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Manuelle, Mécanique</li><li>Explosifs, Expansion</li></ul></div><div><h4>🛡️ Sécurité</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>EPI, Amiante, Plomb</li><li>Déchets & Valorisation</li></ul></div></div>`;}

// ============================================
// RESUMÉ EXPRESS
// ============================================
function renderResume(container){
  const ue=UES[currentUE];
  if(currentUE==='ue06') container.innerHTML = resumeUE06(ue);
  else if(currentUE==='ue07') container.innerHTML = resumeUE07(ue);
  else container.innerHTML = resumeUE08(ue);
}

function resumeUE06(ue){ return `<h2>📋 Résumé détaillé — ${ue.name}</h2>
${ac('📐 1. Unités et conversions',`
  <p>La <strong>Tonne Équivalent Pétrole (TEP)</strong> est l'unité de référence internationale en comptabilité énergétique. Elle représente l'énergie contenue dans une tonne de pétrole brut.</p>
  <table><tr><th>Conversion</th><th>Valeur</th><th>À retenir</th></tr>
  <tr><td>1 TEP</td><td><strong>42 GJ</strong></td><td>≈ 7 barils de pétrole</td></tr>
  <tr><td>1 GWh → TEP</td><td><strong>86 TEP</strong></td><td>Conversion la plus utilisée</td></tr>
  <tr><td>1 MWh</td><td>3,6 GJ = <strong>0,086 TEP</strong></td><td>Électricité</td></tr>
  <tr><td>1 calorie</td><td><strong>4,18 Joules</strong></td><td>Unité historique</td></tr>
  <tr><td>1 baril</td><td><strong>158,987 litres</strong></td><td>Pétrole brut</td></tr>
  <tr><td>1000 m³ gaz naturel</td><td><strong>0,8 TEP</strong></td><td>Gaz</td></tr></table>
  <p><strong>Multiples :</strong> kilo (k=10³) → Méga (M=10⁶) → Giga (G=10⁹) → Téra (T=10¹²).</p>
  <p><strong>PCS vs PCI :</strong> Le Pouvoir Calorifique Supérieur inclut la chaleur de condensation de l'eau, le Pouvoir Calorifique Inférieur l'exclut. On utilise le <strong>PCI</strong> en comptabilité. La différence est de ~2-5% pour les solides, ~7-8% pour les liquides, et ~<strong>10% pour le gaz naturel</strong>.</p>
`)}
${ac('⛓️ 2. La chaîne énergétique',`
  <p>L'énergie parcourt une chaîne de transformation avant d'être utilisée :</p>
  <p><strong>Énergie PRIMAIRE</strong> → <strong>Énergie SECONDAIRE</strong> → <strong>Énergie FINALE</strong> → <strong>Énergie UTILE</strong></p>
  <ul style="padding-left:1.2rem;margin:.6rem 0">
    <li><strong>Primaire :</strong> Énergie brute, sans transformation. <em>Ex : pétrole brut, rayonnement solaire, vent, uranium, biomasse.</em></li>
    <li><strong>Secondaire :</strong> Issue d'une ou plusieurs transformations. <em>Ex : électricité HT, essence, gasoil, butane.</em> Ce sont des « vecteurs énergétiques ».</li>
    <li><strong>Finale :</strong> Livrée au consommateur. <em>Ex : électricité BT au compteur, essence à la pompe, gaz en bouteille.</em></li>
    <li><strong>Utile :</strong> Service effectivement rendu après l'appareil utilisateur. <em>Ex : chaleur, lumière, force motrice, froid.</em></li>
  </ul>
  <p><strong>Classification des énergies :</strong> Renouvelables (flux : solaire, vent, hydro) vs Fossiles (stock : charbon, pétrole, gaz) ; Commerciales (marché) vs Traditionnelles (bois de feu, charbon de bois) ; Conventionnelles (charbon, pétrole, gaz, nucléaire).</p>
`)}
${ac('🌍 3. Les sources d\'énergie',`
  <table><tr><th>Source</th><th>Caractéristiques</th><th>PCI typique</th></tr>
  <tr><td><strong>Charbon</strong></td><td>~300 M années, réserves USA/Russie/Chine/Australie ; très polluant</td><td>~8000 kcal/kg</td></tr>
  <tr><td><strong>Pétrole</strong></td><td>~40% conso mondiale ; base de 80 000 produits chimiques ; difficile à remplacer</td><td>~42 MJ/kg</td></tr>
  <tr><td><strong>Gaz naturel</strong></td><td>70-95% méthane (CH₄) ; le plus propre des fossiles</td><td>—</td></tr>
  <tr><td><strong>Nucléaire</strong></td><td>Uranium enrichi 3-4% ; centrales 900-1200 MW ; rendement ~33%</td><td>—</td></tr>
  <tr><td><strong>Hydroélectricité</strong></td><td>Puissance ∝ hauteur × débit ; 16% électricité mondiale</td><td>—</td></tr>
  <tr><td><strong>Solaire</strong></td><td>1400 W/m² hors atmosphère ; 4-6 kWh/m²/j en Afrique</td><td>—</td></tr>
  <tr><td><strong>Éolien</strong></td><td>Vent min 4 m/s ; mesure ≥ 1 an nécessaire</td><td>—</td></tr>
  <tr><td><strong>Biomasse</strong></td><td>~80% énergie finale dans nombreux PED ; PCI bois ~4000 kcal/kg</td><td>0,4 tep/t</td></tr>
  <tr><td><strong>Géothermie</strong></td><td>Gradient 3°C/100 m moyen ; peut atteindre 100°C/100 m</td><td>—</td></tr></table>
`)}
${ac('📊 4. La comptabilité énergétique',`
  <p>Le <strong>bilan énergétique</strong> est un tableau matriciel qui retrace tous les flux d'énergie d'un pays sur une année. C'est le préalable indispensable à toute planification.</p>
  <div class="formula-card"><div class="formula-name">Équation fondamentale</div><div class="formula-math">P + Im – Ex ± VS = Pt + Cne + Cf</div></div>
  <p><strong>3 blocs du tableau :</strong></p>
  <ol style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>ATEP (Approvisionnements Totaux en Énergie Primaire) :</strong> ATEP = Production + Importations – Exportations – Soutages internationaux ± Variation de stocks. C'est l'énergie disponible dans le pays.</li>
    <li><strong>Transformations et pertes :</strong> Ce que le secteur énergétique consomme pour produire (centrales électriques, raffineries, production de charbon de bois…). <em>Inputs = signe (–), Outputs = signe (+).</em> Inclut les pertes de transport/distribution et l'autoconsommation du secteur.</li>
    <li><strong>CFT (Consommation Finale Totale) :</strong> Répartie par secteur : industrie, transport, résidentiel, tertiaire, agriculture, usages non énergétiques.</li>
  </ol>
  <p><strong>Écart statistique = (CFT + Pertes) – (ATEP + Transferts).</strong> Il mesure la cohérence entre l'offre et la demande.</p>
  <p><strong>Coefficients clés (AIE) :</strong> Électricité 1 GWh = 86 TEP | Pétrole brut 1 t = 1 TEP | Gazole 1 t = 1,035 TEP | Essence 1 t = 1,07 TEP | Bois 1 t = 0,4 TEP | Charbon 1 t = 0,62 TEP | Gaz naturel 1000 m³ = 0,8 TEP.</p>
`)}
${ac('📈 5. Les indicateurs énergétiques',`
  <table><tr><th>Indicateur</th><th>Formule</th><th>Signification</th></tr>
  <tr><td><strong>Indépendance énergétique</strong></td><td>Production nationale / ATEP × 100</td><td>Mesure la dépendance aux importations. 100% = autosuffisant.</td></tr>
  <tr><td><strong>Intensité énergétique</strong></td><td>CFT (ou ATEP) / PIB</td><td>Efficacité énergétique de l'économie. En tep/1000 $US. Plus c'est bas, plus l'économie est sobre.</td></tr>
  <tr><td><strong>Consommation par habitant</strong></td><td>CFT / Population</td><td>Niveau de développement énergétique. Monde : ~1,6 tep/hab/an. Afrique : ~0,2.</td></tr>
  <tr><td><strong>Taux d'électrification</strong></td><td><strong>TE = TD × TCG</strong></td><td>TE = ménages électrifiés / total. TD = raccordés / ménages en zone. TCG = ménages en zone / total.</td></tr>
  <tr><td><strong>Élasticité de la demande</strong></td><td>e = (ΔQ/Q) / (ΔP/P)</td><td>Sensibilité au prix. Si |e| < 1 → inélastique (cas de l'électricité).</td></tr></table>
`)}
${ac('🌿 6. Comptabilité carbone',`
  <p>Le <strong>PRG (Pouvoir de Réchauffement Global)</strong> mesure l'impact d'un gaz à effet de serre par rapport au CO₂ sur 100 ans.</p>
  <table><tr><th>Gaz</th><th>PRG</th><th>Durée de vie</th><th>Sources principales</th></tr>
  <tr><td>CO₂</td><td><strong>1</strong></td><td>~100 ans</td><td>Combustion, déforestation</td></tr>
  <tr><td>CH₄ (méthane)</td><td><strong>25</strong></td><td>~12 ans</td><td>Agriculture, déchets, gaz naturel</td></tr>
  <tr><td>N₂O</td><td><strong>298</strong></td><td>~114 ans</td><td>Engrais, industrie chimique</td></tr>
  <tr><td>SF₆</td><td><strong>22 800</strong></td><td>—</td><td>Équipements électriques</td></tr></table>
  <p><strong>Les 3 Scopes (ISO 14064-1) :</strong></p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Scope 1 :</strong> Émissions directes (combustion sur site, flotte de véhicules possédée).</li>
    <li><strong>Scope 2 :</strong> Émissions indirectes liées à l'énergie achetée (électricité, chaleur).</li>
    <li><strong>Scope 3 :</strong> Autres émissions indirectes (déplacements employés, logistique amont/aval, déchets).</li>
  </ul>
  <p>1 kg CO₂ = <strong>0,2727 kg équivalent carbone</strong> (ratio masse atomique C/CO₂ = 12/44). L'Afrique représente <strong>moins de 3%</strong> des émissions mondiales de CO₂.</p>
`)}
${ac('🔧 7. Planification énergétique',`
  <p>La planification vise à anticiper les besoins futurs et définir les moyens pour y répondre.</p>
  <p><strong>Outils principaux :</strong></p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>LEAP (SEI) :</strong> Gratuit pour les PED. Prend en compte le bois de feu, la faible électrification rurale, les scénarios multiples. Diagrammes de Sankey intégrés.</li>
    <li><strong>MAED :</strong> Analyse de la demande en énergie finale et utile, moyen/long terme.</li>
    <li><strong>MESSAGE :</strong> Optimisation des chaînes d'approvisionnement énergétique.</li>
    <li><strong>EnergyPLAN (Aalborg) :</strong> Simulation heure par heure sur une année complète.</li>
    <li><strong>WEAP :</strong> Intégration des ressources en eau. Couplable avec LEAP.</li>
  </ul>
  <p><strong>Instruments :</strong> Normes produits, codes thermiques, régulation du marché (interdiction lampes incandescentes, véhicules >10 ans), certification obligatoire (Directive UEMOA 04/2020), audits (Décret 2017-1015 Burkina), FDE (2 FCFA/kWh), PPP, net metering, CPE, ESE.</p>
  <p><strong>Projection de la demande :</strong> <span class="formula-math" style="display:inline">Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ</span> où α = taux de croissance démographique, β = taux de croissance du revenu/habitant.</p>
  <p><strong>Méthode simple pour PED (4 étapes) :</strong> 1) Identifier les problèmes/besoins → 2) Identifier les options/scénarios → 3) Évaluer et comparer → 4) Sélectionner la meilleure option.</p>
`)}
${ac('☀️ 8. Panorama des technologies EnR',`
  <p><strong>🌬️ Éolien :</strong> Limite de Betz = 16/27 ≈ <strong>59%</strong> (maximum théorique extractible). Puissance P = Cp × ½ρ × S × <strong>V³</strong> (si le vent double, puissance ×8). Distribution de Weibull : f(v) = (k/A)(v/A)^(k-1)·exp[-(v/A)^k], k~2 en Europe. Espacement inter-éoliennes : 5-10 × diamètre rotor. Temps de retour énergétique < 6 mois.</p>
  <p><strong>💧 Hydroélectricité :</strong> 3 types de turbines : <strong>Pelton</strong> (action, >300 m), <strong>Francis</strong> (réaction radiale, 30-300 m), <strong>Kaplan</strong> (réaction axiale, <30 m). Classification UNIPEDE : petite 2-10 MW, mini 500 kW-2 MW, micro 20-500 kW, pico <20 kW. Barrages : poids, voûte (vallées étroites), contreforts. Afrique : 474 GW inexploités.</p>
  <p><strong>☀️ Solaire PV :</strong> Cellule = jonction p-n (Bore type p, Phosphore type n). Rendements : monocristallin 12-16%, polycristallin 11-14%, amorphe 5-8%. Durée de vie 20-30 ans. Temps de retour énergétique 1,5-5 ans. LCOE en baisse de 82% (2010-2019) → ~0,068 $/kWh.</p>
  <p><strong>🔆 CSP :</strong> Miroirs cylindro-paraboliques (400°C), Fresnel (500°C), tour solaire (600-1000°C). Fluides : huiles ≤400°C, sels fondus ≤650°C (75% des projets, permettent le stockage).</p>
  <p><strong>🌿 Biomasse :</strong> 3 filières : voie sèche (combustion), voie humide (méthanisation → biogaz >90% CH₄), biocarburants (bioéthanol, biodiesel). PCI bois 4000, charbon 8000, essence 11000 kcal/kg.</p>
  <p><strong>🌋 Géothermie :</strong> Gradient 3°C/100 m. Basse énergie : 80°C à 2000 m (chauffage). Haute énergie : 300°C à 1000 m (électricité). Rift Valley : 9000 MW de potentiel.</p>
`)}
${ac('⚖️ 9. Aspects juridiques et ODD',`
  <p><strong>Instruments internationaux :</strong> CNUCC (Rio 1992) → Protocole de Kyoto (1997) → Accord de Paris (2015, objectif <2°C, idéalement 1,5°C).</p>
  <p><strong>ODD7 (Objectif de Développement Durable n°7) :</strong> « Garantir l'accès de tous à des services énergétiques fiables, durables et modernes à un coût abordable. » Adopté le 25 septembre 2015. 5 cibles : accès universel, accroître la part des EnR, doubler l'efficacité énergétique, coopération R&D, infrastructures dans les PED.</p>
  <p><strong>Instruments fiscaux nationaux :</strong> Exonérations de TVA et droits de douane sur équipements EnR, tarifs d'achat garantis (feed-in tariffs), appels d'offres, directives UEMOA (étiquetage, normes).</p>
  <p><strong>Chiffres mondiaux :</strong> 13% de la population sans électricité moderne, 3 milliards dépendent du bois/charbon, l'énergie = 60% des GES mondiaux, EnR = 17,5% de l'énergie finale (2015).</p>
`)}`;
}

function resumeUE07(ue){ return `<h2>📋 Résumé détaillé — ${ue.name}</h2>
${ac('📖 1. Concepts fondamentaux',`
  <p><strong>Infrastructure (sens large) :</strong> Ensemble des installations et équipements nécessaires à la vie d'une collectivité — routes, ponts, réseaux d'eau, électricité, hôpitaux, écoles, etc. On distingue les infrastructures <strong>économiques</strong> (input à la production) des infrastructures <strong>sociales</strong> (services aux ménages), et les infrastructures <strong>DURES</strong> (physiques : routes, ponts) des infrastructures <strong>SOUPLES</strong> (immatérielles : formation, R&D).</p>
  <p><strong>Déconstruction vs Démolition :</strong> La <strong>déconstruction</strong> est une « démolition intelligente » : on démonte sélectivement par éléments ou types de matériaux pour faciliter la valorisation. La <strong>démolition</strong> classique détruit sans trier. La <strong>réhabilitation</strong> est une 3ᵉ option en fin de vie.</p>
  <p><strong>Démantèlement (nucléaire) :</strong> Opération spécifique combinant assainissement radioactif, démontage et évacuation pour atteindre un niveau de déclassement. 3 niveaux : MAD (Mise à l'Arrêt Définitif), partiel, total.</p>
  <p><strong>Marché :</strong> ~500 millions de tonnes/an de déchets de démolition en France. Chiffre d'affaires ~1 milliard € (2011). 40 millions de tonnes de déchets de chantier par an.</p>
`)}
${ac('🔄 2. Les 8 phases d\'intervention',`
  <p>L'ordre chronologique est crucial pour la sécurité et l'efficacité :</p>
  <ol style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Résiliation et condamnation des réseaux</strong> (eau, électricité, gaz, téléphone)</li>
    <li><strong>Pose de clôture</strong> de sécurité</li>
    <li><strong>Curage :</strong> vider le bâtiment de tout élément non constructif</li>
    <li><strong>Désinfection / décontamination</strong></li>
    <li><strong>Démolition / déconstruction</strong> du bâtiment</li>
    <li><strong>Évacuation</strong> des déchets</li>
    <li><strong>Travaux en infrastructure</strong></li>
    <li><strong>Remise en état</strong> du terrain et repliement du chantier</li>
  </ol>
  <p>Avant la déconstruction elle-même, 3 étapes préalables sont obligatoires : <strong>1. Désamiantage → 2. Déplombage → 3. Curage</strong> (retrait des éléments non porteurs : cloisons, équipements).</p>
`)}
${ac('🔍 3. Évaluation des infrastructures',`
  <p>L'<strong>évaluation</strong> est une appréciation systématique et objective visant à déterminer la pertinence, l'accomplissement des objectifs, l'efficience, l'efficacité, l'impact et la durabilité d'un projet (définition OCDE/CAD). Elle intervient principalement en phase d'<strong>exploitation</strong>.</p>
  <p><strong>Types d'évaluation dans le temps :</strong></p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Ex ante :</strong> avant adoption définitive du projet</li>
    <li><strong>À mi-parcours :</strong> pour les programmes longs</li>
    <li><strong>Finale/terminale :</strong> juste après la fin</li>
    <li><strong>Ex post :</strong> bien après la fin, mesure l'impact réel</li>
    <li><strong>Concomitante :</strong> suivi continu (« chemin faisant »)</li>
  </ul>
  <p><strong>Distinctions importantes :</strong> L'évaluation ≠ le contrôle (qui vérifie la conformité à des normes). L'évaluation ≠ l'audit (vérification par des auditeurs indépendants). L'évaluation ≠ le suivi (systématique et intégré à la gestion). L'évaluation ≠ le diagnostic (identification de la nature d'un problème).</p>
  <p><strong>3 finalités (Stuffelbeam, 1980) :</strong> mobilisatrice, stratégique, démocratique.</p>
`)}
${ac('⏳ 4. Cycle de vie et durées',`
  <p>Le cycle de vie complet d'une infrastructure : <strong>Conception → Réalisation → Exploitation</strong> (surveillance, maintenance, réparation, réhabilitation) <strong>→ Fin de vie</strong> (démolition, déconstruction ou réhabilitation).</p>
  <table><tr><th>Élément</th><th>Durée de vie / référence</th></tr>
  <tr><td>Couche de roulement</td><td><strong>10 ans</strong></td></tr>
  <tr><td>Couche de forme</td><td><strong>30 ans</strong></td></tr>
  <tr><td>Ouvrages d'art (Eurocodes)</td><td><strong>100 ans</strong></td></tr>
  <tr><td>Lignes à grande vitesse (RFF)</td><td><strong>30 ans</strong></td></tr>
  <tr><td>Gares (RFF)</td><td>Amortissement <strong>40 ans</strong></td></tr>
  <tr><td>Tunnels</td><td><strong>> 100 ans</strong></td></tr></table>
  <p><strong>Évaluation structurelle :</strong> appréciation de la capacité portante basée sur des calculs. <strong>Évaluation de l'état :</strong> résulte d'une visite type IQOA. Les <strong>convois exceptionnels</strong> sont à l'origine de la majorité des évaluations structurelles.</p>
  <p><strong>6 méthodes d'auscultation non destructive :</strong> ondes mécaniques, électromagnétiques, thermiques, électriques/électrochimiques, radiographiques, optiques.</p>
  <p><strong>Normes :</strong> ISO 13822:2001 (évaluation des constructions existantes), NF EN 1998-3 (Eurocode 8), NF P 01-010 (durée de référence).</p>
  <p><strong>4 procédés d'évaluation économique :</strong> valeur marchande, valeur comptable, coût de production, valeur subjective/théorique. <strong>Amortissement :</strong> méthode linéaire ou dégressive pour déterminer la valeur résiduelle.</p>
`)}
${ac('🔨 5. Les 4 techniques de déconstruction',`
  <table><tr><th>Technique</th><th>Méthodes</th><th>Outils</th><th>Usage</th></tr>
  <tr><td><strong>1. Manuelle</strong></td><td>Dérasement/écrêtage (par le haut), sapement (par la base)</td><td>Marteaux-piqueurs, burins, masses</td><td>Petits ouvrages, zones denses</td></tr>
  <tr><td><strong>2. Mécanique</strong></td><td>Frappe, cisaillement, pincement</td><td>Pelles hydrauliques + BRH, cisailles acier/béton, pinces de tri</td><td>Tout type d'ouvrage</td></tr>
  <tr><td><strong>3. Explosifs</strong></td><td>Foudroyage (effondrement contrôlé)</td><td>Charges explosives, détonateurs</td><td>Grands immeubles isolés, ouvrages d'art</td></tr>
  <tr><td><strong>4. Expansion</strong></td><td>Pression mécanique (vérins) ou chimique (mortier expansif)</td><td>Vérins/écarteurs hydrauliques, mortier expansif</td><td>Zones sensibles (sans vibration ni bruit)</td></tr></table>
  <p><strong>Curage par percussion :</strong> 3 méthodes — marteau piqueur (peu de vibration, bruyant), brise béton (abordable, vibrations importantes), pince hydraulique (la plus utilisée).</p>
`)}
${ac('📜 6. Réglementation et normes',`
  <p><strong>Permis de démolir :</strong> Autorisation administrative <strong>obligatoire</strong> dans les zones de protection du patrimoine (monuments historiques, patrimoine urbain/paysager/architectural). <strong>Non obligatoire</strong> si la démolition est imposée par l'administration ou une décision de justice, ou pour les ouvrages vétustes/insalubres.</p>
  <p><strong>CCTP (Cahier des Clauses Techniques Particulières) :</strong> Document contractuel détaillant : objet de la démolition, constat des lieux, contraintes du site, diagnostics prévus, autorisations administratives, qualifications des entreprises, PGC (Plan Général de Coordination), PPSPS (Plan Particulier de Sécurité et de Protection de la Santé), sécurité, nettoyage fin de chantier.</p>
  <p><strong>Loi Grenelle 2 :</strong> Gestion des déchets BTP. Objectif européen : <strong>70% de valorisation matière</strong> des déchets non dangereux du BTP.</p>
  <p><strong>HQE :</strong> Haute Qualité Environnementale. <strong>OMD :</strong> Objectifs du Millénaire pour le Développement.</p>
`)}
${ac('☣️ 7. Amiante, plomb et diagnostics',`
  <p><strong>Amiante :</strong> Silicate hydraté de calcium et magnésium. Connu depuis plus de 2000 ans. Qualités : résistance au feu, isolation, résistance mécanique et chimique, coût très faible. Mais <strong>cancérogène</strong> (cancers respiratoires, mésothéliome).</p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Interdiction en France :</strong> 1er janvier 1997</li>
    <li><strong>Désamiantage obligatoire :</strong> depuis le 1er janvier 2002 (bâtiments construits avant juillet 1997)</li>
    <li><strong>Seuil réglementaire :</strong> 5 fibres par litre d'air</li>
    <li><strong>Amiante-ciment = 90% de l'usage</strong></li>
    <li><strong>9 catégories :</strong> I:Brut II:Poudre III:Liquide IV:Feuille V:Tressé VI:Résine VII:Ciment VIII:Noir IX:Équipement</li>
    <li><strong>5 étapes du désamiantage :</strong> dépoussiérage → confinement (zone étanche, test fumée) → démantèlement (méthode humide, aspiration à filtre absolu) → contrôle final → élimination (certificat obligatoire)</li>
  </ul>
  <p><strong>Appareils de mesure :</strong> MOCP (optique, rapide mais imprécis), <strong>MET</strong> (méthode de référence, norme AFNOR X 43 050 : diamètre <3 µm, longueur ≥5 µm), MEB (balayage), Phazir (laser).</p>
  <p><strong>Plomb :</strong> Cause le <strong>saturnisme</strong> (une des plus vieilles maladies). S'accumule dans les os (dizaines d'années). Pénétration par le nez (poussières) ou la bouche. <strong>4 techniques de déplombage :</strong> sablage, grattage, décapage chimique, décapage thermique (air chaud < 450°C). Mesure par fluorescence X (seuil < 1 mg/cm²).</p>
  <p><strong>Diagnostics obligatoires (vente France) :</strong> Amiante (3 ans), Termites (6 mois), Plomb (1 an si présence), DPE (10 ans). DDT location : 5 diagnostics (amiante liste A, ERNT, DPE, CREP, superficie).</p>
`)}
${ac('♻️ 8. Déchets et valorisation',`
  <table><tr><th>Classe</th><th>Type</th><th>Exemples</th><th>Destination</th></tr>
  <tr><td><strong>Classe 1</strong></td><td>Déchets industriels spéciaux (dangereux)</td><td>Hydrocarbures, pesticides, amiante, peintures, solvants</td><td>Centre spécialisé, décharge classe 1</td></tr>
  <tr><td><strong>Classe 2</strong></td><td>Non dangereux, assimilables aux ordures ménagères</td><td>Cartons, PVC, plâtre, bois, métaux, plastiques</td><td>CET type II, incinération ou valorisation</td></tr>
  <tr><td><strong>Classe 3</strong></td><td>Inertes</td><td>Gravats, briques, mortier, ciment, béton, terre cuite</td><td>Plateforme de tri, centre enfouissement type III</td></tr></table>
  <p><strong>3 types de valorisation :</strong></p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Biologique :</strong> compostage ou méthanisation (matière organique)</li>
    <li><strong>Énergétique :</strong> incinération → électricité et/ou chaleur</li>
    <li><strong>Matière :</strong> réemploi (même usage), réutilisation (usage différent), recyclage (réintroduction en production)</li>
  </ul>
  <p><strong>Gravats → concassage/criblage → granulats recyclés</strong> pour nouvelles constructions. Le tri doit se faire <strong>à la source</strong> dès que le déchet est « au bout du bras de l'ouvrier ou de la pelle ».</p>
`)}
${ac('🛡️ 9. Sécurité, nuisances et suivi',`
  <p><strong>EPI (Équipements de Protection Individuelle) :</strong> casque, chaussures de sécurité, gants, combinaison, lunettes, protections auditives (surtout pour explosifs), garde-corps, passerelles, filets.</p>
  <p><strong>Risques quotidiens :</strong> manipulation d'engins, écroulement de bâtiments, chute de gravats, explosifs, substances contaminantes, charges lourdes, effort physique.</p>
  <p><strong>Réduction des nuisances sonores :</strong> croquage plutôt que percussion, arase par sciage, purge au broyeur à béton plutôt que BRH, démolition côté opposé aux riverains.</p>
  <p><strong>Contrôle des poussières :</strong> l'<strong>eau</strong> est la seule arme efficace — vaporisation en nuage, arrosage continu, réduction de la hauteur de chute des blocs, <strong>débourbeur de roue</strong> en sortie de chantier, bâches sur bennes.</p>
  <p><strong>Suivi de chantier :</strong> comparer le réalisé aux prévisions, fiches de non-conformités, tableau de bord du process, rapports journaliers/hebdomadaires de suivi des déchets (type camion, matériaux, volume/masse, destination).</p>
  <p><strong>Réunion de chantier :</strong> coordination, suivi du planning, qualité, sécurité, maîtrise des coûts.</p>
`)}`;
}

function resumeUE08(ue){ return `<h2>📋 Résumé détaillé — ${ue.name}</h2>
${ac('💧 1. Concepts fondamentaux de l\'hydraulique',`
  <p>L'<strong>hydraulique</strong> est l'étude des écoulements. On distingue deux grandes catégories :</p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Écoulements en charge :</strong> l'eau remplit complètement la canalisation, la pression est supérieure à la pression atmosphérique. <em>Ex : réseaux d'eau potable, conduites forcées.</em></li>
    <li><strong>Écoulements à surface libre :</strong> interface entre l'eau et l'air, pression = pression atmosphérique à la surface. <em>Ex : rivières, canaux d'irrigation, réseaux d'assainissement.</em></li>
  </ul>
  <p><strong>Classification dans le temps :</strong> Un écoulement est <strong>permanent</strong> si le débit Q est invariable dans le temps, <strong>non permanent</strong> si Q et la vitesse U changent (ex : fermeture de vanne, arrêt de pompe). Un écoulement permanent peut être <strong>uniforme</strong> (section et vitesse constantes) ou <strong>varié</strong> (changement progressif ou brusque de section).</p>
  <p><strong>Nombre de Reynolds :</strong> Re = U×DH/ν = 4Q/(πDν). Il détermine le régime : <strong>Re < 2000 = laminaire</strong> (filets fluides parallèles), <strong>2000-4000 = transitoire</strong>, <strong>Re > 4000 = turbulent</strong> (mélange chaotique). La viscosité cinématique ν de l'eau à 20°C ≈ 1,01×10⁻⁶ m²/s.</p>
  <p><strong>Charge hydraulique H</strong> (énergie totale par unité de poids, en mètres) : <span class="formula-math" style="display:inline">H = z + p/ρg + V²/2g</span> — somme de l'énergie de position (z), de pression (p/ρg) et cinétique (V²/2g).</p>
`)}
${ac('📏 2. Pertes de charge et dimensionnement des conduites',`
  <p>Les <strong>pertes de charge</strong> sont la dissipation d'énergie due aux frottements du fluide contre les parois. Elles sont de deux natures :</p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Linéaires (régulières) :</strong> le long des tronçons droits, dues à la rugosité de la conduite.</li>
    <li><strong>Singulières (locales) :</strong> aux changements de direction ou de section (coudes, vannes, élargissements).</li>
  </ul>
  <p><strong>Formule de Darcy-Weisbach :</strong> <span class="formula-math" style="display:inline">ΔH = λ·(L/D)·(U²/2g)</span> où λ est le coefficient de perte de charge. λ est déterminé par l'<strong>équation de Colebrook-White</strong> : 1/√λ = -2log(k/(3,71D) + 2,51/(Re√λ)), fonction du nombre de Reynolds Re et de la rugosité relative k/D.</p>
  <p><strong>Formule de Manning-Strickler (conduite) :</strong> <span class="formula-math" style="display:inline">ΔH ≈ 10,294×Q²×L/(KS²×D^(16/3))</span>. KS dépend du matériau : PVC = <strong>120</strong>, Béton = <strong>100</strong>, Fonte neuve = <strong>80</strong>.</p>
  <table><tr><th>Matériau</th><th>KS</th><th>k [mm]</th></tr>
  <tr><td>PVC / Plastique</td><td>120</td><td>0</td></tr>
  <tr><td>Béton centrifugé</td><td>100</td><td>0,25</td></tr>
  <tr><td>Fonte acier revêtue ciment</td><td>90</td><td>0,5</td></tr>
  <tr><td>Fonte acier non revêtue (neuf)</td><td>80</td><td>1</td></tr>
  <tr><td>Fonte acier non revêtue (ancien)</td><td>75</td><td>2</td></tr></table>
  <p><strong>Conduites en série :</strong> même débit Q partout, ΔH totale = somme des pertes de chaque tronçon. <strong>Conduites en parallèle :</strong> même ΔH aux bornes, Q total = somme des débits.</p>
  <p><strong>Diamètre économique :</strong> formule de <strong>Bresse</strong> : Φ = 1,5×√Q × 1000 [mm] (Vm ≈ 0,57 m/s). <strong>Bonnin</strong> : Φ = √Q × 1000 [mm] (Vm ≈ 1,27 m/s).</p>
`)}
${ac('🌊 3. Écoulements à surface libre',`
  <p>Dans un canal, la surface de l'eau est en contact avec l'air à la pression atmosphérique. Les grandeurs clés sont : le <strong>tirant d'eau y</strong> (hauteur d'eau), la <strong>section mouillée S</strong>, le <strong>périmètre mouillé P</strong>, le <strong>rayon hydraulique RH = S/P</strong>.</p>
  <p><strong>Nombre de Froude :</strong> <span class="formula-math" style="display:inline">Fr = U/√(g×ym)</span> où ym = profondeur moyenne = S/l.</p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Fr < 1 :</strong> régime <strong>fluvial</strong> (subcritique) — écoulement lent, contrôlé par l'aval</li>
    <li><strong>Fr = 1 :</strong> régime <strong>critique</strong></li>
    <li><strong>Fr > 1 :</strong> régime <strong>torrentiel</strong> (supercritique) — écoulement rapide, contrôlé par l'amont</li>
  </ul>
  <p><strong>Formule de Manning-Strickler pour canaux :</strong> <span class="formula-math" style="display:inline">Q = KS×S×RH^(2/3)×√I</span> et <span class="formula-math" style="display:inline">U = KS×RH^(2/3)×√I</span> où I est la pente du radier.</p>
  <p><strong>Profondeur critique yc :</strong> pour un canal rectangulaire, <span class="formula-math" style="display:inline">yc = (Q²/(b²g))^(1/3)</span>. Si <strong>yn > yc</strong> → régime fluvial. Si <strong>yc > yn</strong> → régime torrentiel.</p>
  <p><strong>Section hydrauliquement favorable :</strong> pour un canal trapézoïdal, <span class="formula-math" style="display:inline">b = 2y(√(1+m²)-m)</span>. Elle donne la vitesse maximale pour une pente et un débit donnés.</p>
  <p>La vitesse maximale dans un canal se situe au <strong>tiers de la profondeur</strong> depuis la surface. Formule de Prony : U = 0,82 × Vmax. La mesure au moulinet : V = a×n + b.</p>
`)}
${ac('⚙️ 4. Pompes et turbopompes',`
  <p>Une <strong>pompe</strong> est une machine qui élève le niveau d'énergie d'un fluide. La <strong>pompe centrifuge</strong> (turbopompe) transforme l'énergie cinétique en pression : ΔP/ρ = -Δ(U²/2).</p>
  <p><strong>Les 4 courbes caractéristiques :</strong> débit-hauteur (HMT), débit-puissance, débit-rendement, débit-NPSH requis.</p>
  <p><strong>HMT (Hauteur Manométrique Totale) :</strong> <span class="formula-math" style="display:inline">HMT = Hgéo + Jasp + Jref + (PB-PA)/ρg</span>. C'est l'énergie que la pompe doit fournir au fluide.</p>
  <p><strong>Vitesse spécifique Ns :</strong> <span class="formula-math" style="display:inline">Ns = N√Q/H^(3/4)</span>. Elle détermine le type de pompe : Ns ≤ 20 → multicellulaire, 20-60 → monocellulaire, 60-100 → double corps, 100-150 → hélico-centrifuge, >150 → hélice.</p>
  <p><strong>Cavitation :</strong> phénomène d'ébullition quand la pression descend sous la pression de vapeur saturante. Les bulles implosent et détériorent la roue. Condition : <strong>NPSHdis > NPSHreq + 0,5</strong>.</p>
  <p><strong>NPSH disponible :</strong> <span class="formula-math" style="display:inline">NPSHdis = 10,33 - 0,0012×Z - Ha - Jasp - Pv/ρg - VE²/2g</span>. La hauteur max d'aspiration au niveau de la mer est de <strong>10,33 m</strong>, réduite en altitude.</p>
  <p><strong>Lois de similitude (changement de vitesse N) :</strong> Q ∝ N, H ∝ N², P ∝ N³. <strong>Rognage de la roue (≤15%) :</strong> Q ∝ D², H ∝ D², P ∝ D⁴.</p>
  <p><strong>Équipements aspiration (NF CR13932) :</strong> crépine immergée ≥ 0,30 m sous basses eaux, convergent avec génératrice supérieure horizontale, pente montante ≥ 2% vers la pompe, longueur droite amont = 5×D.</p>
`)}
${ac('🧪 5. Qualité de l\'eau et normes',`
  <p>Une eau potable doit être <strong>saine, d'un goût agréable, incolore, insipide et inodore</strong>. Deux catégories de constituants : les composés dangereux (normes maximales) et les substances nécessaires (normes minimales et maximales).</p>
  <p><strong>Normes biologiques — tolérance zéro :</strong> OMS, CEE et normes françaises exigent <strong>0 coliformes totaux et fécaux / 100 mL</strong>, 0 streptocoques fécaux / 100 mL, absence de salmonelles et staphylocoques pathogènes.</p>
  <p><strong>Principales maladies hydriques :</strong></p>
  <ul style="padding-left:1.2rem;margin:.4rem 0">
    <li><strong>Fièvre typhoïde :</strong> Salmonella typhi, survit des semaines/mois dans l'eau</li>
    <li><strong>Choléra :</strong> Vibrio cholerae, endémique Asie/Afrique, très sensible au chlore</li>
    <li><strong>Bilharziose :</strong> Schistosoma mansoni (ver parasite), milieux tropicaux</li>
    <li><strong>Gastro-entérites :</strong> Shigella, Salmonella, E. coli</li>
  </ul>
  <p><strong>Normes physico-chimiques :</strong> pH 6,5-8,5, température ≤ 25°C, turbidité < 2 NTU, conductivité ~400 µS/cm (objectif).</p>
  <p><strong>Métaux toxiques :</strong> Plomb → saturnisme (accumulation os, anémie). Mercure → maladie de Minamata. Cadmium → reins. Arsenic → cancer peau. Nitrates/nitrites → méthémoglobinémie (nourrissons). Fluor >4 mg/L → fluorose dentaire.</p>
  <p><strong>Niveau Autorisé (NA) :</strong> <span class="formula-math" style="display:inline">NA = ADI × 60 / FI</span> où ADI = prise moyenne quotidienne (µg/kg/j), 60 kg = poids corporel moyen, FI = facteur d'impact.</p>
`)}
${ac('🔄 6. Le cycle de l\'eau et l\'hydrologie',`
  <p>Le <strong>cycle de l'eau</strong> est alimenté par l'énergie solaire qui provoque l'évaporation. Les principales étapes : <strong>évaporation</strong> (océans, lacs, sols) → <strong>condensation</strong> (nuages) → <strong>précipitations</strong> (pluie, neige) → <strong>ruissellement</strong> (cours d'eau) et <strong>infiltration</strong> (nappes souterraines) → retour aux océans. L'<strong>évapotranspiration</strong> combine l'évaporation du sol et la transpiration des plantes.</p>
  <p><strong>Bilan hydrologique simplifié :</strong> <span class="formula-math" style="display:inline">P = ETR + R + I</span> — Précipitations = Évapotranspiration Réelle + Ruissellement + Infiltration.</p>
  <p><strong>Aquifère :</strong> formation géologique perméable capable de stocker et transmettre l'eau souterraine. Une <strong>nappe libre</strong> a sa surface à la pression atmosphérique. Une <strong>nappe captive</strong> est confinée entre deux couches imperméables et se trouve sous pression (puits artésiens).</p>
  <p><strong>Bassin versant :</strong> territoire drainé par un cours d'eau et ses affluents, où toutes les eaux convergent vers un même exutoire. Le <strong>ruissellement</strong> se produit quand l'intensité des précipitations dépasse la capacité d'infiltration du sol.</p>
`)}`;
}

function ac(title,body){return`<div class="accordion open"><div class="accordion-header" onclick="toggleAccordion(this)">${title}</div><div class="accordion-body">${body}</div></div>`;}
const a = ac; // backward compat

// ============================================
// FLASHCARDS
// ============================================
function renderFlashcards(container){
  flashcardIdx=0;flashcardFlipped=false;
  const cards=getUEData().flashcards,ue=UES[currentUE];
  container.innerHTML=`
    <h2>🃏 Flashcards — ${ue.name}</h2>
    <p class="text-secondary">${cards.length} cartes. <span style="color:var(--accent)">Question visible au dos !</span></p>
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
        <div class="flashcard-face flashcard-front"><div class="flashcard-topic" id="fcTopic"></div><div class="flashcard-question" id="fcQuestion"></div><div class="flashcard-hint">👆 Cliquer</div></div>
        <div class="flashcard-face flashcard-back"><div class="flashcard-topic" id="fcTopicBack"></div><div class="flashcard-answer" id="fcAnswer"></div><div class="flashcard-question-mini" id="fcQuestionMini"></div><div class="flashcard-hint">👆 Revenir</div></div>
      </div>
    </div>
    <div class="flashcard-controls">
      <button class="btn-outline" onclick="prevFlashcard()">◀</button>
      <button class="btn-accent" onclick="flipFlashcard()">🔄</button>
      <button class="btn-outline" onclick="nextFlashcard()">▶</button>
      <button class="btn-sm btn-outline" onclick="shuffleFlashcards()">🔀</button>
    </div>
    <div class="flashcard-counter" id="fcCounter"></div>`;
  updateFlashcard();
}
function updateFlashcard(){
  const cards=getUEData().flashcards,card=cards[flashcardIdx];
  document.getElementById('fcTopic').textContent=card.topic;
  document.getElementById('fcQuestion').textContent=card.q;
  document.getElementById('fcTopicBack').textContent=card.topic;
  document.getElementById('fcAnswer').innerHTML=card.a;
  document.getElementById('fcQuestionMini').innerHTML='<small style="opacity:.7">📝</small> '+card.q;
  document.getElementById('fcCounter').textContent=`${flashcardIdx+1}/${cards.length}`;
  document.getElementById('flashcard').classList.remove('flipped');flashcardFlipped=false;
}
function flipFlashcard(){flashcardFlipped=!flashcardFlipped;document.getElementById('flashcard').classList.toggle('flipped',flashcardFlipped);}
function nextFlashcard(){flashcardIdx=(flashcardIdx+1)%getUEData().flashcards.length;updateFlashcard();}
function prevFlashcard(){flashcardIdx=(flashcardIdx-1+getUEData().flashcards.length)%getUEData().flashcards.length;updateFlashcard();}
function shuffleFlashcards(){const c=getUEData().flashcards;for(let i=c.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]];}flashcardIdx=0;updateFlashcard();showToast('🔀 Mélangées!');}
document.addEventListener('keydown',e=>{if(currentPage!=='flashcards')return;if(e.key==='ArrowRight')nextFlashcard();if(e.key==='ArrowLeft')prevFlashcard();if(e.key===' '||e.key==='Enter'){e.preventDefault();flipFlashcard();}});

// ============================================
// QCM — Generator with size + difficulty
// ============================================
function renderQCM(container){
  qcmAnswers={};qcmCurrentIdx=0;qcmBlockFilter='all';qcmDiffFilter='all';qcmQuestions=[];
  const data=getUEData(),ue=UES[currentUE],totalQ=data.qcm.length;
  const sizes=QCM_SIZES.filter(s=>s<=totalQ);
  if(sizes.length===0)sizes.push(totalQ);
  qcmQSize=sizes[sizes.length-1]||totalQ;
  container.innerHTML=`
    <h2>📝 QCM — ${ue.name} <span style="font-size:.9rem;color:var(--text-secondary)">(${totalQ} questions)</span></h2>
    <div class="qcm-setup card" id="qcmSetup">
      <h4>⚙️ Configuration du QCM</h4>
      <div style="display:flex;gap:1.5rem;flex-wrap:wrap;align-items:flex-start;margin-top:.8rem">
        <div><label style="font-weight:600;font-size:.85rem">📏 Nombre</label><div style="display:flex;gap:.3rem;margin-top:.3rem;flex-wrap:wrap">${sizes.map(s=>`<button class="size-btn ${s===qcmQSize?'active':''}" onclick="setQcmSize(${s})">${s}</button>`).join('')}</div></div>
        <div><label style="font-weight:600;font-size:.85rem">🎯 Difficulté</label><div style="display:flex;gap:.3rem;margin-top:.3rem;flex-wrap:wrap">${DIFFICULTIES.map(d=>`<button class="diff-setup-btn ${d.id==='all'?'active':''}" data-d="${d.id}" onclick="setQcmDiffSetup('${d.id}',this)">${d.icon} ${d.name}</button>`).join('')}</div></div>
      </div>
      <div id="qcmSetupInfo" style="margin-top:.8rem;font-size:.85rem;color:var(--text-secondary)"></div>
      <button class="btn-primary btn-lg" style="margin-top:1rem" onclick="startQCM()">🚀 Lancer le QCM</button>
    </div>
    <div id="qcmContent"></div>`;
  updateQcmSetupInfo();
}

function setQcmSize(size){
  qcmQSize=size;
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.toggle('active',parseInt(b.textContent)===size));
  updateQcmSetupInfo();
}
function setQcmDiffSetup(diffId,btn){
  qcmDiffFilter=diffId;
  document.querySelectorAll('.diff-setup-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateQcmSetupInfo();
}
function updateQcmSetupInfo(){
  const data=getUEData(),allQ=data.qcm,pool=qcmDiffFilter==='all'||qcmDiffFilter==='hasard'?allQ:allQ.filter(q=>q.diff===qcmDiffFilter);
  const maxAvail=Math.min(qcmQSize,pool.length),info=document.getElementById('qcmSetupInfo');if(!info)return;
  if(qcmDiffFilter==='hasard')info.innerHTML='🎲 <strong>Mode Hasard</strong> : questions tirées aléatoirement parmi toutes les difficultés.';
  else if(qcmDiffFilter==='all')info.innerHTML=`📋 ${qcmQSize} questions parmi ${pool.length} disponibles (toutes difficultés).`;
  else{const d=DIFFICULTIES.find(dd=>dd.id===qcmDiffFilter);info.innerHTML=`${d.icon} <strong>${d.name}</strong> : ${maxAvail} questions. ${maxAvail<qcmQSize?`⚠️ Limité à ${maxAvail} (pas assez).`:''}`;}
}
function startQCM(){
  const data=getUEData();let pool=data.qcm;
  if(qcmDiffFilter!=='all'&&qcmDiffFilter!=='hasard')pool=pool.filter(q=>q.diff===qcmDiffFilter);
  pool=shuffle(pool);
  qcmQuestions=pool.slice(0,Math.min(qcmQSize,pool.length));
  qcmCurrentIdx=0;qcmAnswers={};
  document.getElementById('qcmSetup').style.display='none';
  renderQCMQuestion();
}
function renderQCMQuestion(){
  const qs=qcmQuestions,content=document.getElementById('qcmContent');if(!content)return;
  if(qs.length===0){content.innerHTML='<div class="card"><p>Aucune question.</p></div>';return;}
  if(qcmCurrentIdx>=qs.length){renderQCMScore(content,qs);return;}
  const q=qs[qcmCurrentIdx],ua=qcmAnswers[qcmCurrentIdx],answered=ua!==undefined;
  const data=getUEData(),blocs=data.qcmBlocs,bi=blocs.find(b=>b.id===q.bloc)||{icon:'📋',name:q.bloc};
  const di=DIFFICULTIES.find(d=>d.id===q.diff)||{icon:'⭐',name:q.diff};
  content.innerHTML=`
    <div class="qcm-header">
      <div class="qcm-progress"><span>Q<strong>${qcmCurrentIdx+1}</strong>/${qs.length}</span><div class="progress-bar"><div class="progress-fill" style="width:${((qcmCurrentIdx+1)/qs.length)*100}%"></div></div></div>
      <div><span class="badge badge-primary">${bi.icon} ${bi.name}</span><span class="badge" style="margin-left:.4rem;background:${q.diff==='facile'?'#e6f4ea':q.diff==='moyen'?'#fef7e0':q.diff==='eleve'?'#fce8e6':'#f3e8ff'}">${di.icon} ${di.name}</span><span style="margin-left:.5rem;font-size:.85rem;color:var(--text-secondary)">✔ ${Object.keys(qcmAnswers).length}/${qs.length}</span></div>
    </div>
    <div class="qcm-card">
      <div class="qcm-question-num">Question ${qcmCurrentIdx+1}</div><div class="qcm-question-text">${q.q}</div>
      <div class="qcm-options">${q.opts.map((o,i)=>`<div class="qcm-option ${answered?(i===q.ans?'correct':(i===ua?'incorrect':'')):''}" onclick="${answered?'':`selectQCMAnswer(${qcmCurrentIdx},${i})`}" style="${answered?'pointer-events:none':''}"><strong>${String.fromCharCode(65+i)}</strong> — ${o}</div>`).join('')}</div>
      <div class="qcm-explanation ${answered?'visible':''}">${answered?`<strong>✅ ${String.fromCharCode(65+q.ans)}</strong><br>${q.expl}`:''}</div>
    </div>
    <div class="qcm-nav">
      <button class="btn-outline" onclick="prevQCM()" ${qcmCurrentIdx===0?'disabled':''}>◀</button>
      <div>${answered?`<button class="btn-accent btn-sm" onclick="resetQCMAnswer(${qcmCurrentIdx})">🔄 Réessayer</button>`:''}<button class="btn-primary" onclick="nextQCM()">${qcmCurrentIdx>=qs.length-1?'🏁 Score':'▶'}</button></div>
    </div>`;
}
function selectQCMAnswer(idx,ans){qcmAnswers[idx]=ans;renderQCMQuestion();}
function resetQCMAnswer(idx){delete qcmAnswers[idx];renderQCMQuestion();}
function nextQCM(){qcmCurrentIdx++;renderQCMQuestion();}
function prevQCM(){if(qcmCurrentIdx>0)qcmCurrentIdx--;renderQCMQuestion();}
function renderQCMScore(container,qs){
  const correct=qs.filter((q,i)=>qcmAnswers[i]===q.ans).length,total=qs.length,pct=Math.round(correct/total*100);
  let msg,emoji;
  if(pct>=90){msg='Excellent!';emoji='🏆';setTimeout(()=>spawnConfetti(),300);}
  else if(pct>=70){msg='Bon niveau.';emoji='👍';}
  else if(pct>=50){msg='Continuez.';emoji='📖';}
  else{msg='Reprenez le cours.';emoji='💪';}
  container.innerHTML=`<div class="qcm-score"><div class="big-score">${pct}%</div><div class="score-label">${correct}/${total}</div><p style="margin-top:1rem;font-size:1.2rem">${emoji} ${msg}</p><div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap"><button class="btn-primary" onclick="navigateTo('qcm')">🔄 Nouveau QCM</button><button class="btn-outline" onclick="navigateTo('flashcards')">🃏 Flashcards</button></div></div>`;
}
document.addEventListener('keydown',e=>{if(currentPage!=='qcm')return;if(e.key==='ArrowRight')nextQCM();if(e.key==='ArrowLeft')prevQCM();});

// ============================================
// CONFETTI
// ============================================
function spawnConfetti(){
  const colors=['#ff6d00','#1a73e8','#0d904f','#f9ab00','#d93025','#c2642a','#9334e6','#00bcd4'];
  for(let i=0;i<80;i++){const el=document.createElement('div');el.style.cssText=`position:fixed;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}vw;top:-20px;border-radius:${Math.random()>.5?'50%':'2px'};z-index:9999;pointer-events:none;animation:confettiFall ${2+Math.random()*3}s ease-in forwards;animation-delay:${Math.random()*.5}s;`;document.body.appendChild(el);setTimeout(()=>el.remove(),3500);}
}

// ============================================
// FORMULES
// ============================================
function renderFormules(container){
  const formulas=ALL_FORMULES.length?ALL_FORMULES:getUEData().formules||[];
  const coeffs=ALL_COEFFS.length?ALL_COEFFS:getUEData().coeffs||[];
  container.innerHTML=`<h2>🧮 Formules & Conversions</h2><input type="text" class="search-box" placeholder="🔍 Rechercher..." oninput="filterFormules(this.value)"><div id="formulesList">${formulas.map(f=>`<div class="formula-card" data-search="${f.name.toLowerCase()} ${f.desc.toLowerCase()}"><div class="formula-name">${f.name}</div><div class="formula-math">${f.math}</div><p style="font-size:.9rem;color:var(--text-secondary)">${f.desc}</p></div>`).join('')}</div>${coeffs.length?`<h3 style="margin-top:2rem">Coefficients AIE</h3><input type="text" class="search-box" placeholder="🔍 Rechercher..." oninput="filterCoeffs(this.value)"><table id="coeffsTable"><thead><tr><th>Produit</th><th>Unité</th><th>TEP</th></tr></thead><tbody>${coeffs.map(c=>`<tr data-search="${c.product.toLowerCase()}"><td><strong>${c.product}</strong></td><td>${c.unit}</td><td>${c.tep}</td></tr>`).join('')}</tbody></table>`:''}`;
}
function filterFormules(q){document.querySelectorAll('#formulesList .formula-card').forEach(c=>c.style.display=c.dataset.search.includes(q.toLowerCase())?'':'none');}
function filterCoeffs(q){document.querySelectorAll('#coeffsTable tbody tr').forEach(r=>r.style.display=r.dataset.search.includes(q.toLowerCase())?'':'none');}

// ============================================
// TECHNOS
// ============================================
function renderTechnos(container){const ts=getUEData().technos||ALL_TECHNOS,ue=UES[currentUE];container.innerHTML=`<h2>🔧 Fiches Techniques — ${ue.name}</h2><div class="tech-grid">${ts.map(t=>`<div class="tech-card"><h4><span class="tech-icon">${t.icon}</span> ${t.name}</h4><p><strong>Principe :</strong> ${t.principe}</p><ul style="font-size:.85rem;padding-left:1.2rem">${t.types.map(ty=>`<li>${ty}</li>`).join('')}</ul><p><strong>LCOE :</strong> ${t.lcoe}</p><p><strong>Vie :</strong> ${t.vie}</p></div>`).join('')}</div>`;}

// ============================================
// JURIDIQUE
// ============================================
function renderJuridique(container){container.innerHTML=`<h2>⚖️ Aspects Juridiques (M16)</h2><div class="card"><h3>Instruments</h3><table><tr><th>Instrument</th><th>Date</th><th>Objectif</th></tr><tr><td><strong>CNUCC</strong></td><td>1992</td><td>Stabiliser GES</td></tr><tr><td><strong>Kyoto</strong></td><td>1997</td><td>Réductions</td></tr><tr><td><strong>Paris</strong></td><td>2015</td><td>&lt;2°C</td></tr><tr><td><strong>ODD</strong></td><td>09/2015</td><td><strong>ODD7</strong></td></tr></table></div><div class="card"><h3>ODD7</h3><ol><li>Accès universel</li><li>Part EnR</li><li>Efficacité ×2</li><li>Coopération R&D</li><li>Infrastructures PED</li></ol></div>`;}

// ============================================
// EXERCICES
// ============================================
function renderExercices(container){
  if(currentUE==='ue06')container.innerHTML=`<h2>📐 Exercices</h2>${a('Ex 1 — Carbone','<div class="formula-card"><div class="formula-math">CO₂=20L×3,5=<strong>70 kg</strong></div></div>')}${a('Ex 2 — Projection','<div class="formula-card"><div class="formula-math">P₀=1200 MW; P₁₀=1955 MW</div></div>')}${a('Ex 3 — Indicateurs','<div class="formula-card"><div class="formula-math">IE=0,36; C/hab=0,28</div></div>')}`;
  else container.innerHTML=`<h2>📐 Exercices</h2>${a('Ex 1 — Déchets','<p>✅ <strong>Dangereux:</strong> amiante, plomb<br>✅ <strong>Non dangereux:</strong> gravats, bois</p>')}${a('Ex 2 — Technique','<p>✅ Manuelle/mécanique en zone dense</p>')}`;
}

// ============================================
// UTILS
// ============================================
function toggleAccordion(h){h.parentElement.classList.toggle('open');}
function showToast(msg){const ex=document.querySelector('.toast');if(ex)ex.remove();const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2500);}
