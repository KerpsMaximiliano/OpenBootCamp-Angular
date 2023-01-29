export enum LEVELS {
    'INFO',
    'URGENT',
    'BLOKING',
}

export interface ITask {
    title: string;
    description: string;
    completed: boolean;
    level: LEVELS;
}
