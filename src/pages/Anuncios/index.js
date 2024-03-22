import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/anuncio'

function Anuncios(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>Anúncios 2TINR</Text>

      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Anuncio foto='https://marketingconteudo.com/wp-content/uploads/2021/04/como-fazer-um-anuncio-de-venda.png' titulo='Corneta' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT300i2g-O_MiGfrM7HKXcI_BBa2tFI35PRYD9hgWAQ&s' titulo='Auto Falante' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_ADS/274179419609-210519-mlb-como-funciona-el-administrador-de-campanas-de-product-ads-header.jpg' titulo='Celular' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://marketingconteudo.com/wp-content/uploads/2021/04/como-fazer-um-anuncio-de-venda.png' titulo='Corneta' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT300i2g-O_MiGfrM7HKXcI_BBa2tFI35PRYD9hgWAQ&s' titulo='Auto Falante' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>

          <Anuncio foto='https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_ADS/274179419609-210519-mlb-como-funciona-el-administrador-de-campanas-de-product-ads-header.jpg' titulo='Celular' linha1='Corneta em bom estado' linha2='Pouco uso, apenas aos domingos' linha3='Aproveite, essa promoção'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios