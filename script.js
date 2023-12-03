let contentBox = document.getElementById('text');

contentBox.addEventListener("keyup", function(e) {
    let string = contentBox.innerHTML;
    document.getElementById("wordCount").innerHTML = words(string);
    let arr = vowel_con(string);
    document.getElementById("vowel").innerHTML = arr[0];
    document.getElementById("con").innerHTML = arr[1];
    document.getElementById("digit").innerHTML = arr[2];
});

function words(st) {
    st = st.trim();
    let count = 1;
    for(let i=0; i<st.length; i++) {
        if(st.charAt(i) === " ") {
            count++;
        }
    }
    return count;
}

function vowel_con(st) {
    st = st.trim().toUpperCase();
    let vowel = 0, con = 0, digit = 0;
    let arr = [];
    for(let i=0; i<st.length; i++) {
        if(st.charAt(i) === "A" || st.charAt(i) === "E" || st.charAt(i) === "I" || st.charAt(i) === "O" || st.charAt(i) === "U") {
            vowel++;
        }else if(st.charAt(i)>="0" && st.charAt(i) <= "9") {
            digit++;
        }else {
            console.log(st);
            con++;
        }
    }

    arr.push(vowel, con, digit);
    return arr;
}