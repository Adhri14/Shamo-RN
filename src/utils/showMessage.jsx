import {showMessage as showToast} from 'react-native-flash-message';

const showMessage = ({message, type}) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#38ABBE' : '#ED6363',
    titleStyle: {
      textAlign: 'center',
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
    },
  });
};

export default showMessage;
