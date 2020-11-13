import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#A5DEE4',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-start',
        },

    informacao:{
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        marginTop:'10%',
        marginLeft: 20,
        marginRight: 20,  
        backgroundColor: '#A5DEE4',   
    },
    campos:{
        alignItems: 'center',
        //justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    caixaEmail:{
        marginTop: 40,
        padding: 10,
        borderWidth: 2,
        borderColor: '#861B7F',
        height: 50,
        width: 320,
        backgroundColor:'#A5DEE4',
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        //bottom: '33%'
    },
    caixaSenha:{
        marginTop: 100,
        padding: 10,
        borderWidth: 2,
        borderColor: '#861B7F',
        height: 50,
        width: 320,
        backgroundColor:'#A5DEE4',
        fontSize: 14,
        fontWeight: 'bold',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        //bottom: '24%'
    },

    botao:{
        marginTop: 160,
        width: 320,
        height: 50,
        backgroundColor: '#861B7F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',         
        //bottom: '15%'
    },
    botao1:{
        marginTop: 20,
        width: 320,
        height: 50,
        backgroundColor: '#861B7F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',         
        //bottom: '15%'
    },

    botaoTexto:{
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 10,
        color: '#A5DEE4'
    },
    textCadastro:{
        marginTop: 320,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        //bottom: '8%' 
    },

    cadastro:{
        fontWeight: 'bold',
        color: '#861B7F',
        fontSize: 18
    },
    
    anfitriao:{
        marginTop: 360,
        width: '100%',
        borderTopWidth: 3,
        borderTopColor: '#861B7F',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute'
    },
    textanfitriao:{
        fontWeight: 'bold',
        color: '#861B7F',
        fontSize: 20, 
},
image:{
    width:150,
    height:150,
    resizeMode:'contain'
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: 'red',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
    maxHeight: 410,
  },
  text: {
    color: 'purple',
    fontSize: 28,
    textAlign: 'justify',
    fontWeight: 'bold'
  }
})

export default styles;