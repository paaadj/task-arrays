/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arr = data.split(',');
    for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
    let str = '';
    arr.sort((a, b) => a - b);
    for (let item of arr) str = str + item + ',';
    str = str.substring(0, str.length - 1);
    return str;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    for (let i = 0; i < data.length; ) {
        if (data[i] > 100) {
            data.splice(i, 1);
        } else {
            i++;
        }
    }
    return data;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let array3 = [];
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) array3[i] = array1.shift();
        else array3[i] = array2.shift();
    }
    return array3;
}
