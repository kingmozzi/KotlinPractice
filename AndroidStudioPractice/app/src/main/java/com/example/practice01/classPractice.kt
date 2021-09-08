package com.example.practice01

open class Human constructor(val name : String = "Anonymous"){

    constructor(name: String, age:Int) : this(name){
        println("My name is ${name}, ${age} years old")
    }

   init{
        println("new human has been born!!")
    }

    fun eatingCake(){
        println("Eating...")
    }

    open fun singASong(){
        println("lalala....")
    }
}

class Korean : Human(){
    override fun singASong(){
        super.singASong()
        println("AssCity")
        println("My name is : ${name}")
    }
}

fun main(){
    var human = Human("roh") //Java와 달리 new 필요 x
    human.eatingCake()

    var stranger = Human()

    var roh = Human("roh", 10)

    val korean = Korean()
    korean.singASong()

    println("this human's name is ${human.name}")
    println("this human's name is ${stranger.name}")
}