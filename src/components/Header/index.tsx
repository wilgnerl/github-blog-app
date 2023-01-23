import coverImg from '../../assets/Cover.svg'
import { ImgContainer } from './styles'

export function Header() {
  return (
    <ImgContainer>
      <img src={coverImg} alt="" />
    </ImgContainer>
  )
}
