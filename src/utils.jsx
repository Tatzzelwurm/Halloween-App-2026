// Файл со служебными функциями

export function highlightText(text) {
  return text.split('**').map((part, i) =>
    i % 2 === 1
      ? <span key={i} className="intro__accent">{part}</span>
      : part
  )

}
export function fixEndingTitle(title) {
  if (title == "Сбежал") return "Сбежавший"
  else return title
}