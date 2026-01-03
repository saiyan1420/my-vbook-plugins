load('config.js');
function execute() {
    return Response.success([
        {title: "Truyện Mới", input: BASE_URL + "/truyen-moi/", script: "gen.js"},
        {title: "Manga", input: BASE_URL + "/the-loai/manga-2/", script: "gen.js"},
        {title: "Doujinshi", input: BASE_URL + "/the-loai/doujinshi-2/", script: "gen.js"},
        {title: "Full Màu", input: BASE_URL + "/the-loai/full-mau/", script: "gen.js"}
    ]);
}
