import { useEffect, useRef } from 'react'
import { BackHandler } from 'react-native'

export default function useBackHandler(isFocused) {
  const lastBackTime = useRef(0);
  useEffect(() => {
    const handler = () => {
      const now = Date.now();
      const lastTime = lastBackTime.current;
      lastBackTime.current = now;
      if (isFocused()) {
        if (now - lastTime > 1500) {
          toast.show('再次返回退出应用');
        } else {
          BackHandler.exitApp();
        }
        return true;
      }
      return false;
    }
    BackHandler.addEventListener('hardwareBackPress', handler)
    return () => BackHandler.removeEventListener('hardwareBackPress', handler)
  }, []);
}