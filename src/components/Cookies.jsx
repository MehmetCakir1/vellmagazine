import { useEffect, useState } from "react";
import { useContext } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom'
import { VellMagazineContext } from "../context/VellMagazineContext";
import { useCookieConsent } from "../context/CookieConsentContext";

const Cookies = () => {
  const {theme,banner,setBanner}=useContext(VellMagazineContext)
  const {consentChoice, acceptCookieConsent} = useCookieConsent()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(consentChoice === "undecided") 

  }, [consentChoice])

  if(!visible) return null 


  return (
    <div>
      <CookieConsent 
      debug={true}
      location='bottom'
      className="cookiesDiv"
      visible={banner ? "show" :"hidden"}
      //onAccept={()=>setBanner(false)}
      onAccept={acceptCookieConsent}
      style={theme==="light-theme" ? {
        background:"#503C3B",
        color:"#fff",
      }:
      {
        background:"#ffd",
        color:"#0a192f",
      }
    }
    buttonStyle={theme==="light-theme" ? {
      background:"#fff",
      color:"#503C3B",
      fontSize: "15px",
    }:
    {
      background:"#0a192f",
      color:"#fff",
    }
  }
      // buttonStyle={{ color: "#503C3B", fontSize: "15px", background: 'white' }}
      >This site uses cookies to enhance the user experience. See our <Link to="/privacypolicy" className="underline">privacy policy</Link> for more.</CookieConsent>
    </div>
  )
}

export default Cookies 