import { useState } from "react";

export default function LoginPage() {
  // state
  const [inputValue, setInputValue] = useState("")
  
  //comportements
  const handleChange = (event) => {
    setInputValue(event.target.value)

  }

  const handleSubmit = (event) => { 
    event.preventDefault()
    setInputValue(inputValue)
    alert(`Bonjour ${inputValue} !`)
    setInputValue("")
   }


  //render
  return(
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text" 
          placeholder="Entrez votre prénom..." 
          required 
          value={inputValue} 
          onChange={handleChange}/>
        <button>Accédez à votre espace</button>
      </form>
    </div>
    )
}
