class Mosaico{
    constructor(lado, base, a,b,c){
        this.lado = lado  
        this.base = base 
        this.a = a 
        this.b = b 
        this.c = c 
        
    }
    
    calcularTriEquilatero(){
        let area = 0.0 
        area = (this.lado * this.lado) * 1.732 / 4
        return area 
    }
    calcularTriIsoceles(){
    let h = 0.0, area = 0.0 
     h = Math.sqrt((this.lado * this.lado) - ((this.base / 2) * (this.base / 2)))
    area = (this.base * h) / 2
    return area 
    }
    calcularTriEscaleno(){
    let s = 0.0,  area = 0.0 
    s = (this.a + this.b+ this.c) / 2
    area = Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
    return area 
    }

}
module.exports = Mosaico
