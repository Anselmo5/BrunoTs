{
    class ninja{
        public nome:string
        public qShurinken:number
        constructor(nome:string,qShurinken:number){
            this.nome = nome
            this.qShurinken = qShurinken
        }

        atirarShuriken(){
            console.log(`${this.nome} Atirou Shuriken`);
            this.qShurinken = this.qShurinken - 1
            console.log(`${this.nome} tem  Shurinken${this.qShurinken} na bolsa`);
            
            
        }
    }


    const ninja1 = new ninja("Naruto", 10)
    ninja1.atirarShuriken()
}

