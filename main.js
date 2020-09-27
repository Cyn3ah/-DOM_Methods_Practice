let titleSection = document.createElement('title')
titleSection.append('TITLE SECTION')
let headElement = document.querySelector('head')
headElement.append(titleSection)

let myButton = document.createElement('button')
myButton.append('BUTTON')
let bodyElement = document.querySelector('body')
bodyElement.append(myButton)

let mainSection = document.createElement('main')
mainSection.append('MAIN SECTION')
// let bodyElement = document.querySelector('body')
bodyElement.append(mainSection)

let imgSection = document.createElement('img')
imgSection.src = ('https://wpcdn.us-east-1.vip.tn-cloud.net/www.yaktrinews.com/content/uploads/2020/03/200306083710-gene-wilder-willy-wonka-exlarge-169-768x431.jpg')
// let headElement = document.querySelector('head')
bodyElement.append(imgSection)

let aSection = document.createElement('a')
aSection.append('‘Charlie and the Chocolate Factory’ series is headed to Netflix')
aSection.href = ('https://www.yaktrinews.com/a-charlie-and-the-chocolate-factory-series-is-headed-to-netflix/')
// let headElement = document.querySelector('head')
bodyElement.append(aSection)


// Note: The imgElement and anchorElement above were NOT added to the DOM using append(), so they will not appear on the page. Don't forget to append() your elements to the DOM.


// let newDiv = document.createElement('div')
// newDiv.className = 'potato'
// newDiv.id = 1
// newDiv.append('hello')
// let sectionElement = document.querySelector('section')
// sectionElement.append(newDiv)