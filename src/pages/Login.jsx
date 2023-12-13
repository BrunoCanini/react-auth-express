import { useState } from "react"
import { handleInputChange } from "../utils/handleInputChange"
import { useAuth } from "../contexts/AuthContext"
import fetchApi from "../utils/fetchApi";

export default function Login(){

    const {handleLogin} = useAuth();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    async function onLoginSubmit(e){
        e.preventDefault();
        try {
            await handleLogin(formData);
        } catch (error) {
            console.error(error);
        }

    }

    return(

        <form className=" w-3/4 m-auto my-16 text-center" onSubmit={onLoginSubmit}>

            <div className="border">
                <label className="block" htmlFor="">Email</label>
                <input className="border" type="text"
                value={formData.email} onChange={ e => handleInputChange(e, "email", setFormData)} />
            </div>


            <div className="border">
                <label className="block" htmlFor="">Password</label>
                <input className="border" type="text"
                value={formData.password} onChange={ e => handleInputChange(e, "password", setFormData)} />
            </div>

            <button type="submit" className="border rounded mt-5">Login</button>

        </form>

    )
}