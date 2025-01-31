/* 86. Find Type of Given Angle

Write a JavaScript program to find the types of a given angle.  

Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
Obtuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle. */


function findAngle(angle) {
  if (Number.isInteger(angle) && angle >= 0 && angle <= 180) {
    if (angle >= 0 && angle < 90) {
      return "Acute Angle";
    } else if (angle === 90) {
      return "Right Angle";
    } else if (angle > 90 && angle < 180) {
      return "Obtuse Angle";
    } else if (angle === 180) {
      return "Straight Angle";
    }
  }
  else {
    return false;
  }
}

console.log(findAngle(45));
console.log(findAngle(90));
console.log(findAngle(179));
console.log(findAngle(180));