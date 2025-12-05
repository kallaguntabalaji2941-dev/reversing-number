function reverseNumber(){
    let num = document.getElementById("decimal").value.trim();
    let output = document.getElementById("output");

    if (num === "" || isNaN(num)) {
        output.innerHTML = "❌ Please enter a valid number!";
        return;
    }

    let n = Math.abs(Number(num));
    let rev = 0;

    while(n > 0){
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    output.innerHTML = "✅ Result: " + (Math.sign(num) * rev);
}