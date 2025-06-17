packagebasics;

import java.util.Scanner;

public class ArrayExample {
    public static void main(String[] args){

        Scanner input = new Scanner(System.in);
        int[] myArray = {1, 3, 5, 7, 9};
        int[] anotherArray = new int[5];
        String[] gender = {"female", "Male"};

//        myArray[1] = 13;
//        myArray[3] = 17;
        for (int i = 0; i < anotherArray.length; i++) {
            System.out.println("Insert Item at: "+i);
            anotherArray[i] = input.nextInt();
        }

        for (int i = 0; i < anotherArray.length; i++) {
//            performing  a search
            if (anotherArray[i] == 13){
                System.out.println("Found it!");
                break;
            }
        int sum = 0;
        for (int i = 0;  i < myArray.length; i++   ) {
            sum += anotherArray[i];
            System.out.println("Sum");
        }
            System.out.println("Sum: "+i+ "is" +myArray[i] );
            System.out.println("Item at: "+i+ "is" +anotherArray[i] );
        }
    }
}
