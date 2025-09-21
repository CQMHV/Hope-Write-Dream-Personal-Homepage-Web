//导航栏自动高亮
(function () {
    "use strict";
    function norm(p) {
        if (!p) return "/"; if (p !== "/" && p.endsWith("/")) p = p.slice(0, -1);
        if (p.endsWith("/index.html")) p = p.slice(0, -11) || "/"; return p || "/";
    }
    var cur = norm(location.pathname);
    document.querySelectorAll(".menu .link").forEach(function (a) {
        var href = new URL(a.getAttribute("href"), location.origin).pathname;
        href = norm(href);
        var m = (a.dataset.match || "exact").toLowerCase();
        var active = (m === "exact") ? (cur === href) : (cur === href || cur.startsWith(href + "/"));
        if (active) { a.classList.add("active"); a.setAttribute("aria-current", "page"); }
    });
})();

// 横向滚动card-flex-grid卡片列表
document.addEventListener("DOMContentLoaded", () => {
    const grids = document.querySelectorAll(".card-flex-grid");
    grids.forEach(grid => {
        grid.addEventListener("wheel", (e) => {
            // 忽略按住 Shift 的情况（保持默认）
            if (!e.shiftKey) {
                e.preventDefault(); 
                grid.scrollLeft += e.deltaY; // 垂直滚动转横向
            }
        }, { passive: false });
    });
});
