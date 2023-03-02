const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools))
}
const showData = data => {
    const container = document.getElementById('data-container');
    data.forEach(card => {
        const {image,name,features,published_in}=card;
        const div = document.createElement('div');
        div.classList.add('col')

        div.innerHTML = `
        
            <div class="card h-100 p-2 overflow-hidden">
                <img src="${image}" class="card-img-top h-50" alt="...">
                <div class="card-body">
                <h5>Features</h5>
                    <ol id="list-item class="text-nowrap">
                        <li class="text-nowrap">${features[0]}</li>
                        <li class="text-nowrap">${features[1]}</li>
                        <li class="text-nowrap">${features[2]?features[2]:"Number 3 not available"}</li>
                    </ol>
                    <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${name}</h5>
                        <i class="fa-solid fa-calendar-days"></i>
                        <small>${published_in}</small>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-circle-arrow-right fa-lg"></i>
                    </div>
                </div>
                </div>
            </div>
        
        `
        // const listItem = document.getElementById('list-item')
        // features.forEach(feature => {
        //     const li=document.createElement('li')
        //     li.innerHTML=`${feature}`
        //     console.log(li);
        //     listItem.appendChild("li");
        // });
        
        container.appendChild(div);
    });

}
loadData();