import { View, Text, StyleSheet, Image } from 'react-native';

export default function PantallaGenerica({ route }) {
    const nombreComponente = route.params?.titulo || 'Sin Título';
    const urlGif = route.params?.urlGif || null;

    return (
        <View style={styles.contenedor}>
            <View style={styles.tarjeta}>
                <Text style={styles.textoEtiqueta}>ESTÁS NAVEGANDO EN</Text>
                <Text style={styles.titulo}>{nombreComponente}</Text>

                {urlGif && (
                    <Image
                        source={{ uri: urlGif }}
                        style={styles.gif}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09090B',
        padding: 20,
    },
    tarjeta: {
        backgroundColor: '#18181B',
        width: '100%',
        maxWidth: 450,
        padding: 40,
        borderRadius: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    },
    textoEtiqueta: {
        fontSize: 12,
        color: '#A1A1AA',
        fontWeight: 'bold',
        letterSpacing: 3,
        marginBottom: 8,
    },
    titulo: {
        fontSize: 36,
        fontWeight: '900',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 30,
        letterSpacing: -1,
    },
    gif: {
        width: 220,
        height: 220,
        resizeMode: 'contain',
    }
});