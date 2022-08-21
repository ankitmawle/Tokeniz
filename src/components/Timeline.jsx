import React from "react"
import { Chrono } from "react-chrono";

const Timeline = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Tokeniz Contract Dev",
    
    
  },
{
    title: "May ",
    cardTitle: "Tokeniz Coin Contract Dev",
  },
  {
    title: "May ",
    cardTitle: "Tokeniz ICO",
    
  },
  {
    title: "May ",
    cardTitle: "TRX Locking to provide low cost transaction",
    
  },
  {
    title: "May ",
    cardTitle: "Main net Launch",
    
  },
  {
    title: "May ",
    cardTitle: "Tokeniz Market place Launch",
    
  },
  {
    title: "May ",
    cardTitle: "Tokeniz Launch Pad Launch",
    
  },
  {
    title: " may",
    cardTitle: "Much more to come",
    
  },
];

  return (
    <section id="Timeline">
        <div style={{ width: "100%", height: "70vh" }}>
            <Chrono items={items} cardHeight="50px" theme={{
                primary: '#063970',
                secondary: 'white',
                cardBgColor: 'linear-gradient( 157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29% );',
                cardForeColor: 'black',
                titleColor: 'black',
                titleColorActive: 'black',
            }} enableOutline scrollable={{ scrollbar: true }} slideShow mode="VERTICAL_ALTERNATING"/>
        </div>
    </section>
  )

}
export default Timeline;