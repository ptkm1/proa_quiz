import React from 'react'
import {
  Header2,
  Middle,
  PageLayout,
  Footer,
  FooterItems,
  HeaderText,
  HeaderSvgs,
  MiddleButton
} from '../styles/pages/Layout'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
  Button
} from '@material-ui/core'
import Barco from '../assets/barco.png'
import Logo from '../assets/logo.png'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
import AngelBeer from '../assets/svgs/nossoscupidos.svg'

const FrutadoCondimentado: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <PageLayout>
        <Header2>
          <HeaderSvgs>
            <AngelBeer />
          </HeaderSvgs>
          <HeaderText>
            <Typography variant="h3" style={{ color: '#3D3D3D' }} gutterBottom>
              Nossos Cupidos Estão Trabalhando...
            </Typography>
          </HeaderText>
        </Header2>
        <Middle>
          <MiddleButton href="/Saison" background="#64358C">
            Álcool 7%
          </MiddleButton>
          <Typography variant="h6" gutterBottom>
            OU
          </Typography>
          <MiddleButton href="/Weiss" background="#B9348B">
            Álcool 4,8%
          </MiddleButton>
        </Middle>
        <Footer>
          <FooterItems>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src={Logo} id="logo" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <img src={Barco} id="barquinho" />
            </div>
          </FooterItems>
        </Footer>
      </PageLayout>
    </MuiThemeProvider>
  )
}

export default FrutadoCondimentado
