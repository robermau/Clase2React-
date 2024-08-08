import { useState } from "react"


const Formulario = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  const validateEmail =(email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return  re.test(String(email).toLowerCase())
  }

const handleSubmit =(e)=>{
    e.preventDefault()

  if (!validateEmail(email)) {
    alert('Por favor , Ingrese un email valido')
    return
  }
 if(password.length < 8) {
    alert('La contresenia debe tener al menos 8 caracteres')
    return
 }
 if(password !== confirmPassword) {
    alert('Las contrasenias no coninciden')
    return
 }

 alert('Formulario enviando con exito')

}


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                     value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password"
                     id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                     required
                    ></input>
                </div>
                <div>
                    <label  htmlFor="confirmPassword">Cofirmar Password</label>
                    <input
                     type="password"
                     id="confirmPassword"
                     value={confirmPassword}
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                     required></input>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Formulario
