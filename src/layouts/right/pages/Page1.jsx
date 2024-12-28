import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useNavigate } from "react-router";

import FormTop from "../../../components/FormTop";
import { useDispatch, useSelector } from "react-redux";
import { addpersonalInfo } from "../../../app/allInfoSlice";

export default function Page1() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let personalInfo = useSelector(state => state.allInfo.personalInfo)

    const schema = Yup.object().shape({
        userName: Yup.string()
            .required("Username is required")
            .min(4, "Username must be at least 4 characters"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        number: Yup.string()
            .required("Phone number is required")
            .matches(/^\d{11}$/, "must be 11 digits and numeric"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            userName: personalInfo.userName,
            email: personalInfo.email,
            number: personalInfo.number,
        },
        resolver: yupResolver(schema),
        mode: "onBlur"
    });
    const onSubmit = (returnedData) => {
        dispatch(addpersonalInfo(returnedData))
        navigate("/select-plan")
    };

    const formHero = {
        main: "Personal info",
        sub: "Please provide your name, email address, and phone number."
    }
    return (

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset id="personal-info">
                <FormTop data={formHero} />

                <div className="all-input-wrapper">
                    <div className={`input-wrapper ${errors.userName ? "invalid" : ""}`}>
                        <label htmlFor="userName">name</label>
                        <input
                            {...register("userName", { required: true })}

                            id="userName"
                            type="text"
                            placeholder="e.g. Stephen King"
                            aria-invalid={errors.userName ? "true" : "false"}
                            aria-describedby="userName-error"
                        />
                        {errors.userName && (
                            <p id="userName-error" className="error-message" role="alert" aria-live="assertive">
                                {errors.userName.message}
                            </p>
                        )}
                    </div>

                    <div className={`input-wrapper ${errors.email ? "invalid" : ""}`}>
                        <label htmlFor="email">email address</label>
                        <input
                            {...register("email", { required: true })}

                            id="email"
                            type="email"
                            placeholder="e.g. stephenking@lorem.com"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby="email-error"
                        />
                        {errors.email && (
                            <p id="email-error" className="error-message" role="alert" aria-live="assertive">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className={`input-wrapper ${errors.number ? "invalid" : ""}`}>
                        <label htmlFor="number">phone number</label>
                        <input
                            {...register("number", { required: true })}

                            id="number"
                            type="tel"
                            placeholder="e.g. +1 234 567 890"
                            aria-invalid={errors.number ? "true" : "false"}
                            aria-describedby="number-error"
                        />
                        {errors.number && (
                            <p id="number-error" className="error-message" role="alert" aria-live="assertive">
                                {errors.number.message}
                            </p>
                        )}
                    </div>
                </div>

            </fieldset>

            <button type="submit">next step</button>
        </form>

    )
}
