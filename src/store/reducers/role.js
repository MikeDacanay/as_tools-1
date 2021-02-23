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
            English: 'IT',
            German: 'ITg',
            French: 'ITf',
            Russian: 'ITr',
            Turkish: 'ITt',
            Italian: 'ITi',
            Spanish: 'ITs',
            PortugueseBR: 'ITp',
            SpanishLAD: 'ITs'
        },
        {
            English: 'Business mgr',
            German: 'Business mgrg',
            French: 'Business mgrf',
            Russian: 'Business mgrr',
            Turkish: 'Business mgrt',
            Italian: 'Business mgri',
            Spanish: 'Business mgrs',
            PortugueseBR: 'Business mgrp',
            SpanishLAD: 'Business mgrs'
        },
        {
            English: 'End-user',
            German: 'End-userg',
            French: 'End-userf',
            Russian: 'End-userr',
            Turkish: 'End-usert',
            Italian: 'End-useri',
            Spanish: 'End-users',
            PortugueseBR: 'End-userp',
            SpanishLAD: 'End-users'
        },      
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
