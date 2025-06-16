import { Column } from './column.model';

export interface Card {
    id: number;
    title: string;
    description?: string;
    order: number;
    columnId?: number;
    column?: Column;
}