var danhSachBaiNop = $(".modtype_assign");

if (danhSachBaiNop.length >= 5) {
  danhSachBaiNop.each(function (index, value) {
    if (index === 4) {
      $(value).find(".instancename").each(function (index_Instancename, value_Instancename) {
        console.log("Bài nộp thứ 5:", $(value_Instancename).text().trim());
      });
    }
  });
} else {
  console.log("Môn học hiện chỉ có " + danhSachBaiNop.length + " bài nộp (chưa đủ 5 bài).");
}