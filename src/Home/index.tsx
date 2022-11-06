import { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, TextInput, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { PositionChoice } from '../components/PositionChoice';

import { styles } from './styles';
import { POSITIONS, PositionProps } from '../utils/positions';

export function Home() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [positionSelected, setPositionSelected] = useState<PositionProps>(POSITIONS[0]);

  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then(response => setHasCameraPermission(response.granted));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View>
          <Header position={positionSelected} />

          <View style={styles.picture}>

            {hasCameraPermission ?
              <Camera
                style={styles.camera}
                type={CameraType.front}
              /> :
              <Image source={{ uri: 'https://github.com/TiagoM13.png' }} style={styles.camera} />
            }


            <View style={styles.player}>
              <TextInput
                placeholder="Digite seu nome aqui"
                style={styles.name}
              />
            </View>
          </View>
        </View>

        <PositionChoice
          onChangePosition={setPositionSelected}
          positionSelected={positionSelected}
        />

        <Button title="Compartilhar" />
      </ScrollView>
    </SafeAreaView>
  );
}