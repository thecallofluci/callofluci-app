import React from "react";
import { useForm, Resolver } from "react-hook-form";
import { Input } from '@nextui-org/input';
import {
	LuciButton,
	
} from '@/src/app/_components/_ui-completed/LuciButton'

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Input 
        {...register("firstName")} 
        placeholder="Enter your first name" 
   
        isClearable 
      />
      {errors?.firstName && <Input>{errors.firstName.message}</Input>}

      <Input 
        {...register("lastName")} 
        placeholder="Enter your last name" 
      
        isClearable 
      />

      <LuciButton color="primary" type="submit">
        SUBMIT
      </LuciButton>
    </form>
  );
}