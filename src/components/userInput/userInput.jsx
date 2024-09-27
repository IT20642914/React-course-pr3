const UserInput = ({form,label,type,handleChange}) => {


  return (
    <section  id='user-input'>
        <label>{label}</label>
        <input type="number" value={form[type]} onChange={(e)=>handleChange(type,e.target.value)} required/>
    </section>
  )
}

export default UserInput