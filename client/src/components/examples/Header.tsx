import Header from '../Header';

export default function HeaderExample() {
  return (
    <Header onLogin={() => console.log('Login triggered')} />
  );
}