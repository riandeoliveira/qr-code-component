import AppBox from "./styles/App";
import qrCode from "./assets/qr-code.png";

const App: React.FC = (): JSX.Element => {
  return (
    <AppBox>
      <img
        alt="White QR code in the middle of a blue background"
        src={qrCode}
      />
      <div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </AppBox>
  );
};

export default App;
