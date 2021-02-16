import CFO_QSet from './roleQuestionSets/CFOQuestionSet';
import CONTROLLER_QSet from './roleQuestionSets/CONTROLLERQuestionSet';
import FINANCE_QSet from './roleQuestionSets/FINANCEQuestionSet';
import FPA_QSet from './roleQuestionSets/FPA_QuestionSet';
import STRATD_QSet from './roleQuestionSets/STRATD_QuestionSet';
import HOP_QSet from './roleQuestionSets/HOP_QuestionSet';
import FS_QSet from './roleQuestionSets/FS_QuestionSet';
import CAE_QSet from './roleQuestionSets/CAE_QuestionSet';
import None from './roleQuestionSets/None';

const QuestionSets = {
    'Choose your role': None,
    'CFO': CFO_QSet,
    'CAO or Controller': CONTROLLER_QSet,
    'VP or Director of Finance': FINANCE_QSet,
    'VP or Director of FP&A': FPA_QSet,
    'VP or Director Corp. Strategy and Development': STRATD_QSet,
    'Head of Procurement': HOP_QSet,
    'VP or Director of Financial Systems': FS_QSet,
    'Chief Audit Executive': CAE_QSet,
};       


export default QuestionSets;
