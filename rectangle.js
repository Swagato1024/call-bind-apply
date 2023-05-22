// r = createRectangle() , r.area(), r.perimeter()

const area = function(rectangle) {
  return this.getLength() * this.getWidth();
}

const perimeter = function() {
  return 2 * (this.getLength() + this.getWidth());
}

const getLength = function() {
  return this.length;
}

const getWidth = function() {
  return this.width;
}

const createRectangle = function(length, width) {
  const dimensions = {length,width};

  const rectangle = {};

  rectangle.getLength = getLength.bind(dimensions);
  rectangle.getWidth = getWidth.bind(dimensions);
  rectangle.area = area.bind(rectangle, rectangle);
  rectangle.perimeter = perimeter.bind(rectangle);

  return rectangle;
}

const r = createRectangle(4, 5);

console.log(r.area());
console.log(r.perimeter());
