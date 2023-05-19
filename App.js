
import { useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import axios from 'axios';
import { useState } from 'react';



import Card from './assets/components/Card.jsx'


export default function App() {

  const [data, setData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  getData = async () => {
    try {
      const res = await axios.get("https://valorant-api.com/v1/agents")
      setData(res.data['data'])
      setLoaded(true)
    }
    catch (err) {
      alert(err.message)
    }
  }



  return (
    
    <ScrollView>
        <View style={styles.container}>
        {
          loaded && data.map((object) => {
            return (
              <Card id={object['uuid']} titulo={object['displayName']} descricao={object['description']} imagem={object['displayIcon']}/>
            )
          })
        }
    </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: '5%',
    paddingTop: '20%',
    gap: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
