package com.example.practice01

fun main(){
    helloworld()

    println(add(1,2))

    //string template
    val name = "Lazy Syndrome"
    val name2 = "Ai no uta"
    println("my name is ${name + name2}")

    println("\$4000")

    checkNum(1)

    forAndWhile()

    nullCheck()

    ignorNulls("a")
}

fun helloworld(){
    println("Helloworld")
}

fun add(a : Int, b : Int) : Int{
    return a + b
}

fun typePractice(){

    val a : Int = 10 // 상수

    var b : Int = 9 // 변수

    //Type을 지정하지 않아도 됨.

    val c = 1
    var d = 2

    var name = "Lazy Syndrome"

}

fun maxBy(a : Int, b : Int) : Int{
    if(a>b){
        return a
    }
    else{
        return b
    }
}

fun maxBy2(a : Int, b : Int) : Int = if(a>b) a else b //삼항연산자가 없음

fun checkNum(score : Int){
    when(score){
        0 -> println("this is 0")
        1 -> println("this is 1")
        2,3 -> println("this is 2 or 3")
        else -> println("I don't know") //when 역시 else를 쓰지 않아도 된다.
    }

    var b : Int = when(score){
        1-> 1
        2-> 2
        else -> 3 // 이런 경우에는 반드시 else를 써줘야 함.
    }

    println("b : ${b}")

    when(score){
        in 90..100 -> println("You ar genius")
        in 10..80 -> println("Not bad")
        else -> println("Okay")
    }
}

//Expression(값을 반환) vs Statement(명령지시)
//Kotlin은 모든 함수가 Expression(return 하지 않아도 Unit을 return) Java의 Void는 Statement

//Array vs List
// List 1. List(Read Only) 2. MutableList (Write, Read)

fun array(){
    val array : Array<Int> = arrayOf(1,2,3)
    val list : List<Int> = listOf(1,2,3)

    val array2 : Array<Any> = arrayOf(1, "d", 3.4f)
    val list2 : List<Any> = listOf(1, "d", 11L)

    array[0] = 3
    var result : Int = list.get(0)

    val arrayList : ArrayList<Int> = arrayListOf<Int>()
    arrayList.add(10)
    arrayList.add(20) //lista listb
    arrayList[0] = 20
}

// For and While

fun forAndWhile(){

    val students : ArrayList<String> = arrayListOf("roh", "mu", "heyon")

    for (name : String in students){
        println("${name}")
    }

    for((index :Int, name :String) in students.withIndex()){
        println("${index+1}번째이름 : ${name}")
    }

    var sum : Int = 0
    for (i :Int in 1..10 step 2){
        sum+=i
    }
    println(sum)
    for (i : Int in 10 downTo 1){
        sum+=i
    }
    println(sum)
}

//Nullable / nonNull
fun nullCheck(){
    //NPE: NULL Pointer Exception

    var name : String = "Lazy Syndrome"

    var nullName : String? = null

    var nameInUpperCase = name.toUpperCase()

    var nullNameInUpperCase : String? = nullName?.toUpperCase() //null이면 null을 반환함.(Null Checking)

    // ?:

    val lastName : String? = null

    val fullName : String = name + " " + (lastName?: "NO lastName") // ?: 엘비스 연산자

    println(fullName)

}

// !! (사용을 지양) -> null이 아니라는 것을 보증
fun ignorNulls(str : String?){
    val mNotNull : String = str!!
    val upper : String = mNotNull.toUpperCase()

    val email : String? = "asdf@asdf.com"
    //let함수는 null이 아닐경우 넣어주는 람다식 함수
    email?.let {
        println("my email is ${email}")
    }
}