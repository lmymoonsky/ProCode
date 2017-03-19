/**
 * 实现一个算法，寻找字符串中出现次数最少的、并且首次出现位置最前的字符。
 * 如cbaacfdeaebb，符合要求的是f，因为他只出现了一次（次数最少）。并且比其他只出现一次的字符（如d）首次出现的位置最靠前。
 */

var str = 'cbaacfdeaebb';
//计算每个字符出现的次数(计数)
function reSet(str){
    var arr = str.split(''); //将字符串转成数组
    var n = {}; //以键值对形式存储每个字符和出现的次数
    var newArr = []; //将字符去重存储到新数组

    arr.forEach(item=>{
        if(newArr.indexOf(item) == -1){
            newArr.push(item);
            n[item] = 1;
        }else{
            n[item] += 1;
        }
    });

    console.log(newArr);
    console.log(n);

    getMinNum(n, newArr, arr);
}

//返回出现次数最少中且最前面的字符（取最小值）
function getMinNum(obj,newArr,oldArr){
    var minObj = { 
        name:'',
        count:oldArr.length
    };

    newArr.reverse().forEach(item=>{ // 因为后面满足条件的元素会覆盖前面的元素，因此首先要将其逆置
        var count = obj[item];
        if(minObj.count >= count){ // 等于满足字符中只出现同一个字符元素
            minObj.name = item;
            minObj.count = count;
        }
    });

    console.log(minObj);
    return minObj;
}
reSet(str);