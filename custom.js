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
    // console.log(typeof(arr));
    console.log(arrObj);
});