import React from "react";
import { css } from "@emotion/react";
import { Formik } from "formik";
import { object, string, date } from "yup";
import axios from "axios";
import {
  DateTimeInput,
  FormRow,
  RadioInput,
  TextInput,
  TimeInput,
  WeeklyInput,
} from "./Form.elements";
import { formatOptions, scheduleOptions, weekdays } from "../const";
import { toast } from "react-toastify";

Date.prototype.toDateInputValue = function () {
  var local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
};

const validationSchema = object({
  reportName: string().required("Report name is required"),
  format: string().oneOf(formatOptions).required(),
  emailTo: string().email("Email must be valid").required("Email is required"),
  schedule: string().oneOf(scheduleOptions).required(),
  specificDate: object().when("schedule", {
    is: "Specific Date",
    then: object({
      date: date().required("Date is required"),
      time: string().required("Time is required"),
    }),
  }),
  weekly: object().when("schedule", {
    is: "Weekly",
    then: object({
      day: string().oneOf(weekdays).required("Day is required"),
      time: string().required("Time is required"),
    }),
  }),
  daily: object().when("schedule", {
    is: "Daily",
    then: object({
      time: string().required("Time is required"),
    }),
  }),
});

const Form = ({ close }) => {
  return (
    <Formik
      initialValues={{
        reportName: "",
        format: "Excel",
        emailTo: "",
        schedule: "No Repeat",
        specificDate: { date: new Date().toDateInputValue(), time: "13:00" },
        daily: { time: "13:00" },
        weekly: { day: "Monday", time: "13:00" },
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          await axios.post("https://httpbin.org/post", values);
          toast.success("Success!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          close();
        } catch (err) {
          toast.error("Error! Data not saved", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }}
    >
      {(props) => {
        return (
          <>
            <form
              onSubmit={props.handleSubmit}
              css={css`
                width: 100%;
                font-size: 12px;
                padding: 0.6em;
                @media (min-width: 510px) {
                  padding: 0.6em 0;
                }
              `}
            >
              <TextInput
                name="reportName"
                label="Report name"
                placeholder="Report name"
              />
              <RadioInput
                name="format"
                label="Format"
                options={formatOptions}
              />
              <TextInput
                name="emailTo"
                label="Email to"
                placeholder="abc@test.com"
              />
              <RadioInput
                name="schedule"
                label="Schedule"
                options={scheduleOptions}
              />
              {props.values.schedule === "Specific Date" && (
                <DateTimeInput name="specificDate" />
              )}
              {props.values.schedule === "Daily" && (
                <FormRow label="Everyday at">
                  <TimeInput name="daily.time" />
                </FormRow>
              )}
              {props.values.schedule === "Weekly" && (
                <WeeklyInput name="weekly" />
              )}
            </form>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                border-top: 1px solid;
                gap: 10px;
                width: 100%;
                min-height: 50px;
                padding: 0.8em;
                @media (min-width: 510px) {
                  flex-direction: row;
                  justify-content: flex-end;
                }
              `}
            >
              <button onClick={close}>Cancel</button>
              <button onClick={props.submitForm} disabled={props.isSubmitting}>
                OK
              </button>
            </div>
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
