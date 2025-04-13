import { ExpenseDto } from "../dto/expense.dto";
import { SettlementDto } from "../dto/Settement.dto";
import { ExpenseModel, SettlementModel } from "../model/expense.model";

const expenseDto: ExpenseDto = {
    name: 'Cena',
    users: [{name: 'A', totalAmount: 50}, {name: 'B', totalAmount: 30}, {name: 'C', totalAmount: 20}],
    owner: 'C'
}



const expenseModel:ExpenseModel = {
    id: 1,
    description: expenseDto.name,
    totalAmount: expenseDto.users.map(e=>e.totalAmount).reduce((sum, current) => sum + current, 0),
    date: new Date(),
    paidByUserId: expenseDto.owner
}


const expenseParticipantModel = expenseDto.users
.map(e => {
    return {
        id: 1,
        expenseId: expenseModel.id,
        fromUserId: e.name,
        toUserId: expenseDto.owner,
        amount: e.totalAmount
    }
})

const settlementDto:SettlementDto = {
    name: 'pago',
    fromUserId: 'B',
    toUserId: 'C',
    amount: 30
}

const settementModel: SettlementModel = {
    ...settlementDto,
    id: 1,
    amount: settlementDto.amount
}

console.log(expenseModel)
console.log(expenseParticipantModel)
console.log(settementModel)