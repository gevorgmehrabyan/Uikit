import { css } from 'styled-components/macro';

import { Color } from 'src/theme/types';

// Todo move it to another place, it's not a part of the theme.
const showSquareElementOnTableRowHover = css`
  position: relative;
  transition: background-color 0.15s ease;
  cursor: pointer;

  ::after {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 83.5%;
    background: ${({ theme: { color } }) => color[Color.Primary_main]};
    border-radius: ${({ theme }) => `0 ${theme.borderRadius.small} ${theme.borderRadius.small} 0`};
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  :hover,
  :focus {
    background-color: ${({ theme: { color } }) => color[Color.Info_light]};

    ::after {
      opacity: 1;
    }
  }
`;

export default showSquareElementOnTableRowHover;
