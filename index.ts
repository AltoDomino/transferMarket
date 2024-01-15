
const root = document.getElementById("root")
const submitButton = document.createElement('button')
const form = document.createElement("form")
// const downloadbutton = document.createElement('button')
const input = document.createElement("input") as HTMLInputElement

submitButton.innerHTML = "SZUKAJ"
input.placeholder = "WPISZ LINK"
submitButton.type = "submit"
// downloadbutton.innerHTML ="POBIERZ"


form?.appendChild(input)
form?.appendChild(submitButton)
// root?.appendChild(downloadbutton)
root?.appendChild(form)


input.addEventListener('change', (e : Event)=>{
    const inputelement = e.target as HTMLInputElement
    form.action = `link=${inputelement.value}`
})
