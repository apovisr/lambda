export interface ExpenseDto {
    readonly name: string;
    readonly users: Array<SplitDto>;
    readonly owner: string;
}

export interface SplitDto {
    readonly name: string;
    readonly totalAmount: number;
}