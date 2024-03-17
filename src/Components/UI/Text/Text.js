import styled from "styled-components";

// type Props = {
//   fontSize?: String
//   small?: boolean
//   medium?: boolean
//   bold?: boolean
//   cursor?: "pointer" | "not-allowed" | "default"
//   whiteSpace?: "break-space" | "pre-wrap" | "nowrap" | "normal"
//  }

export const Text = styled.p`
  font-size: 1rem;
`;

// export const Text =styled.p<Props>`
// font-size: ${({ small, medium, fontSize }) =>
//     small ? "0.75rem" : medium ? "0.875rem" : fontSize ? fontSize : "1rem"}
// padding: 0
// font-weight: ${({ bold }) => (bold ? "700" : "400")}
// margin: 0
// ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")}
// white-space: ${({ whiteSpace }) => whiteSpace || "normal"}
// `;
