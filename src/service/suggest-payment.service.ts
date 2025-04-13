import { ExpenseParticipantModel, SettlementModel } from "../model/expense.model";

const expenseParticipantModels: Array<ExpenseParticipantModel> = [
    { id: 1, expenseId: 1, fromUserId: 'A', toUserId: 'C', amount: 50 },
    { id: 1, expenseId: 1, fromUserId: 'B', toUserId: 'C', amount: 30 },
    { id: 1, expenseId: 1, fromUserId: 'C', toUserId: 'C', amount: 20 },
    { id: 1, expenseId: 2, fromUserId: 'C', toUserId: 'A', amount: 30 },
    { id: 1, expenseId: 2, fromUserId: 'B', toUserId: 'A', amount: 30 },
    { id: 1, expenseId: 2, fromUserId: 'A', toUserId: 'A', amount: 30 }
  ]

const settementModels:Array<SettlementModel>=[{
    name: 'pago',
    fromUserId: 'B',
    toUserId: 'C',
    id: 1,
    amount: 50
  },
  {
    name: 'pago',
    fromUserId: 'B',
    toUserId: 'A',
    id: 1,
    amount: 10
  },
  {
    name: 'pago',
    fromUserId: 'C',
    toUserId: 'A',
    id: 1,
    amount: 10
  },
  {
    name: 'pago',
    fromUserId: 'B',
    toUserId: 'A',
    id: 1,
    amount: 10
  },
  {
    name: 'pago',
    fromUserId: 'C',
    toUserId: 'A',
    id: 1,
    amount: 100
  }
]

const suggestPayments = ['A', 'B', 'C', 'D'].map(element => {
    const x = expenseParticipantModels.filter(e => e.fromUserId === element).map(e=> e.amount).reduce((a,b)=> a+b, 0)
    const y = expenseParticipantModels.filter(e => e.toUserId === element).map(e=> e.amount).reduce((a,b)=> a+b, 0)
    const z = settementModels.filter(e => e.toUserId === element).map(e=> e.amount).reduce((a,b)=> a+b, 0)
    const w = settementModels.filter(e => e.fromUserId === element).map(e=> e.amount).reduce((a,b)=> a+b, 0)

    return {
        userId: element,
        total: (y - x - z + w)
    
    }
});

console.log(suggestPayments);


while(suggestPayments.find(e => e.total < 0)){
    const toPay = suggestPayments.find(e => e.total > 0)
    const from = suggestPayments.find(e => e.total < 0)
    if(Math.abs(from.total) <= toPay.total){
        console.log(`${from.userId} should pay ${Math.abs(from.total)} to ${toPay.userId}`)
        toPay.total += from.total
        from.total = 0;
    } else {
        console.log(`${from.userId} should pay ${toPay.total} to ${toPay.userId}`)
        from.total += toPay.total
        toPay.total = 0;
    }
}
console.log(suggestPayments)


