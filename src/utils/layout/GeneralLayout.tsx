import Header from "../components/Header";

interface GeneralLayoutProps {
  children: React.ReactNode;
}
const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GeneralLayout;
