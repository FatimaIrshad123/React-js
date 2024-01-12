import { useState } from 'react'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card></Card>
    </>
  )
}

function Card(props){
  return (
    <div style={{padding: '25px 50px 75px ', marginTop: '50px',textAlign:'center' ,
    marginLeft:'50px',marginRight:'50px',borderStyle: 'groove', borderRadius:'12px'}}>
      <h2 style = {{fontFamily:'cursive', fontSize:'30px'}}>Fatima Irshad</h2>
      <h4 style={{color:'slategray'}}>A student learning software development</h4>
      <h3 style = {{fontFamily:'cursive'}}>Interests</h3>
      <h4 style={{color:'slategray'}}>Ionic</h4>
      <h4 style={{color:'slategray'}}>Open Source</h4>
      <h4 style={{color:'slategray'}}>App Dev</h4>
      <button style={{fontSize:'16px',borderRadius:'12px' ,marginRight:'30px', backgroundColor:'aqua', padding:'15px 32px',border:'none', textAlign:'center',color:'white'}}>
      <a href='https://www.linkedin.com/'>Linkedin</a></button>
      <button style={{fontSize:'16px',borderRadius:'12px' ,backgroundColor:'blue', padding:'15px 32px',border:'none',textAlign:'center',color:'white'}}>
        <a href='https://www.linkedin.com/'>Twitter</a></button>
    </div>
  )
}
export default App
