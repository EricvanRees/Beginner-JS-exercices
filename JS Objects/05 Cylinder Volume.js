/* 5. Cylinder Volume

Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 

*/

class Cylinder {
  constructor(diameter, height) {
  this.diameter = diameter;
  this.height = height;
  }
  get volume() {
    return this.Calcvolume();
  }
  Calcvolume() {
    let radius = this.diameter / 2;
    return this.height * Math.PI * radius * radius;
  }
}

const cyl = new Cylinder(10, 15);
console.log(cyl.volume.toFixed(4));