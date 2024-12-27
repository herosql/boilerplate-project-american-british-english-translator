const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text,locale){
        const sentence = text.substring(0,text.length - 1);
        const words = sentence.split(" ");
        let newWords = [];
        let phrases = []; 
        let  translateSentence = '';

        function americanToBritish(word){
            let targetWord = '';
            if(americanToBritishSpelling[word]){
                targetWord = americanToBritishSpelling[word];
            }
            if(americanOnly[word]){
                targetWord = americanOnly[word];
            }
            if(americanToBritishTitles[word.toLowerCase()]){
                let source = americanToBritishTitles[word.toLowerCase()];
                let firstChar = source.charAt(0).toUpperCase();
                let restOfStr = source.slice(1);
                let newStr = firstChar + restOfStr;
                targetWord= newStr;
            }
            if(Object.keys(britishOnly).find(key => britishOnly[key] === word)){
                targetWord = Object.keys(britishOnly).find(key => britishOnly[key] === word);
            }
            if(targetWord !== ''){
                return '<span class="highlight">' + targetWord + '</span>';
            }
            return word;
        }

        function britishToAmerican(word){
            let targetWord = '';
            if(britishOnly[word.toLowerCase()]){
                targetWord = britishOnly[word.toLowerCase()];
            }

            if(Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word)){
                targetWord =  Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word);
            }
            
            if(Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word.toLowerCase())){
                let source = Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word.toLowerCase());
                let firstChar = source.charAt(0).toUpperCase();
                let restOfStr = source.slice(1);
                let newStr = firstChar + restOfStr;
                targetWord = newStr;
            }

            if(Object.keys(americanOnly).find(key => americanOnly[key] === word)){
                targetWord = Object.keys(americanOnly).find(key => americanOnly[key] === word);
            }
            if(targetWord !== ''){
                return '<span class="highlight">' + targetWord + '</span>';
            }
            return word;
        }

        switch(locale){
            case 'american-to-british':
                newWords = words.map(word => {
                    return americanToBritish(word);
                });

                for(let x=0;x<words.length;x++){
                    let britishWord = words[x];
                    for(let y=x+1;y<words.length;y++){
                        britishWord = britishWord + ' ' + words[y];
                        if(Object.keys(britishOnly).find(key => britishOnly[key] === britishWord.toLowerCase())){
                            phrases.push({start:x,end:y,phrase:Object.keys(britishOnly).find(key => britishOnly[key] === britishWord.toLowerCase())});
                        }

                        if(Object.keys(americanOnly).find(key=>key=== britishWord.toLowerCase())){
                            phrases.push({start:x,end:y,phrase:americanOnly[Object.keys(americanOnly).find(key=>key=== britishWord.toLowerCase())]});
                        }
                    }
                }
               
                if(phrases.length){
                    let countMap = {};
                    phrases.forEach(obj => {
                        let serializedObj = JSON.stringify(obj);
                        countMap[serializedObj] = (countMap[serializedObj] || 0) + 1;
                    });
    
                    let phrasesNewArr = [];
                    Object.keys(countMap).forEach(serializedObj => {
                        let obj = JSON.parse(serializedObj);
                        phrasesNewArr.push(obj);
                    });
                    phrases = phrasesNewArr;
                    // 按照start位置从大到小排序，这样从后向前替换
                    phrases = phrasesNewArr.sort((a, b) => b.start - a.start);
                    phrases.forEach(phrase=>{
                        let newArr = words.filter((_, index) => index < phrase.start || index >= phrase.end);
                        newArr[phrase.start] = phrase.phrase;
                        newWords = newArr;
                        
                    });

                   
                }
                translateSentence = newWords.join(" ");
                // translateSentence = translateSentence.replace(/\d{2}:\d{2}/, function(match) {
                //     return match.replace(":", ".");
                // });

                translateSentence = translateSentence.replace(/\d{1,2}:\d{2}/, function(match) {
                    return `<span class="highlight">${match.replace(":", ".")}</span>`;
                });
            break;
            case 'british-to-american':
                newWords = words.map(word => {
                    return britishToAmerican(word);
                });

                for(let x=0;x<newWords.length;x++){
                    let britishWord = newWords[x];
                    for(let y=x+1;y<newWords.length;y++){
                        britishWord = britishWord + ' ' + newWords[y];
                        if(Object.keys(americanOnly).find(key => americanOnly[key] === britishWord.toLowerCase())){
                            phrases.push({start:x,end:y,phrase:Object.keys(americanOnly).find(key => americanOnly[key] === britishWord.toLowerCase())});
                        }

                        if(Object.keys(britishOnly).find(key=>key=== britishWord.toLowerCase())){
                            phrases.push({start:x,end:y,phrase:britishOnly[Object.keys(britishOnly).find(key=>key=== britishWord.toLowerCase())]});
                        }
                    }
                }
               
               

                if(phrases.length){
                     let countMap = {};
                    phrases.forEach(obj => {
                        let serializedObj = JSON.stringify(obj);
                        countMap[serializedObj] = (countMap[serializedObj] || 0) + 1;
                    });

                    let phrasesNewArr = [];
                    Object.keys(countMap).forEach(serializedObj => {
                        let obj = JSON.parse(serializedObj);
                        phrasesNewArr.push(obj);
                    });
                    phrases = phrasesNewArr;
                     // 按照start位置从大到小排序，这样从后向前替换
                     phrases = phrasesNewArr.sort((a, b) => b.start - a.start);

                    //  start || index >= phrase.end
                    // phrase
                    // 一个对象数组，对象示例为{start:1,end:3,phrase:"cat"}，
                    // start和end分别代表下标的起点和终点，
                    // 现在需要遍历对象数组，找出start和end范围 有词组替换时，保留覆盖范围最长的，删除其他的
                    function mergeOverlapping(arr) {
                        // 先按照start属性对数组进行排序，方便后续比较范围
                        arr.sort((a, b) => a.start - b.start);
                    
                        let result = [];
                        let current = arr[0];
                        for (let i = 1; i < arr.length; i++) {
                            const next = arr[i];
                            // 判断是否有重叠范围
                            if (next.start <= current.end) {
                                // 如果有重叠，比较两者覆盖范围，取覆盖范围长的作为当前保留对象
                                if (next.end > current.end) {
                                    current = {...current, phrase: next.phrase, end: next.end };
                                }
                            } else {
                                // 如果没有重叠，将当前对象加入结果数组，并更新当前对象为下一个对象
                                result.push(current);
                                current = next;
                            }
                        }
                        // 循环结束后，将最后一个处理的对象加入结果数组
                        result.push(current);
                        result = result.sort((a, b) => b.start - a.start);
                        return result;
                    }
                    phrases = mergeOverlapping(phrases);
                    phrases.forEach(phrase=>{
                        let newArr = newWords.filter((_, index) => index < phrase.start || index >= phrase.end);
                        newArr[phrase.start] = phrase.phrase;
                        newWords = newArr;
                    });
                }
                translateSentence = newWords.join(" ");
                // translateSentence = translateSentence.replace(/\d{1,2}.\d{2}/, function(match) {
                //     // return '<span class="highlight">' + match + '</span>';
                //     return match.replace(".", ":");
                // });

                translateSentence = translateSentence.replace(/\d{1,2}.\d{2}/, function(match) {
                    return `<span class="highlight">${match.replace(".", ":")}</span>`;
                });
            break;
                
        }
        
        translateSentence += text.substring(text.length - 1);
        return translateSentence;
    }
}

module.exports = Translator;