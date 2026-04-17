//3//
function getSize(width, height, depth) {
    let volume = width * height * depth;
    let area = 2 * (width * height + height * depth + depth * width);
    return [area, volume];
}