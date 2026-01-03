load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let data = [];
        // Selector cho các trang web dùng Madara Theme
        doc.select(".reading-content img").forEach(e => {
            let img = e.attr("src").trim() || e.attr("data-src").trim();
            if (img) data.push(img);
        });
        return Response.success(data);
    }
    return null;
}
