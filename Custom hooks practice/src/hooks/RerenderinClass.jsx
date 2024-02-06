export default function ClassRerendering() {
    const [render,setRender] = useState(true)
    
    useEffect(() => {
      setTimeout(() => {
        setRender(false)
      },5000)
    }) 
      return (
        <div>
         {render? <MyComponent /> : <div>hi</div>}  
        
        </div>
      )  
  }
  
  class MyComponent extends React.Component {
    componentDidMount() {
     console.log('componentDidMount')
      // Perform setup or data fetching here
    }
    componentWillUnmount() {
      console.log('componentWillUnmount')
      // Clean up (e.g., remove event listeners or cancel subscriptions)
    }
    render() {
      // Render UI
    }
  }