// 1. bg-color = yellow; --> css
// 2. bg-color = purple -- > css, half in js(if)
// 3. bg-color = blue --> css, last in js(if)




// function handleWindowColor() {
//   const windowInnerWidth = window.innerWidth


//   if(windowInnerWidth > 880) {
//     document.body.style.backgroundColor = 'yellow';
//   } else if (windowInnerWidth <= 880 && windowInnerWidth >= 550) {
//     document.body.style.backgroundColor = 'purple';
//   } else if (windowInnerWidth < 550) {
//     document.body.style.backgroundColor = 'blue';
//   }
// }

// window.addEventListener('resize', handleWindowColor);


const bodyClassList = document.body.classList;

function handleWindowColor() {
  const windowInnerWidth = window.innerWidth;
  

  if(windowInnerWidth > 880) {
    bodyClassList.add('fullScreenYellow');
    bodyClassList.remove('middleScreenPurple');
  } else if(windowInnerWidth <= 880 && windowInnerWidth > 500) {
    bodyClassList.add('middleScreenPurple');
    bodyClassList.remove('smallScreenBlue','fullScreenYellow');
  } else if(windowInnerWidth <=550) {
    bodyClassList.add('smallScreenBlue');
    bodyClassList.remove('middleScreenPurple','fullScreenYellow');
  }
}

window.addEventListener('resize', handleWindowColor);

