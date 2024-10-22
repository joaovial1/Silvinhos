import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import Styling from '../assets/css/Styling';
import CustomTextInput from '../components/CustomTextInput';
import Formatter from '../util/Formatter';
import { useNavigation, useRoute } from '@react-navigation/native';
import RemoveProductModal from '../components/ModalRemove';

const ViewProductScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Usado para obter os dados

  // Pega os dados dos vinhos existentes no cards
  const { nameWine, typeWine, priceWine, quantityWine, descriptWine } = route.params;

  // ARMAZENA OS DADOS
  const [nomeProduto, setNomeProduto] = useState('');
  const [tipoProduto, setTipoProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [quantidadeProduto, setQuantidadeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [imagemProduto, setImagemProduto] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Preenche os campos de texto assim que a tela é carregada com os dados do vinho
  useEffect(() => {
    setNomeProduto(nameWine);
    setTipoProduto(typeWine);
    setValorProduto(priceWine);
    setQuantidadeProduto(quantityWine);
    setDescricaoProduto(descriptWine);
  }, [nameWine, typeWine, priceWine, quantityWine, descriptWine]);

//MODAL
  // Abre o modal
const openModal = () => {
    setModalVisible(true);
};

  // Fecha o modal e mantém na tela de visualização de produto
const doesNotRemoveProduct = () => {
    setModalVisible(false);
};

  // Fecha o modal, remove o produto e direciona o usuário a tela inicial.
const removeProduct = () => {
    setModalVisible(false);
    navigation.navigate('Início');
};

// INSERÇÃO DE DADOS
  // Seleciona a imagem
const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
    if (response.assets && response.assets.length > 0) {
        setImagemProduto(response.assets[0].uri);
    }
    });
};

  // Remove a imagem inserida
const handleRemoverImagem = () => {
    setImagemProduto(null);
};

  // Manipula o valores de texto inserido
const handleValorChange = (text) => {
    const valorFormatado = Formatter(text);
    setValorProduto(valorFormatado);
  };

    //Navegando Modal como prop
    const navigateToEditProduct = () => {
        navigation.navigate('EditProduct', {
        openModal, 
        doesNotRemoveProduct,
        removeProduct,
        modalVisible
    });
}

return (
    <View style={Styling.productContainer}>
    <TouchableOpacity style={Styling.imageUpload} onPress={handleImagePicker}>
        {imagemProduto ? (
        <Image source={{ uri: imagemProduto }} style={Styling.productImage} />
        ) : (
        <Image source={require('../assets/img/vinho.jpg')} style={Styling.productImage} />
        )}
    </TouchableOpacity>

    {imagemProduto && (
        <TouchableOpacity style={Styling.removeButton} onPress={handleRemoverImagem}>
        <Text style={Styling.removeButtonText}>X</Text>
        </TouchableOpacity>
    )}

    <CustomTextInput
        nomeProduto={nomeProduto} 
        setNomeProduto={setNomeProduto} 
        tipoProduto={tipoProduto} 
        setTipoProduto={setTipoProduto} 
        valorProduto={valorProduto} 
        handleValorChange={handleValorChange} 
        quantidadeProduto={quantidadeProduto} 
        setQuantidadeProduto={setQuantidadeProduto}  
        descricaoProduto={descricaoProduto} 
        setDescricaoProduto={setDescricaoProduto} 
    />

    <TouchableOpacity style={Styling.trashButton} onPress={() => navigation.navigate('Início')}>
        <Text style={Styling.buttonText}>Salvar</Text>
    </TouchableOpacity>

    <RemoveProductModal visible={modalVisible} doesNotRemove={doesNotRemoveProduct} remove={removeProduct} />
    </View>
);
};

export default ViewProductScreen;