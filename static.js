var data = [{ name: "Sujay", age: "18", email: "abc@gmail.com", pnumber: "202-555-0147", college: "NGIT" },
    { name: "Aditya", age: "18", email: "aditya@gmail.com", pnumber: "202-555-0158", college: "SNIST" },
    { name: "Goutham", age: "20", email: "goutham@gmail.com", pnumber: "202-555-0179", college: "KMIT" },
    { name: "Azhar Khan", age: "19", email: "azkhan@gmail.com", pnumber: "202-555-0138", college: "KMIT" },
    { name: "Suresh", age: "22", email: "suresh@gmail.com", pnumber: "202-555-0144", college: "CBIT" },
]

document.write("<table border='1'>");
document.write("<thead>");
document.write("<th>");
document.write("Name");
document.write("</th>");
document.write("<th>");
document.write("Age");
document.write("</th>");
document.write("<th>");
document.write("Email");
document.write("</th>");
document.write("<th>");
document.write("Phone Number");
document.write("</th>");
document.write("<th>");
document.write("College");
document.write("</th>");
document.write("</thead>");
for (var i = 0; i < data.length; i++) {
    document.write("<tbody>");
    document.write("<td>");
    document.write(data[i].name);
    document.write("</td>");
    document.write("<td>");
    document.write(data[i].age);
    document.write("</td>");
    document.write("<td>");
    document.write(data[i].email);
    document.write("</td>");
    document.write("<td>");
    document.write(data[i].pnumber);
    document.write("</td>");
    document.write("<td>");
    document.write(data[i].college);
    document.write("</td>");
    document.write("</tbody>");
}
document.write("</table");