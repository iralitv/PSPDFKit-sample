/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useRef} from 'react';
import {Platform, SafeAreaView, Text, View} from 'react-native';

import PSPDFKitView from 'react-native-pspdfkit';

const DOCUMENT =
  Platform.OS === 'ios' ? 'Document.pdf' : 'file:///android_asset/Document.pdf';

// const App = () => {
//   const pdfRef = useRef('pdfView');
//   console.log('DOCUMENT', DOCUMENT);
//   return (
//     <SafeAreaView>
//       <Text>{DOCUMENT}</Text>
//       <View style={{flex: 1, background: 'red'}}>
//         <PSPDFKitView
//           document={DOCUMENT}
//           configuration={{
//             showThumbnailBar: 'scrollable',
//             pageTransition: 'scrollContinuous',
//             scrollDirection: 'vertical',
//           }}
//           // ref={pdfRef}
//           // fragmentTag="PDF1"
//           style={{flex: 1}}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

export default class PSPDFKitDemo extends Component {
  render() {
    return (
      <PSPDFKitView
        document={DOCUMENT}
        configuration={{
          showThumbnailBar: 'scrollable',
          pageTransition: 'scrollContinuous',
          scrollDirection: 'vertical',
        }}
        ref="pdfView"
        fragmentTag="PDF1"
        style={{flex: 1}}
      />
    );
  }
}
