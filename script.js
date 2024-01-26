   
        function search(tr) {
            const parent = document.getElementById("container");
            while (parent.firstChild) {
                parent.firstChild.remove();
            }
            const searchable = document.getElementById('se').value;
            let sr = searchable.substring(0, 2);
            fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${tr}&apiKey=9637c5561ad24301ab0cf036edc5b1f0`)
                .then(data => data.json())
                .then(response => {
                    console.log(response);
                    for (let i = 0; i < 20; i++) {
                        const card = document.createElement('li');
                        card.innerHTML = `<img src="${response.articles[i].urlToImage}" alt="" id='imag'>
                        <span class='da'>Date : ${response.articles[i].publishedAt}</span>
                        <p class='da'>Author : ${response.articles[i].author}</p>
                        <div id ='ins'>
                        <div id='ti'>${response.articles[i].title}</div>
                        <br/>
                        <div>${response.articles[i].description}</div>
                        <span><a href=${response.articles[i].url} target='_blank'>read more...</a></span>
                        </div>`;
                        parent.appendChild(card);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

        function createCard() {
            const container = document.getElementById('container');
            fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9637c5561ad24301ab0cf036edc5b1f0`)
                .then(data => data.json())
                .then(response => {
                    console.log(response);
                    for (let i = 0; i < 20; i++) {
                        const card = document.createElement('li');
                        card.innerHTML = `<img src="${response.articles[i].urlToImage}" alt="" id='imag'>
                        <span class='da'>Date : ${response.articles[i].publishedAt}</span>
                        <p class='da'>Author : ${response.articles[i].author}</p>
                        <div id ='ins'>
                        <div id='ti'>${response.articles[i].title}</div>
                        <br/>
                        <div>${response.articles[i].description}</div>
                        <span><a href=${response.articles[i].url} target='_blank'>read more...</a></span>
                        </div>`;
                        container.appendChild(card);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

        createCard();