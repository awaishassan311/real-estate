"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
   user_name: string;
   user_email: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);
   const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
   const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
   const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

   const sendEmail = (_data: FormData) => {
      if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
         toast.error('Contact form is not configured yet', { position: 'top-center' });
         return;
      }

      if (form.current) {
         emailjs.sendForm(emailServiceId, emailTemplateId, form.current, emailPublicKey)
            .then(() => {
               toast('Message sent successfully', { position: 'top-center' });
               reset();
            }, () => {
               toast.error('Message could not be sent. Please try again.', { position: 'top-center' });
            });
      } else {
         console.error("Form reference is null");
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
         <h3>Send Message</h3>
         <div className="messages"></div>
         <div className="row controls">
            <div className="col-12">
               <div className="input-group-meta form-group mb-30">
                  <label htmlFor="">Name*</label>
                  <input type="text" {...register("user_name")} name="user_name" placeholder="Your Name*" />
                  <p className="form_error">{errors.user_name?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-40">
                  <label htmlFor="">Email*</label>
                  <input type="email" {...register("user_email")} placeholder="Email Address*" name="user_email" />
                  <p className="form_error">{errors.user_email?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <div className="input-group-meta form-group mb-35">
                  <textarea {...register("message")} placeholder="Your message*"></textarea>
                  <p className="form_error">{errors.message?.message}</p>
               </div>
            </div>
            <div className="col-12">
               <button type='submit' className="btn-nine text-uppercase rounded-3 fw-normal w-100">Send Message</button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
