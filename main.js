function Calculadora(){

    this.display = document.querySelector(".display");

    this.inicio = document.addEventListener("click", e => {  
        
        switch(e.target.value){
            case  "=": 
                this.display.value = eval(this.display.value)
                break
            
            case "C":
                this.display.value = 0 
                break

            case "<<":
                this.display.value =  this.display.value.length <= 1    ?   0   :   this.display.value.slice(0, this.display.value.length -1)
                break

            case "+/-":
                let primeiroCaracter = this.display.value[0]
                if(primeiroCaracter === "-"){
                    this.display.value = this.display.value.slice(1, this.display.value.length)
                } else {
                    this.display.value = "-" + this.display.value
                }
                break

            default:
                let valorDisplay = this.display.value
                valorDisplay = valorDisplay != 0 ? valorDisplay : ""
                valorDisplay += e.target.value;  
                this.display.value = valorDisplay
        }



    });      








}

const  calculadora = new Calculadora()
calculadora.inicio()


