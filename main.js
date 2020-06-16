let myButton = document.createElement('button')
myButton.append('BUTTON')
let bodyElement1 = document.querySelector('body')
bodyElement1.append(myButton)

let mainSection = document.createElement('main')
mainSection.append('MAIN SECTION')
let bodyElement2 = document.querySelector('body')
bodyElement2.append(mainSection)

let scriptSection = document.createElement('script')
scriptSection.className = ''
scriptSection.append('SCRIPT SECTION')
let bodyElement3 = document.querySelector('body')
bodyElement3.append(scriptSection)
