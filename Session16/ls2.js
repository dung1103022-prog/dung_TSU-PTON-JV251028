
function findMin(arr) {
    if (arr.length === 0) {
        console.log("Du lieu khong hop le");
        return;        
    }
    if (!Array.isArray(arr)) {
        console.log("du lieu khong hop le");
        return;
    }

    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const arr1 = [3, 5, 1, 8, -3, 7, 8];
console.log(`Gia tri nho nhat laf ${findMin(arr1)}`);

const arr2 = [7, 12, 6, 9, 20, 56, 89];
console.log(`Gia tri nho nhat laf ${findMin(arr2)}`);

const arr3 = [];
console.log(`Gia tri nho nhat laf ${findMin(arr3)}`);

const arr4 = [0, 0, 0, 0, 0, 0];
console.log(`Gia tri nho nhat laf ${findMin(arr4)}`);

