const data = {
    score : {
        player1: 0,
        player2: 0
    },
    input : {
        player1: null,
        player2: null
    },
    msg: null
}

const getWinner = () => {
    
    if (data.score.player1 > data.score.player2) {
        return data.msg = "player 1 win"
    } else if(data.score.player2 > data.score.player1) {
        return data.msg = "player 2 win"
    } else {
        return data.msg = "seri";
    }
}

const validation = (p1, p2) =>{
    
    if (isNaN(p1) || isNaN(p2)) {
        data.msg = "Harus Angka"
        return false
    } else {
        if (p1 <= 0 || p2 <= 0) {
            data.msg = "Angka tidak boleh lebih kecil dari 1"
            return false
        } else if (p1 > 3 || p2 > 3) {
            data.msg = "Angka tidak boleh lebih besar dari 3"
            return false
        } else if(p1 === p2){
            data.msg = "Tidak Boleh Sama"
            return false
        } else {
            data.input.player1 = p1
            data.input.player2 = p2
            return true
        }
    }
}

function resetGame() {
    const msg = "Ulang Permainan ?"
    if (confirm(msg)) {
        playGame()
    } else {
        return null
    }
}

const playGame = () => {
    const player1 = prompt("Masukkan Angka Player 1")
    const player2 = prompt("Masukkan Angka Player 2")

    if(validation(player1, player2)){
        return getResult(player1, player2)
    } else {
        alert(data.msg)
        resetGame()
    }
}

function getResult(p1, p2) {
    const result = Math.floor((Math.random() * 3) + 1)
    if (p1 == result && p2 != result) {
        console.log("player 1 win " + p1)
        data.score.player1++
    } else if(p1 != result && p2 == result){
        console.log("player 2 win " + p2)
        data.score.player2++
    } else {
        console.log("Salah Kabeh")
    }
    console.log("Player 1 Milih " + p1)
    console.log("Player 2 Milih " + p2)
    console.log("Hasil "+ result)
    console.log(data.score)
}

for (let round = 1; round <= 5; round++) {
    alert("Round " + round)
    playGame()
}

console.log(getWinner())