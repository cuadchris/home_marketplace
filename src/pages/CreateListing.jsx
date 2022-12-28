import { getAuth } from "firebase/auth"
import { useEffect, useRef, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"




const CreateListing = () => {

    const [geolocationEnabled, setGeolocationEnabled] = useState(true)

    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: {},
        latitude: 0,
        longitude: 0
    })

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if(isMounted){
            if(user){
                setFormData({...formData, userRef: user.uid})
            } else {
                navigate('/sign-in')
            }
        }

        return () => {
            isMounted.current = false
        }
    }, [isMounted])


    if (loading) {
        return <Spinner />;
      }


  return (
    <div>
        Create
    </div>
  )
}
export default CreateListing