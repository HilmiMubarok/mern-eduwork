const url = "https://jsonplaceholder.typicode.com/users"

const getData = () => {
    
    document.getElementById('result').innerHTML = loader();
    fetch(url)
        .then(response => response.json())
        .then(function (data) { displayData(data) })
};

const displayData = (data)=> {
    let result = ''
    data.forEach((data) => {
        const {id, name, username, email, address, phone, website, company} = data;
        result +=
        `<div class="max-w-sm rounded rounded-xl overflow-hidden shadow-lg mb-5 bg-white">
            <img class="w-full" src="https://avatars.dicebear.com/api/male/`+randomChar(5)+`.svg" alt="Mountain">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">`+data.name+`</div>
                <div class="text-sm font-bold my-2 inline">`+ data.address.city +`,</div>
                <div class="text-sm my-2 inline">`+ data.address.street +`  `+ data.address.suite +` `+ data.address.zipcode +`</div>
                <div class="text-sm text-emerald-700">`+ data.company.name +`</div>
                <div class="text-sm">`+ data.email +`</div>
                <div class="text-sm">`+ data.phone +`</div>
                <div class="text-sm">`+ data.username +`</div>
                <a href="https://`+data.website+`" target="_blank" class="text-sm text-blue-700">`+ data.website +`</a>
            </div>
        </div>`;
        document.getElementById('result').innerHTML = result;
    })
    
}

function randomChar(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

const loader = ()=> {
    let loader = ''

    for (let index = 0; index < 4; index++) {
        loader += `
            <div class="border border-blue-300 shadow rounded rounded-xl p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-gray-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                        <div class="h-2 bg-gray-200 rounded"></div>
                        <div class="space-y-3">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="h-2 bg-gray-200 rounded col-span-2"></div>
                                <div class="h-2 bg-gray-200 rounded col-span-1"></div>
                            </div>
                            <div class="h-2 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
        
    }
    return loader
}

const btn = document.getElementById('btn-load')

btn.addEventListener('click', function (){
    getData()
})