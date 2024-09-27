{
    // masala-30
    function number (num){
        let result = +num.toString().split("").reverse("").join("")
        return result
    }
    console.log(number(123))
}
{
    // masala-31
    let arr = ["text" , "world" , "laptop"]
    let obj = {}
    for(let i=0 ; i<arr.length ; i++){
        obj[arr[i]] = arr[i].length
    }
    console.log(obj)
    
    
}
{
    // masala-32
    function minMaxWord(str) {
        let words = str.split(' ');
        let minWord = words[0];
        let maxWord = words[0];
        for (let i = 1; i < words.length; i++) {
            if (words[i].length < minWord.length) {
                minWord = words[i];
            }
            if (words[i].length > maxWord.length) {
                maxWord = words[i];
            }
        }
    
        return { minWord: minWord, maxWord: maxWord };
    }
    console.log(minMaxWord("Men dasturlash kursida o'qiyman"))
    
}

{
    // masala-33
    function getLevel(n) {
        let result = [];
        for (let i = 1; i <= n; i++) {
            result.push(Math.pow(2, i));
        }
        return result;
    }
    console.log(getLevel(5))
}

{
    // masala-34
    function minWord(sentence){
        let words = sentence.split(" ")
        let minWord = words[0]
        for (let i = 1; i<words.length ; i++){
            if(words[i].length < minWord.length){
                minWord=words[i]
            }
        }
        return {minWord: minWord}
    }
    console.log(minWord("Men dasturlash kursida o'qiyman"))
}
{
    // masala-35
    function obj(num,n){
        let result = {}
        for(i in num){
            result[i]=num[i]*n
        }
        return result
    }
    console.log(obj({a:2, b:3, c:4},3))
}
{
    // masala-37
    const fn = (...parms)=>{
        let total = parms.reduce((a,b)=>a+b,0)
        return total.toString().split('').map(Number);
        
    }
    console.log(fn(4,5,3,8))
}
{
    // masala-38
    function test (a){
        let result = 0
        let s = a.toLowerCase().split(" ")
        for(let i=0;i<s.length; i++){
            if(s[i].includes("a")){
                result++
            }
        }
        return result
    }
    console.log(test("slAom, spslsa, hi"))
}
{
    // masala-39
    function findPowerOfTwo(n) {
        if (n <= 0){
            return "Kiritilgan son 0 dan katta bo'lsin";
        }  
        let i = 0;
        let power = 1;
        while (power < n) {
            power *= 2; 
            i++;
        }
        if(power==n){
            return i
        }
        else{
            return "Xato"
        }
    }
    console.log(findPowerOfTwo(16));
}
{
    // masala-40
    function findMiddleNumber(arr) {
        let length = arr.length;
        if (length % 2 !== 0) {
            return arr[Math.floor(length / 2)];
        } else {
            let midIndex = length / 2;
            return (arr[midIndex - 1] + arr[midIndex]) / 2;
        }
    }
    console.log(findMiddleNumber([1, 2, 3, 4, 5]));
}