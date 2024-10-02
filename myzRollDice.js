import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [dadosBasicos, setDadosBasicos] = useState(0);
  const [dadosPericia, setDadosPericia] = useState(0);
  const [dadosEquipamento, setDadosEquipamento] = useState(0);
  const [resultadosDadosBasicos, setResultadosDadosBasicos] = useState([]);
  const [resultadosDadosPericia, setResultadosDadosPericia] = useState([]);
  const [resultadosDadosEquipamento, setResultadosDadosEquipamento] = useState([]);
  const [sucesso, setSucesso] = useState(0);
  const [falha, setFalha] = useState(0);
  const [forcarRolagemBtnDisabled, setForcarRolagemBtnDisabled] = useState(true);

  const rolarDados = () => {
    const resultadosBasicos = rolarDadosCategoria(dadosBasicos);
    const resultadosPericia = rolarDadosCategoria(dadosPericia);
    const resultadosEquipamento = rolarDadosCategoria(dadosEquipamento);

    setResultadosDadosBasicos(resultadosBasicos);
    setResultadosDadosPericia(resultadosPericia);
    setResultadosDadosEquipamento(resultadosEquipamento);

    const totalSucesso =
      contarSucessos(resultadosBasicos) +
      contarSucessos(resultadosPericia) +
      contarSucessos(resultadosEquipamento);
    const totalFalha = 0; // Por enquanto, não estamos contando as falhas

    setSucesso(totalSucesso);
    setFalha(totalFalha);

    setForcarRolagemBtnDisabled((
      resultadosBasicos.includes(0) || 
      resultadosEquipamento.includes(0) ||
      resultadosPericia.includes(0) 
    ));
  };

  const rolarDadosCategoria = quantidadeDados => {
    const resultados = [];
    for (let i = 0; i < quantidadeDados; i++) {
      resultados.push(Math.floor(Math.random() * 6) + 1);
    }
    return resultados;
  };

  const contarSucessos = resultados => {
    return resultados.filter(resultado => resultado === 6).length;
  };
  
  const contarFalhas = resultados => {
    return resultados.filter(resultado => resultado === 1).length;
  };

  const forcarRolagem = () => {
    let novosResultadosBasicos = resultadosDadosBasicos;
    let novosResultadosPericia = resultadosDadosPericia;
    let novosResultadosEquipamento = resultadosDadosEquipamento;

    novosResultadosBasicos = fixarResultados(novosResultadosBasicos);
    novosResultadosEquipamento = fixarResultados(novosResultadosEquipamento);
    novosResultadosPericia = fixarResultados(novosResultadosPericia);

    novosResultadosBasicos = rerrolarDados(novosResultadosBasicos);
    novosResultadosPericia = rerrolarDados(novosResultadosPericia);
    novosResultadosEquipamento = rerrolarDados(novosResultadosEquipamento);

    setResultadosDadosBasicos(novosResultadosBasicos);
    setResultadosDadosPericia(novosResultadosPericia);
    setResultadosDadosEquipamento(novosResultadosEquipamento);

    const totalSucesso =
      contarSucessos(novosResultadosBasicos) +
      contarSucessos(novosResultadosPericia) +
      contarSucessos(novosResultadosEquipamento);

    const totalFalha =
      contarFalhas(novosResultadosBasicos) +
      contarFalhas(novosResultadosPericia) +
      contarFalhas(novosResultadosEquipamento);

    
    setSucesso(totalSucesso);
    setFalha(totalFalha);

    setForcarRolagemBtnDisabled(true);
  };

  const fixarResultados = resultados => {
    return resultados.map(resultado => {
      if (resultado === 1 || resultado === 6) {
        return resultado;
      } else {
        return 0; // Marcar como não fixado
      }
    });
  };

  const rerrolarDados = resultados => {
    return resultados.map(resultado => {
      if (resultado === 0) {
        return Math.floor(Math.random() * 6) + 1;
      } else {
        return resultado;
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mutant Ano Zero - Rolagem de Dados</Text>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Dados Básicos</Text>
        <TextInput
          style={styles.input}
          value={dadosBasicos.toString()}
          onChangeText={text => setDadosBasicos(parseInt(text) || 0)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Dados de Perícia</Text>
        <TextInput
          style={styles.input}
          value={dadosPericia.toString()}
          onChangeText={text => setDadosPericia(parseInt(text) || 0)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Dados de Equipamento</Text>
        <TextInput
          style={styles.input}
          value={dadosEquipamento.toString()}
          onChangeText={text => setDadosEquipamento(parseInt(text) || 0)}
          keyboardType="numeric"
        />
      </View>
      <View style={{margin: 5}}>
        <Button title="Rolar Dados" onPress={rolarDados} />
      </View>
      <View style={{margin: 5}}>
          
        <Button
          title="Forçar Rolagem"
          onPress={forcarRolagem}
          disabled={forcarRolagemBtnDisabled}
        />
      </View>
      

      <View style={styles.result}>
        <Text style={styles.resultTitle}>Resultados</Text>
        <Text>Dados Básicos: {resultadosDadosBasicos.join(', ')}</Text>
        <Text>Dados de Perícia: {resultadosDadosPericia.join(', ')}</Text>
        <Text>Dados de Equipamento: {resultadosDadosEquipamento.join(', ')}</Text>
      </View>

      <View style={styles.result}>
        <Text>Sucesso: {sucesso}</Text>
        <Text>Falha: {falha}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  result: {
    marginBottom: 10,
  },
  resultTitle: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default App;
