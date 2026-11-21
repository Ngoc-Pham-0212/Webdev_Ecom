$("li.section.main").each(function (index, section) {
  // Lấy tên chủ đề của môn học
  var tenChuDe = $(section).find(".sectionname").first().text().trim() || $(section).attr("aria-label");

  // Tìm tất cả bài tập (.modtype_assign) thuộc phạm vi chủ đề hiện tại
  var dsBaiTap = $(section).find(".modtype_assign");

  if (dsBaiTap.length === 0) {
    console.log('Chủ đề "' + tenChuDe + '" không có bài tập');
  } else {
    dsBaiTap.each(function (idx, assign) {
      var tenBaiTap = $(assign).find(".instancename").text().trim();

      // Lọc riêng dòng chứa thông tin ngày hết hạn nộp bài
      var deadline = "";
      $(assign).find('[data-region="activity-dates"] div, .activity-dates div').each(function () {
        var dongThoiGian = $(this).text().replace(/\s+/g, " ").trim();
        if (/due|hạn|đóng/i.test(dongThoiGian)) {
          deadline = dongThoiGian;
        }
      });

      // Dự phòng trường hợp giao diện LMS hiển thị ngày ở dạng văn bản gộp
      if (!deadline) {
        deadline = $(assign).find('[data-region="activity-dates"], .activity-dates').text().replace(/\s+/g, " ").trim() || "Không có ngày deadline";
      }

      console.log('Chủ đề "' + tenChuDe + '" có bài tập: "' + tenBaiTap + '" | ' + deadline);
    });
  }
});