package com.turing.api.common.lambda;

import java.util.Arrays;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

public class StreamOf {

    @Test
    public void testSame() {
        // Creating an integer array
        int arr[] = { 1, 2, 3, 4, 5 };

        // --------- Using Arrays.stream() ---------

        // to convert int array into Stream
        IntStream intStream = Arrays.stream(arr);

        // Displaying elements in Stream
        System.out.println("--------- Arrays.stream ---------");
        intStream.forEach(str -> System.out.print(str + " "));

        // --------- Using Stream.of() ---------

        // to convert int array into Stream
        Stream<int[]> stream = Stream.of(arr);

        // Displaying elements in Stream
        System.out.println("\n--------- Stream.of ---------");
        stream.forEach(str -> System.out.print(str + " "));

        //result : 
        // --------- Arrays.stream ---------
        // 1 2 3 4 5 
        // --------- Stream.of ---------
        // [I@358c99f5 
    }

    @Test
    public void testDifferent() {
        // Creating an integer array
        int arr[] = { 1, 2, 3, 4, 5 };

        // --------- Using Arrays.stream() ---------

        // to convert int array into Stream
        IntStream intStream = Arrays.stream(arr);

        // Displaying elements in Stream
        System.out.println("--------- Arrays.forEach ---------");
        intStream.forEach(str -> System.out.print(str + " "));



        // --------- Using Stream.of() ---------

        // to convert int array into Stream
        Stream<int[]> stream = Stream.of(arr);

        // ***** Flattening of Stream<int[]> into IntStream *****

        // flattenning Stream<int[]> into IntStream
        // using flatMapToInt()
        IntStream intStreamNew = stream.flatMapToInt(Arrays::stream);

        // Displaying elements in IntStream
        System.out.println("\n--------- Stream.of ---------");
        intStreamNew.forEach(str -> System.out.print(str + " "));


        //result : 
        // --------- Arrays.stream ---------
        // 1 2 3 4 5 
        // --------- Stream.of ---------
        // 1 2 3 4 5 
    }
}
