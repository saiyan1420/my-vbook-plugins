load('config.js');
function execute(url, page) {
    if (!page) page = '1';
    // Hentaivnx dùng /page/2/ thay vì ?page=2
    let response = fetch(url + "page/" + page + "/");

    if (response.ok) {
        let doc = response.html();
        let data = [];
        
        // Selector chuẩn cho các item truyện trên Hentaivnx
        let items = doc.select(".main-page .box-mod");

        items.forEach(e => {
            let titleElement = e.select(".title-mod a");
            data.push({
                name: titleElement.text(),
                link: titleElement.attr("href"),
                cover: e.select(".img-mod").attr("src"),
                description: e.select(".view-mod").first().text(), // Hiển thị lượt xem/tập mới
                host: BASE_URL
            });
        });

        // Check trang kế tiếp
        let next = doc.select(".pagination .current + a").text();
        return Response.success(data, next);
    }
    return null;
}
