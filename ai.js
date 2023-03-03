const loadData = () => {
    document.getElementById('spinner').classList.remove('d-none');
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools.slice(0, 6)))
}
const showData = data => {
    const container = document.getElementById('data-container');
    container.innerHTML = ''
    document.getElementById('spinner').classList.add('d-none');
    data.forEach(card => {
        const { image, name, features, published_in, id } = card;
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
                        <li class="text-nowrap">${features[2] ? features[2] : "Number 3 not available"}</li>
                    </ol>
                    <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title">${name}</h5>
                        <i class="fa-solid fa-calendar-days"></i>
                        <small>${published_in}</small>
                    </div>
                    <div>
                    <i onclick="getModalData('${id}')" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-sharp fa-solid fa-circle-arrow-right fa-lg text-danger"></i>
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
const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools));
    const moreButton = document.getElementById('show-more');
    moreButton.classList.add('d-none')
}
const getModalData = id => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => console.log(data.data));

}
const showModalData = modal => {
    console.log(modal);
    const modal = document.getElementById('modal')
    modal.innerHTML = `

`
}