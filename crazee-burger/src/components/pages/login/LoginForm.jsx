import { useState } from "react"

export default function LoginForm() {
 // state
  const [inputValue, setInputValue] = useState("")
  
  //comportements
  const handleChange = (event) => {
    setInputValue(event.target.value)

  }

  const handleSubmit = (event) => { 
    event.preventDefault()
    alert(`Bonjour ${inputValue} !`)
    setInputValue("")
   }

  return (
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous</h1>
    <br />
    <h2>Connectez-vous</h2>
      <input
        type="text" 
        placeholder="Entrez votre prénom..." 
        required 
        value={inputValue} 
        onChange={handleChange}/>
      <button>Accédez à votre espace</button>
    </form>
    
  )
}
