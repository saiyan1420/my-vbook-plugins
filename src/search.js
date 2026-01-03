load('config.js');
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + "/page/" + page + "/", {
        queries: { "s": key, "post_type": "wp-manga" }
    });

    if (response.ok) {
        let doc = response.html();
        let data = [];
        doc.select(".c-tabs-item__content").forEach(e => {
            data.push({
                name: e.select(".post-title a").text(),
                link: e.select(".post-title a").attr("href"),
                cover: e.select("img").attr("src") || e.select("img").attr("data-src"),
                host: BASE_URL
            });
        });
        
        let next = doc.select(".nextpostslink").size() !== 0 ? (parseInt(page) + 1).toString() : null;
        return Response.success(data, next);
    }
    return null;
}
