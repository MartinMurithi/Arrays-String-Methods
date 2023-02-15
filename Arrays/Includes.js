
//Includes, checks if a value is included in a range
//Its case sensitive

function check(str) {

    const sentence = "Martin is a software engineer";
    const result = sentence.includes(str);
   console.log(result);
}

check("Is");