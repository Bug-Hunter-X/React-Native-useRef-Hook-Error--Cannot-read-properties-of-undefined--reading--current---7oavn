```javascript
import React, { useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Perform operations that require the ref to be initialized
    if (myRef.current) {
      console.log('Ref is ready:', myRef.current);
      // Access and manipulate myRef.current here safely
    }
  }, [myRef.current]);

  return (
    <View>
      <Text ref={myRef}>Hello!</Text>
    </View>
  );
};

export default MyComponent;
```