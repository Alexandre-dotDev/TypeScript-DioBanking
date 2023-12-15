import DioAccount from "./DioAcconut";

export default class CompanyAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (): void => {
        console.log('Você solicitou um emprestimo!');
        
    }

    deposit = (): number => {
        return 2;
        
    }

}
