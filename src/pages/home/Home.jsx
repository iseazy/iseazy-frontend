import { useContext } from 'react'
import { t } from 'i18next'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/useTheme'
import StartButton from '../../components/start-button/StartButton'
import Avatar from '../../components/avatar/Avatar';
import avatarImage from '../../assets/icon/app-icon.png'
import GameContext from '../../contexts/GameContext'
import image1 from '../../assets/img/cards/image1.png'
import image2 from '../../assets/img/cards/image2.png'
import image3 from '../../assets/img/cards/image3.png'
import image4 from '../../assets/img/cards/image4.png'
import image5 from '../../assets/img/cards/image5.png'
import image6 from '../../assets/img/cards/image6.png'
import image7 from '../../assets/img/cards/image7.png'
import image8 from '../../assets/img/cards/image8.png'
import image9 from '../../assets/img/cards/image9.png'

const Container = styled.div`
  background-color: ${(props) => props.theme.background.primary};
`

const AppTitle = styled.p`
  color: ${(props) => props.theme.text.primary};
  font-size: 4.3rem;
  font-weight: 700;
`

const Home = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9
  ]
  const { currentTheme } = useTheme()
  const { onStartGame } = useContext(GameContext)
  const navigate = useNavigate();
  const onClickButton = () => {
    onStartGame(images)
    const container = document.getElementById('app-container');
    container.classList.add('animate__animated');
    container.classList.add('animate__slideOutLeft');

    setTimeout(() => {
      navigate('dashboard');
    }, 500);
  }

  return (
    <Container
      theme={currentTheme}
      className="w-full h-full flex justify-center items-center"
    >
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Avatar currentTheme={currentTheme} src={avatarImage} />
        </div>
        <div className='mt-5'>
          <AppTitle data-testid="home-title-test" theme={currentTheme}>{t('title')}</AppTitle>
        </div>
        <div className='mt-20'>
          <StartButton
            data-testid="home-button-test"
            currentTheme={currentTheme}
            label={t('home.startButton')}
            onClick={onClickButton}
          />
        </div>
      </div>

    </Container>
  )
}

export default Home
