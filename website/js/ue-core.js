// ============================================
// Master GIS — UE Core: Registry, State, Helpers
// ============================================

const UES = {
  ue06: {
    id: 'ue06', name: 'UE06', title: 'Comptabilité & Planification Énergétique',
    icon: '⚡', color: '#1a73e8', colorLight: '#d2e3fc', colorDark: '#1a3a5c',
    modules: 'M16, M17, Module 15',
    pages: ['resume','flashcards','qcm','formules','technos','juridique','exercices']
  },
  ue07: {
    id: 'ue07', name: 'UE07', title: 'Infrastructure & Techniques de Destruction',
    icon: '🏗️', color: '#c2642a', colorLight: '#fce8d7', colorDark: '#5c2d0e',
    modules: 'M18, M19',
    pages: ['resume','flashcards','qcm','technos','exercices']
  },
  ue08: {
    id: 'ue08', name: 'UE08', title: 'Hydraulique & Cycle de l\'Eau',
    icon: '💧', color: '#0d8fa9', colorLight: '#d0f0f7', colorDark: '#054454',
    modules: 'M20, M21',
    pages: ['resume','flashcards','qcm','formules','technos','exercices']
  },
  ue09: {
    id: 'ue09', name: 'UE09', title: 'Assainissement de l\'Eau',
    icon: '🔄', color: '#7b1fa2', colorLight: '#f3e5f5', colorDark: '#3a0a4e',
    modules: 'M24, M25',
    pages: ['resume','flashcards','qcm','formules','technos','exercices']
  }
};

const ALL_UE_IDS = ['ue09', 'ue08', 'ue07', 'ue06'];
let currentUE = 'ue09';

const DIFFICULTIES = [
  { id:'all', name:'Tous', icon:'📋' },
  { id:'facile', name:'Facile', icon:'⭐', css:'diff-easy' },
  { id:'moyen', name:'Moyen', icon:'⭐⭐', css:'diff-medium' },
  { id:'eleve', name:'Élevé', icon:'⭐⭐⭐', css:'diff-hard' },
  { id:'tresdifficile', name:'Très difficile', icon:'💎', css:'diff-extreme' },
  { id:'hasard', name:'Hasard', icon:'🎲', css:'diff-random' }
];

const QCM_SIZES = [20, 40, 60, 80, 100];

// Data holders — populated by ue06-data.js and ue07-data.js
const UE_DATA = {};
function registerUE(id, data) { UE_DATA[id] = data; }

function getUE(id) { return UES[id]; }
function getUEData(id) { return UE_DATA[id || currentUE]; }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

// Shared: Formules & Coefficients (mostly UE06, but available to all)
const ALL_FORMULES = [];
const ALL_COEFFS = [];
const ALL_TECHNOS = [];
function registerFormules(arr) { ALL_FORMULES.push(...arr); }
function registerCoeffs(arr) { ALL_COEFFS.push(...arr); }
function registerTechnos(arr) { ALL_TECHNOS.push(...arr); }
