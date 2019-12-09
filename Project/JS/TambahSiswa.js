 function terimainput(){
var a=document.forms['biodata']['Username'].value;
var b=document.forms['biodata']['Password'].value;
var c=document.forms['biodata']['kelas'].value;

if(a==null || a=="")
{
  document.getElementById("val_Username").innerHTML="<font color='red'><b>* Harap Isi Kolom Username Dengan Benar</b></font>";

  if(b==null || b=="") {
  document.getElementById("val_Password").innerHTML="<font color='red'><b>* Harap Isi Kolom Password Dengan Benar</b></font>";  
  } else {
  document.getElementById("val_Password").innerHTML="<font color='purple'>* Benar</font>";
  }

}
 
else {

document.getElementById("val_Username").innerHTML="<font color='purple'>* Benar</font>";

if(b==null || b=="") {
  document.getElementById("val_Password").innerHTML="<font color='red'><b>* Harap Isi Kolom Password Dengan Benar</b></font>";  
  }

   else {

    document.getElementById("val_Password").innerHTML="<font color='purple'>* Benar</font>";

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
  }
}
}