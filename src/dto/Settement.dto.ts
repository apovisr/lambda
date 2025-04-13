export interface SettlementDto {
    readonly name: string;
    readonly fromUserId: string;
    readonly toUserId: string;
    readonly amount: number;
}