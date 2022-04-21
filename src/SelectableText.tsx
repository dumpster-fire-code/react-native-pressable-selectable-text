import React, { FC, useCallback, useRef } from 'react';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TextInput,
  TextInputProps,
  TextInputSelectionChangeEventData,
} from 'react-native';

interface SelectableTextProps extends Omit<TextInputProps, 'value'> {
  children: string;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

const defaultProps: Omit<SelectableTextProps, 'children'> = {
  editable: false,
  multiline: true,
  scrollEnabled: false,
};

const SelectableText: FC<SelectableTextProps> = ({
  children: value,
  onPress: onPressProp,
  onPressOut: onPressOutProp,
  onSelectionChange: onSelectionChangeProp,
  ...props
}) => {
  const selectionRef = useRef({ start: 0, end: 0 });

  const onPressOut = useCallback(
    (e: NativeSyntheticEvent<NativeTouchEvent>) => {
      if (onPressOutProp) {
        onPressOutProp(e);
      }

      if (
        onPressProp &&
        selectionRef.current.start === selectionRef.current.end
      ) {
        onPressProp(e);
      }
    },
    [onPressProp, onPressOutProp],
  );

  const onSelectionChange = useCallback(
    (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
      selectionRef.current = e.nativeEvent.selection;

      if (onSelectionChangeProp) {
        onSelectionChangeProp(e);
      }

      e.nativeEvent.selection;
    },
    [onSelectionChangeProp],
  );

  return (
    <TextInput
      {...defaultProps}
      {...props}
      onPressOut={onPressOut}
      onSelectionChange={onSelectionChange}
      value={value}
    />
  );
};

export { SelectableText };
