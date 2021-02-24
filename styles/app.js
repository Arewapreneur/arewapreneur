import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    fontSize: [{ unit: 'px', value: 18 }],
    fontWeight: 'bold',
    color: '#fff',
    backgroundImage: 'linear-gradient(145deg, #00b4c6 0%, #0088e8 100%)'
  },
  input: {
    backgroundColor: 'unset',
    border: [{ unit: 'string', value: 'none' }],
    fontSize: [{ unit: 'px', value: 16 }],
    padding: [{ unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }],
    color: '#ffffff'
  },
  'input:focus': {
    outline: 'none'
  },
  select: {
    backgroundColor: 'unset',
    color: '#ffffff',
    fontSize: [{ unit: 'px', value: 16 }],
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    textIndent: '1px',
    textOverflow: '""',
    backgroundImage: 'url("../public/assets/down.png")',
    backgroundSize: '10px',
    backgroundPosition: '92% 15px',
    backgroundRepeat: 'no-repeat'
  },
  'select:focus': {
    outline: 'none'
  },
  btn: {
    border: [{ unit: 'string', value: 'none' }],
    minHeight: [{ unit: 'px', value: 50 }],
    height: [{ unit: 'px', value: 50 }],
    backgroundColor: 'unset',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }],
    fontSize: [{ unit: 'px', value: 15 }],
    borderRadius: '25px',
    color: '#ffffff'
  },
  'btn:focus': {
    outline: 'none'
  },
  'btn-outline': {
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    color: '#ffffff',
    width: [{ unit: '%H', value: 1 }]
  },
  'btn-outline:hover': {
    backgroundColor: '#ffffff',
    color: '#222222'
  },
  'btn-outline:disabled': {
    borderColor: '#909090',
    color: '#909090'
  },
  'btn-primary': {
    background: 'transparent linear-gradient(142deg, #028e29 0%, #f0d048 100%)',
    width: [{ unit: '%H', value: 1 }]
  },
  'btn-primary:disabled': {
    opacity: '0.6',
    background: 'transparent linear-gradient(142deg, #909090 0%, #ffffff 100%)',
    cursor: 'not-allowed'
  },
  'mb-1': {
    marginBottom: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'mb-2': {
    marginBottom: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'mb-3': {
    marginBottom: [{ unit: 'px', value: 30 }, { unit: 'string', value: '!important' }]
  },
  'mt-1': {
    marginTop: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }]
  },
  'mt-2': {
    marginTop: [{ unit: 'px', value: 20 }, { unit: 'string', value: '!important' }]
  },
  'mt-3': {
    marginTop: [{ unit: 'px', value: 30 }, { unit: 'string', value: '!important' }]
  },
  'p': {
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 16 }]
  },
  outline: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    borderRadius: '10px',
    width: [{ unit: '%H', value: 1 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }, { unit: 'px', value: 10 }]
  },
  heading: {
    fontSize: [{ unit: 'px', value: 30 }],
    margin: [{ unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }]
  },
  'sub-heading': {
    fontSize: [{ unit: 'px', value: 20 }],
    margin: [{ unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }]
  },
  'text-mini': {
    fontSize: [{ unit: 'px', value: 14 }]
  },
  'text-small': {
    fontSize: [{ unit: 'px', value: 12 }]
  },
  'text-normal': {
    margin: [{ unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: 'px', value: 16 }]
  },
  'text-gray': {
    color: '#909090'
  },
  'text-primary': {
    color: '#028e29'
  },
  'text-center': {
    textAlign: 'center'
  },
  'form-input': {
    backgroundColor: 'none',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 45 }],
    paddingLeft: [{ unit: 'px', value: 20 }],
    borderRadius: '25px'
  },
  container: {
    position: 'relative',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 35 }, { unit: 'px', value: 0 }, { unit: 'px', value: 35 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '<w400': {
      padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }]
    }
  },
  'btn-holder-2': {
    display: 'flex',
    justifyContent: 'space-between',
    height: [{ unit: 'px', value: 100 }],
    alignItems: 'center'
  },
  'btn-holder-2 btn': {
    width: [{ unit: '%H', value: 0.48 }]
  },
  modal: {
    position: 'fixed',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'vh', value: 100 }],
    width: [{ unit: 'vw', value: 100 }],
    backgroundColor: '#111111ce',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'modal modal-content': {
    borderRadius: '20px',
    width: [{ unit: '%H', value: 0.9 }],
    maxWidth: [{ unit: 'px', value: 450 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }],
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 20 }, { unit: 'px', value: 30 }, { unit: 'px', value: 20 }],
    backgroundColor: '#171717',
    height: [{ unit: 'px', value: 320 }]
  },
  'modal modal-content pop-message': {
    height: [{ unit: '%V', value: 1 }],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  'modal modal-content pop-message p': {
    textAlign: 'center'
  },
  'modal modal-content pop-message *': {
    maxWidth: [{ unit: '%H', value: 0.8 }]
  },
  'spinner-container': {
    position: 'fixed',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    height: [{ unit: 'vh', value: 100 }],
    width: [{ unit: 'vw', value: 100 }],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: '1005',
    backdropFilter: 'blur(3px)'
  },
  'spinner-container img': {
    width: [{ unit: 'px', value: 50 }],
    height: [{ unit: 'px', value: 50 }],
    animationName: 'spin',
    animationDuration: '500ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  },
  navbar: {
    height: [{ unit: 'px', value: 70 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 25 }, { unit: 'px', value: 0 }, { unit: 'px', value: 25 }],
    zIndex: '100',
    backgroundColor: '#171717',
    position: 'fixed',
    width: [{ unit: 'vw', value: 100 }],
    maxWidth: [{ unit: 'px', value: 500 }],
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: 0 }],
    '>w500': {
      position: 'absolute',
      borderTopRightRadius: '25px',
      borderTopLeftRadius: '25px'
    }
  },
  'navbar logo': {
    width: [{ unit: '%H', value: 0.7 }]
  },
  'navbar logo img': {
    width: [{ unit: 'px', value: 120 }]
  },
  'navbar burger-icon': {
    width: [{ unit: 'string', value: 'fit-content' }]
  },
  'navbar burger-icon img': {
    height: [{ unit: 'px', value: 30 }],
    marginBottom: [{ unit: 'px', value: 5 }]
  },
  'navbar pop-menu': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: [{ unit: '%V', value: 1 }]
  },
  'navbar pop-menu btn': {
    width: [{ unit: '%H', value: 0.5 }]
  },
  register: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: [{ unit: 'vh', value: NaN }],
    textAlign: 'left'
  },
  'register error': {
    color: '#ff6666'
  },
  'register reg-form': {
    width: [{ unit: '%H', value: 0.8 }]
  },
  'register reg-form phone-input': {
    marginTop: [{ unit: 'px', value: 40 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 50 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    marginBottom: [{ unit: 'px', value: 15 }],
    borderRadius: '25px'
  },
  'register reg-form phone-input p': {
    display: 'flex',
    alignItems: 'center',
    width: [{ unit: '%H', value: 0.2 }],
    paddingRight: [{ unit: 'px', value: 20 }],
    borderRight: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }],
    height: [{ unit: 'px', value: 30 }]
  },
  'register reg-form phone-input input': {
    marginLeft: [{ unit: 'px', value: 20 }],
    width: [{ unit: '%H', value: 0.7 }],
    height: [{ unit: 'px', value: 30 }]
  },
  'register reg-form phone-password': {
    margin: [{ unit: 'px', value: 15 }, { unit: 'px', value: 0 }, { unit: 'px', value: 15 }, { unit: 'px', value: 0 }],
    marginTop: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 50 }]
  },
  'register reg-form phone-password input': {
    borderRadius: '25px',
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    backgroundColor: '#ffffff',
    color: '#777777',
    textAlign: 'center'
  },
  'register reg-form phone-password pass-size': {
    fontSize: [{ unit: 'px', value: 30 }]
  },
  'register reg-form terms': {
    marginTop: [{ unit: 'px', value: 20 }],
    marginBottom: [{ unit: 'px', value: 10 }],
    display: 'flex',
    alignItems: 'center'
  },
  'register reg-form terms input': {
    height: [{ unit: 'px', value: 25 }],
    width: [{ unit: 'px', value: 25 }],
    backgroundColor: 'unset',
    marginRight: [{ unit: 'px', value: 15 }],
    borderRadius: '15px'
  },
  'register reg-form terms a': {
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }]
  },
  'register reg-form switch': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'register reg-form switch a': {
    marginLeft: [{ unit: 'px', value: 5 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#ffffff' }]
  },
  dashboard: {
    height: [{ unit: 'vh', value: 100 }],
    width: [{ unit: 'vw', value: 100 }],
    maxWidth: [{ unit: 'px', value: 500 }],
    paddingTop: [{ unit: 'px', value: 80 }],
    position: 'relative'
  },
  'dashboard tabs': {
    width: [{ unit: '%H', value: 1 }],
    display: 'flex'
  },
  'dashboard tabs span': {
    fontSize: [{ unit: 'px', value: 18 }],
    textAlign: 'center',
    width: [{ unit: '%H', value: 0.5 }],
    color: '#909090',
    paddingBottom: [{ unit: 'px', value: 10 }],
    borderBottom: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#414141' }],
    transition: 'all 0.2s ease-in-out'
  },
  'dashboard tabs active': {
    color: '#ffffff',
    borderBottom: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'dashboard content': {
    height: [{ unit: '%V', value: NaN }]
  },
  'dashboard help': {
    position: 'absolute',
    bottom: [{ unit: 'px', value: 40 }],
    right: [{ unit: 'px', value: 40 }]
  },
  'dashboard help b': {
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#909090' }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 5 }],
    borderRadius: '50%',
    height: [{ unit: 'px', value: 30 }],
    width: [{ unit: 'px', value: 30 }]
  },
  borrow: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 30 }, { unit: 'px', value: 0 }],
    paddingBottom: [{ unit: '%V', value: 0.25 }]
  },
  products: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: '%V', value: 1 }],
    padding: [{ unit: 'px', value: 30 }, { unit: 'px', value: 0 }, { unit: 'px', value: 30 }, { unit: 'px', value: 0 }],
    paddingBottom: [{ unit: '%V', value: 0.25 }]
  },
  'borrow products_list': {
    overflowY: 'auto'
  },
  'products products_list': {
    overflowY: 'auto'
  },
  'borrow amount': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'borrow request': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'borrow product': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'borrow searchbox': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'products amount': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'products request': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'products product': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'products searchbox': {
    position: 'relative',
    borderRadius: '20px',
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }]
  },
  'borrow product': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  'products product': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  'borrow product product__img': {
    width: [{ unit: '%H', value: 0.4 }]
  },
  'products product product__img': {
    width: [{ unit: '%H', value: 0.4 }]
  },
  'borrow product img': {
    width: [{ unit: '%H', value: 1 }]
  },
  'products product img': {
    width: [{ unit: '%H', value: 1 }]
  },
  'borrow product name': {
    marginBottom: [{ unit: 'px', value: 45 }]
  },
  'products product name': {
    marginBottom: [{ unit: 'px', value: 45 }]
  },
  'borrow product btn_holder': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end'
  },
  'products product btn_holder': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end'
  },
  'borrow clickable:hover': {
    backgroundColor: '#07e82c30'
  },
  'products clickable:hover': {
    backgroundColor: '#07e82c30'
  },
  'borrow clickable:hover text-gray': {
    color: '#ffffff'
  },
  'products clickable:hover text-gray': {
    color: '#ffffff'
  },
  'borrow active_state': {
    backgroundColor: '#07e82c30'
  },
  'products active_state': {
    backgroundColor: '#07e82c30'
  },
  'borrow recommended': {
    borderRadius: '8px',
    color: '#101010',
    position: 'absolute',
    top: [{ unit: 'px', value: -18 }],
    left: [{ unit: 'px', value: 10 }],
    backgroundColor: '#028e29',
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 5 }, { unit: 'px', value: 10 }]
  },
  'products recommended': {
    borderRadius: '8px',
    color: '#101010',
    position: 'absolute',
    top: [{ unit: 'px', value: -18 }],
    left: [{ unit: 'px', value: 10 }],
    backgroundColor: '#028e29',
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 5 }, { unit: 'px', value: 10 }]
  },
  'borrow btn-holder': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'products btn-holder': {
    marginTop: [{ unit: 'px', value: 30 }]
  },
  'plan *': {
    boxSizing: 'border-box'
  },
  'plan enter_amount': {
    width: [{ unit: '%H', value: 1 }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }],
    backgroundColor: '#1e1e1e',
    borderRadius: '15px',
    display: 'flex'
  },
  'plan enter_amount p': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 5 }, { unit: 'px', value: 10 }],
    borderRight: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#909090' }],
    marginRight: [{ unit: 'px', value: 20 }],
    backgroundPositionY: '10px'
  },
  'plan enter_amount select': {
    padding: [{ unit: 'px', value: 5 }, { unit: 'px', value: 10 }, { unit: 'px', value: 5 }, { unit: 'px', value: 10 }],
    borderRight: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#909090' }],
    marginRight: [{ unit: 'px', value: 20 }],
    backgroundPositionY: '10px'
  },
  'plan enter_amount input': {
    width: [{ unit: '%H', value: 1 }]
  },
  'plan enter_amount no_border': {
    border: [{ unit: 'string', value: 'unset' }],
    margin: [{ unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }, { unit: 'string', value: 'unset' }],
    width: [{ unit: '%H', value: 1 }]
  },
  'plan back': {
    position: 'absolute',
    top: [{ unit: 'px', value: 25 }],
    display: 'flex',
    alignItems: 'center'
  },
  'plan back img': {
    height: [{ unit: 'px', value: 15 }],
    marginRight: [{ unit: 'px', value: 8 }]
  },
  'plan review p': {
    width: [{ unit: 'px', value: 100 }],
    display: 'flex',
    justifyContent: 'space-between'
  },
  'plan review p b': {
    fontWeight: 'normal',
    color: '#ffffff',
    textTransform: 'capitalize'
  },
  process: {
    position: 'absolute',
    top: [{ unit: 'px', value: 0 }],
    left: [{ unit: 'px', value: -1 }],
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: NaN }],
    zIndex: '10',
    display: 'flex',
    flexDirection: 'column',
    padding: [{ unit: 'px', value: 20 }, { unit: 'px', value: 0 }, { unit: 'px', value: 20 }, { unit: 'px', value: 0 }],
    paddingTop: [{ unit: 'px', value: 60 }],
    backgroundColor: '#171717'
  },
  'process back': {
    position: 'absolute',
    top: [{ unit: 'px', value: 25 }],
    display: 'flex',
    alignItems: 'center'
  },
  'process back img': {
    height: [{ unit: 'px', value: 15 }],
    marginRight: [{ unit: 'px', value: 8 }]
  },
  'process content': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'string', value: 'fit-content' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 20 }, { unit: 'px', value: 10 }, { unit: 'px', value: 20 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#028e29' }],
    borderRadius: '20px'
  },
  'process content loan-amount': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: [{ unit: 'px', value: 50 }],
    borderRadius: '20px',
    backgroundColor: '#363636'
  },
  'process content slider': {
    width: [{ unit: '%H', value: 1 }],
    marginTop: [{ unit: 'px', value: 10 }]
  },
  'process content slider instruction': {
    color: '#7b7b7b',
    fontWeight: '300'
  },
  'process content slider instruction b': {
    float: 'right',
    color: '#028e29'
  },
  'process content slider range-amount': {
    textAlign: 'right',
    fontSize: [{ unit: 'px', value: 10 }, { unit: 'string', value: '!important' }],
    color: '#696868'
  },
  'process content slider range-amount b': {
    fontSize: [{ unit: 'px', value: 12 }],
    color: '#028e29'
  },
  'process content slider css-yxquu9-Slider': {
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  'process content slider range-slider': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 2 }],
    borderRadius: '5px',
    background: '#707070',
    outline: 'none',
    opacity: '1',
    WebkitTransition: '0.2s',
    transition: 'opacity 0.2s',
    cursor: 'pointer'
  },
  'process content display-amount': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  'process content tenure': {
    display: 'flex',
    justifyContent: 'space-between'
  },
  'process content tenure div': {
    borderRadius: '25px',
    color: '#909090',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#909090' }],
    padding: [{ unit: 'px', value: 10 }, { unit: 'px', value: 15 }, { unit: 'px', value: 10 }, { unit: 'px', value: 15 }],
    fontSize: [{ unit: 'px', value: 15 }],
    transition: 'all 0.2s ease-in-out'
  },
  'process content tenure selected': {
    borderColor: '#ffffff',
    color: '#111111',
    backgroundColor: '#ffffff'
  },
  account: {
    paddingTop: [{ unit: 'px', value: 70 }]
  },
  'account phone-input': {
    marginTop: [{ unit: 'px', value: 10 }],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#e2ffea' }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'px', value: 45 }],
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 10 }, { unit: 'px', value: 0 }, { unit: 'px', value: 10 }],
    marginBottom: [{ unit: 'px', value: 5 }],
    borderRadius: '25px',
    backgroundColor: 'white',
    color: '#101010 !important'
  },
  'account phone-input input': {
    width: [{ unit: '%H', value: 1 }],
    paddingLeft: [{ unit: 'px', value: 20 }]
  },
  'account phone-input p': {
    display: 'flex',
    alignItems: 'center',
    width: [{ unit: '%H', value: 0.2 }],
    paddingRight: [{ unit: 'px', value: 20 }],
    borderRight: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: '#010101' }],
    height: [{ unit: 'px', value: 30 }]
  },
  'account phone-input text-normal': {
    paddingLeft: [{ unit: 'px', value: 20 }],
    width: [{ unit: '%H', value: 1 }],
    border: [{ unit: 'string', value: 'unset' }]
  },
  'account input': {
    borderColor: '#fff',
    backgroundColor: 'unset',
    color: '#fff'
  },
  'account input p': {
    color: '#fff',
    borderColor: '#fff'
  }
});
