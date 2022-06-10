jQuery(document).ready(function() {
    /**JavaScript Arrays
     * -Arrays are linear data structure
     * -object type data structure
     * -key value pair and its numeric indexed array
     */
    const arr = ['abc', 'asd', 'awert', 'hgdre', 'asd', 'rtgtr', 'tgt'];
    //push
    //unshift
    //pop
    //shift
    //indexof 
    console.log(arr.indexOf('asd', 2));
    //lastindexof
    console.log(arr.lastIndexOf('asd', 2));
    //includes  -work on only primitive data types
    console.log(arr.includes('asd', 6));

    const arrObj = [{ name: 'abc', age: 45 }, { name: 'asd', age: 85 }, { name: 'awert', age: 75 }, { name: 'hgdre', age: 95 }, { name: 'asd', age: 55 }, { name: 'rtgtr', age: 65 }, { name: 'tgt', age: 15 }];

    //find
    console.log(arrObj.find((elm) => { return elm.age > 85 }));

    let nm1 = ['abc', 'asd', 'awert', 'dsfr', 'ewrewyte', 'ewq'];
    let nm2 = ['hgdre', 'asd', 'rtgtr', 'tgt'];

    //concat
    let nm3 = nm2.concat(nm1)
    let nm4 = [...nm1, ...nm2]
    console.log(nm3);
    console.log(nm4);

    //slice
    console.log(nm3.slice(1, 2));

    //loop

    //for
    for (let index = 0; index < nm4.length; index++) {
        const element = nm4[index];
        console.log(element);
    }
    console.log('end for loop');

    //for-of -get value
    for (const iterator of nm4) {
        console.log(iterator);
    }
    console.log('end for-of loop');

    //for-each
    nm4.forEach((element, index) => {
        console.log(element, index);
    });
    console.log('end forEach loop');

    //join
    let stu = ['A', 'm', 'i', 't', 'G', 'e', 'e', 'k'];
    let stuName = stu.join('');
    console.log(stuName);

    //split
    console.log(stuName.split(''));

    //filter
    const data = [{ name: 'abc', age: 45 }, { name: 'asd', age: 85 }, { name: 'awert', age: 75 }, { name: 'hgdre', age: 95 }, { name: 'asd', age: 55 }, { name: 'rtgtr', age: 65 }, { name: 'tgt', age: 15 }];
    console.log(data.filter(elm1 => elm1.age > 55));

    //map
    console.log(data.map(elm1 => elm1.age + 5));

    // console.log(typeof(arr));
    // console.log(arrObj);
});