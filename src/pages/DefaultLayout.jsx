import { Outlet } from 'react-router-dom'
import TheNav from '../components/TheNav'
import TheFooter from '../components/TheFooter'

export default function DefaultLayout(){
    return (

        <>
            <TheNav />

            <main>
                <Outlet></Outlet>
            </main>
            
            <TheFooter />
        </>

      )
}