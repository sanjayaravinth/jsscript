let queen = {
    direction: "S",
    position: {
        xcor: 4,
        ycor: 4
    }
}

console.log("Default position of queen: " + queen.position.xcor, queen.position.ycor);

function updatePosition(x, y) {
    queen.position.xcor = x;
    queen.position.ycor = y;
}

function jumpMoveForward(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    Steps=parseInt(Steps)
    switch (direction) {
        case "N":
            temp = queen.position.xcor - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.xcor = queen.position.xcor - Steps;
            } else {
                console.log("Out of order move : N");
            }
            break;

        case "S":
            temp = queen.position.xcor + Steps;
           
            if (temp < 8 && temp >= 0) {
                queen.position.xcor = queen.position.xcor + Steps;
            } else {
                console.log("Out of order move : S");
            }
            break;

        case "E":
            temp = queen.position.ycor + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.ycor = queen.position.ycor + Steps;
            } else {
                console.log("Out of order move : E");
            }
            break;

        case "W":
            temp = queen.position.ycor - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.ycor = queen.position.ycor - Steps;
            } else {
                console.log("Out of order move : W");
            }
            break;

        case "NE":
            temp = queen.position.ycor + Steps;
            temp1 = queen.position.xcor - Steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
               
                    queen.position.ycor = queen.position.ycor + Steps;
                    queen.position.xcor = queen.position.xcor - Steps;
               
            }
            else {
                console.log("Out of order move : NE");
            }
            break;


            case "NW":
                temp = queen.position.ycor - Steps;
                temp1 = queen.position.xcor - Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                   
                        queen.position.ycor = queen.position.ycor - Steps;
                        queen.position.xcor = queen.position.xcor - Steps;
                   
                }
                else {
                    console.log("Out of order move : NW");
                }
                break;
           
            case "SE":
            temp = queen.position.ycor + Steps;
            temp1 = queen.position.xcor + Steps;
            if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
               
                    queen.position.ycor = queen.position.ycor + Steps;
                    queen.position.xcor = queen.position.xcor + Steps;
               
            }
            else {
                console.log("Out of order move : SE");
            }
            break;

            case "SW":
                temp = queen.position.ycor - Steps;
                temp1 = queen.position.xcor + Steps;
                if (temp < 8 && temp >= 0 && temp1 < 8 && temp1 >= 0) {
                   
                        queen.position.ycor = queen.position.ycor - Steps;
                        queen.position.xcor = queen.position.xcor + Steps;
                   
                }
                else {
                    console.log("Out of order move : SW");
                }
                break;
            default :
            console.log("Hello");
               

       
    }
}
while(true)
{
let direction=prompt("Enter the direction");
if(direction=="exit")

    break;

let Steps=prompt("Enter the steps");
jumpMoveForward(direction,Steps);
console.log("Updated position of queen : "+queen.position.xcor,queen.position.ycor);
}