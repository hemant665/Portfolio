import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isDisable, setIsDisable] = useState(false)
  const { register, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = () => {
    // console.log(data);
    setIsDisable(true);

    // const subject = encodeURIComponent(data.subject);
    // const body = encodeURIComponent(
    //   `Name: ${data.firstName}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    // );

    // const email = "pylsingh1209@gmail.com"; // <-- replace with your email
    // const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // // open default mail client
    // window.location.href = mailtoLink;
    reset();
    setTimeout(() => {
      setIsDisable(false)
    },4000)
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
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
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
          {...register("message")}
          label="Your Message"
          placeholder="i'd like to discuss a project...."
          rows={7}
          required={true}
        />
        <div className="h-[3.1rem] text-xl">
          <Button
            value={`${isDisable? "Sending...." : "Send Message"}`}
            className={`h-full ${isDisable ? "text-white/40":"text-white "}`}
            send
            type="submit"
            isDisable={isDisable}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
