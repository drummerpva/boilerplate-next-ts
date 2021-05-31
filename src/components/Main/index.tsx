import * as S from './styles'

export const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="https://google.com/google.jpg" alt="Imagem padrão da google" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="https://google.com/google.jpg"
      alt="Imagem padrão da google"
    />
  </S.Wrapper>
)
