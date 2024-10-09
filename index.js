import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const home = require('../../assets/img/menuTeste.png');
const ImgBolo1 = require('../../assets/img/bolo.png');
const ImgCup = require('../../assets/img/cupcake.png');
const onda = require('../../assets/img/onda.png');
const clara = require('../../assets/img/clara.png');
const imagens = require('../../assets/img/imagens.png');

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>

    <View style={styles.banner1}>
    <Image source={home} style={styles.banner1} />
    </View>

      <View style={styles.card}>
        <Image source={ImgBolo1} style={styles.image} />
        <View style={styles.conjunto}>
          <Text style={styles.texto}>Faça o pedido em até 5 dias de antecedência</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>Não deixe de experimentar!</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.fundo}>
      <Image source={clara} style={styles.imagens} />
      </View>

      <View style={styles.card}>
        <Image source={ImgCup} style={styles.image2} />
        <View style={styles.conjunto2}>
          <Text style={styles.texto}>Família: Fazendo bolos diversos desde 1945</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textbutton}>Tradição que perpetuará!</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.fundo}>
      <Image source={imagens} style={styles.imagemC} />
      </View>
      
      <View style={styles.fundo}>
      <Image source={onda} style={styles.image1} />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', //#FAACAF #F2A7AA
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    marginBottom:100,
  },
  img: {
    flex: 1,
    justifyContent: 'flex-start',
    resizeMode: 'contain',
    width: 450,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 10,
    marginBottom: 10,
    padding:20,

  },
  conjunto: {
    padding: 20,
    left: 10,
  },
  conjunto2: {
    padding: 20,
    left: 18,
  },
  texto: {
    padding: 20,
    color: '#6B060A',
    fontSize: 15,
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#F2A7AA',
    width: 210,
    height: 50,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 5,
    left: 20,
  },
  textbutton: {
    left: 20,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    left: 30,
    width: 100,
    height: 100,
  },
  image2: {
    left: 30,
    width: 90,
    height:110,
  },
  banner1: {
    width: 450,
    height: 450,
    marginBottom: 40,
    
  },
  fundo:{
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
  image1: {
    width: 370,
    height: 105,
  },
  imagens: {
    width: 370,
    height: 400,
  },

  imagemC: {
    width: 370,
    height: 400,
    borderRadius:10,
  },
});