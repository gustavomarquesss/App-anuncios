import { View, Text, ScrollView, Image } from 'react-native'
import {styles} from './styles'

function Anuncio(){
  return(
    <View style={styles.container}>
        <View style={styles.box}>
          <Image 
            source={{uri: 'https://marketingconteudo.com/wp-content/uploads/2021/04/como-fazer-um-anuncio-de-venda.png'}}
            style={styles.imagemAnuncio}
          />
          <Text style={styles.tituloAnuncio}>Título do Anuncio</Text>
          <Text style={styles.textoAnuncio}>Linha 1 Descricao Anuncio</Text>
          <Text style={styles.textoAnuncio}>Linha 2 Descricao Anuncio</Text>
          <Text style={styles.textoAnuncio}>Linha 3 Descricao Anuncio</Text>
        </View>
    </View>
  )
}

export default Anuncio