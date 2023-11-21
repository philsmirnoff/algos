solve this problem
1. Nutrition Chain

Nutrition in food can be broken down into proteins, fats, and carbohydrates.

Implement the following classes about food and nutrition to complete this challenge:

1. abstract class Food with the following properties:

- double proteins
- double fats
- double carbs
- double tastyScore
- void getMacroNutrients [Abstract Method]

2. class Egg which extends class Food and has the following properties:

- Constructor to initialize the attributes (proteins, fats, and carbs) in the same order.
- int tastyScore = 7
- String type = "non-vegetarian"
- void getMacroNutrients => prints"An egg has [this.proteins] gms of protein, [this.fats] gms of fats and [this.carbs] gms of carbohydrates.")

3. class Bread which extends class Food and has the following properties:

- Constructor to initialize the attributes (proteins, fats, and carbs) in the same order.
- int tastyScore = 8
- String type = "vegetarian"
- void getMacroNutrients => prints" A slice of bread has [this.proteins] gms of protein, [this.fats] gms of fats and [this.carbs] gms of carbohydrates.")

Note: The code stub handles input.

Input Format For Custom Testing

The first line contains an integer, n, the number of food items.

Every food item takes input in the next 4 lines where the first line is the name of the food and the next three lines are method calls (getType, getTaste, and getMacros) in random order.

v Sample Case 0

Sample Input

Bread

getType

getMacros

getTaste

Sample Output

Bread is vegetarian

A slice of bread has 4.0 gems of protein, 1.1 gms of fats and 13.8 gms of carbohydrates.

Taste: 8

v Sample Case 1

Sample Input

1

Egg

getMacros

getTaste

getType

Sample Output:

An egg has 6.3 gms of protein and 5.3 gms of fats and 0.6 gms of carbohydrates.

Taste: 7

Egg is not vegetarian

public class Solution {
public static void main (String args[] ) throws Exception {

Scanner sc = new Scanner (System. in);
int cnt = Integer. parseInt (sc. nextLine());
for (int i = 0; i < cnt; i++) {
String name = sc. nextLine();
if (name. equals ("Bread" )) {
Bread breadobj = new Bread (4, 1.1, 13.8);
for（int j=0;j<3； ++）L
String command = 5C. nextLine() ;
if (command. equals ("getMacros")) {
breadobj. getMacroNutrients );
} else if (command. equals ("getTaste")) {
System.out.println("Taste: " + breadobj. tastyScore);
} else if (command. equals ("getType")) {
}
System.out.println("Bread is " + breadobj. type);
｝
｝
else if (name. equals ("Egg")) {
Egg eggObj = new Egg (6.3, 5. 3, 0.6);

for (int j = 0; j < 3; j++) {

 String command = sc.nextLine();

if (command.equals(“getMacros”)) {

eggObj.getMacroNutrients():

} else if (command.equals(”getTaste”)) {

System.out.println(”Taste: “ + eggObj.tastyScore);

} else if(command.equasl(”getType”)) {

System.out.println(”Egg is “ + eggObj.type);

}

}

}

}

}

}

import java.util.*;
import java.io.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;
import java.util.Scanner;

abstract class Food {
double proteins;
double fats;
double carbs;
double tastyScore;


abstract void getMacroNutrients()

void getTaste() {
System.out.println("Taste: " + (int) tastyScore);
}

}

class Egg extends Food {
String type = "non-vegetarian";

Egg(double proteins, double fats, double carbs) {
this.proteins = proteins;
this.fats = fats;
this.carbs = carbs;
this.tastyScore = 7;
}

void getMacroNutrients() {
System.out.println("An egg has " + this.proteins + " gms of protein, " + this.fats + " gms of fats and " + this.carbs + " gms of carbohydrates.");
}

}

class Bread extends Food {
String type = "vegetarian";

Bread(double proteins, double fats, double carbs) {
this.proteins = proteins;
this.fats = fats;
this.carbs = carbs;
this.tastyScore = 8;
}

void getMacroNutrients() {
System.out.println("A slice of bread has " + this.proteins + " gms of protein, " + this.fats + " gms of fats and " + this.carbs + " gms of carbohydrates.");
}

}

public class Solution {
public static void main(String args[]) throws Exception {
  Scanner sc = new Scanner(System.in);
  int cnt = Integer.parseInt(sc.nextLine());
  for (int i = 0; i < cnt; i++) {
    String name = sc.nextLine();
    if (name.equals("Bread")) {
      Bread breadobj = new Bread(4, 1.1, 13.8);
      for (int j = 0; j < 3; j++) {
        String command = sc.nextLine();
        if (command.equals("getMacros")) {
          breadobj.getMacroNutrients();
        } else if (command.equals("getTaste")) {
          System.out.println("Taste: " + breadobj.tastyScore);
        } else if (command.equals("getType")) {
          System.out.println("Bread is " + breadobj.type);
        }
      }
    } else if (name.equals("Egg")) {
      Egg eggObj = new Egg(6.3, 5.3, 0.6);
      for (int j = 0; j < 3; j++) {
        String command = sc.nextLine();
        if (command.equals("getMacros")) {
          eggObj.getMacroNutrients();
        } else if (command.equals("getTaste")) {
          System.out.println("Taste: " + eggObj.tastyScore);
        } else if (command.equals("getType")) {
          System.out.println("Egg is " + eggObj.type);
        }
      }
    }
  }
}



