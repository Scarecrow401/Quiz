import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export interface QuizItemsStateInterface {
    quizItems: any[];
    isLoading: boolean;
    validationErrors: BackendErrorsInterface | null;
}
