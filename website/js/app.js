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
  if(currentUE==='ue06')container.innerHTML=`<h2>📋 Résumé — ${ue.name}</h2>${a('📐 Unités','<table><tr><th>Conversion</th><th>Valeur</th></tr><tr><td>1 TEP</td><td><strong>42 GJ</strong></td></tr><tr><td>1 GWh</td><td><strong>86 TEP</strong></td></tr><tr><td>1 MWh</td><td>3,6 GJ = <strong>0,086 TEP</strong></td></tr></table>')}${a('⛓️ Chaîne','<p><strong>Primaire</strong> → <strong>Secondaire</strong> → <strong>Finale</strong> → <strong>Utile</strong></p>')}${a('📊 Bilan','<div class="formula-card"><div class="formula-math">P+Im–Ex±VS=Pt+Cne+Cf</div></div><p>ATEP=P+Im–Ex–Soutages±ΔStocks</p>')}${a('📈 Indicateurs','<table><tr><th>Indicateur</th><th>Formule</th></tr><tr><td>Indépendance</td><td>Production/ATEP</td></tr><tr><td>Intensité</td><td>CFT/PIB</td></tr><tr><td>Électrification</td><td><strong>TE=TD×TCG</strong></td></tr></table>')}${a('🌿 Carbone','<table><tr><td>CO₂</td><td><strong>1</strong></td></tr><tr><td>CH₄</td><td><strong>25</strong></td></tr><tr><td>N₂O</td><td><strong>298</strong></td></tr></table>')}${a('🔧 Planification','<p>Outils: LEAP, MAED, EnergyPLAN</p><p>Projection: Pₙ=P₀(1+α)ⁿ(1+β)ⁿ</p>')}`;
  else container.innerHTML=`<h2>📋 Résumé — ${ue.name}</h2>${a('📖 Concepts','<p><strong>Déconstruction</strong> = démolition intelligente avec tri</p><p><strong>CCTP</strong> = Cahier des Clauses Techniques Particulières</p>')}${a('🔄 Étapes','<p>1. Désamiantage → 2. Déplombage → 3. Curage → 4. Déconstruction</p>')}${a('🔨 4 Techniques','<table><tr><td>Manuelle</td><td>Dérasement, sapement</td></tr><tr><td>Mécanique</td><td>BRH, cisailles</td></tr><tr><td>Explosifs</td><td>Foudroyage</td></tr><tr><td>Expansion</td><td>Vérins, mortier</td></tr></table>')}${a('🛡️ Sécurité','<p>EPI, amiante→cancer, plomb→saturnisme</p><p>Déchets: dangereux/non dangereux, gravats→granulats</p>')}`;
}
function a(title,body){return`<div class="accordion open"><div class="accordion-header" onclick="toggleAccordion(this)">${title}</div><div class="accordion-body">${body}</div></div>`;}

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
