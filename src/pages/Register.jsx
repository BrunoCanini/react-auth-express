import { useState } from "react"
import { handleInputChange } from "../utils/handleInputChange"

export default function Register(){

    const [formData, setFormData] = useState({
        nome:"",
        cognome:"",
        email:"",
        password:""
    })

    return(
        
        <form className=" w-3/4 m-auto my-16 text-center" action="">

            <div className="border">
                <label className="block" htmlFor="">Nome</label>
                <input className="border" type="text"
                value={formData.email} onChange={ e => handleInputChange(e, "nome", setFormData)} />
            </div>

            <div className="border">
                <label className="block" htmlFor="">Cognome</label>
                <input className="border" type="text"
                value={formData.email} onChange={ e => handleInputChange(e, "cognome", setFormData)} />
            </div>

            <div className="border">
                <label className="block" htmlFor="">Email</label>
                <input className="border" type="email"
                value={formData.email} onChange={ e => handleInputChange(e, "email", setFormData)} />
            </div>


            <div className="border">
                <label className="block" htmlFor="">Password</label>
                <input className="border" type="text"
                value={formData.password} onChange={ e => handleInputChange(e, "password", setFormData)} />
            </div>

            <button className="border rounded mt-5">Register</button>

        </form>

    )
}