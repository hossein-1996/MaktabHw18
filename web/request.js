
$(document).ready(function(){
    $("button").click(function(){
        $.get("https://5ffbf2be63ea2f0017bdb6da.mockapi.io/user",function(data,status){
            
            var elements = ["fname", "lname", "nationalCode", "phone", "age","avatar"];
            document.write("<table  border='1px' width='200px'>")
            document.write("<tr><th>firstname</th><th>lastname</th><th>nationalCode</th><th>phone</th><th>age</th><th>avatar</th></tr>");
        
            for(var i=0; i<data.length;i++){
                   document.write("<tr></tr>");
               for (var j=0; j < elements.length; j++){
	               document.write("<td>" + data[i][elements[j]] +  "</td>");
            }
        }
                document.write("</table>")
            
        })
    });
    $("form").submit(function(event){
        event.preventDefault();
        var fname = event.target.fname.value;
        var lname = event.target.lname.value;
        var nationalCode = event.target.nationalCode.value;
        var phone = event.target.phone.value;
        var age = event.target.age.value;
        $.post("https://5ffbf2be63ea2f0017bdb6da.mockapi.io/user",{fname:fname,lname:lname,nationalCode:nationalCode,phone:phone,age:age},function(data,status){
            
            $("#birds").append(
                "<tr>" +
                "<td>" +data.fname +"</td>" +
                "<td>" +data.lname +"</td>" +
                "<td>" +data.nationalCode +"</td>" +
                "<td>" +data.phone +"</td>" +
                "<td>" +data.age +"</td>" +
                "</tr>"
            )
    })
})
});
