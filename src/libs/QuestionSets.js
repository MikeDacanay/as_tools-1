import Clevel_QSet from './roleQuestionSets/C-level_QuestionSet';
import IT_QSet from './roleQuestionSets/IT_QuestionSet';
import BusinessMgr_QSet from './roleQuestionSets/BusinessMgr_QuestionSet';
import EndUser_QSet from './roleQuestionSets/EndUser_QuestionSet';
import None from './roleQuestionSets/None';

const QuestionSets = {
    'Choose your role': None,
    'C-level': Clevel_QSet,
    'IT': IT_QSet,
    'Business mgr': BusinessMgr_QSet,
    'End-user': EndUser_QSet,
};       


export default QuestionSets;
