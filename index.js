class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius*2
    }

    get area(){
        return Math.PI*(this.radius*this.radius)
    }

    get circumference(){
        return 2*Math.PI*this.radius
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }

    set circumference(newCircumfrence){
        this.radius = newCircumfrence/(2*Math.PI)
    }
}