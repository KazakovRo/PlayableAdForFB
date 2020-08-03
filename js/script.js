// helper function
const randomizeArray = array => array.sort(() => Math.random() - 0.5)

// screen one elements
const screenOne = document.querySelector('#screen-one')
const winStamp = document.querySelector('.screen-one__win')
const loseStamp = document.querySelector('.screen-one__lose')

// screen one elements
const screenTwo = document.querySelector('#screen-two')
const logo = document.querySelector('.screen-two__logo-blitz')
const table = document.querySelector('.screen-two__table')
const woman = document.querySelector('.screen-two__woman')
const cat = document.querySelector('.screen-two__cat')
const playNowBtn = document.querySelector('.screen-two__play-now')
const replayBtn = document.querySelector('.screen-two__replay')

const playNowClicker = document.querySelector('#screen-two #clicker-play-now-btn')
const replayClicker = document.querySelector('#screen-two #clicker-replay-btn')

// app elements
const dishes = ['trash', 'cakes', 'waffles']
const palates = [
  document.querySelector('#screen-one #plate-left'),
  document.querySelector('#screen-one #plate'),
  document.querySelector('#screen-one #plate-right')
]

const mandishClickers = [
  document.querySelector('#screen-one #clicker-left'),
  document.querySelector('#screen-one #clicker'),
  document.querySelector('#screen-one #clicker-right')
]

// generate random trash
randomizeArray(dishes).forEach((dish, index) => palates[index].querySelector('.dish').classList.add(dish))

// events
mandishClickers.forEach((clicker, index) =>
  clicker.addEventListener('click', () => {
    palates[index].querySelector('.maindish').classList.add('open')
    stamp(palates[index])
  })
)

playNowClicker.addEventListener('touchstart', () => {
  playNowBtn.classList.remove('pulse')
  playNowBtn.classList.remove('push-btn-no')
  playNowBtn.classList.remove('play-now-appears')
  playNowBtn.classList.add('push-btn')
})

playNowClicker.addEventListener('touchend', () => {
  playNowBtn.classList.add('pulse')
  playNowBtn.classList.add('push-btn-no')
  playNowBtn.classList.remove('push-btn')
  console.log('here could be link to the incredible game :] ')
})

replayClicker.addEventListener('click', () => {
  location.reload()
})

// functions
const stamp = clickedPlate => {
  const maindish = clickedPlate.querySelector('.maindish')
  const dish = clickedPlate.querySelector('.dish')

  // Detect results
  maindish.classList.contains('open') && dish.classList.contains('trash')
    ? loseStamp.classList.add('stamp-move')
    : winStamp.classList.add('stamp-move')

  setTimeout(() => {
    // Switch screens
    screenOne.classList.add('display-no')
    screenTwo.classList.remove('display-no')

    // Appers actions
    logoAndTableAppears()
    womanWithCatAppears()
    playNowBtnAppears()
    replayBtnAppears()
  }, 1500)
}

const logoAndTableAppears = () => {
  logo.classList.add('logo-appears')
  table.classList.add('table-appears')
}

const womanWithCatAppears = () => {
  woman.classList.add('woman-appears')
  cat.classList.add('cat-appears')
}

const playNowBtnAppears = () => {
  playNowBtn.classList.add('play-now-appears')

  setTimeout(() => {
    playNowBtn.classList.add('pulse')
  }, 2700);
}

const replayBtnAppears = () => {
  replayBtn.classList.add('replay-appears')
}

// App cat appears
setTimeout(() => {
  document.querySelector('.screen-one__cat-hand').classList.add('appears')
  document.querySelector('.screen-one__cat').classList.add('appears')
  document.querySelector('.screen-one__hint').style = 'display: block'

  setTimeout(() => {
    document.querySelector('.screen-one__cat-hand').classList.remove('appears')
    document.querySelector('.screen-one__cat').classList.remove('appears')
    document.querySelector('.screen-one__cat-hand').classList.add('hint-move')
  }, 500)
}, 700)
