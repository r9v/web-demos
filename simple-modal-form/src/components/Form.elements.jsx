import React from "react";
import { css, useTheme } from "@emotion/react";
import { Field } from "formik";
import { useValidationError } from "../hooks";
import { weekdays } from "../const";

export const FormRow = ({ label, children }) => {
  return (
    <div
      css={css`
        width: 100%;
        padding: 0.8em;
        display: flex;
        flex-direction: column;
        @media (min-width: 510px) {
          flex-direction: row;
        }
      `}
    >
      <span
        css={css`
          flex: 1;
          min-width: 100px;
          max-width: 300px;
          display: flex;
          align-self: flex-start;
          font-weight: 600;
          @media (min-width: 510px) {
            align-self: center;
            font-weight: 400;
          }
        `}
      >
        {label}
      </span>

      <div
        css={css`
          flex: 3;
          width: 100%;
          gap: 7px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const ValidationError = ({ children, name }) => {
  const error = useValidationError(name);
  const theme = useTheme();

  return (
    <>
      {children}
      {error && (
        <div
          css={css`
            color: ${theme.colors.errorRed};
          `}
        >
          {error}
        </div>
      )}
    </>
  );
};

export const TextInput = ({ name, label, placeholder }) => {
  const error = useValidationError(name);
  const theme = useTheme();

  return (
    <FormRow label={label}>
      <div
        css={css`
          width: 100%;
        `}
      >
        <ValidationError name={name}>
          <Field
            name={name}
            css={css`
              padding: 8px;
              width: 100%;
              border: 1px solid black;
              border-color: ${error && theme.colors.errorRed};
            `}
            placeholder={placeholder}
          />
        </ValidationError>
      </div>
    </FormRow>
  );
};

export const RadioInput = ({ name, label, options }) => {
  return (
    <FormRow label={label}>
      {options.map((option) => (
        <div
          key={option}
          css={css`
            display: flex;
            gap: 4px;
            align-items: center;
          `}
        >
          <Field type="radio" name={name} value={option} />
          {option}
        </div>
      ))}
    </FormRow>
  );
};

export const DateTimeInput = ({ name }) => {
  const error = useValidationError(`${name}.date`);
  const theme = useTheme();

  return (
    <FormRow label="Date">
      <div>
        <ValidationError name={`${name}.date`}>
          <Field
            type="date"
            name={`${name}.date`}
            css={css`
              padding: 6px;
              border: 1px solid black;
              border-color: ${error && theme.colors.errorRed};
            `}
          />
        </ValidationError>
      </div>
      at
      <TimeInput name={`${name}.time`} />
    </FormRow>
  );
};

export const TimeInput = ({ name }) => {
  const error = useValidationError(name);
  const theme = useTheme();

  return (
    <div>
      <ValidationError name={name}>
        <Field
          type="time"
          name={name}
          css={css`
            padding: 6px;
            border: 1px solid black;
            border-color: ${error && theme.colors.errorRed};
          `}
        />
      </ValidationError>
    </div>
  );
};

export const WeeklyInput = ({ name }) => {
  const error = useValidationError(`${name}.day`);
  const theme = useTheme();
  return (
    <FormRow label="Every">
      <div>
        <ValidationError name={`${name}.day`}>
          <Field
            as="select"
            name={`${name}.day`}
            css={css`
              padding: 6px;
              border: 1px solid black;
              border-color: ${error && theme.colors.errorRed};
            `}
          >
            {weekdays.map((day) => (
              <option key={day}>{day}</option>
            ))}
          </Field>
        </ValidationError>
      </div>
      at
      <TimeInput name={`${name}.time`} />
    </FormRow>
  );
};
