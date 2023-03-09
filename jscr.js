
function caculatorA() {
    let in1 = document.getElementById('in1').value;
    let in2 = document.getElementById('in2').value;
    let result;
    result = Number(in1) + Number(in2);
    document.getElementById('result').innerHTML= 'Kết quả là: '+ result;
}
function caculatorS() {
    let in1 = document.getElementById('in1').value;
    let in2 = document.getElementById('in2').value;
    let result;
    result = Number(in1) - Number(in2)
    document.getElementById('result').innerHTML= 'Kết quả là: '+ result;
}
function caculatorM() {
    let in1 = document.getElementById('in1').value;
    let in2 = document.getElementById('in2').value;
    let result;
    result = Number(in1) * Number(in2)
    document.getElementById('result').innerHTML= 'Kết quả là: '+ result;
}
function caculatorD() {
    let in1 = document.getElementById('in1').value;
    let in2 = document.getElementById('in2').value;
    let result;
    result = Number(in1) / Number(in2)
    document.getElementById('result').innerHTML= 'Kết quả là: '+ result;
}