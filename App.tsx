import react, { useState } from "react";
import { Button, Image, View } from "react-native";
// Vamos importar a biblioteca
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [image, setImage] = useState<string>();

  const pickImage = async () => {
    // Nenhuma permissão é necessária para abrir a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      // A propriedade mediaTypes define qual tipo de arquivo é permitido
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      // Quality define a qualidade da imagem, aceita valores de 0-1,
      // 0 menor qualidade/tamanho e 1 é uma imagem de maior qualidade/tamanho
      quality: 1,
    });

    console.log(result);

    // Vamos receber a imagem caso o usuário não feche a galeria de fotos.
    if (!result.canceled) {
      const { uri } = result.assets[0];
      setImage(uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image ? (
        <Image
          source={{ uri: image as string }}
          style={{ width: 200, height: 200 }}
        />
      ) : null}
    </View>
  );
}
