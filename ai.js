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

// show more button to load all data
const loadAllData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => showData(data.data.tools));
    const moreButton = document.getElementById('show-more');
    moreButton.classList.add('d-none')
}

// to load modal
const getModalData = id => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => showModalData(data.data));

}
// to show modal
const showModalData = modal => {
    const modalContainer = document.getElementById('modal');
    modalContainer.innerHTML='';
    const modalData=document.createElement('div');
    modalData.classList.add('modal-content');
    modalData.innerHTML=`
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <div class="row row-cols-1 row-cols-md-2 g-4 p-5">
        <div class="col hover-bg">
            <div class="card h-100 p-3">
                <div>
                    <h5>${modal.description}</h5> 
                </div>
                <div class="d-flex align-items-center bg-light py-3 rounded small-text">
                    <div class="pe-4 text-success text-center">
                        <b>
                             ${modal.pricing?modal.pricing[0].price + " " + modal.pricing[0].plan:"Free of cost"}
                        </b>
                    </div>
                    <div class="pe-4 text-warning text-center">
                        <b>
                        ${modal.pricing?modal.pricing[1].price + " " + modal.pricing[1].plan:"Free of cost"}
                        </b>
                    </div>
                    <div class="pe-4 text-danger text-center">
                        <b>
                        ${modal.pricing?modal.pricing[2].price + " " + modal.pricing[2].plan:"Free of cost"}
                        </b>
                    </div>
                </div>
                <div class="row">
                    <div class="col-7">
                        <h5>
                            Features
                        </h5>
                            <ul class="small-text">
                             <li>${modal.features[1].feature_name}</li>
                             <li>${modal.features[2].feature_name}</li>
                             <li>${modal.features[3].feature_name}</li>
                            </ul>
                    </div>
                    <div class="col-5">
                        <h5>
                            Integrations
                        </h5>
                        <ul class="small-text">
                          <li>${modal.integrations?modal.integrations[0]:"No data found"}</li>
                          <li>${modal.integrations?modal.integrations[1]:"No data found"}</li>
                          <li>${modal.integrations?modal.integrations[2]:"No data found"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col hover-bg">
            <div class="container h-100 p-2">
                <img src=${modal.image_link[0]} class="img-fluid rounded" alt="...">
                <div class="d-flex align-items-center justify-content-center text-center p-5 flex-column">
                    <h5 class="card-title pb-2">${modal.input_output_examples[0].input}</h5>
                    <p class="small-text">${modal.input_output_examples[0].output}</p>
                </div>
            </div>
        </div>
    </div>
    `
    console.log(modal.features);
    modalContainer.appendChild(modalData);
}