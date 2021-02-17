import * as actionTypes from '../actions/actionTypes';
import {
    updateObject
} from '../utility';

const initialState = {
    currentRole: 'Choose your role',
    currentTxtRole: 'Choose your role',
    EXISTING_ROLES: [
        {
            English: 'Choose your role',
            German: 'Funktion auswählen',
            French: 'Quel poste occupez-vous ?',
            Russian: 'Выберите свою роль',
            Turkish: 'Görevinizi Seçin',
            Italian: 'Seleziona il tuo ruolo',
            Spanish: 'Seleccione su cargo',
            PortugueseBR: 'Selecione sua função',
            SpanishLAD: 'Selecciona tu cargo'
        },
        {
            English: 'C-level',
            German: 'C-levelg',
            French: 'C-levelf',
            Russian: 'C-levelr',
            Turkish: 'C-levelt',
            Italian: 'C-leveli',
            Spanish: 'C-levels',
            PortugueseBR: 'C-levelp',
            SpanishLAD: 'C-levels'
        },
        {
            English: 'CFO',
            German: 'CFO',
            French: 'Directeur financier et administratif',
            Russian: 'Директор финансового департамента',
            Turkish: 'CFO',
            Italian: 'CFO',
            Spanish: 'CFO',
            PortugueseBR: 'CFO',
            SpanishLAD: 'CFO'
        },
        {
            English: 'CAO or Controller',
            German: 'CAO oder Controller',
            French: 'Responsable administratif ou contrôleur de gestion',
            Russian: 'Главный бухгалтер или финансовый контролер',
            Turkish: 'CAO veya Denetçi',
            Italian: 'Direttore Amministrativo, Responsabile Bilancio Consolidato di Gruppo',
            Spanish: 'CAO o controller',
            PortugueseBR: 'CAO ou Controller',
            SpanishLAD: 'CAO ó Controller'
        },
         {
            English: 'VP or Director of Finance',
            German: 'VP oder Leitung Finanzwesen',
            French: 'Vice-Président ou Directeur financier',
            Russian: 'Вице-президент или зам. директора по финансам',
            Turkish: 'BY veya Finans Müdürü',
            Italian: 'VP o Direttore Finanziario, Tesoriere',
            Spanish: 'VP o director financiero',
            PortugueseBR: 'Vice-presidente ou Diretor financeiro',
            SpanishLAD: 'Vicepresidente o Director de Finanzas'
        },
         {
            English: 'VP or Director of FP&A',
            German: 'VP oder Direktor Finanzplanung und Analysen',
            French: 'Vice-Président ou Directeur de la planification et de l’analyse financière',
            Russian: 'Вице-президент или директор по финансовому планированию и анализу',
            Turkish: 'BY veya FP&A Müdürü',
            Italian: 'VP o Responsabile Pianificazione & Controllo di Gestione, Group Controller',
            Spanish: 'VP o director de planificación y análisis financieros',
            PortugueseBR: 'Vice-presidente ou Diretor de FP&A',
            SpanishLAD: 'Vicepresidente o Director de FP&A'
        },
         {
            English: 'VP or Director Corp. Strategy and Development',
            German: 'VP oder Direktor Unternehmensstrategie und -entwicklung',
            French: 'Vice-Président ou Directeur de la stratégie d’entreprise et du développement',
            Russian: 'Вице-президент или директор по стратегическому развитию',
            Turkish: 'BY veya Kurumsal Strateji ve Geliştirme Direktörü',
            Italian: 'VP o Responsabile Strategia, Sviluppo, Fusioni e Acquisizioni',
            Spanish: 'VP o director de estrategia y desarrollo corporativos',
            PortugueseBR: 'Vice-presidente ou Diretor de estratégia e desenvolvimento corporativo',
            SpanishLAD: 'Vicepresidente o Director Corp. Estrategia y Desarrollo'
        },
        {
            English: 'Head of Procurement',
            German: 'Leitung Einkauf',
            French: 'Responsable des achats',
            Russian: 'Начальник отдела снабжения',
            Turkish: 'Satın Alma Şefi',
            Italian: 'Direttore Acquisti, Responsabile Procurement',
            Spanish: 'Jefe de aprovisionamiento',
            PortugueseBR: 'Diretor de compras',
            SpanishLAD: 'Jefe de Adquisiciones'
        },
        {
            English: 'VP or Director of Financial Systems',
            German: 'VP oder Direktor Finanzdienstsysteme ',
            French: 'Vice-Président ou Responsable des systèmes financiers ',
            Russian: 'Вице-президент или ИТ-директор по сопровождению фин. систем ',
            Turkish: 'BY veya Finansal Sistemler Direktörü',
            Italian: 'VP o Responsabile IT delle applicazioni per l\'area Finance (AFC)',
            Spanish: 'VP o director de sistemas financieros',
            PortugueseBR: 'Vice-presidente ou Diretor de sistemas financeiros',
            SpanishLAD: 'Vicepresidente o Director de Sistemas Financieros '
        },
        {
            English: 'Chief Audit Executive',
            German: 'Leitende Prüfer',
            French: 'Directeur de l’audit interne',
            Russian: 'Руководитель внутреннего аудита',
            Turkish: 'Baş Denetçi',
            Italian: 'Responsabile dell\'Internal Auditing, Risk Manager',
            Spanish: 'Director ejecutivo de auditorías ',
            PortugueseBR: 'Diretor executivo de auditoria ',
            SpanishLAD: 'Director Ejecutivo de Auditoría '
        }

    ],
    // EXISTING_ROLES: [
    //     'Choose your role',
    //     'CFO',
    //     'CAO or Controller',
    //     'VP or Director of Finance',
    //     'VP or Director of FP&A',
    //     'VP or Director Corp. Strategy and Development',
    //     'Head of Procurement',
    //     'VP or Director of Financial Systems', 
    //     'Chief Audit Executive',         
    // ]
}

const choose_role = (state, action) => {

    const arrOfRoles = state.EXISTING_ROLES;

    let index;

    arrOfRoles.find(function(obj, idx){        
        
        if(obj.English === action.role){
            index = idx;
        };  
        
        return;
    });

    return updateObject(state, {
        currentRole: action.role,
        currentTxtRole: arrOfRoles[index][action.lang],        
    });
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.CHOOSE_ROLE) {
        return choose_role(state, action);
    }
    return state;
};

export default reducer;
