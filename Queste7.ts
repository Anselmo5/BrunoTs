{
    class Conta{
        public numero: number
        private titular: string
        protected valor:number


        constructor(numero:number, titular:string, valor:number = 0){
            this.numero = numero
            this.titular = titular
            this.valor = valor
        }

        sacar(valor){

            let taxa:number = 5
            let valortotal:number = valor + taxa

            if(valortotal <= this.valor){
                this.valor = this.valor - valortotal
                console.log(`Saque efetuado`);
                
            }else{
                console.log(`Saldo Insuficiente`);
                
            }
        }

        deposito(valor){
            this.valor = this.valor + valor
        }

        versaldo(){
            console.log(`Seu saldo é:${this.valor}` );
            
        }
    }

    const jose = new Conta(250131,"Anselmo", 15)
    jose.versaldo()
    jose.sacar(10)
    jose.versaldo()
    jose.deposito(20)
    jose.versaldo()


}