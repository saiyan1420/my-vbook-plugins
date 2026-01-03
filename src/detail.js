load('config.js');
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let genres = [];
        
        // Lấy thể loại
        doc.select(".breadcrumb a[href*='the-loai']").forEach(e => {
            genres.push({
                title: e.text(),
                input: e.attr("href"),
                script: "gen.js"
            });
        });

        return Response.success({
            name: doc.select(".title-detail").text(),
            cover: doc.select(".img-detail").attr("src"),
            author: "N/A", // Trang này thường không ghi rõ tác giả ở ngoài
            description: doc.select(".detail-content").text(),
            host: BASE_URL,
            genres: genres,
            ongoing: true, // Mặc định vì trang ít khi set trạng thái hoàn thành rõ ràng
            nsfw: true
        });
    }
    return null;
}
