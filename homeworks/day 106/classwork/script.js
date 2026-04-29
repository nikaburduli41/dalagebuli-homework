//1//
function evenOrOdd(number) {
    //tu number wiladi gayofit iyofa 2 da utoldeba 0 davabrunot luwi igive even sxva semtxvevasi odd
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
//2//
function numberToString(num) {
    //num davumatot "" tu num ari 20 ocs rom davumatebt ""ameebs(saxeli damaviwyda) dareturnebs "num" magalitad "20"
    return num + ""
}
//4//
function makeNegative(number) {
    //tu number gamkacrebuli tolobit udris 0 an number metia 0 ze davabrunot number sxva semtxvevasi -number examp -23
    if (number === 0 || number < 0) {
        return number;
    } else {
        return -number;
    }
}