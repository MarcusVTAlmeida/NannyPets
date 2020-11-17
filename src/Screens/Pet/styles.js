import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#A5DEE4',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-start',
        },
        campos:{
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        image:{
            width:300,
            height:150,
            resizeMode:'contain'
          },
          caixaNome:{
            marginTop: 180,
            padding: 10,
            borderWidth: 2,
            borderColor: '#861B7F',
            height: 45,
            width: 320,
            backgroundColor:'#A5DEE4',
            fontSize: 14,
            fontWeight: 'bold',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
          },
        caixaIdade:{
            marginTop: 240,
            padding: 10,
            borderWidth: 2,
            borderColor: '#861B7F',
            height: 45,
            width: 320,
            backgroundColor:'#A5DEE4',
            fontSize: 14,
            fontWeight: 'bold',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
        },
        caixaPorte:{
            marginTop: 300,
            padding: 10,
            borderWidth: 2,
            borderColor: '#861B7F',
            height: 45,
            width: 320,
            backgroundColor:'#A5DEE4',
            fontSize: 14,
            fontWeight: 'bold',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
        },
        caixaRaca:{
            marginTop: 360,
            padding: 10,
            borderWidth: 2,
            borderColor: '#861B7F',
            height: 45,
            width: 320,
            backgroundColor:'#A5DEE4',
            fontSize: 14,
            fontWeight: 'bold',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
        },
        botao:{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute', 
            marginTop: 480
        },
        botaoTexto:{
            fontWeight: 'bold',
            color: '#861B7F',
            fontSize: 16,
            
        }
})

export default styles;