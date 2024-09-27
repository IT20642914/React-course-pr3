import { useState,useEffect } from "react"
import Header from "./components/Header/Header"
import UserInput from "./components/userInput/userInput"
import Results from "./components/Results/Results"
import { calculateInvestmentResults } from "./util/investment"
function App() {
  const INITIAL_INVESTMENT = {
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
}
  const [form, setForm] = useState(INITIAL_INVESTMENT)
 const [investmentResults, setInvestmentResults] = useState([])

 useEffect(() => {
  setInvestmentResults(calculateInvestmentResults(form))
 }, [])
 
  const handleChange = (type,newValue) => {
    console.log("type",type,newValue)
    setForm(preForm=>{
        return{
            ...preForm,
            [type]:+newValue
        }
    })
    setInvestmentResults(calculateInvestmentResults(form))
}
  return (
    <main>
    <Header />
  
 
    <div className="input-group">
     <UserInput form={form} label="INITIAL INVESTMENT" type="initialInvestment" handleChange={handleChange} />
     <UserInput form={form} label="ANNUAL INVESTMENT"  type="annualInvestment" handleChange={handleChange}/>
     <UserInput form={form} label="EXPECTED Return" type="expectedReturn" handleChange={handleChange}/>
     <UserInput form={form} label="DURATION "  type="duration" handleChange={handleChange}/>
    </div>    
    <Results data={investmentResults} />
    </main>
  )
}

export default App
