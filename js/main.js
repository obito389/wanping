// 数智红迹 · 全站脚本

// 移动端导航折叠
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // 04 精彩影像：分类筛选（按 data-cat 属性过滤）
  var filterBar = document.querySelector(".gallery-filter");
  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      filterBar.querySelectorAll("button").forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      var cat = btn.dataset.cat;
      document.querySelectorAll(".gallery-item").forEach(function (item) {
        item.style.display =
          cat === "all" || item.dataset.cat === cat ? "" : "none";
      });
    });
  }
});
