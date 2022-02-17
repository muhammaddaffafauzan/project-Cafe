function login(){
let user = (logins.username.value)
let pw = (logins.password.value)
let ub = ("daffa")
let pb = 123;
if (user==ub&&pw==pb) {
document.getElementById('options1').style.opacity = 0;
document.getElementById('options2').style.display = "block";
document.getElementById('options3').style.display = "block";

} else {
    window.alert('ada yang salah di bagian username/password')
}
}
function exit() {
    let ext = confirm('apakah anda ingin keluar')
    if (ext==true) {
        document.getElementById('options2').style.display = ("none");
        document.getElementById('options1').style.opacity = 10;
        document.getElementById('options3').style.display = ("none");
    } else {
        document.getElementById('options2').style.opacity = 10;
 }
}
function pm() {
    document.getElementById('options4').style.display = "block";
}
let uang = 0;
let jumlah = parseInt(document.getElementById('pm2').value);
let uangmasuk = parseInt(document.getElementById('pm3').value);

function tambah()
            {
                // untuk ambil nilai pada input
                var nama = document.getElementById('nama').value;
                 var harga = document.getElementById('harga').value
                  
                  // 0 = baris awal pada tabel
                  var table = document.getElementsByTagName('table')[0];
                  
                  // tambah baris kosong pada tabel
                  // 0 = dihitung dari atas 
                  // table.rows.length = menambahkan pada akhir baris
                  // table.rows.length/2 = menambahkan data pada baris tengah tabel , urutan baris ke 2 
                  var newRow = table.insertRow(table.rows.length/1);
                  
                  // tambah cell pada baris baru
                  var cell1 = newRow.insertCell(0);
                  var cell2 = newRow.insertCell(1);
                  
                  // tambah nilai ke dalam cell
                  cell1.innerHTML =  nama;
                  cell2.innerHTML = `Rp.${harga}-,`;
            }
            function pemasukan() {
                // untuk ambil nilai pada input
                var pms1 = document.getElementById('pm1').value;
                 var pms2 = document.getElementById('pm2').value
                 var pms3 = document.getElementById('pm3').value
                  
                  // 0 = baris awal pada tabel
                  var table = document.getElementsByClassName('c1')[0];
                  
                  // tambah baris kosong pada tabel
                  // 0 = dihitung dari atas 
                  // table.rows.length = menambahkan pada akhir baris
                  // table.rows.length/2 = menambahkan data pada baris tengah tabel , urutan baris ke 2 
                  var newRow = table.insertRow(table.rows.length/2);
                  
                  // tambah cell pada baris baru
                  var cell1 = newRow.insertCell(0);
                  var cell2 = newRow.insertCell(1);
                  var cell3 = newRow.insertCell(2);
                  
                  // tambah nilai ke dalam cell
                  cell1.innerHTML =  pms1;
                  cell2.innerHTML =  pms2;
                  cell3.innerHTML = `Rp.${pms3}-,`;

                  //perhitungan total

    
                uang += parseInt(document.getElementById('pm3').value) * parseInt(document.getElementById('pm2').value);
                 screen();
            }
            function screen(){
                document.getElementById('ttl').innerHTML = `Rp.${uang}-,`;
            }