interface GeneralLayoutProps {
  children: React.ReactNode;
}
const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default GeneralLayout;
