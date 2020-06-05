let body = document.body;
    let childrenbody = body.children;

    let mainDiv = document.createElement('div');
    let mainDivAttributeId = document.createAttribute('id');
    mainDivAttributeId.value = 'main';

    mainDiv.setAttributeNode(mainDivAttributeId);
    body.appendChild(mainDiv);

    let judul = document.createElement('h1');
    let txtH1 = document.createTextNode('My Workout List');
    judul.appendChild(txtH1);
    document.getElementById('main').appendChild(judul);

    let input = document.createElement("input");
    input.setAttribute('type','text');
    input.setAttribute('id','work');
    input.setAttribute('name','work');
    input.setAttribute('placeholder','My List');
    mainDiv.appendChild(input);

    let button = document.createElement("button");
    button.setAttribute('type','submit');
    button.setAttribute('onclick','mylist()');
    button.setAttribute('class','btn')
    button.innerHTML = 'Add';
    mainDiv.appendChild(button);
    
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'allToDoList');
    body.appendChild(ul);

    let close = document.getElementsByClassName('close');

    function mylist(){
        let li = document.createElement("li");
        let inputList = document.getElementById("work").value;
        let y = document.createTextNode(inputList);
        li.appendChild(y);
        //ul.appendChild(li);

        if (inputList === '') {
            alert("You must write something!");
        } 
        else {
            document.getElementById("allToDoList").appendChild(li);
        }
        document.getElementById("work").value = "";


        let span = document.createElement("span");
        span.setAttribute('class', 'closeIcon');
        let teks = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(teks);
        li.appendChild(span);

        //to close X button
        for(let i = 0; i < close.length; i++){
            close[i].onclick = function(){
                var listClicked = this.parentElement;
                listClicked.style.display = "none";
            }
        }
    }