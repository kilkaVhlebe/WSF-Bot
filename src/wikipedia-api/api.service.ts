import wiki from "wikipedia";



(async () => {
    try {
        wiki.setLang("ru")
        //Response of type @Page object
        const summary = await wiki.summary("Бэтмен фильм")
        //Response of type @wikiSummary - contains the intro and the main image
        console.log(summary)
    } catch (error) {
        console.log(error);
        //=> Typeof wikiError
    }
})();