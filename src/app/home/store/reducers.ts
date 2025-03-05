import { createFeature, createReducer, on } from '@ngrx/store';

import { QuizItemsStateInterface } from '../types/quiz-items-state.interface';
import { quizItemsActions } from './actions';

const initialState: QuizItemsStateInterface = {
    quizItems: [],
    isLoading: false,
    validationErrors: null,
};

const quizItemsFeature = createFeature({
    name: 'quizItems',
    reducer: createReducer(
        initialState,
        on(quizItemsActions.getQuizItems, (state) => ({
            ...state,
            isLoading: true,
            validationErrors: null,
        })),
        on(quizItemsActions.getQuizItemsSuccess, (state, action) => ({
            ...state,
            isLoading: false,
            quizItems: action.quizItems,
        })),
        on(quizItemsActions.getQuizItemsFailure, (state, action) => ({
            ...state,
            isLoading: false,
            validationErrors: action.errors,
        }))
    ),
});

export const {
    name: quizItemsFeatureKey,
    reducer: quizItemsReducer,
    selectIsLoading,
    selectQuizItems,
    selectValidationErrors,
} = quizItemsFeature;
