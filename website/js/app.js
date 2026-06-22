// ============================================
// Master GIS — Application: Multi-UE, Difficulté, Delight
// ============================================

let currentPage='accueil', qcmBlockFilter='all', qcmDiffFilter='all',
    qcmCurrentIdx=0, qcmAnswers={}, qcmShown=false,
    flashcardIdx=0, flashcardFlipped=false;

document.addEventListener('DOMContentLoaded',()=>{initNavigation();navigateTo('accueil');});

// ============================================
// NAVIGATION
// ============================================
function initNavigation(){
  document.querySelectorAll('.nav-links a').forEach(l=>l.addEventListener('click',e=>{e.preventDefault();navigateTo(l.dataset.page);}));
  document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
  document.getElementById('mainContent').addEventListener('click',()=>document.getElementById('sidebar').classList.remove('open'));
}

function switchUE(ueId){
  currentUE=ueId;
  qcmAnswers={};qcmCurrentIdx=0;flashcardIdx=0;flashcardFlipped=false;qcmBlockFilter='all';qcmDiffFilter='all';
  document.querySelectorAll('.ue-tab').forEach(t=>t.classList.toggle('active',t.dataset.ue===ueId));
  navigateTo(currentPage.startsWith('ue')?'accueil':currentPage);
}

function navigateTo(page){
  currentPage=page;
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const al=document.querySelector(`[data-page="${page}"]`);if(al)al.classList.add('active');
  const main=document.getElementById('mainContent');main.innerHTML='';
  switch(page){
    case'accueil':renderAccueil(main);break;
    case'resume':renderResume(main);break;
    case'flashcards':renderFlashcards(main);break;
    case'qcm':renderQCM(main);break;
    case'formules':renderFormules(main);break;
    case'technos':renderTechnos(main);break;
    case'juridique':renderJuridique(main);break;
    case'exercices':renderExercices(main);break;
    default:renderAccueil(main);
  }
  window.scrollTo(0,0);
  document.getElementById('sidebar').classList.remove('open');
}

// ============================================
// ACCUEIL
// ============================================
function renderAccueil(container){
  const ue=UES[currentUE];
  container.innerHTML=`
    <div class="hero" style="background:linear-gradient(135deg,${ue.colorDark} 0%,${ue.color} 100%)">
      <h2>${ue.icon} ${ue.name} — ${ue.title}</h2>
      <p>Master GIS — Gestion des Infrastructures et Services, option Énergies Renouvelables</p>
      <p><small>${ue.modules}</small></p>
      <div class="hero-actions">
        <button class="btn-accent btn-lg" onclick="navigateTo('flashcards')">🃏 Flashcards</button>
        <button class="btn-primary btn-lg" onclick="navigateTo('qcm')">📝 QCM Interactif</button>
        <button class="btn-outline-light btn-lg" onclick="navigateTo('resume')">📋 Résumé Complet</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card" onclick="navigateTo('flashcards')" style="cursor:pointer;border-top-color:${ue.color}">
        <div class="stat-value">${getCurrentFlashcards().length}</div><div class="stat-label">🃏 Flashcards</div>
      </div>
      <div class="stat-card" onclick="navigateTo('qcm')" style="cursor:pointer;border-top-color:${ue.color}">
        <div class="stat-value">${getCurrentQCM().length}</div><div class="stat-label">📝 Questions QCM</div>
      </div>
      <div class="stat-card" onclick="navigateTo('formules')" style="cursor:pointer;border-top-color:${ue.color}">
        <div class="stat-value">${FORMULES.length}</div><div class="stat-label">🧮 Formules</div>
      </div>
      <div class="stat-card" onclick="navigateTo('technos')" style="cursor:pointer;border-top-color:${ue.color}">
        <div class="stat-value">${TECHNOS.length}</div><div class="stat-label">☀️ Fiches Technos</div>
      </div>
    </div>
    <div class="card">
      <h3>📖 Contenu ${ue.name}</h3>
      ${currentUE==='ue06'?renderUE06Summary():renderUE07Summary()}
    </div>
    <div class="card" style="background:${ue.colorLight};border-color:${ue.color}">
      <h4>💡 Conseil</h4>
      <p style="font-size:.9rem">Commencez par les <strong>Flashcards</strong> pour mémoriser les points clés, puis testez-vous avec le <strong>QCM</strong>. Filtrez par difficulté ⭐⭐⭐ pour cibler votre niveau.</p>
    </div>`;
}
function renderUE06Summary(){return`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:1rem"><div><h4>📊 Comptabilité</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Chaîne énergétique</li><li>Bilan & matrice</li><li>Coefficients AIE</li><li>Indicateurs</li><li>Carbone (Scopes 1-2-3)</li></ul></div><div><h4>🔧 Planification</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Instruments (normes, audits)</li><li>Outils (LEAP, MAED)</li><li>Projection demande</li></ul></div><div><h4>☀️ Technologies EnR</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Solaire PV & CSP</li><li>Éolien (Betz, Weibull)</li><li>Hydro (Pelton, Francis, Kaplan)</li><li>Biomasse, Géothermie</li></ul></div><div><h4>⚖️ Juridique</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Droit international</li><li>ODD7 & Accord de Paris</li><li>Fiscalité EnR</li></ul></div></div>`;}
function renderUE07Summary(){return`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem;margin-top:1rem"><div><h4>📖 Concepts</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Déconstruction vs Démolition</li><li>Infrastructure (sens large)</li><li>Curage, désamiantage, déplombage</li><li>CCTP</li></ul></div><div><h4>🔍 Évaluation</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Cycle de vie</li><li>Amortissement</li><li>Fin de vie : 3 options</li><li>Archives</li></ul></div><div><h4>🔨 Techniques</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>Manuelle (dérasement, sapement)</li><li>Mécanique (BRH, cisailles)</li><li>Explosifs (foudroyage)</li><li>Expansion (vérins, mortier)</li></ul></div><div><h4>🛡️ Sécurité & Environnement</h4><ul style="padding-left:1.2rem;font-size:.9rem"><li>EPI</li><li>Déchets (dangereux/non dangereux)</li><li>Valorisation, PIC, nuisances</li></ul></div></div>`;}

// ============================================
// RESUME EXPRESS
// ============================================
function renderResume(container){
  const ue=UES[currentUE];
  if(currentUE==='ue06'){
    container.innerHTML=`<h2>📋 Résumé Express — ${ue.name}</h2>
      ${makeAccordion('📐 Unités','<table><tr><th>Conversion</th><th>Valeur</th></tr><tr><td>1 TEP</td><td><strong>42 GJ</strong> ≈ 7 barils</td></tr><tr><td>1 GWh → TEP</td><td><strong>86 TEP</strong></td></tr><tr><td>1 MWh</td><td>3,6 GJ = <strong>0,086 TEP</strong></td></tr><tr><td>1 cal</td><td>4,18 J</td></tr><tr><td>1 baril</td><td>158,987 L</td></tr><tr><td>1000 m³ gaz</td><td>0,8 TEP</td></tr></table>')}
      ${makeAccordion('⛓️ Chaîne','<p><strong>Primaire</strong> (brute) → <strong>Secondaire</strong> (transformée) → <strong>Finale</strong> (livrée) → <strong>Utile</strong> (service)</p>')}
      ${makeAccordion('📊 Bilan','<div class="formula-card"><div class="formula-math">P + Im – Ex ± VS = Pt + Cne + Cf</div></div><p><strong>ATEP</strong> = P + Im – Ex – Soutages ± ΔStocks</p><p><strong>Signes :</strong> Inputs (–) | Outputs (+)</p>')}
      ${makeAccordion('📈 Indicateurs','<table><tr><th>Indicateur</th><th>Formule</th></tr><tr><td>Indépendance</td><td>Production/ATEP (%)</td></tr><tr><td>Intensité</td><td>CFT/PIB (tep/1000$US)</td></tr><tr><td>Conso/hab</td><td>CFT/Population</td></tr><tr><td>Électrification</td><td><strong>TE=TD×TCG</strong></td></tr></table>')}
      ${makeAccordion('🌿 Carbone','<table><tr><th>Gaz</th><th>PRG</th></tr><tr><td>CO₂</td><td><strong>1</strong></td></tr><tr><td>CH₄</td><td><strong>25</strong></td></tr><tr><td>N₂O</td><td><strong>298</strong></td></tr><tr><td>SF₆</td><td><strong>22 800</strong></td></tr></table><p><strong>Scopes :</strong> 1 (direct), 2 (électricité), 3 (autres)</p>')}
      ${makeAccordion('🔧 Planification','<p><strong>Outils :</strong> LEAP, MAED, MESSAGE, EnergyPLAN</p><p><strong>Projection :</strong> Pₙ=P₀(1+α)ⁿ(1+β)ⁿ</p>')}
      ${makeAccordion('☀️ EnR','<p><strong>Éolien :</strong> Betz 59% | P∝V³ | Weibull</p><p><strong>Hydro :</strong> Pelton>300m, Francis 30-300m, Kaplan<30m</p><p><strong>PV :</strong> Mono 12-16%, Poly 11-14%, Amorphe 5-8%</p>')}
      ${makeAccordion('⚖️ Juridique','<p><strong>ODD7 :</strong> Accès universel énergie propre 2030</p><p><strong>Paris :</strong> <2°C, idéal 1,5°C</p>')}`;
  }else{
    container.innerHTML=`<h2>📋 Résumé Express — ${ue.name}</h2>
      ${makeAccordion('📖 Concepts','<p><strong>Déconstruction</strong> = démolition intelligente avec tri et valorisation</p><p><strong>Infrastructure</strong> = ensemble des installations nécessaires à une communauté</p><p><strong>CCTP</strong> = Cahier des Clauses Techniques Particulières</p>')}
      ${makeAccordion('🔄 Étapes','<p><strong>1. Désamiantage</strong> (retrait amiante)</p><p><strong>2. Déplombage</strong> (retrait plomb)</p><p><strong>3. Curage</strong> (éléments non porteurs)</p><p><strong>4. Déconstruction</strong></p>')}
      ${makeAccordion('🔨 4 Techniques','<table><tr><th>Technique</th><th>Méthode</th></tr><tr><td>Manuelle</td><td>Dérasement, sapement</td></tr><tr><td>Mécanique</td><td>BRH, cisailles, pinces</td></tr><tr><td>Explosifs</td><td>Foudroyage</td></tr><tr><td>Expansion</td><td>Vérins, mortier expansif</td></tr></table>')}
      ${makeAccordion('🛡️ Sécurité','<p><strong>EPI</strong> = casque, gants, lunettes, masque</p><p><strong>Amiante</strong> → cancers respiratoires</p><p><strong>Plomb</strong> → saturnisme</p>')}
      ${makeAccordion('♻️ Déchets','<p><strong>Dangereux</strong> : amiante, plomb, solvants</p><p><strong>Non dangereux</strong> : inertes (gravats), non inertes (bois)</p><p><strong>Gravats</strong> → concassés → granulats recyclés</p>')}`;
  }
}
function makeAccordion(title,body){return`<div class="accordion open"><div class="accordion-header" onclick="toggleAccordion(this)">${title}</div><div class="accordion-body">${body}</div></div>`;}

// ============================================
// FLASHCARDS — with question shown on back
// ============================================
function renderFlashcards(container){
  flashcardIdx=0;flashcardFlipped=false;
  const cards=getCurrentFlashcards();
  container.innerHTML=`
    <h2>🃏 Flashcards — ${UES[currentUE].name}</h2>
    <p class="text-secondary">Cliquez pour retourner. ${cards.length} cartes. <span style="color:var(--accent)">La question reste visible au dos !</span></p>
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
        <div class="flashcard-face flashcard-front"><div class="flashcard-topic" id="fcTopic"></div><div class="flashcard-question" id="fcQuestion"></div><div class="flashcard-hint">👆 Cliquer pour révéler</div></div>
        <div class="flashcard-face flashcard-back"><div class="flashcard-topic" id="fcTopicBack"></div><div class="flashcard-answer" id="fcAnswer"></div><div class="flashcard-question-mini" id="fcQuestionMini"></div><div class="flashcard-hint">👆 Cliquer pour revenir</div></div>
      </div>
    </div>
    <div class="flashcard-controls">
      <button class="btn-outline" onclick="prevFlashcard()">◀</button>
      <button class="btn-accent" onclick="flipFlashcard()">🔄 Retourner</button>
      <button class="btn-outline" onclick="nextFlashcard()">▶</button>
      <button class="btn-sm btn-outline" onclick="shuffleFlashcards()">🔀 Mélanger</button>
    </div>
    <div class="flashcard-counter" id="fcCounter"></div>`;
  updateFlashcard();
}
function updateFlashcard(){
  const cards=getCurrentFlashcards(),card=cards[flashcardIdx];
  document.getElementById('fcTopic').textContent=card.topic;
  document.getElementById('fcQuestion').textContent=card.q;
  document.getElementById('fcTopicBack').textContent=card.topic;
  document.getElementById('fcAnswer').innerHTML=card.a;
  document.getElementById('fcQuestionMini').innerHTML='<small style="opacity:.7">📝</small> '+card.q;
  document.getElementById('fcCounter').textContent=`${flashcardIdx+1} / ${cards.length}`;
  document.getElementById('flashcard').classList.remove('flipped');flashcardFlipped=false;
}
function flipFlashcard(){flashcardFlipped=!flashcardFlipped;document.getElementById('flashcard').classList.toggle('flipped',flashcardFlipped);}
function nextFlashcard(){flashcardIdx=(flashcardIdx+1)%getCurrentFlashcards().length;updateFlashcard();}
function prevFlashcard(){flashcardIdx=(flashcardIdx-1+getCurrentFlashcards().length)%getCurrentFlashcards().length;updateFlashcard();}
function shuffleFlashcards(){
  const cards=getCurrentFlashcards();
  for(let i=cards.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[cards[i],cards[j]]=[cards[j],cards[i]];}
  flashcardIdx=0;updateFlashcard();showToast('🔀 Mélangées !');
}

// Keyboard: flashcards
document.addEventListener('keydown',e=>{if(currentPage!=='flashcards')return;if(e.key==='ArrowRight')nextFlashcard();if(e.key==='ArrowLeft')prevFlashcard();if(e.key===' '||e.key==='Enter'){e.preventDefault();flipFlashcard();}});

// ============================================
// QCM — with difficulty filter
// ============================================
function renderQCM(container){
  qcmCurrentIdx=0;qcmAnswers={};qcmShown=false;qcmBlockFilter='all';qcmDiffFilter='all';
  const blocs=getCurrentQCMBlocs(),ue=UES[currentUE];
  container.innerHTML=`
    <h2>📝 QCM Interactif — ${ue.name}</h2>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.5rem">
      <span style="font-size:.85rem;color:var(--text-secondary);padding:.4rem 0">Blocs :</span>
      <button class="block-btn active" data-block="all" onclick="filterQCMBlock('all')">📋 Tous</button>
      ${blocs.map(b=>`<button class="block-btn" data-block="${b.id}" onclick="filterQCMBlock('${b.id}')">${b.icon} ${b.name}</button>`).join('')}
    </div>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem">
      <span style="font-size:.85rem;color:var(--text-secondary);padding:.4rem 0">Difficulté :</span>
      ${DIFFICULTIES.map(d=>`<button class="diff-btn ${d.id==='all'?'active':''}" data-diff="${d.id}" onclick="filterQCMDiff('${d.id}')">${d.icon} ${d.name}</button>`).join('')}
    </div>
    <div id="qcmContent"></div>`;
  renderQCMQuestion();
}
function filterQCMBlock(blockId){qcmBlockFilter=blockId;qcmCurrentIdx=0;qcmAnswers={};qcmShown=false;document.querySelectorAll('.block-btn').forEach(b=>b.classList.toggle('active',b.dataset.block===blockId));renderQCMQuestion();}
function filterQCMDiff(diffId){qcmDiffFilter=diffId;qcmCurrentIdx=0;qcmAnswers={};qcmShown=false;document.querySelectorAll('.diff-btn').forEach(b=>b.classList.toggle('active',b.dataset.diff===diffId));renderQCMQuestion();}

function getFilteredQuestions(){
  let q=getCurrentQCM();
  if(qcmBlockFilter!=='all')q=q.filter(x=>x.bloc===qcmBlockFilter);
  if(qcmDiffFilter!=='all')q=q.filter(x=>x.diff===qcmDiffFilter);
  return q;
}

function renderQCMQuestion(){
  const qs=getFilteredQuestions(),content=document.getElementById('qcmContent');if(!content)return;
  if(qs.length===0){content.innerHTML='<div class="card"><p>Aucune question ne correspond aux filtres sélectionnés. Essayez d\'élargir vos critères.</p></div>';return;}
  const allDone=qs.every((_,i)=>qcmAnswers[i]!==undefined);
  if(allDone&&qcmCurrentIdx>=qs.length){renderQCMScore(content,qs);return;}
  if(qcmCurrentIdx>=qs.length)qcmCurrentIdx=0;
  const q=qs[qcmCurrentIdx],ua=qcmAnswers[qcmCurrentIdx],answered=ua!==undefined;
  const diffLabel=DIFFICULTIES.find(d=>d.id===q.diff)||{icon:'⭐',name:q.diff};
  const blocs=getCurrentQCMBlocs();const bi=blocs.find(b=>b.id===q.bloc)||{icon:'📋',name:q.bloc};
  const answeredCount=Object.keys(qcmAnswers).length;
  content.innerHTML=`
    <div class="qcm-header">
      <div class="qcm-progress"><span>Q<strong>${qcmCurrentIdx+1}</strong>/${qs.length}</span><div class="progress-bar"><div class="progress-fill" style="width:${((qcmCurrentIdx+1)/qs.length)*100}%"></div></div></div>
      <div><span class="badge badge-primary">${bi.icon} ${bi.name}</span><span class="badge" style="margin-left:.4rem;background:${q.diff==='easy'?'#e6f4ea':q.diff==='medium'?'#fef7e0':'#fce8e6'}">${diffLabel.icon} ${diffLabel.name}</span><span style="margin-left:.5rem;font-size:.85rem;color:var(--text-secondary)">✔ ${answeredCount}/${qs.length}</span></div>
    </div>
    <div class="qcm-card">
      <div class="qcm-question-num">Question ${qcmCurrentIdx+1}</div>
      <div class="qcm-question-text">${q.q}</div>
      <div class="qcm-options">${q.opts.map((o,i)=>`<div class="qcm-option ${answered?(i===q.ans?'correct':(i===ua?'incorrect':'')):''}" onclick="${answered?'':`selectQCMAnswer(${qcmCurrentIdx},${i})`}" style="${answered?'pointer-events:none':''}"><strong>${String.fromCharCode(65+i)}</strong> — ${o}</div>`).join('')}</div>
      <div class="qcm-explanation ${answered?'visible':''}">${answered?`<strong>✅ ${String.fromCharCode(65+q.ans)}</strong><br>${q.expl}`:''}</div>
    </div>
    <div class="qcm-nav">
      <button class="btn-outline" onclick="prevQCM()" ${qcmCurrentIdx===0?'disabled':''}>◀</button>
      <div>${answered?`<button class="btn-accent btn-sm" onclick="resetQCMAnswer(${qcmCurrentIdx})">🔄 Réessayer</button>`:''}<button class="btn-primary" onclick="nextQCM()">${qcmCurrentIdx>=qs.length-1?'🏁 Score':'▶'}</button></div>
    </div>`;
}
function selectQCMAnswer(idx,ans){qcmAnswers[idx]=ans;qcmShown=true;renderQCMQuestion();}
function resetQCMAnswer(idx){delete qcmAnswers[idx];renderQCMQuestion();}
function nextQCM(){const qs=getFilteredQuestions();qcmCurrentIdx++;if(qcmCurrentIdx>qs.length)qcmCurrentIdx=qs.length;renderQCMQuestion();}
function prevQCM(){if(qcmCurrentIdx>0)qcmCurrentIdx--;renderQCMQuestion();}

function renderQCMScore(container,qs){
  const correct=qs.filter((q,i)=>qcmAnswers[i]===q.ans).length,total=qs.length,pct=Math.round(correct/total*100);
  let msg,emoji;
  if(pct>=90){msg='Excellent !';emoji='🏆';}else if(pct>=70){msg='Bon niveau.';emoji='👍';}else if(pct>=50){msg='Continuez.';emoji='📖';}else{msg='Reprenez le cours.';emoji='💪';}
  // Celebration effect for high scores
  if(pct>=90)setTimeout(()=>spawnConfetti(),300);
  container.innerHTML=`
    <div class="qcm-score">
      <div class="big-score">${pct}%</div><div class="score-label">${correct}/${total} correctes</div>
      <p style="margin-top:1rem;font-size:1.2rem">${emoji} ${msg}</p>
      <div style="margin-top:2rem"><h4>Par bloc</h4>${getCurrentQCMBlocs().filter(b=>qs.some(q=>q.bloc===b.id)).map(b=>{const bq=qs.filter(q=>q.bloc===b.id);const bc=bq.filter((q,i)=>{const gi=getCurrentQCM().indexOf(q);return qcmAnswers[gi]===q.ans;}).length;return`<div class="card" style="margin:.5rem 0"><strong>${b.icon} ${b.name}</strong>: ${bc}/${bq.length} (${Math.round(bc/bq.length*100)}%)<div class="progress-bar" style="margin-top:.5rem"><div class="progress-fill" style="width:${(bc/bq.length)*100}%;background:${bc/bq.length>=.7?'var(--success)':bc/bq.length>=.5?'var(--warning)':'var(--danger)'}"></div></div></div>`;}).join('')}</div>
      <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap"><button class="btn-primary" onclick="resetQCM()">🔄 Recommencer</button><button class="btn-outline" onclick="navigateTo('flashcards')">🃏 Flashcards</button></div>
    </div>`;
}
function resetQCM(){qcmAnswers={};qcmCurrentIdx=0;qcmShown=false;renderQCMQuestion();}

// Keyboard QCM
document.addEventListener('keydown',e=>{if(currentPage!=='qcm')return;if(e.key==='ArrowRight')nextQCM();if(e.key==='ArrowLeft')prevQCM();});

// ============================================
// CONFETTI CELEBRATION
// ============================================
function spawnConfetti(){
  const colors=['#ff6d00','#1a73e8','#0d904f','#f9ab00','#d93025','#c2642a','#9334e6','#00bcd4'];
  for(let i=0;i<80;i++){
    const el=document.createElement('div');
    el.style.cssText=`position:fixed;width:${6+Math.random()*8}px;height:${6+Math.random()*8}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}vw;top:-20px;border-radius:${Math.random()>.5?'50%':'2px'};z-index:9999;pointer-events:none;animation:confettiFall ${2+Math.random()*3}s ease-in forwards;animation-delay:${Math.random()*.5}s;`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3500);
  }
}

// ============================================
// FORMULES
// ============================================
function renderFormules(container){container.innerHTML=`<h2>🧮 Formules & Conversions</h2><input type="text" class="search-box" placeholder="🔍 Rechercher..." oninput="filterFormules(this.value)"><div id="formulesList">${FORMULES.map(f=>`<div class="formula-card" data-search="${f.name.toLowerCase()} ${f.desc.toLowerCase()}"><div class="formula-name">${f.name}</div><div class="formula-math">${f.math}</div><p style="font-size:.9rem;color:var(--text-secondary)">${f.desc}</p></div>`).join('')}</div><h3 style="margin-top:2rem">Coefficients AIE</h3><input type="text" class="search-box" placeholder="🔍 Rechercher un produit..." oninput="filterCoeffs(this.value)"><table id="coeffsTable"><thead><tr><th>Produit</th><th>Unité</th><th>TEP</th></tr></thead><tbody>${COEFFS.map(c=>`<tr data-search="${c.product.toLowerCase()}"><td><strong>${c.product}</strong></td><td>${c.unit}</td><td>${c.tep}</td></tr>`).join('')}</tbody></table>`;}
function filterFormules(q){const ql=q.toLowerCase();document.querySelectorAll('#formulesList .formula-card').forEach(c=>c.style.display=c.dataset.search.includes(ql)?'':'none');}
function filterCoeffs(q){const ql=q.toLowerCase();document.querySelectorAll('#coeffsTable tbody tr').forEach(r=>r.style.display=r.dataset.search.includes(ql)?'':'none');}

// ============================================
// TECHNOS
// ============================================
function renderTechnos(container){
  const ue=UES[currentUE];
  if(currentUE==='ue06'){
    container.innerHTML=`<h2>☀️ Technologies EnR</h2><div class="tech-grid">${TECHNOS.map(t=>`<div class="tech-card"><h4><span class="tech-icon">${t.icon}</span> ${t.name}</h4><p><strong>Principe :</strong> ${t.principe}</p><p><strong>Types :</strong></p><ul style="font-size:.85rem;padding-left:1.2rem">${t.types.map(ty=>`<li>${ty}</li>`).join('')}</ul><p><strong>LCOE :</strong> ${t.lcoe}</p><p><strong>Vie :</strong> ${t.vie}</p></div>`).join('')}</div>`;
  }else{
    container.innerHTML=`<h2>🔨 Techniques de Déconstruction</h2><div class="tech-grid">
      <div class="tech-card" style="border-top-color:var(--warning)"><h4><span class="tech-icon">✋</span> Manuelle</h4><p><strong>Principe :</strong> Intervention humaine directe</p><ul style="font-size:.9rem;padding-left:1.2rem"><li><strong>Dérasement/Écrêtage</strong> : attaque par le haut</li><li><strong>Sapement</strong> : attaque par la base</li></ul><p><strong>Outils :</strong> Marteaux-piqueurs, burins, masses</p></div>
      <div class="tech-card" style="border-top-color:var(--accent)"><h4><span class="tech-icon">🚜</span> Mécanique</h4><p><strong>Principe :</strong> Engins lourds avec accessoires</p><ul style="font-size:.9rem;padding-left:1.2rem"><li><strong>BRH</strong> (Brise-Roche Hydraulique)</li><li><strong>Cisailles</strong> (acier/béton)</li><li><strong>Pinces de tri</strong></li></ul><p><strong>Engins :</strong> Pelles hydrauliques</p></div>
      <div class="tech-card" style="border-top-color:var(--danger)"><h4><span class="tech-icon">💥</span> Explosifs</h4><p><strong>Principe :</strong> Charges explosives → effondrement contrôlé</p><ul style="font-size:.9rem;padding-left:1.2rem"><li><strong>Foudroyage</strong> : immeubles, tours</li><li>Ouvrages d'art</li></ul><p><strong>Condition :</strong> Bâtiment isolé</p></div>
      <div class="tech-card" style="border-top-color:var(--success)"><h4><span class="tech-icon">🔩</span> Expansion</h4><p><strong>Principe :</strong> Pression mécanique ou chimique</p><ul style="font-size:.9rem;padding-left:1.2rem"><li><strong>Vérins/Écarteurs</strong> hydrauliques</li><li><strong>Mortier expansif</strong> (chimique)</li></ul><p><strong>Avantage :</strong> Sans vibration ni bruit</p></div>
    </div>`;
  }
}

// ============================================
// JURIDIQUE
// ============================================
function renderJuridique(container){container.innerHTML=`<h2>⚖️ Aspects Juridiques (M16)</h2><div class="card"><h3>Instruments Internationaux</h3><table><tr><th>Instrument</th><th>Date</th><th>Objectif</th></tr><tr><td><strong>CNUCC</strong></td><td>1992</td><td>Stabiliser GES</td></tr><tr><td><strong>Protocole de Kyoto</strong></td><td>1997</td><td>Réductions contraignantes</td></tr><tr><td><strong>Accord de Paris</strong></td><td>2015</td><td>&lt;2°C, idéal 1,5°C</td></tr><tr><td><strong>ODD</strong></td><td>09/2015</td><td>17 objectifs — <strong>ODD7 : Énergie propre</strong></td></tr></table></div><div class="card"><h3>ODD7 — Cibles 2030</h3><ol><li>Accès universel énergie moderne</li><li>Accroître part EnR</li><li>Doubler efficacité énergétique</li><li>Coopération R&D</li><li>Infrastructures PED</li></ol></div><div class="card"><h3>Instruments Fiscaux</h3><ul style="padding-left:1.2rem"><li>📜 Lois EnR et codes de l'énergie</li><li>💰 Exonérations TVA/droits douane</li><li>⚡ Tarifs d'achat garantis</li><li>📋 Appels d'offres</li><li>🏷️ Directives UEMOA</li></ul></div><div class="card" style="background:#e8f0fe"><h4>💡 Chiffres clés</h4><ul style="padding-left:1.2rem"><li>Afrique &lt;3% émissions CO₂</li><li>13% population sans électricité</li><li>3 Mds dépendent bois/charbon</li><li>Énergie = 60% GES mondiaux</li><li>EnR = 17,5% énergie finale (2015)</li></ul></div>`;}

// ============================================
// EXERCICES
// ============================================
function renderExercices(container){
  if(currentUE==='ue06'){
    container.innerHTML=`<h2>📐 Exercices Corrigés</h2>
      ${makeAccordion('📝 Ex 1 — Comptabilité Carbone','<p><strong>Énoncé :</strong> Camion 20L/100km, 3,5 kg CO₂/L.</p><div class="formula-card"><div class="formula-math">CO₂ = 20×3,5 = <strong>70 kg CO₂</strong></div></div>')}
      ${makeAccordion('📝 Ex 2 — Projection Demande','<p><strong>Énoncé :</strong> 32M hab, 4/ménage, 150W/ménage, α=5%.</p><div class="formula-card"><div class="formula-math">P₀=32M÷4×150W=<strong>1200 MW</strong><br>P₁₀=1200×(1,05)¹⁰=<strong>1955 MW</strong></div></div>')}
      ${makeAccordion('📝 Ex 3 — Indicateurs','<p><strong>Énoncé :</strong> BF 2020 : ATEP 5636 ktep, 20M hab, PIB 15,7 Mds€.</p><div class="formula-card"><div class="formula-math">IE=5636/15700=<strong>0,36 tep/1000€</strong><br>C/hab=5636/20M=<strong>0,28 tep/hab</strong></div></div>')}
      ${makeAccordion('📝 Ex 4 — Taux d\'Électrification','<div class="formula-card"><div class="formula-math"><strong>TE = TD × TCG</strong></div><p>TEU=37%, TER=9,3%. Calculer TE régional.</p></div>')}`;
  }else{
    container.innerHTML=`<h2>📐 Exercices Corrigés — U07</h2>
      ${makeAccordion('📝 Ex 1 — Catégorisation Déchets','<p>Classez : amiante, gravats, bois, peinture au plomb, plastiques</p><div class="formula-card"><p><strong>✅ Dangereux :</strong> amiante, peinture au plomb<br><strong>✅ Non dangereux :</strong> gravats (inertes), bois/plastiques (non inertes)</p></div>')}
      ${makeAccordion('📝 Ex 2 — Choix Technique','<p>Immeuble 15 étages en centre-ville dense. Technique recommandée ?</p><div class="formula-card"><p><strong>✅ Manuelle ou mécanique</strong> (pas d\'explosifs en zone dense). Commencer par désamiantage + curage.</p></div>')}
      ${makeAccordion('📝 Ex 3 — PIC','<p>Énumérez 5 éléments du Plan d\'Installation de Chantier.</p><div class="formula-card"><p><strong>✅</strong> Accès, zones stockage, zones tri déchets, bureaux, vestiaires, clôture, signalisation.</p></div>')}`;
  }
}

// ============================================
// UTILITIES
// ============================================
function toggleAccordion(h){h.parentElement.classList.toggle('open');}
function showToast(msg){
  const ex=document.querySelector('.toast');if(ex)ex.remove();
  const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>t.remove(),2500);
}
