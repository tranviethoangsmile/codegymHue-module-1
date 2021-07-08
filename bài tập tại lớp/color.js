function maxMinAvg(arr) {
    var arrnew = [];
    var max = arr[0];
    var min = arr[0];
    var total = 0;
    var avg = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }

        if (min > arr[i]) {
            min = arr[i];
        }
        total += arr[i];
        avg = total / arr.length;
        arrnew.push(max)
        arrnew.push(min)
        arrnew.push(avg);
    }
    return arrnew;
}