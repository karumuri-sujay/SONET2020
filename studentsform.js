var num = prompt("How many student details will you enter");
var span = document.getElementById("span").innerHTML = num;

function StudentDetails() {
    var arr = new Array();
    var obj = new Object();
    var name = document.getElementById("name").value;
    var section = document.getElementById("section").value;
    var roll = document.getElementById("roll").value;
    var number = document.getElementById("pnum").value;
    var college = document.getElementById("college").value;
    arr.push(name, section, roll, number, college);
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    console.log(obj);
    var arr1 = new Array(obj);
    console.log(arr1);
    for (var i = 0; i < arr1.length; i++) {
        var o = arr1[i];
        for (var p in o) {
            var oname = o[0];
            var osec = o[1];
            var oroll = o[2];
            var onum = o[3];
            var oclg = o[4];
        }
    }
    document.write("<table border='1'>")
    document.write("<thead>");
    document.write("<th>");
    document.write("Name");
    document.write("</th>");
    document.write("<th>");
    document.write("Section");
    document.write("</th>");
    document.write("<th>");
    document.write("Roll No.");
    document.write("</th>");
    document.write("<th>");
    document.write("Number");
    document.write("</th>");
    document.write("<th>");
    document.write("College");
    document.write("</th>");
    document.write("</thead>");
    for (var i = 1; i < num + 1; i++) {
        document.write("<tbody>");
        document.write("<td>");
        document.write(oname);
        document.write("</td>");
        document.write("<td>");
        document.write(osec);
        document.write("</td>");
        document.write("<td>");
        document.write(oroll);
        document.write("</td>");
        document.write("<td>");
        document.write(onum);
        document.write("</td>");
        document.write("<td>");
        document.write(oclg);
        document.write("</td>");
        document.write("</tbody>");
    }
    document.write("</table>");
}