package com.example.practice01

data class Ticket(val companyName : String, val name : String, var date : String, var seatNumber : Int)

// toString(), hashCode(), equals(), copy()를 컴파일러가 자동으로 만들어준다.

class TicketNormal(val companyName : String, val name : String, var date : String, var seatNumber : Int)

fun main(){
    val ticketA = Ticket("KoreanAir", "roh", "2020-02-06", 14)
    val ticketB = TicketNormal("KoreanAir", "roh", "2020-02-06", 14)

    println(ticketA)
    println(ticketB)
}