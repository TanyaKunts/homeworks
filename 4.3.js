function getDistance(point1, point2) {
  return Math.sqrt(((point1.x - point2.x) ** 2) + ((point1.y - point2.y) ** 2))
}
console.log(getDistance({
  x: 0,
  y: 0
}, {
  x: 3,
  y: 4
}));