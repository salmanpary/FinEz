import axios from 'axios'
import React,{useState} from 'react'
import Investment from '../components/Investment'

function Mybasket() {
    const [apidata, setApidata] = useState([])
    const [length, setlength] = useState(0)
    const [showbasket, setShowbasketdata] = useState()
    const basketHandler = () => {
        setlength(showbasket.length)
        const temp = [...apidata]
        for (let i = 0; i < showbasket.length; i++) {
            temp.push({
                name: showbasket[i].title,
                desc: showbasket[i].description,
                desc2: showbasket[i].long_description,
                title: showbasket[i].title
            })
            // setdata(temp)
            setApidata(temp)
        }


    }

    axios.get('https://fineazy-backend.herokuapp.com/getprice/users_basket').then()
  return (
    <div>



    </div>
  )
}

export default Mybasket