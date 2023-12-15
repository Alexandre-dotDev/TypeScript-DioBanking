import CompanyAccount from "./class/CompanyAccount";
import PeopleAccount from "./class/PeopleAccount";

// //Declaração de Tipos
// const soma = (a:number, b:number) =>{
//     console.log(a + b);


    
// }
// soma(2,2)

// //Object - dessa forma não há como definir um type para cada chave
// const pessoa2 = {
//     nome: 'Alexandre',
//     idade: 45   
// }
// //Criando uma interface para receber os types
// interface Pessoa  {
//     nome: string,
//     idade: number,
//     // ? o sinal de interrogação informa ao typescript que o chave/atributo é opcional. isso é o mesmo que string | undefined
//     profissao?:string,
// }

// //
// const pessoa: Pessoa = {
//     nome: 'Alexandre',
//     idade: 45
// }
// //Utilizando a chave/valor opcional
// const outraPessoa: Pessoa = {
//     nome:'Miguel',
//     idade: 17,
//     profissao: 'Estudante'
// }

// //Atribindo um Array a Interface Pessoa - Forma 1
// const arrayPessoa: Pessoa[] = [
//     pessoa,
//     outraPessoa,    
// ]

// //Atribindo um Array a Interface Pessoa - Forma 2
// const arrayPessoa2: Array<Pessoa> = [
//     pessoa,
//     outraPessoa,    
// ]

// //Atribindo um Array de Numbers
// const arrayNumber: number[] = [
//     1,2,3
// ]

// //Atribindo um Array de String
// const arrayString: string[] = [
//     'Alexandre', 'vinícius', 'Miguel','Henrique'
// ]

// //Estrutura de Decisão if else
// const num: number = 15

// if(num > 15){
//     console.log('Num é maior que 15');
// }else if(num === 15){
//     console.log('Num é igual a 15');
    
// }else{
//     console.log('Num é menor que 15');
    
// }

// //Estrutura de Decisão com Object
// const obj = {
//     admin: 'Você é um admin',
//     studants: 'Você é um estudnte',
//     viewer: 'Você pode vizualisar'
// }

// function userValidate (user: string) {
//     console.log(obj[user as keyof typeof obj])
// }
// const user = 'admin'

// userValidate(user)

// //Estrutura de Repetição
// //For
// for(let i = 0; i < 5; i++){
//     console.log(i);
    
// }
// //WHILE
// let n = 2

// while(n < 6){
//     console.log(n);
//     n++    
// }

// //Array
// const array: Array<number> = [1, 2, 3, 4, 5]

// const stringArray: string[] = ['a', 'b', 'c']

// //FIND
// const arrayFind = array.find(num => num > 2)
// console.log('Find -> ',arrayFind);

// //FOREACH
// array.forEach(num => {
//     if(num > 2){
//     console.log('ForEach -> ',num);    
//     }
// })

// //MAP
// array.map(num => {
//     if(num > 2 && num % 2 === 0){
//         console.log('Map -> ', num * 2)
//     }
// })

//POO e Classes

//Object
// const user = {
//     name: 'Alexandre',
//     age: 45,

//     showName(){
//         console.log(this.name);        
//     }
// }
// console.log(user);
// console.log(user.name);
// user.showName()

// //Classe
// class User {
//     name = 'Vinícius'
//     age = 22
//     constructor(name: string, age: number){
//         this.name = name
//         this.age = age        
//     }
//     showName = () =>{
//        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos`);            
//     }
// }
// //Tipagem do tipo User
// const newUser: User = new User('Miguel', 17)
// newUser.showName()

//Dio Banking





// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Henrique', 10)
// console.log(peopleAccount);
// peopleAccount.deposit()
// peopleAccount.setName('Henrique Bueno Silva')
// console.log(peopleAccount);
// console.log(peopleAccount.getName());

// console.log('\n');

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 11)
console.log(companyAccount);
companyAccount.getLoan()
console.log(companyAccount.deposit());

// companyAccount.accountNumber = 11 //Se o atributo tiver a palavra 'ReadOnly', esse atributo não pode ter seu valor alterado. 

// console.log(companyAccount.accountNumber); // Se o atrinbuto tiver 'readonly' mais 'private', o atributo não pode nem ser lido.

// console.log(companyAccount); //O atributo com as palavras 'private e 'readonly' só pode se visto acessando somente a classe.


