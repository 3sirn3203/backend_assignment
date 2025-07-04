/**
 * Advanced JavaScript Syntaxes
 * 
 * Template Literals
 */
const printPower = (x, y) => {
    const msg = 'Value of ' + x + ' to the power ' + y + ' is ' + x ** y + '.';
    console.log(msg);
}
printPower(2, 3);

const printPowerWithTemplate = (x, y) => {
    const msg = `Value of ${x} to the power ${y} is ${x ** y}.`;
    console.log(msg);
}
printPowerWithTemplate(2, 3);

/**
 * Destructuring Assignment
 */
const arr = [1, 2, 3, 4];

const [a1, a2, a3, a4] = arr;
const [b1, , b2] = arr;
const [, , , c1, c2, c3 = 10] = arr;
console.log(a1, a2, a3, a4);
console.log(b1, b2);
console.log(c1, c2, c3);

// Object의 destructuring은 key를 기준으로
const obj = { x: 1, y: 2, z: 3};

const {x, z, u, v = 10 } = obj;
const { y: y1 } = obj;  // 다른 변수명에 할당
console.log(x, z, u, v);
console.log(y1);

/**
 * Truthy and Falsy
 * 
 * JS의 모든 값은 암묵적으로 true 또는 false로 반환될 수 있음
 * false, 0, -0, 0n, '', null, undefined, NaN은 falsy,
 * 그 외의 값들은 모둔 truthy
 */
const emptyArray = [];
const val1 = !!emptyArray;          // true
const val2 = !!emptyArray.length;   // false

/**
 * Short Circuit Evaluation
 * 
 * 이항 연산자 or에서 앞에 오는 피연산자가 true이면 앞의 항을 반환하고
 * false이면 뒤의 항을 반환함
 */
const port = !!emptyArray.length || 3000;
console.log(port);

/**
 * Error Handling (try-catch-finally)
 */
const getStatusCode = (res) => {
    try {
        console.log('try');
        return res.status.code;
    } catch (err) {
        console.log('catch');
        return 0;
    } finally {
        console.log('finally');
    }
};
const code = getStatusCode;
console.log(code({ status: { code: 200 } }));
console.log(code({}));

// throw-catch
const validateData = (data) => {
    if (!data) throw new Error(500);
    if (!data.length) throw new Error(404);
    return data;;
};

const createMessage = (data) => {
    try {
        const checkedData = validateData(data);
        return `Success: ${data}`;
    } catch (err) {
        return `Failed: ${err.message}`;
    }
};
console.log(createMessage());
console.log(createMessage([]));
console.log(createMessage([1, 2, 3]));

