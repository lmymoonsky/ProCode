/**
 * 实现一个算法，寻找字符串中出现次数最少的、并且首次出现位置最前的字符。
 * 如cbaacfdeaebb，符合要求的是f，因为他只出现了一次（次数最少）。并且比其他只出现一次的字符（如d）首次出现的位置最靠前。
 */

    var str = 'cbaacfdeaebb';

    //计算每个字符出现的次数(计数)
    function reSet(str){
        var arr = str.split('');
        var o = {};
        var n = {};
        var newArr = [];
        for(var i = 0; i< arr.length; i++){
            if(arr[i] != o[arr[i]]){
                o[arr[i]] = arr[i];
                n[arr[i]] = 1;
                // newArr.push(n[arr[i]])
                newArr[i] = n[arr[i]];
            }else{
                n[arr[i]] += 1;
                newArr[i] = n[arr[i]];
            }
        }

        console.log(o);
        console.log(n);

        getMinNum(n, arr);
    }

    //返回出现次数最少中且最前面的字符（取最小值）
    function getMinNum(obj,oldArr){
        var arr = [];
        var minArr = [];
        var arrxx = [];
        

        for(var i in obj){
            arr.push(obj[i]);
        }
        
        arr.sort(function(val1,val2){
            if(val1 < val2){
                return -1;
            }else if(val1 > val2){
                return 1;
            }else{
                return 0;
            }
        });

        for(var i in obj){
            if(obj[i] == arr[0]){
                minArr.push(i);
            }
        }
        minArr.forEach(function(item, index){
            arrxx.push(oldArr.indexOf(item));
        });
        arrxx.sort(function(val1,val2){
            if(val1 < val2){
                return -1;
            }else if(val1 > val2){
                return 1;
            }else{
                return 0;
            }
        });

        console.log(oldArr[arrxx[0]]);
        return oldArr[arrxx[0]];
    }
    reSet(str);
