export interface ExpenseModel {
    readonly id: number;
    readonly description: string;
    readonly totalAmount: number;
    readonly date: Date;
    readonly paidByUserId: string;
}

export interface ExpenseParticipantModel {
    readonly id: number;
    readonly expenseId: number;
    readonly fromUserId: string;
    readonly toUserId: string;
    readonly amount: number;
}


export interface SettlementModel {
    readonly id: number;
    readonly name: string;
    readonly fromUserId: string;
    readonly toUserId: string;
    readonly amount: number;
}

export interface User {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly created_at: Date;
}

export interface Group {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly created_by: number;
}

export interface GroupMember {
    readonly id: number;
    readonly groupId: number;
    readonly userId: number;
    readonly joined_at: Date;
}
