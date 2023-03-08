{
    class ninja{
        public nome:string
        public qShurinken:number
        constructor(nome:string,qShurinken:number){
            this.nome = nome
            this.qShurinken = qShurinken
        }

        atirarShuriken(inimigo:any){
            console.log(`${this.nome} Atirou Shuriken`);
            this.qShurinken = this.qShurinken - 1
            console.log(`${this.nome} tem  Shurinken${this.qShurinken} na bolsa`);
            
            
        }
    }

    class inimigo{
        public nome:string
        public vivo:boolean = true
        constructor(nome:string){
            this.nome = nome
        }

        morreu(){     
            this.vivo= false
            console.log(`${ this.nome} Morreu por ${ninja1.nome}`);
            
        }
    }


    const ninja1 = new ninja("Naruto", 10)
    const inimigo1 = new inimigo("Minato")
    const inimigo2 = new inimigo("kakashi")
    ninja1.atirarShuriken(inimigo1)
    ninja1.atirarShuriken(inimigo2)
}


