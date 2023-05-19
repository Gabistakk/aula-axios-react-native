import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';


export default function Card( props ){


return(
      <View style={styles.containerCard}  key={props.id}>
      <Text style={{ fontSize: 35,fontWeight: 'bold', textAlign: 'center'}}>{props.titulo}</Text>
      <Image style={styles.imagemVenda} source={{uri: props.imagem}}></Image>
      <Text style={{ fontSize: 20}}>{props.descricao}</Text>
      <Text style={{ fontSize: 30}}>Habilidades:</Text>
    </View>

)

}

const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  containerCard: {
    width: windowWidth / 1.2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    elevation: 24,
  },

  imagemVenda: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
    resizeMode: 'contain'
  },

});
