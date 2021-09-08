package com.example.futuretask

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import java.util.concurrent.Executors
import java.util.concurrent.FutureTask

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        futureTask()
    }

    fun futureTask(){
        //1. Structure
        //callable
        val futureTask = FutureTask{
            return@FutureTask "RESULT :: CALLABLE"
        }
        //runnable
        val futureTaskRunnable = FutureTask({

        }, "RESULT :: RUNNABLE")

        //2. ExcutorService
        val executorService = Executors.newFixedThreadPool(2)
        executorService.execute(futureTask)
        executorService.execute(futureTaskRunnable)

        //+ result
        Log.d("ROH", "ROH :::" + futureTask.get())
        Log.d("Roh", "Roh :::" + futureTaskRunnable.get())

        //+++ for loop
    }
}