package com.example.practice01

// Lamda
// 람다식은 마치 value 처럼 다룰 수 있는 익명함수이다.
// 1) 메소드의 파라메터로 넘길 수 있음.
// 2) return 값으로 사용할 수 있다.

// 람다의 기본정의
// val lamdaName : Type = {arguemntList -> code body}

val square : (Int) -> (Int) = {number -> number*number}

val nameAge : (name : String, age : Int) -> String = {name:String, age: Int->
    "my name is ${name} I'm ${age} old"
}


fun main(){
    println(square(4))

    println(nameAge("roh", 523))

    val a = "i said "

    println(a.pizzaIsGreat())

    println(extendString("araina", 28))

    println(calculateGrade(90))

    println(calculateGrade(1000))

    val lamda :(Double) -> Boolean={number : Double ->
        number == 4.3213
    }

    println(invokeLamda(lamda))
    println(invokeLamda({it > 3.22}))

    println(invokeLamda { it > 3.22 }) // 위와 같은식임

}

// 확장함수

val pizzaIsGreat : String.() -> String = {
    this + "Pizza is the best!"
}

fun extendString(name : String, age : Int) : String{

    val introduceMyself : String.(Int) -> String = {
        "I am ${this} and ${it} years old"
    }
    return name.introduceMyself(age)
}

// Lamda의 return (마지막줄이 리턴)

val calculateGrade : (Int) -> String = {
    when(it){
        in 0..40 -> "fail"
        in 41..70 -> "pass"
        in 71..100 -> "perfect"
        else -> "error"
    }
}

// Lamda를 표현하는 여러가지 방법

fun invokeLamda(lamda : (Double) -> Boolean) : Boolean{
    return lamda(5.2343)
}