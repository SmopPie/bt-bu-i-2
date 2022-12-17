//reduce: "được sử dụng để thực thi một hàm lên các phần tử của mảng 
//(từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất"
//reduce + syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//split:"sử dụng để chia một chuỗi thành một mảng các chuỗi con và trả về mảng mới."
//split + syntrax: string.split(separator, limit)

//Slice:"cắt bỏ một phần của array"
//Slice + syntrax: array.slice(start, end)



    arr1 = [1, 2, 4, 5, 6] 


    arr2 = [1, 6, 8, 9, 0]


const fil = arr1.filter(value => arr2.includes(value));

console.log(fil)