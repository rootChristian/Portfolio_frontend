import React from 'react';
import { useForm } from 'react-hook-form';
import { BtnPrimary } from '../../styles/Button.Styled';
import {
    ButtonContent,
    ContactContainer, ContactError,
    ContactFieldset, ContactForm,
    ContactInput, ContactTextarea,
    ContactWapper, Label, H2, LabelItem
} from '../../styles/styledContact/Contact.Styled';

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Data', data);
    }


    return (
        <ContactContainer>
            <pre>{JSON.stringify(register)}</pre>
            <ContactWapper>
                <H2>SEND ME MESSAGE</H2>
                <ContactForm onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <label htmlFor='name' />
                        <LabelItem>
                            <ContactInput type="text"
                                name="firstName"
                                placeholder="First name"
                                {...register("firstName", {
                                    required: "First name is required!",
                                    pattern: {
                                        value: /^[a-zA-Z]*$/,
                                        message: "Invalid name",
                                    }
                                })} />
                            {errors.firstName && (<ContactError><small>{errors.firstName.message}</small></ContactError>)}
                        </LabelItem>
                        <label htmlFor='name' />
                        <LabelItem>

                            <ContactInput type="text"
                                name="lastName"
                                placeholder="Last name"
                                {...register("lastName", {
                                    required: "Last name is required!",
                                    pattern: {
                                        value: /^[a-zA-Z]*$/,
                                        message: "Invalid name",
                                    }
                                })} />
                            {errors.lastName && (<ContactError><small>{errors.lastName.message}</small></ContactError>)}
                        </LabelItem>
                    </Label>
                    <label htmlFor='email' />
                    <ContactInput type="email"
                        name="email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Email is Required!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            }
                        })} />
                    {errors.email && (<ContactError ><small>{errors.email.message}</small></ContactError>)}
                    <ContactFieldset>
                        {errors.gender && (<ContactError><small>{errors.gender.message}</small></ContactError>)}
                        <legend>Gender</legend>
                        <label>
                            <input type="radio"
                                name="gender"
                                {...register("gender", { required: "Gender is required!" })} />
                            Female
                        </label>
                        <label>
                            <input type="radio"
                                name="gender"
                                {...register("gender", { required: "Gender is required!" })} />
                            Male
                        </label>
                    </ContactFieldset>
                    <label htmlFor="message">Message</label>

                    <ContactTextarea name="message"
                        placeholder="Write you're message here..."
                        {...register("message", { required: "Message is required!" })} />
                    {errors.message && (<ContactError><small>{errors.message.message}</small></ContactError>)}
                    <ButtonContent>
                        <BtnPrimary type="submit">SEND</BtnPrimary>
                    </ButtonContent>
                </ContactForm>
            </ContactWapper>
        </ContactContainer>
    )
}

export default Contact

/*
  const initialValues = {firstName: "", lastName: "", email: "", gender: "", message: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
      const errors = {};
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
      if(!values.firstName){
        errors.firstName = "First name is required!";
      }
      if(!values.lastName){
        errors.lastName = "Last name is required!";
      }
      if(!values.email){
        errors.email = "Email name is required!";
      }
      if(!values.gender){
        errors.gender = "Gender is required!";
      }
      if(!values.message){
        errors.message = "Message is required!";
      }
      
      errors.failed = "Error sending, insert all the camp required and try again."

      return errors;
  }
*/