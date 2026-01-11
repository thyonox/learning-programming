// Primitive Type
function primitiveType() {
    // undefined
    let x;
    console.log(x);
    function fn() { };
    console.log(fn());

    // null
    let obj = null;
    console.log(obj);

    // boolean
    let isTure = 2 > 1;
    console.log(isTure);

    // number
    let num = 12;
    let float = 3.14;
    console.log(1 / 0);
    console.log(-1 / 0);
    console.log('abc' / 1);

    // bigint
    let bigNum = 12345678901234567890n;
    console.log(bigNum + 1n);

    // string
    let str = 'hello';
    console.log(str[0]);
    console.log(str.toUpperCase());

    // symbol
    let sym1 = Symbol('id');
    let sym2 = Symbol('id');
    console.log(sym1, sym2);
    console.log(sym1 === sym2);
}

// Reference Type
function referenceType(){
    let obj = { name: "Alice" };
    let ref = obj;
    ref.name = "Bob";
    console.log(obj.name);
}

// Variable Declaration
function variableDeclaration(){
    var x = 10;
    let y = 20;
    const z = 30;

    {
        var x = 40;
        console.log(x);
    }

    {
        let y = 50;
        console.log(y);
    }

    {
        const z = 60;
        console.log(z);
    }
    console.log(x);
    console.log(y);
    console.log(z);
}





// primitiveType();

// referenceType();

variableDeclaration();