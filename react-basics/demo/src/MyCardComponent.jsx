import React from "react";

class MyCardComp extends React.Component {
  render () {
    const data = {
      image: "https://i.pinimg.com/originals/57/7e/41/577e41cc9210ed46a578fce923a5f51c.jpg",
      cardTitle: "Harry Mack",
      cardDescription: "Multi-talented artist and rapper Harry Mack is best known for his unique, jaw-dropping visual freestyle rapping. He first came to fame when his Venice Beach Freestyle went viral, which propelled him to opportunities alongside the likes of Kendrick Lamar, Joey Bada$$, Ellen DeGeneres, Complex Music and RedBull Music.",
      button: {
        url: "https://www.harrymackofficial.com/",
        label: "Visit Website"
      }
    };
    return (
      <div style={{ width: '18rem', border: '1px solid rgba(0,0,0,0.125)', margin: '1rem', padding: '1rem' }}>
        <img alt="100%x180" style={{ width: '100%', display: 'block' }} src="https://theawesomer.com/photos/2020/10/harry_mack_freestyle_god_t.jpg" />
        <div>
          <h2>{data.cardTitle}</h2>
          <p>{data.cardDescription}</p>
          <a href={data.button.url}>{data.button.label}</a>
        </div>
      </div>
    )
  }
}

export default MyCardComp;