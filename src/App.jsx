import React, { useState } from 'react'
import { Data } from './Data'
import { Card } from './UI/Card/Card'
import { Typography } from './Styled-Components/Typography'
import { Container } from './Styled-Components/Container'

function App() {
  const [filler, setFiller] = useState("mobile")
  const [price, setPrice] = useState()
  const Filter = ['mobile', 'accessories', 'audio']

  return (
    <>
      <Typography size='2rem'>One Store </Typography>
      <Container>
        <div>
          <Typography >Filter</Typography>
        </div>
        <div className='dropdowns'>
          <div className="dropdown" >
            <span>Category</span>
            <div className="dropdown-content">
              {Filter?.map(item => {
                return (
                  <React.Fragment key={item}>
                    <p onClick={() => setFiller(item)}>{item}</p>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
          <div className="dropdown" >
            <span>Price</span>
            <div className="dropdown-content">
              <div className="slidecontainer">
                <p>₹0</p>
                <input type="range" min="1" max="100000" value={price} className="slider" id="myRange" onChange={e => setPrice(e.target.value)} />
                <p>₹{price}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container direction='row'>
        {Data?.filter((item) => {
          return (
            item.category === filler
          )
        }).filter((item => {
          if (price === undefined)
            return (
              item
            )
          else {
            return (
              item.price <= price
            )
          }
        })).map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Card data={product} />
            </React.Fragment>
          )
        })}
      </Container>
    </>
  )
}

export default App
