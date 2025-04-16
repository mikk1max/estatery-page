import { MoonLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div style={styles.loaderWrapper}>
      <MoonLoader color="#6851ff" size={60} />
    </div>
  );
}

const styles = {
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 999,
  },
};
