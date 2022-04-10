function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCoBan = luongCoBan;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tongLuong = 0;
  this.xepLoai = "";

  this.tinhTongLuong = function () {
    switch (this.chucVu) {
      case "Sếp":
        this.tongLuong = this.luongCoBan * 3;
        break;

      case "Trưởng phòng":
        this.tongLuong = this.luongCoBan * 2;
        break;

      case "Nhân viên":
        this.tongLuong = this.luongCoBan;
        break;

      default:
        break;
    }
    return this.tongLuong;
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.xepLoai = "Xuất sắc";
    } else if (176 <= this.gioLam && this.gioLam < 192) {
      this.xepLoai = "Giỏi";
    } else if (160 <= this.gioLam && this.gioLam < 176) {
      this.xepLoai = "Khá";
    } else if (this.gioLam < 160) {
      this.xepLoai = "Trung bình";
    }
    return this.xepLoai;
  };
}
