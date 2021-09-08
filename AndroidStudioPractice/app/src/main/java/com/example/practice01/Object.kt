package com.example.practice01

//class 대신 object를 사용해서 만듦
//singleton Pattern
object CarFactory{
    val cars : MutableList<Car> = mutableListOf<Car>()
    fun makeCar(horsePower : Int) : Car{
        val car = Car(horsePower)
        cars.add(car)
        return car
    }
}

data class Car(val horsePower : Int)

fun main(){
    val car : Car = CarFactory.makeCar(10)
    val car2 : Car = CarFactory.makeCar(200)

    println(CarFactory.cars.size.toString())
    println(car)
    println(car2)
}