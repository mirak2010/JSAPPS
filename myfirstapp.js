 var choice= prompt("Welcome to Area calculator. ?\nPLease enter your choice. \n1. Area of a Rectangle. \n2. Area of a triangle. \n3. Area of a circle. \n4. Area of a parallelogram . \n5. Area of a cube.")
 if (choice == '1'){
    var a= prompt("Enter Length")
    var b= prompt("Enter the breadth")
    var result= Number(1) * Number(b);
    alert("The area is " + result);

 } 
 if (choice == '2'){
    var c= prompt("Enter the lenght")
    var d= prompt("Enter the breadth")
    var result= Number(c) * Number(d)/2;
    alert("The area is " + result)
 }
 if (choice == '3'){
    var e= prompt("Enter the radius")
    var result= 3.14 * Number(e) * Number(e);
    alert("The area is " + result)
 }
 if (choice == '4'){
    var f= prompt("Enter the height")
    var g= prompt("Enter the corresponding base")
    var result= Number(f) * Number(g);
    alert("The area is " + result)
 }
 if (choice == '5'){
    var h= prompt("Enter the length of one edge")
    var result= 6 * Number(h)**2
    alert("The area is " + result)

    
 }