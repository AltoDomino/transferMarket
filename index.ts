


const root = document.getElementById("root")
const submitButton = document.createElement('button')
const form = document.createElement("form")
const input = document.createElement("input") as HTMLInputElement

submitButton.innerHTML = "SZUKAJ"
input.placeholder = "WPISZ LINK"
submitButton.type = "submit"


form?.appendChild(input)
form?.appendChild(submitButton)
root?.appendChild(form)
const download = document.createElement("button")
    download.innerHTML= "download"
    root?.appendChild(download)

input.addEventListener('change', (e : Event)=>{
    const inputelement = e.target as HTMLInputElement
    form.action = `link=${inputelement.value}`

   
})
form.onsubmit = () =>{
    alert("plik oczekuje na pobranie")
    download.onclick = Download
}
const Download = async() => {
    const response = await fetch("http://localhost:8080/download")
    
    return response
} 
