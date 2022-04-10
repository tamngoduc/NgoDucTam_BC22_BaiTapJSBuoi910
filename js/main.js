var dsnv = new DanhSachNhanVien();

function getEle(id) {
  return document.getElementById(id);
}

function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DanhSachNhanVien", dataString);
}

function getLocalStorage() {
  var data = localStorage.getItem("DanhSachNhanVien");
  if (data) {
    var dataJSON = JSON.parse(data);
    dsnv.arr = dataJSON;
    taoBang(dsnv.arr);
  }
}

getLocalStorage();

function layThongTinNV() {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datePicker").value * 1;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucVu").value;
  var gioLam = getEle("gioLam").value * 1;

  var nhanVien = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);

  nhanVien.tinhTongLuong();

  nhanVien.xepLoai();

  return nhanVien;
}

function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    content += `
        <tr>
            <td>${arr[i].taiKhoan}</td>
            <td>${arr[i].hoTen}</td>
            <td>${arr[i].email}</td>
            <td>${arr[i].ngayLam}</td>
            <td>${arr[i].chucVu}</td>
            <td>${arr[i].tongLuong}</td>
            <td>${arr[i].xepLoai}</td>
            <td>
             <button class="btn btn-danger" onclick="xoaSV('${arr[i].taiKhoan}')">Xoá</button>
            </td>
        </tr>
      `;
    // ${arr[i].maSV} dang duoc hieu la bien neu co ki tu
    // -> dung dau nhay de chuyen thanh chuoi de user nhap so hay chuoi deu duoc
    // nhay don nam trong nhay kep
  }
  // btn khong dung duoc id vi se bi trung`
  // khong dung duoc onclick eventHandler vi ban dau chua render btn
  getEle("tableDanhSach").innerHTML = content;
}

getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV();

  dsnv.themNV(nhanVien);

  taoBang(dsnv.arr);
  setLocalStorage();
});
