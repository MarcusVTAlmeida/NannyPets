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
        fontSize: 16,
        marginTop:'10%',
        marginLeft: 20,
        marginRight: 20,  
        backgroundColor: '#A5DEE4',   
    },
    campos:{
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    caixaEmail:{
        marginTop: 40,
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
    caixaSenha:{
        marginTop: 100,
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


    botaoLogin:{
        marginTop: 160,
        width: 320,
        height: 45,
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
        marginTop: 340,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        //bottom: '8%' 
    },

    cadastro:{
        fontWeight: 'bold',
        color: '#861B7F',
        fontSize: 16
    },
    
    anfitriao:{
        marginTop: 380,
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
    }
})

export default styles;