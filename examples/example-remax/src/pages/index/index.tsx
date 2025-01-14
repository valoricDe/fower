import * as React from 'react'
import { View, Text, Image } from '@fower/remax'
import styles from './index.css'

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View bgOrange400 p4 rounded2XL>
          Hello Fower
        </View>
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text> 开始
        </View>
      </View>
    </View>
  )
}
