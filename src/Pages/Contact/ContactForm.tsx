import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

interface IFormInput {
  firstName: string;
  email: string;
  subject: string;
  massage: string;
}

const ContactForm:React.FC<IFormInput> = () => {
  const {
    register,
    handleSubmit,
    
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      email: "",
      subject: "",
      massage: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 w-full flex flex-col gap-4"
      >
        <div className="w-full grid md:grid-cols-2  gap-7 ">
          <Input
            {...register("firstName")}
            label="Your Name"
            placeholder="Jhon Doe"
            type="text"
            required={true}
          />
          <Input
            {...register("email")}
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            required={true}
          />
        </div>
        <Input
          {...register("subject")}
          label="Subject"
          placeholder="Project Inquiry"
          type="text"
          required={true}
        />
        <Textarea
          {...register("massage")}
          label="Your Message"
          placeholder="i'd like to discuss a project...."
          rows={7}
          required={true}
        />
        <div className="h-[3.1rem] text-xl">
          <Button
            value="Send Message"
            className="text-white h-full"
            send
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
