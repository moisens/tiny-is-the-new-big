import { countries } from "../../../utils/form-utils";
import { services } from "../../../utils/form-utils";
import { FormailProps } from "../../../types/Interface";
import SelectServices from "./Dropdown";
import { FormEvent, useState } from "react"


const FormMail = () => {
  const [form, setForm] = useState<FormailProps>({
    firstName: "",
    lastName: "",
    email: "",
    subject: ""
  });

  const { firstName, lastName, email, subject } = form; 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id] : e.target.value
    })
  }
  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id] : e.target.value 
    })
  }

  return (
    <form className="form__content" onSubmit={handleSubmit}>
          <div className="input__container">
            <label htmlFor="firstName">
              <input
                type="text"
                placeholder="First name"
                id="firstName"
                className="input__input"
                value={firstName}
                onChange={handleInputChange}
              />
            </label>

            <label htmlFor="lastName">
              <input
                type="text"
                placeholder="Last name"
                id="lastName"
                className="input__input"
                value={lastName}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="input__container">
            <SelectServices dataDropdownList={countries} />
            <SelectServices dataDropdownList={services} />
          </div>
          <label htmlFor="email" />
          <input
            type="text"
            id="email"
            placeholder="Your email"
            className="input__email"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor="subject" />
          <textarea 
            id="subject" 
            className="input__textarea" 
            value={subject}
            onChange={handleTextArea}
          />
          <button type="submit" className="form__button">
            Send
          </button>
        </form>
  )
}

export default FormMail