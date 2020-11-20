import React from 'react';
import './NewId.css';
import { useForm } from 'react-hook-form';



      

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <div className="title">
        <h1>Access request</h1>
      </div>
      <input type="text" placeholder="John" name="John" ref={register({required: true, min: 2, maxLength: 80})} />
      <input type="text" placeholder="Doe" name="Doe" ref={register({required: true, maxLength: 100})} />
      <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="address" name="address" ref={register} />
      <input type="text" placeholder="City" name="City" ref={register} />

      <input type="submit" />
    </form>
  );
}
