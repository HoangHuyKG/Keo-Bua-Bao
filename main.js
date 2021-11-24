const getClickKeo = document.querySelector('.Keo')
const getClickBua = document.querySelector('.Bua')
const getClickBao = document.querySelector('.Bao')
const getUser = document.querySelector('.user')
const getAI = document.querySelector('.AI')
const getClickAgain = document.querySelector('.playagain')
const GetResult = document.querySelector('.result')
var keo = bua = bao =''
getClickKeo.onclick = function () {
    keo = 'Kéo'
    bua = ''
    bao = ''
    getUser.innerHTML = `<h1 class="ChoseText">Bạn đã chọn kéo</h1>
                            <img src="./asset/img/Kéo.png" alt="" class="img">`
    getClickBua.style.display = 'none'
    getClickBao.style.display = 'none'
}
getClickBua.onclick = function () {
    bua = 'Búa'
    keo = ''
    bao = ''
    getUser.innerHTML = `<h1 class="ChoseText">Bạn đã chọn búa</h1>
                            <img src="./asset/img/Búa.png" alt="" class="img">`
    getClickKeo.style.display = 'none'
    getClickBao.style.display = 'none'
}
getClickBao.onclick = function () {
    bao = 'Bao'
    keo = ''
    bua = ''
    getUser.innerHTML = `<h1 class="ChoseText">Bạn đã chọn bao</h1>
                            <img src="./asset/img/Bao.png" alt="" class="img">`
    getClickKeo.style.display = 'none'
    getClickBua.style.display = 'none'
}
getClickAgain.onclick = function () {
    keo = ''
    bua = ''
    bao = ''
    getClickKeo.style.display = 'block'
    getClickBua.style.display = 'block'
    getClickBao.style.display = 'block'
}
// Gameplay
const getClickPlay = document.querySelector('.playgame')
getClickPlay.onclick = function () {
        if(keo =='' && bua =='' && bao ==''){
            alert('Chọn Kéo Búa Bao hoặc muốn bị ăn đấm')
            location.reload()
        }
       
        a = Math.floor(Math.random()*3)
         
       function tinhtoan(){
        setTimeout (() => {
            if(a == 0){
                getAI.innerHTML = `<h1 class="ChoseText">Huy đã chọn kéo</h1>
                                    <img src="./asset/img/Kéo.png" alt="" class="img">`
            } else if (a == 1){
                getAI.innerHTML = `<h1 class="ChoseText">Huy đã chọn Búa</h1>
                                    <img src="./asset/img/Búa.png" alt="" class="img">`
            } else if (a == 2){
                getAI.innerHTML = `<h1 class="ChoseText">Huy đã chọn Bao</h1>
                                    <img src="./asset/img/Bao.png" alt="" class="img">`
            }
            // Xử lí thắng thua
        if (a == 0){
            if(a == 0 && bua == 'Búa'){
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thắng</h1>`
            } else if (a == 0 && bao == 'Bao'){
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`
            } else if (a == 0 && keo == 'Kéo'){
                GetResult.innerHTML = `<h1 class="textresult">Hòa rồi cay hem</h1>`
            }
        }
        if(a == 1){
            if(a == 1 && bao == 'Bao'){
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thắng</h1>`
            } else if (a == 1 && keo == 'Kéo') {
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`
            } else if (a == 1 && bua == 'Búa') {
                GetResult.innerHTML = `<h1 class="textresult">Hòa rồi cay hem</h1>`
            }
        }
        if(a == 2){
            if(a == 2 && keo == 'Kéo'){
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thắng</h1>`
            } else if (a == 2 && bua == 'Búa') {
                GetResult.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`
            } else if (a == 2 && bao == 'Bao') {
                GetResult.innerHTML = `<h1 class="textresult">Hòa rồi cay hem</h1>`
            }
        }
    },4000) 

}
    tinhtoan();
        setTimeout(() => {
            GetResult.innerHTML = `<h1 class="textresult">3</h1>`    
        },1000)
        setTimeout(() => {
            GetResult.innerHTML = `<h1 class="textresult">2</h1>`    
        },2000)
        setTimeout(() => {
            GetResult.innerHTML = `<h1 class="textresult">1</h1>`    
        },3000)
    
}
// Modal Địa ngục
const getClickKeoHell = document.querySelector('button.Keohell')
const getClickBuaHell = document.querySelector('.Buahell')
const getClickBaoHell = document.querySelector('.Baohell')
const getUserHell = document.querySelector('.userhell')
const getAIHell = document.querySelector('.AIhell')
const getClickAgainHell = document.querySelector('.playagainhell')
const GetResultHell = document.querySelector('.resulthell')
var keohell = buahell = baohell =''
getClickKeoHell.onclick = function () {
    keohell = 'Kéo'
    buahell = ''
    baohell = ''
    getUserHell.innerHTML = `<h1 class="ChoseText">Bạn đã chọn kéo</h1>
                            <img src="./asset/img/Kéo.png" alt="" class="img">`
    getClickBuaHell.style.display = 'none'
    getClickBaoHell.style.display = 'none'
}
getClickBuaHell.onclick = function () {
    buahell = 'Búa'
    keohell = ''
    baohell = ''
    getUserHell.innerHTML = `<h1 class="ChoseText">Bạn đã chọn búa</h1>
                            <img src="./asset/img/Búa.png" alt="" class="img">`
    getClickKeoHell.style.display = 'none'
    getClickBaoHell.style.display = 'none'
}
getClickBaoHell.onclick = function () {
    baohell = 'Bao'
    keohell = ''
    buahell = ''
    getUserHell.innerHTML = `<h1 class="ChoseText">Bạn đã chọn bao</h1>
                            <img src="./asset/img/Bao.png" alt="" class="img">`
    getClickKeoHell.style.display = 'none'
    getClickBuaHell.style.display = 'none'
}
getClickAgainHell.onclick = function () {
    keohell = ''
    buahell = ''
    baohell = ''
    getClickKeoHell.style.display = 'block'
    getClickBuaHell.style.display = 'block'
    getClickBaoHell.style.display = 'block'
}
// Gameplay
const getClickPlayHell = document.querySelector('.playgamehell')
getClickPlayHell.onclick = function () {
        if(keohell =='' && buahell =='' && baohell ==''){
            alert('Chọn Kéo Búa Bao hoặc muốn bị ăn đấm')
            location.reload()
        }
       function tinhtoan(){
            // Xử lí thắng thua
        if (keohell == 'Kéo'){
            getAIHell.innerHTML = `<h1 class="ChoseText">Huy đã chọn Búa</h1>
                                    <img src="./asset/img/Búa.png" alt="" class="img">`
            GetResultHell.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`
        }
        if(buahell == 'Búa'){
            getAIHell.innerHTML = `<h1 class="ChoseText">Huy đã chọn Bao</h1>
            <img src="./asset/img/Bao.png" alt="" class="img">`
            GetResultHell.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`
        }
        if(baohell == 'Bao'){
            getAIHell.innerHTML = `<h1 class="ChoseText">Huy đã chọn kéo</h1>
            <img src="./asset/img/Kéo.png" alt="" class="img">`
            GetResultHell.innerHTML = `<h1 class="textresult">Bạn đã thua</h1>`  
        }

}
    tinhtoan();
}
const gethard = document.querySelector('.HardAI')
const gettexthell = document.querySelector('.textinhell')

gethard.onclick = function () {
    setTimeout(()=>{
        gettexthell.innerHTML = '<div></div>'
    },3000)
}

