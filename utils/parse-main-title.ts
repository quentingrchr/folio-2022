/* function to parse the main title into an array of letters,
    letters inside the specialItalicCode are italicized 
    ex: "Hello World" -> [
        {letter: "H", italic: false},
        {letter: "e", italic: false},
        {letter: "l", italic: false},
        {letter: "l", italic: false},
        {letter: "o", italic: false},
        {letter: " ", italic: false},
        {letter: "W", italic: false},
        {letter: "o", italic: false},
        {letter: "r", italic: false},
        {letter: "l", italic: false},
        {letter: "d", italic: false},
    ] 
    ex2: "Hello [World]" -> [
        {letter: "H", italic: false},
        {letter: "e", italic: false},
        {letter: "l", italic: false},
        {letter: "l", italic: false},
        {letter: "o", italic: false},
        {letter: " ", italic: false},
        {letter: "W", italic: true},
        {letter: "o", italic: true},
        {letter: "r", italic: true},
        {letter: "l", italic: true},
        {letter: "d", italic: true},
    ]
    */
import { IMainTitleLetter } from '@interfaces'
function parseMainTitle(title: string): Array<IMainTitleLetter> {
  const specialItalicCode = ['[', ']']
  const letters: Array<IMainTitleLetter> = []
  let isItalic = false
  const titleArray = title.split('')
  titleArray.forEach((letter: string) => {
    if (letter === specialItalicCode[0]) {
      isItalic = true
    } else if (letter === specialItalicCode[1]) {
      isItalic = false
    } else {
   
      letters.push({ letter, italic: isItalic, isSpace: letter === ' ' })
    }
  })

  return letters
}

export default parseMainTitle
