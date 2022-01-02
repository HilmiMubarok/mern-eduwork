const getData = (isSearch, url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=390ee8fc7d204cfca949946c7ffd05e8`) => {
    // Jika ada value di input
    if (isSearch) {
        // Jika value input kosong, kembalikan ke fungsi awal (get All data)
        if (isSearch == '') {
            getData(false)
        }
        // jika ada value, tambahkan parameter q pada url
        document.getElementById('res').innerHTML = loader()
        axios.get(url + `&q=` + isSearch)
            .then(function (response) {
                displayData(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
    } else {
        // jika tidak ada value input get all data
        document.getElementById('res').innerHTML = loader()
        axios.get(url)
            .then(function (response) {
                displayData(response.data.articles)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

const loader = () =>{
    
    return `
        <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style="top: 50%;">
                <i class="fas fa-circle-notch fa-spin fa-5x"></i>
            </span>
        </div>
    `
}

const displayData = (data)=> {
    let result = ''
    data.forEach((data) => {
        result +=
        `
        <article class="flex flex-col lg:flex-row  items-start shadow shadow-xl my-4">
            <a href="#" class="hover:opacity-75">
                <img src="`+ data.urlToImage +`">
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
                <a href="`+ data.url +`" class="text-3xl font-bold hover:text-gray-700 pb-4">`+ data.title +`</a>
                <p href="#" class="text-sm pb-3">
                    By <a href="#" class="font-semibold hover:text-gray-800">`+ data.author +`</a>, Published on `+ data.publishedAt +`
                </p>
                <a href="#" class="pb-6">`+ data.description +`</a>
                <a href="`+ data.url +`" class="uppercase text-gray-800 hover:text-black">Continue Reading <i
                        class="fas fa-arrow-right"></i></a>
            </div>
        </article>
        `;
        document.getElementById('res').innerHTML = result;
    })
    
}

getData(false)