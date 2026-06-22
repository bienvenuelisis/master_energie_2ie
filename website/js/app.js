// ============================================
// UE06 – Révision Interactive — Application JS
// ============================================

// --- State ---
let currentPage = 'accueil';
let qcmBlockFilter = 'all';
let qcmCurrentIdx = 0;
let qcmAnswers = {};
let qcmShown = false;
let qcmMode = 'all'; // 'all' | 'block'
let flashcardIdx = 0;
let flashcardFlipped = false;

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  navigateTo('accueil');
});

// --- Navigation ---
function initNavigation() {
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Close sidebar on mobile when clicking content
  document.getElementById('mainContent').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
  });
}

function navigateTo(page) {
  currentPage = page;

  // Update nav active
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const activeLink = document.querySelector(`[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Render page
  const main = document.getElementById('mainContent');
  main.innerHTML = '';

  switch (page) {
    case 'accueil': renderAccueil(main); break;
    case 'resume': renderResume(main); break;
    case 'flashcards': renderFlashcards(main); break;
    case 'qcm': renderQCM(main); break;
    case 'formules': renderFormules(main); break;
    case 'technos': renderTechnos(main); break;
    case 'juridique': renderJuridique(main); break;
    case 'exercices': renderExercices(main); break;
    default: renderAccueil(main);
  }

  // Scroll to top
  window.scrollTo(0, 0);
  document.getElementById('sidebar').classList.remove('open');
}

// ============================================
// PAGE: Accueil
// ============================================
function renderAccueil(container) {
  container.innerHTML = `
    <div class="hero">
      <h2>⚡ UE06 – Comptabilité & Planification Énergétique</h2>
      <p>Master GIS — Gestion des Infrastructures et Services, option Énergies Renouvelables</p>
      <p><small>Modules M16 & M17 — Révision Interactive</small></p>
      <div class="hero-actions">
        <button class="btn btn-accent btn-lg" onclick="navigateTo('flashcards')">🃏 Flashcards Express</button>
        <button class="btn btn-primary btn-lg" onclick="navigateTo('qcm')">📝 QCM Interactif</button>
        <button class="btn btn-outline btn-lg" onclick="navigateTo('resume')">📋 Résumé Complet</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card" onclick="navigateTo('flashcards')" style="cursor:pointer">
        <div class="stat-value">${FLASHCARDS.length}</div>
        <div class="stat-label">🃏 Flashcards</div>
      </div>
      <div class="stat-card" onclick="navigateTo('qcm')" style="cursor:pointer">
        <div class="stat-value">${QCM_QUESTIONS.length}</div>
        <div class="stat-label">📝 Questions QCM</div>
      </div>
      <div class="stat-card" onclick="navigateTo('formules')" style="cursor:pointer">
        <div class="stat-value">${FORMULES.length}</div>
        <div class="stat-label">🧮 Formules clés</div>
      </div>
      <div class="stat-card" onclick="navigateTo('technos')" style="cursor:pointer">
        <div class="stat-value">${TECHNOS.length}</div>
        <div class="stat-label">☀️ Fiches Technos</div>
      </div>
    </div>

    <div class="card">
      <h3>📖 Contenu de l'UE06</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin-top:1rem">
        <div>
          <h4>📊 Comptabilité Énergétique</h4>
          <ul style="padding-left:1.2rem;font-size:.9rem">
            <li>Chaîne énergétique (primaire → utile)</li>
            <li>Bilan énergétique & matrice</li>
            <li>Coefficients de conversion AIE</li>
            <li>Indicateurs (indépendance, intensité, électrification)</li>
            <li>Comptabilité carbone (Scopes 1-2-3, PRG)</li>
          </ul>
        </div>
        <div>
          <h4>🔧 Planification Énergétique</h4>
          <ul style="padding-left:1.2rem;font-size:.9rem">
            <li>Instruments (normes, régulation, audits, CPE)</li>
            <li>Outils (LEAP, MAED, MESSAGE, EnergyPLAN)</li>
            <li>Méthode simple pour PED</li>
            <li>Projection de la demande</li>
          </ul>
        </div>
        <div>
          <h4>☀️ Technologies EnR</h4>
          <ul style="padding-left:1.2rem;font-size:.9rem">
            <li>Solaire PV & Thermique (CSP)</li>
            <li>Éolien (Betz, Weibull, turbines)</li>
            <li>Hydroélectricité (Pelton, Francis, Kaplan)</li>
            <li>Biomasse, Géothermie, Énergies marines</li>
          </ul>
        </div>
        <div>
          <h4>⚖️ Aspects Juridiques</h4>
          <ul style="padding-left:1.2rem;font-size:.9rem">
            <li>Droit international de l'environnement</li>
            <li>ODD7 & Accord de Paris</li>
            <li>Instruments fiscaux (exonérations)</li>
            <li>Normes & Directives UEMOA</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="card" style="background:#e8f0fe;border-color:#1a73e8">
      <h4>💡 Conseil de révision</h4>
      <p style="font-size:.9rem">Commencez par les <strong>Flashcards</strong> pour mémoriser les points clés, puis testez-vous avec le <strong>QCM</strong>. Utilisez le <strong>Résumé Express</strong> et les <strong>Formules</strong> pour une révision de dernière minute avant l'examen.</p>
    </div>
  `;
}

// ============================================
// PAGE: Résumé Express
// ============================================
function renderResume(container) {
  container.innerHTML = `
    <h2>📋 Résumé Express — UE06</h2>

    <div class="accordion open">
      <div class="accordion-header" onclick="toggleAccordion(this)">📐 Unités et Conversions Essentielles</div>
      <div class="accordion-body">
        <table>
          <tr><th>Conversion</th><th>Valeur</th></tr>
          <tr><td>1 TEP</td><td><strong>42 GJ</strong> = 10¹⁰ cal ≈ 7 barils</td></tr>
          <tr><td>1 GWh → TEP</td><td><strong>86 TEP</strong></td></tr>
          <tr><td>1 MWh</td><td>3,6 GJ = <strong>0,086 TEP</strong></td></tr>
          <tr><td>1 cal</td><td>4,18 J</td></tr>
          <tr><td>1 baril</td><td>158,987 L</td></tr>
          <tr><td>1000 m³ gaz naturel</td><td>0,8 TEP</td></tr>
        </table>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">⛓️ Chaîne Énergétique</div>
      <div class="accordion-body">
        <p><strong>Primaire</strong> (brute, ex: pétrole brut, vent) → <strong>Secondaire</strong> (transformée, ex: électricité HT, essence) → <strong>Finale</strong> (livrée au consommateur) → <strong>Utile</strong> (service rendu: chaleur, lumière, force motrice)</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📊 Bilan Énergétique</div>
      <div class="accordion-body">
        <div class="formula-card">
          <div class="formula-name">Équation fondamentale</div>
          <div class="formula-math">P + Im – Ex ± VS = Pt + Cne + Cf</div>
        </div>
        <p><strong>ATEP</strong> = Production + Importations – Exportations – Soutages ± ΔStocks</p>
        <p><strong>3 blocs :</strong> ATEP → Transformations & Pertes → CFT</p>
        <p><strong>Signes :</strong> Inputs transformation (–) | Outputs transformation (+)</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📈 Indicateurs Clés</div>
      <div class="accordion-body">
        <table>
          <tr><th>Indicateur</th><th>Formule</th></tr>
          <tr><td>Indépendance énergétique</td><td>Production nationale / ATEP (%)</td></tr>
          <tr><td>Intensité énergétique</td><td>FT / PIB (tep/1000$US)</td></tr>
          <tr><td>Conso / habitant</td><td>FT / Population (tep/hab)</td></tr>
          <tr><td>Taux d'électrification</td><td><strong>TE = TD × TCG</strong></td></tr>
          <tr><td>Élasticité demande</td><td>e = (ΔQ/Q) / (ΔP/P)</td></tr>
        </table>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">🌿 Comptabilité Carbone</div>
      <div class="accordion-body">
        <table>
          <tr><th>Gaz</th><th>PRG (100 ans)</th><th>Durée de vie</th></tr>
          <tr><td>CO₂</td><td><strong>1</strong></td><td>~100 ans</td></tr>
          <tr><td>CH₄</td><td><strong>25</strong></td><td>~12 ans</td></tr>
          <tr><td>N₂O</td><td><strong>298</strong></td><td>~114 ans</td></tr>
          <tr><td>SF₆</td><td><strong>22 800</strong></td><td>—</td></tr>
        </table>
        <p><strong>Scopes :</strong> 1 (direct), 2 (électricité), 3 (autres indirect)</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">🔧 Planification</div>
      <div class="accordion-body">
        <p><strong>Outils :</strong> LEAP, MAED, MESSAGE, EnergyPLAN, WEAP</p>
        <p><strong>Instruments :</strong> Normes, régulation marché, certification, audits, FDE, PPP, net metering</p>
        <p><strong>Projection :</strong> Pₙ = P₀ × (1+α)ⁿ × (1+β)ⁿ</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">☀️ Panorama EnR</div>
      <div class="accordion-body">
        <p><strong>Éolien :</strong> Limite Betz 16/27 (59%) | P ∝ V³ | Weibull | Espacement 5-10×D</p>
        <p><strong>Hydro :</strong> Pelton (>300m) | Francis (30-300m) | Kaplan (<30m) | 16% élec mondiale</p>
        <p><strong>Solaire PV :</strong> Mono 12-16% | Poly 11-14% | Amorphe 5-8% | Durée vie 20-30 ans</p>
        <p><strong>Biomasse :</strong> 80% énergie finale PED | Voie sèche/humide/biocarburants</p>
        <p><strong>Géothermie :</strong> Gradient 3°C/100m | Rift Valley 9000 MW</p>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">⚖️ Juridique & Fiscal</div>
      <div class="accordion-body">
        <p><strong>ODD7 :</strong> Accès universel à l'énergie propre et abordable d'ici 2030</p>
        <p><strong>Accord de Paris :</strong> < 2°C, idéalement 1,5°C</p>
        <p><strong>Instruments :</strong> Exonérations fiscales, tarifs d'achat garantis, normes UEMOA</p>
      </div>
    </div>
  `;
}

// ============================================
// PAGE: Flashcards
// ============================================
function renderFlashcards(container) {
  flashcardIdx = 0;
  flashcardFlipped = false;

  container.innerHTML = `
    <h2>🃏 Flashcards de Révision</h2>
    <p class="text-secondary">Cliquez sur la carte pour voir la réponse. Parcourez les ${FLASHCARDS.length} cartes.</p>

    <div class="flashcard-container">
      <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
        <div class="flashcard-face flashcard-front" id="flashcardFront">
          <div class="flashcard-topic" id="fcTopic"></div>
          <div class="flashcard-question" id="fcQuestion"></div>
          <div class="flashcard-hint">👆 Cliquez pour révéler la réponse</div>
        </div>
        <div class="flashcard-face flashcard-back" id="flashcardBack">
          <div class="flashcard-topic" id="fcTopicBack"></div>
          <div class="flashcard-answer" id="fcAnswer"></div>
          <div class="flashcard-hint">👆 Cliquez pour revenir</div>
        </div>
      </div>
    </div>

    <div class="flashcard-controls">
      <button class="btn btn-outline" onclick="prevFlashcard()">◀ Précédent</button>
      <button class="btn btn-accent" onclick="flipFlashcard()">🔄 Retourner</button>
      <button class="btn btn-outline" onclick="nextFlashcard()">Suivant ▶</button>
      <button class="btn btn-sm btn-outline" onclick="shuffleFlashcards()">🔀 Mélanger</button>
    </div>
    <div class="flashcard-counter" id="fcCounter"></div>
  `;

  updateFlashcard();
}

function updateFlashcard() {
  const card = FLASHCARDS[flashcardIdx];
  document.getElementById('fcTopic').textContent = card.topic;
  document.getElementById('fcQuestion').textContent = card.q;
  document.getElementById('fcTopicBack').textContent = card.topic;
  document.getElementById('fcAnswer').innerHTML = card.a;
  document.getElementById('fcCounter').textContent = `${flashcardIdx + 1} / ${FLASHCARDS.length}`;

  const fc = document.getElementById('flashcard');
  fc.classList.remove('flipped');
  flashcardFlipped = false;
}

function flipFlashcard() {
  flashcardFlipped = !flashcardFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', flashcardFlipped);
}

function nextFlashcard() {
  flashcardIdx = (flashcardIdx + 1) % FLASHCARDS.length;
  updateFlashcard();
}

function prevFlashcard() {
  flashcardIdx = (flashcardIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length;
  updateFlashcard();
}

function shuffleFlashcards() {
  for (let i = FLASHCARDS.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [FLASHCARDS[i], FLASHCARDS[j]] = [FLASHCARDS[j], FLASHCARDS[i]];
  }
  flashcardIdx = 0;
  updateFlashcard();
  showToast('🔀 Flashcards mélangées !');
}

// --- Keyboard nav for flashcards ---
document.addEventListener('keydown', (e) => {
  if (currentPage !== 'flashcards') return;
  if (e.key === 'ArrowRight') nextFlashcard();
  if (e.key === 'ArrowLeft') prevFlashcard();
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipFlashcard(); }
});

// ============================================
// PAGE: QCM
// ============================================
function renderQCM(container) {
  qcmBlockFilter = 'all';
  qcmCurrentIdx = 0;
  qcmAnswers = {};
  qcmShown = false;
  qcmMode = 'all';

  container.innerHTML = `
    <h2>📝 QCM Interactif — ${QCM_QUESTIONS.length} Questions</h2>

    <div class="qcm-block-selector" id="qcmBlockSelector">
      <button class="block-btn active" data-block="all" onclick="filterQCMBlock('all')">📋 Tous</button>
      ${QCM_BLOCS.map(b => `<button class="block-btn" data-block="${b.id}" onclick="filterQCMBlock('${b.id}')">${b.icon} ${b.name}</button>`).join('')}
    </div>

    <div id="qcmContent"></div>
  `;

  renderQCMQuestion();
}

function filterQCMBlock(blockId) {
  qcmBlockFilter = blockId;
  qcmCurrentIdx = 0;
  qcmAnswers = {};
  qcmShown = false;
  qcmMode = blockId === 'all' ? 'all' : 'block';

  document.querySelectorAll('.block-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-block="${blockId}"]`).classList.add('active');

  renderQCMQuestion();
}

function getFilteredQuestions() {
  return qcmBlockFilter === 'all' ? QCM_QUESTIONS : QCM_QUESTIONS.filter(q => q.bloc === qcmBlockFilter);
}

function renderQCMQuestion() {
  const questions = getFilteredQuestions();
  const content = document.getElementById('qcmContent');
  if (!content) return;

  if (questions.length === 0) {
    content.innerHTML = '<p>Aucune question trouvée.</p>';
    return;
  }

  // Show score if all questions done
  const allAnswered = questions.every((_, i) => qcmAnswers[i] !== undefined);
  if (allAnswered && qcmCurrentIdx >= questions.length) {
    renderQCMScore(content, questions);
    return;
  }

  // Ensure idx is valid
  if (qcmCurrentIdx >= questions.length) qcmCurrentIdx = 0;

  const q = questions[qcmCurrentIdx];
  const userAns = qcmAnswers[qcmCurrentIdx];
  const blockInfo = QCM_BLOCS.find(b => b.id === q.bloc);
  const answered = userAns !== undefined;

  content.innerHTML = `
    <div class="qcm-header">
      <div class="qcm-progress">
        <span>Question <strong>${qcmCurrentIdx + 1}</strong> / ${questions.length}</span>
        <div class="progress-bar"><div class="progress-fill" style="width:${((qcmCurrentIdx + 1) / questions.length) * 100}%"></div></div>
      </div>
      <div>
        <span class="badge badge-primary">${blockInfo ? blockInfo.icon : ''} ${blockInfo ? blockInfo.name : q.bloc}</span>
        <span style="margin-left:.5rem;font-size:.85rem;color:var(--text-secondary)">Répondues : ${Object.keys(qcmAnswers).length}/${questions.length}</span>
      </div>
    </div>

    <div class="qcm-card">
      <div class="qcm-question-num">Question ${qcmCurrentIdx + 1}</div>
      <div class="qcm-question-text">${q.q}</div>
      <div class="qcm-options">
        ${q.opts.map((opt, i) => {
          let cls = '';
          if (answered) {
            if (i === q.ans) cls = 'correct';
            else if (i === userAns) cls = 'incorrect';
          } else if (qcmShown && qcmCurrentIdx === Object.keys(qcmAnswers).length - 1 && i === userAns) {
            // already handled above
          }
          // For the current question that was answered
          if (answered && i === userAns) {
            cls = i === q.ans ? 'correct' : 'incorrect';
          }
          return `<div class="qcm-option ${answered ? (i === q.ans ? 'correct' : (i === userAns ? 'incorrect' : '')) : ''}" 
                      onclick="${answered ? '' : `selectQCMAnswer(${qcmCurrentIdx}, ${i})`}"
                      style="${answered ? 'pointer-events:none' : ''}">
                    <strong>${String.fromCharCode(65 + i)}</strong> — ${opt}
                  </div>`;
        }).join('')}
      </div>
      <div class="qcm-explanation ${answered ? 'visible' : ''}" id="qcmExpl">
        ${answered ? `<strong>✅ Réponse : ${String.fromCharCode(65 + q.ans)}</strong><br><br>${q.expl}` : ''}
      </div>
    </div>

    <div class="qcm-nav">
      <button class="btn btn-outline" onclick="prevQCM()" ${qcmCurrentIdx === 0 ? 'disabled' : ''}>◀ Précédent</button>
      <div>
        ${answered ? `<button class="btn btn-accent btn-sm" onclick="resetQCMAnswer(${qcmCurrentIdx})">🔄 Réessayer</button>` : ''}
        <button class="btn btn-primary" onclick="nextQCM()">${qcmCurrentIdx >= questions.length - 1 ? '🏁 Voir le score' : 'Suivant ▶'}</button>
      </div>
    </div>
  `;
}

function selectQCMAnswer(idx, ans) {
  qcmAnswers[idx] = ans;
  qcmShown = true;
  renderQCMQuestion();
}

function resetQCMAnswer(idx) {
  delete qcmAnswers[idx];
  renderQCMQuestion();
}

function nextQCM() {
  const questions = getFilteredQuestions();
  qcmCurrentIdx++;
  if (qcmCurrentIdx > questions.length) qcmCurrentIdx = questions.length;
  renderQCMQuestion();
}

function prevQCM() {
  if (qcmCurrentIdx > 0) qcmCurrentIdx--;
  renderQCMQuestion();
}

function renderQCMScore(container, questions) {
  const correct = questions.filter((q, i) => qcmAnswers[i] === q.ans).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  let message, emoji;
  if (pct >= 90) { message = 'Excellent ! Vous maîtrisez parfaitement l\'UE06.'; emoji = '🏆'; }
  else if (pct >= 70) { message = 'Bon niveau. Révisez les points faibles.'; emoji = '👍'; }
  else if (pct >= 50) { message = 'Niveau moyen. Reprenez les chapitres clés.'; emoji = '📖'; }
  else { message = 'Reprenez le cours en profondeur.'; emoji = '💪'; }

  container.innerHTML = `
    <div class="qcm-score">
      <div class="big-score">${pct}%</div>
      <div class="score-label">${correct} / ${total} réponses correctes</div>
      <p style="margin-top:1rem;font-size:1.2rem">${emoji} ${message}</p>

      <div style="margin-top:2rem">
        <h4>Résumé par bloc</h4>
        ${QCM_BLOCS.filter(b => qcmBlockFilter === 'all' || b.id === qcmBlockFilter).map(b => {
          const bq = questions.filter(q => q.bloc === b.id);
          if (bq.length === 0) return '';
          const bc = bq.filter((q, i) => {
            const globalIdx = QCM_QUESTIONS.indexOf(q);
            return qcmAnswers[globalIdx] === q.ans;
          }).length;
          return `<div class="card" style="margin:.5rem 0">
            <strong>${b.icon} ${b.name}</strong> : ${bc}/${bq.length} (${Math.round(bc/bq.length*100)}%)
            <div class="progress-bar" style="margin-top:.5rem"><div class="progress-fill" style="width:${(bc/bq.length)*100}%;background:${bc/bq.length >= 0.7 ? 'var(--success)' : bc/bq.length >= 0.5 ? 'var(--warning)' : 'var(--danger)'}"></div></div>
          </div>`;
        }).join('')}
      </div>

      <div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="resetQCM()">🔄 Recommencer</button>
        <button class="btn btn-outline" onclick="navigateTo('flashcards')">🃏 Voir les Flashcards</button>
      </div>
    </div>
  `;
}

function resetQCM() {
  qcmAnswers = {};
  qcmCurrentIdx = 0;
  qcmShown = false;
  renderQCMQuestion();
}

// --- Keyboard nav for QCM ---
document.addEventListener('keydown', (e) => {
  if (currentPage !== 'qcm') return;
  if (e.key === 'ArrowRight') nextQCM();
  if (e.key === 'ArrowLeft') prevQCM();
});

// ============================================
// PAGE: Formules & Conversions
// ============================================
function renderFormules(container) {
  container.innerHTML = `
    <h2>🧮 Formules & Conversions Essentielles</h2>

    <input type="text" class="search-box" placeholder="🔍 Rechercher une formule..." oninput="filterFormules(this.value)">

    <h3>Formules fondamentales</h3>
    <div id="formulesList">
      ${FORMULES.map(f => `
        <div class="formula-card" data-search="${f.name.toLowerCase()} ${f.desc.toLowerCase()}">
          <div class="formula-name">${f.name}</div>
          <div class="formula-math">${f.math}</div>
          <p style="font-size:.9rem;color:var(--text-secondary)">${f.desc}</p>
        </div>
      `).join('')}
    </div>

    <h3 style="margin-top:2rem">Coefficients de Conversion AIE</h3>
    <input type="text" class="search-box" placeholder="🔍 Rechercher un produit..." oninput="filterCoeffs(this.value)">
    <table id="coeffsTable">
      <thead><tr><th>Produit</th><th>Unité</th><th>TEP</th></tr></thead>
      <tbody>
        ${COEFFS.map(c => `<tr data-search="${c.product.toLowerCase()}"><td><strong>${c.product}</strong></td><td>${c.unit}</td><td>${c.tep}</td></tr>`).join('')}
      </tbody>
    </table>
  `;
}

function filterFormules(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('#formulesList .formula-card').forEach(card => {
    card.style.display = card.dataset.search.includes(q) ? '' : 'none';
  });
}

function filterCoeffs(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('#coeffsTable tbody tr').forEach(row => {
    row.style.display = row.dataset.search.includes(q) ? '' : 'none';
  });
}

// ============================================
// PAGE: Technologies EnR
// ============================================
function renderTechnos(container) {
  container.innerHTML = `
    <h2>☀️ Panorama des Technologies d'Énergies Renouvelables</h2>
    <div class="tech-grid">
      ${TECHNOS.map(t => `
        <div class="tech-card">
          <h4><span class="tech-icon">${t.icon}</span> ${t.name}</h4>
          <p><strong>Principe :</strong> ${t.principe}</p>
          <p><strong>Types :</strong></p>
          <ul style="font-size:.85rem;padding-left:1.2rem">
            ${t.types.map(ty => `<li>${ty}</li>`).join('')}
          </ul>
          <p><strong>LCOE/Coût :</strong> ${t.lcoe}</p>
          <p><strong>Durée de vie :</strong> ${t.vie}</p>
          <p><strong>Marché :</strong> ${t.marche}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// ============================================
// PAGE: Aspects Juridiques
// ============================================
function renderJuridique(container) {
  container.innerHTML = `
    <h2>⚖️ Aspects Juridiques, Fiscaux et Normatifs (M16)</h2>

    <div class="card">
      <h3>Instruments Internationaux</h3>
      <table>
        <tr><th>Instrument</th><th>Date</th><th>Objectif</th></tr>
        <tr><td><strong>CNUCC</strong></td><td>1992 (Rio)</td><td>Stabiliser les concentrations de GES</td></tr>
        <tr><td><strong>Protocole de Kyoto</strong></td><td>1997 / 2005</td><td>Réductions contraignantes des GES pour pays développés</td></tr>
        <tr><td><strong>Accord de Paris</strong></td><td>2015</td><td>Limiter réchauffement < 2°C, idéalement 1,5°C</td></tr>
        <tr><td><strong>ODD (17 objectifs)</strong></td><td>25 sept. 2015</td><td>Développement durable — <strong>ODD7 : Énergie propre</strong></td></tr>
      </table>
    </div>

    <div class="card">
      <h3>ODD7 — Cibles 2030</h3>
      <ol>
        <li>Accès universel à des services énergétiques modernes</li>
        <li>Accroître nettement la part des EnR dans le mix mondial</li>
        <li>Doubler le taux d'amélioration de l'efficacité énergétique</li>
        <li>Coopération internationale pour R&D énergies propres</li>
        <li>Développer les infrastructures énergétiques dans les PED</li>
      </ol>
    </div>

    <div class="card">
      <h3>Instruments Fiscaux et Juridiques Nationaux</h3>
      <ul style="padding-left:1.2rem">
        <li>📜 <strong>Lois sur les EnR</strong> et codes de l'énergie</li>
        <li>💰 <strong>Incitations fiscales</strong> : exonérations TVA/droits de douane sur équipements EnR</li>
        <li>⚡ <strong>Tarifs d'achat garantis</strong> (feed-in tariffs)</li>
        <li>📋 <strong>Appels d'offres</strong> et concessions</li>
        <li>🏷️ <strong>Normes et labels</strong> obligatoires (Directives UEMOA)</li>
      </ul>
    </div>

    <div class="card">
      <h3>Obstacles au Développement des EnR</h3>
      <ul style="padding-left:1.2rem">
        <li>💲 Coûts d'investissement élevés</li>
        <li>📜 Absence de réglementation adaptée</li>
        <li>🛢️ Subventions aux énergies fossiles</li>
        <li>👨‍🔧 Manque de formation et capacités techniques</li>
        <li>🏦 Accès au financement limité</li>
      </ul>
    </div>

    <div class="card" style="background:#e8f0fe">
      <h4>💡 Chiffres clés</h4>
      <ul style="padding-left:1.2rem">
        <li>Afrique : <strong>< 3%</strong> des émissions mondiales de CO₂</li>
        <li>13% de la population mondiale sans électricité moderne</li>
        <li>3 milliards dépendent du bois/charbon de bois</li>
        <li>L'énergie = <strong>60%</strong> des émissions mondiales de GES</li>
        <li>Part des EnR dans l'énergie finale (2015) : <strong>17,5%</strong></li>
      </ul>
    </div>
  `;
}

// ============================================
// PAGE: Exercices Corrigés
// ============================================
function renderExercices(container) {
  container.innerHTML = `
    <h2>📐 Exercices Corrigés</h2>

    <div class="accordion open">
      <div class="accordion-header" onclick="toggleAccordion(this)">📝 Exercice 1 — Comptabilité Carbone</div>
      <div class="accordion-body">
        <p><strong>Énoncé :</strong> Une chaîne de boutiques possède une flotte de camions. Chaque camion consomme 20 L d'essence / 100 km et émet 3,5 kg de CO₂ par litre d'essence.</p>
        <p><strong>Question :</strong> Calculer les émissions de CO₂ pour 100 km parcourus.</p>
        <div class="formula-card">
          <div class="formula-name">✅ Solution</div>
          <div class="formula-math">CO₂ = 20 L × 3,5 kg CO₂/L = <strong>70 kg CO₂</strong></div>
          <p style="font-size:.9rem">Pour 100 km parcourus, le camion émet 70 kg de CO₂.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📝 Exercice 2 — Comptabilité du Togo</div>
      <div class="accordion-body">
        <p><strong>Énoncé :</strong> À partir des données énergétiques du Togo (2018), établir la comptabilité énergétique et calculer les indicateurs.</p>
        <p><strong>Données clés :</strong> Production biomasse : 7 430 500 t ; Hydroélectricité : 46,5 GWh ; Importations produits pétroliers : 522 187 t ; Gaz naturel : 45 000 000 m³</p>
        <p><strong>Conversions :</strong> 1 GWh = 86 TEP ; Biomasse : 1 t = 0,4 TEP ; Produits pétroliers : 1 t = 0,96 TEP ; Gaz naturel : 1000 m³ = 0,8 TEP</p>
        <div class="formula-card">
          <div class="formula-name">✅ Solution — ATEP</div>
          <div class="formula-math">
            Production = 7 430 500×0,4 + 46,5×86 = 2 972 200 + 3 999 = <strong>2 976 199 TEP</strong><br>
            Importations = 522 187×0,96 + 45 000×0,8 + 1 076,7×86 = <strong>... TEP</strong>
          </div>
          <p style="font-size:.9rem">Continuer le calcul en suivant la matrice du bilan (ATEP → Transformations → CFT).</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📝 Exercice 3 — Indicateurs Burkina Faso</div>
      <div class="accordion-body">
        <p><strong>Énoncé :</strong> Burkina Faso 2020 — Produits pétroliers : 1 660 417 t/an ; Bois de feu : 7 227,5 kt/an ; Électricité : 1266 GWh/an (dont 81,4 GWh solaire PV) ; Population : 20 M ; PIB : 15,7 Mds €</p>
        <div class="formula-card">
          <div class="formula-name">✅ Solution</div>
          <div class="formula-math">
            <strong>1. Taux conso finale solaire PV :</strong> 81,4 × 86 / CFT_totale<br>
            <strong>2. Conso pétrole / PIB :</strong> 1 660 417 × 1,035 / 15 700<br>
            <strong>3. CFT / habitant :</strong> CFT_totale / 20 000 000
          </div>
          <p style="font-size:.9rem">Appliquer les coefficients de conversion pour chaque vecteur énergétique, puis calculer les indicateurs.</p>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📝 Exercice 4 — Projection de la Demande</div>
      <div class="accordion-body">
        <p><strong>Énoncé :</strong> Pays de 32 M habitants, 4 personnes/ménage, besoin 150 W/ménage. Croissance démographique α = 5%.</p>
        <div class="formula-card">
          <div class="formula-name">✅ Solution</div>
          <div class="formula-math">
            P₀ = 32M ÷ 4 × 150W = <strong>1 200 MW</strong><br>
            P₁₀ = 1 200 × (1,05)¹⁰ = 1 200 × 1,629 = <strong>1 955 MW</strong><br>
            Avec β = 8% : P₁₀ = 1 200 × 1,629 × (1,08)¹⁰ = <strong>4 220 MW</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion">
      <div class="accordion-header" onclick="toggleAccordion(this)">📝 Exercice 5 — Taux d'Électrification</div>
      <div class="accordion-body">
        <p><strong>Énoncé :</strong> Une région a TEU = 37% en urbain, TER = 9,3% en rural. Calculer TE régional si répartition urbain/rural connue.</p>
        <div class="formula-card">
          <div class="formula-name">✅ Rappel</div>
          <div class="formula-math">
            <strong>TE = TD × TCG</strong><br>
            TE = Taux d'électrification (ménages électrifiés / total)<br>
            TD = Taux de desserte (raccordés / ménages en zone)<br>
            TCG = Taux de couverture géographique (ménages en zone / total)
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// Utilities
// ============================================
function toggleAccordion(header) {
  const accordion = header.parentElement;
  accordion.classList.toggle('open');
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2500);
}

// ============================================
// Search (global, on home page)
// ============================================
function globalSearch(query) {
  if (!query || query.length < 2) return;
  const q = query.toLowerCase();

  // Search QCM
  const qcmMatches = QCM_QUESTIONS.filter(qq =>
    qq.q.toLowerCase().includes(q) || qq.opts.some(o => o.toLowerCase().includes(q))
  );

  // Search flashcards
  const fcMatches = FLASHCARDS.filter(fc =>
    fc.q.toLowerCase().includes(q) || fc.a.toLowerCase().includes(q) || fc.topic.toLowerCase().includes(q)
  );

  // Show results...
}
