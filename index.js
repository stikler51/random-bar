window.addEventListener('load', () => {
    let inputField = document.body.querySelector('.bar');
    let addBtn = document.body.querySelector('.add');
    let barList = document.body.querySelector('.bar-list');
    let destinyBtn = document.body.querySelector('.destiny');
    let result = document.body.querySelector('.result');

    addBtn.addEventListener('click', () => {
        let inputValue = inputField.value;

        if (inputValue.length > 0) {
            let bar = document.createElement('li');
            bar.innerText = inputValue;
            barList.appendChild(bar);
            inputField.value = '';

            bar.addEventListener('click', (e) => {
                e.target.remove();
            })
        }
        return;
    });

    destinyBtn.addEventListener('click', () => {
        let barList = document.body.querySelector('.bar-list').children;
        let min = 0;
        let max = barList.length - 1;
        console.log(barList);

        let rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
        //
        let choosenBar = barList[rand].innerHTML;
        //
        // console.log(choosenBar);
        // console.log(choosenBar.value);
        // // //
        result.innerHTML = `<p>Юхху! Сегодня мы идем в ${choosenBar}!</p><p>Хорошего нам вечера :3</p>`;
        // // console.log(rand);
    })

});