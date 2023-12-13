import { Categories } from "../categories"
import { Introduction } from "../introduction"

import { MainContentStyled } from "./styled"

export const Main = () => {
  return (
    <MainContentStyled>
        <Categories />
        <Introduction />
    </MainContentStyled>
  )
}
