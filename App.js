import {Image, StyleSheet, Text, TouchableOpacity, View, FlatList, SectionList, Button, Alert} from 'react-native';

const datasource = [

  {
    data:[
      {name: 'Blaze', desc: 'Gain 5 Block.', uri: 'https://slaythespire.wiki.gg/images/StS2_Ironclad-Blaze.png?92d3cd&20261113232404'},
      {name: 'Defend', desc: 'Give another player 5 Strength.', uri: 'https://slaythespire.wiki.gg/images/StS2_Ironclad-Defend.png?f8f7e4&format=original'}
    ],
    title:'Ironclad', color: '#e35a4b', textColor: '#ff3430'
  },
  {
    data:[
      {name: 'Celestial Might', desc: 'Deal 6 damage 3 times.', uri: 'https://slaythespire.wiki.gg/images/StS2_Regent-CelestialMight.png?94d0d4&format=original'},
      {name: 'Crush Under', desc: 'Deal 8 damage to ALL enemies. All enemies lose 1 Strength this turn.', uri: 'https://slaythespire.wiki.gg/images/StS2_Regent-CrushUnder.png?71a3fa&format=original'}
    ],
    title: 'Regent', color: '#ffe02e', textColor: '#ffa200'
  }
]

const renderItem = ({ item, index, section }) => {

  return (
      <TouchableOpacity>
        <View style={[styles.cardContainer, {backgroundColor: section.color}]}>
          <View style={styles.cardTextContainer}>
            <Text style={[styles.cardContainerText, {color: section.textColor}]}>{item.name}</Text>
            <Text style={[styles.cardContainerText, {color: section.textColor}]}>{item.desc}</Text>
          </View>
          <Image source={{uri: item.uri}}
                 style={{width: 200, height: 300}}/>
        </View>
      </TouchableOpacity>
  )
}


export default function App() {
  return (
      <View style={styles.container}>
        <View style={{marginHorizontal:10, borderWidth: 1}}>
          <Text style={styles.headerText}>Cards</Text>
        </View>
        <SectionList contentContainerStyle={{padding: 10}} sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section: {title, icon, color, textColor}}) => (
                         <View style={{backgroundColor: color, marginTop:20, alignItems: 'center', justifyContent: 'center', borderWidth: 1}}>
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20
  },
  cardContainer: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cardTextContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  cardContainerText: {
    textWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 5
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});