import styled, { css } from "styled-components";
import FilteredPropsInputField from "./FilteredPropsInputField";

// Convert to rem a unitless value passed in
// ${rem`24`}; => 24/16 = 1.5rem
export const rem = (value) => {
  const conv = Number(value) / 16;
  return `${conv}rem`;
};

export const PageWrapper = styled.section`
  &,
  & * {
    box-sizing: border-box;
    display: block;
  }

  hr {
    display: block;
    border: none;
    border-top: 1px solid lightgrey;

    margin-top: ${rem(24)};
    margin-bottom: ${rem(24)};
  }

  font-family: system-ui;
  font-size: 16px;
  line-height: 24px;
  max-width: ${rem(560)};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${rem(24)};
  padding: ${rem(16)} ${rem(12)};
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const CodeWrapper = styled.pre`
  font-family: monospace;
  font-size: 14px;
  line-height: 20px;
  background-color: hsl(210, 4%, 96%);
  overflow: auto;
  padding: ${rem(12)};
  margin: 0;
  border-radius: 4px;

  & strong {
    margin-top: ${rem(24)};

    &:first-child {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: ${rem(16)};
  line-height: ${rem(20)};
  margin-top: 0;
`;

export const Label = styled.label`
  margin-top: ${rem(24)};
  width: 100%;
`;

export const Input = styled(FilteredPropsInputField)`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: ${rem(16)};
  line-height: ${rem(24)};
  font-style: normal;
  font-weight: 400;

  width: 100%;

  margin-top: ${rem(8)};

  padding: ${rem(12)} ${rem(12)};

  &:focus,
  &:active {
    box-shadow: rgb(210, 213, 217) 0px 0px 2px 1px,
      rgb(227, 230, 232) 0px 0px 0px 3px;
    border: 1px solid rgb(26, 33, 43);
    outline: none;
  }

  /* Autocomplete styles in Chrome*/
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 0 0 0px 1000px #fff inset;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: black;
  }

  &:placeholder-shown:required {
    box-shadow: none;
  }

  &:placeholder-shown:required:focus {
    box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
      rgb(251, 178, 174) 0px 0px 0px 3px;
    border: 1px solid rgb(191, 49, 12);
    outline: none;
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 1px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 1px solid rgb(0, 156, 38);
        box-shadow: rgb(106, 237, 97) 0px 0px 2px 1px,
          rgb(177, 247, 160) 0px 0px 0px 3px;
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        box-shadow: rgb(244, 129, 116) 0px 0px 2px 1px,
          rgb(251, 178, 174) 0px 0px 0px 3px;
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`;

export const StyledInlineErrorMessage = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;

  padding: ${rem(8)} ${rem(12)};
  margin-top: ${rem(8)};
  white-space: pre-line;
`;

export const Submit = styled.button`
  width: 100%;
  margin-top: ${rem(24)};

  background-color: rgb(24, 81, 187);
  display: block;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 700;
  height: 3rem;
  white-space: nowrap;
  color: rgb(232, 243, 255) !important;
  border: 2px solid rgb(24, 81, 187);
  border-radius: 4px;
  padding: 0.5rem 1rem;

  &:active {
    cursor: pointer;
    background-color: rgb(18, 61, 140);
    box-shadow: none;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(18, 61, 140);
    border-image: initial;
    outline: none;
  }

  &:focus {
    cursor: pointer;
    background-color: rgb(18, 61, 140);
    box-shadow: rgb(124, 177, 246) 0px 0px 1px 1px,
      rgb(177, 211, 253) 0px 0px 0px 3px;
    border: 2px solid rgb(2, 30, 79);
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: rgb(46, 111, 213);
    box-shadow: rgba(17, 30, 82, 0.4) 0px 1px 4px 0px,
      rgba(0, 47, 158, 0.22) 0px 2px 12px 1px;
    border: 2px solid rgb(46, 111, 213);
  }

  &:disabled {
    cursor: pointer;
    background-color: rgb(163, 168, 173);
    box-shadow: none;
    color: rgb(255, 255, 255) !important;
    border: 2px solid rgb(163, 168, 173);
    outline: none;

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
  }
`;
