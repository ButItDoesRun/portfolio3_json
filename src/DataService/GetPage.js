// https://localhost:5001/api/search/actors/johan

async function GetPage(token, url, page, pageSize, setPageList) {
    if (token != null) {
        const requestContent = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
        };
        const pagingUrl = url + "?page=" + page + "&pageSize="+pageSize;
        try {
            const res = await fetch(pagingUrl, requestContent);
            const json = await res.json();
            setPageList(json);

        } catch (e) {
            console.log(e);
            setPageList(null);
        }
    } else {
        setPageList(null);
    }
}

export default GetPage;