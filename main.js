document.getElementById('pushArray').addEventListener('click', pushArray);
document.getElementById('total').addEventListener('click', toTal);
document.getElementById('addNumber').addEventListener('click', addNumber);
document.getElementById('count').addEventListener('click', count);
document.getElementById('minNumber').addEventListener('click', numberMin);
document.getElementById('minPositive').addEventListener('click', minPositives);
document.getElementById('btnEven').addEventListener('click', lastEven);
document.getElementById('btnExchange').addEventListener('click', exchange);
document.getElementById('btnArrange').addEventListener('click', arrange);
document.getElementById('btnIntegers').addEventListener('click', finInteger);
document.getElementById('btnHowNumber').addEventListener('click', howNumber);
document.getElementById('btnMost').addEventListener('click', most);




//Hàm tạo thêm số
function pushArray() {

    var number = document.getElementById('number').value;


    var resultArray = document.getElementById('resultArray');
    var pNumber = document.createElement('p')
    pNumber.innerHTML = `${number}`;
    resultArray.appendChild(pNumber);
}


// Lấy các nodeElement
function getNodeEle() {
    var resultArraySelec = document.querySelectorAll('#resultArray p')
    var getArray = []
    resultArraySelec.forEach(function(value) {
        getArray.push(value.innerHTML);
    });
    return getArray;
}


//Hàm tạo thêm mảng thứ 2:
function addNumber() {

    var addNumbers = document.getElementById('valueNumber').value;


    var resultaddNumber = document.getElementById('resultaddNumber');
    var pAddNumber = document.createElement('p')
    pAddNumber.innerHTML = `${addNumbers}`;
    resultaddNumber.appendChild(pAddNumber);
}

// Lấy các nodeElement dã thêm
function getAddNumber() {
    var resultAddnumbers = document.querySelectorAll('#resultaddNumber p')
    var getAddNumbers = []
    resultAddnumbers.forEach(function(value) {
        getAddNumbers.push(value.innerHTML);
    });
    return getAddNumbers;
}



// Hàm lọc số dương đưa vào mảng
function positive() {

    var getArrayTotal = getNodeEle();

    var totalArray = getArrayTotal.filter(function(totalValue) {

        if (totalValue > 0) {
            return true;
        }
    })

    return totalArray;
}

// Hàm tìm số chẵn trong mảng

function finEven() {

    var getArrayTotal = getNodeEle();
    var getEven = getArrayTotal.filter(function(value) {

        return value % 2 == 0;

    })
    console.log(getEven)
    return getEven;
}


// CÂU 1 Hàm tính Tổng só dương trong mảng
function toTal() {
    var positives = positive();
    // Tính tổng
    var total = 0;
    for (var i = 0; i < positives.length; i += 1) {
        total += +positives[i];
    }

    var resultTotal = document.getElementById('resultTotal');
    resultTotal.innerHTML = `<p> Tổng là:  ${total}</p>`

}
// CÂU 2 Hàm đếm số dương trong mảng
function count() {
    var positives = positive();

    var resultCount = document.getElementById('resultCount');
    resultCount.innerHTML = `<p> Hiên số dương là:  ${positives.length}</p>`
}

//CÂU 3 Hàm tìm số nhỏ nhất trong mảng
function numberMin() {
    var getArrayTotal = getNodeEle();

    var minNum = Math.min.apply(null, getArrayTotal);


    var resultMin = document.getElementById('resultMin');
    resultMin.innerHTML = `<p> Nhỏ nhất là:  ${minNum}</p>`
}

// CÂU 4 Hàm tìm số dương nhỏ nhất trong mảng
function minPositives() {
    var positives = positive();

    var MinPositive = Math.min.apply(null, positives);


    var resultMinPositive = document.getElementById('resultMinPositive');
    resultMinPositive.innerHTML = `<p> Nhỏ dương nhất là: ${MinPositive}</p>`
}

// CÂU 5 Hàm tìm sô chẵn cuối cùng trong mảng
function lastEven() {
    var even = finEven();
    var resultEvent = 0;
    if (even.length == 0) {
        resultEvent = (-1);
    } else {
        resultEvent = even[even.length - 1]
    }

    var resultEven = document.getElementById('resultEven');
    resultEven.innerHTML = `<p> Số chẵn cuối là: ${resultEvent}</p>`

}

//CÂU 6 Hàm đổi vị trí mảng
// Cách thứ 1
// function exchange() {
//     var getArrayTotal = getNodeEle();

//     var viTri1 = +document.getElementById('viTri1').value - 1;
//     var viTri2 = +document.getElementById('viTri2').value - 1;
//     var viTriPhu = [];

//     for (var x = 0; x < getArrayTotal.length; x += 1) {

//         if (x == viTri1) {
//             viTriPhu.push(getArrayTotal[viTri2])
//         } else if (x == viTri2) {
//             viTriPhu.push(getArrayTotal[viTri1])
//         } else {
//             viTriPhu.push(getArrayTotal[x])
//         }
//     }

//     var resultExchange = document.getElementById('resultExchange');
//     resultExchange.innerHTML = `<p> Đã đổi là: ${viTriPhu}</p>`
// }


// Cách thứ 2
function exchange() {
    var getArrayTotal = getNodeEle();

    var viTri1 = +document.getElementById('viTri1').value - 1;
    var viTri2 = +document.getElementById('viTri2').value - 1;
    var viTriPhu = getArrayTotal.map(function(va, ind) {

        if (ind == viTri1) {
            return va = getArrayTotal[viTri2]
        }
        if (ind == viTri2) {
            console.log(ind)

            console.log(va)


            return va = getArrayTotal[viTri1]

        }
        console.log(va)
        return va



    })

    var resultExchange = document.getElementById('resultExchange');
    resultExchange.innerHTML = `<p> Đã đổi là: ${viTriPhu}</p>`
}


// CÂU 7 Hàm săp xếp
function arrange() {

    var getArrayTotal = getNodeEle();

    var arrange = getArrayTotal.sort(function(a, b) {
        return a - b
    })

    var resultArrange = document.getElementById('resultArrange');
    resultArrange.innerHTML = `<p> Đã đổi là: ${arrange.join(' > ')}</p>`
}

// CÂU 8 Hàm tìm số nguyên tố đầu tiên

function finInteger() {
    var getArrayTotal = getNodeEle();
    var resultInter = -1;

    for (var k = 0; k < getArrayTotal.length; k += 1) {


        if (getArrayTotal[k] < 2) {
            continue;
        }

        // tập hợp các số nguyên tố của giá trị vào 1 Array

        for (var i = 2; i <= getArrayTotal[k]; i += 1) {
            var snt = true;
            var SNTArray = [];

            for (var j = 2; j < i; j += 1) {

                if (i % j === 0 && i !== 2) {
                    snt = false;
                    break;
                }
            }
            if (snt) {
                // Push số nguyên tố vào Array
                SNTArray.push(i);

            }
        }


        // Nếu giá trị cuối cùng trong tập hợp các số nguyên mà
        // bằng bới giá trị của số nguyên đang xét đó thì số đó là số nguyên tố
        if (SNTArray[SNTArray.length - 1] == getArrayTotal[k]) {

            // Lưu số nguyên đó vào 1 mảng và thoát lệnh ngay;
            resultInter = getArrayTotal[k];
            break

        }
    }

    var resultIntegers = document.getElementById('resultIntegers');
    resultIntegers.innerHTML = `<p> Số nguyên tố là: ${resultInter}</p>`;

}


// function finInteger2() {
//     var getArrayTotal = getNodeEle();

//     var resultInter = -1;
//     resultInter = getArrayTotal.find(function(vale) {

//         // tập hợp các số nguyên tố của giá trị vào 1 Array

//         for (var i = 2; i <= vale; i += 1) {
//             var snt = true;
//             var SNTArray = [];

//             for (var j = 2; j < i; j += 1) {

//                 if (i % j === 0) {
//                     snt = false;
//                     break;
//                 }
//             }
//             if (snt) {
//                 // Push số nguyên tố vào Array
//                 SNTArray.push(i);

//             }
//         }


//         // Nếu giá trị cuối cùng trong tập hợp các số nguyên mà
//         // bằng bới giá trị của số nguyên đang xét đó thì số đó là số nguyên tố
//         if (SNTArray[SNTArray.length - 1] == vale) {

//             // Lưu số nguyên đó vào 1 mảng và thoát lệnh ngay;
//             return vale;
//         }

//     })


//     var resultIntegers = document.getElementById('resultIntegers');
//     resultIntegers.innerHTML = `<p> Số nguyên tố là: ${resultInter}</p>`;

// }




//CÂU 9 Bao nhiu số nguyên:

function howNumber() {
    var getNum = getAddNumber();

    var getArrayTotal = getNodeEle();
    var totalNewNum = getArrayTotal.concat(getNum);
    console.log(getNum);
    console.log(getArrayTotal);
    console.log(totalNewNum);
    var hownumbers = totalNewNum.filter(function(value) {

        if (Number.isInteger(+value) == true) {
            return +value
        }
    })

    var resultHowNumber = document.getElementById('resultHowNumber');
    resultHowNumber.innerHTML = `<p> Số nguyên có: ${hownumbers.length} số</p>`;


}


// CÂU 10 Kiểm tra số dương hay âm nhiều hơn
function most() {
    var getArrayTotal = getNodeEle();
    var resultEvenOrOdd = "Không xác định"

    var yang = positive()

    var minus = getArrayTotal.filter(function(val) {
            return val < 0;
        })
        // Kiểm tra số nhiều hơn
    if (yang.length > minus.length) {

        resultEvenOrOdd = "Số dương nhiều hơn"

    } else if (yang.length == minus.length) {

        resultEvenOrOdd = "2 sô bằng nhau"
    } else {

        resultEvenOrOdd = "Sô âm nhiều hơn"
    }

    var resultMost = document.getElementById('resultMost');
    resultMost.innerHTML = `<p> ${resultEvenOrOdd}</p>`;

}
